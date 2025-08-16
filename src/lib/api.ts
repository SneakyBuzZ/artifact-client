import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/utils";
import useAuth from "@/lib/stores/auth-store";
import axios, { AxiosError } from "axios";
import type { Role } from "./types/user-type";
import type { PreferenceJson } from "./types/preference-type";

//*================= AUTH APIs =================*

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      try {
        await api.post("/auth/login", {
          email,
          password,
        });
      } catch (error) {
        console.error("LOGIN ERROR", error);
        throw error;
      }
    },
  });
};

export const isAuthenticated = async () => {
  const { setIsAuthenticated } = useAuth.getState();
  try {
    const response = await api.get("/auth/status");
    const status = response.data.success;
    setIsAuthenticated(status);
    return status;
  } catch {
    setIsAuthenticated(false);
    return false;
  }
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
    const { resetUser, setIsAuthenticated } = useAuth.getState();
    resetUser();
    setIsAuthenticated(false);
  } catch (error) {
    console.error("LOGOUT ERROR", error);
  }
};

//*================= USER APIs =================*

export const useRegister = () => {
  return useMutation({
    mutationFn: async ({
      firstName,
      lastName,
      email,
      password,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }) => {
      try {
        const response = await api.post("/user/register", {
          firstName,
          lastName,
          email,
          password,
        });
        return response.data.payload;
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log("REGISTER ERROR YE HAI", error.response?.data);
        } else {
          console.log("REGISTER ERROR", error);
        }
      }
    },
  });
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const { setUser, setIsAuthenticated } = useAuth.getState();
        const response = await api.get("/user");
        setUser(response.data.payload);
        setIsAuthenticated(true);
        return response.data.payload;
      } catch (error) {
        console.error("GET USER ERROR", error);
        return;
      }
    },
    refetchOnWindowFocus: false,
  });
};

export const getUser = async () => {
  try {
    const { setUser, setIsAuthenticated } = useAuth.getState();
    const response = await api.get("/user");
    setUser(response.data.payload);
    setIsAuthenticated(true);
    return response.data.payload;
  } catch {
    return null;
  }
};

export const useAssignRole = () => {
  return useMutation({
    mutationFn: async ({ role }: { role: Role }) => {
      try {
        await api.post("/user/role", { role });
      } catch (error) {
        console.error("ASSIGN ROLE ERROR", error);
        throw error;
      }
    },
  });
};

// *================= ACCOUNT APIs =================*

export const useVerifyAccount = () => {
  return useMutation({
    mutationFn: async ({ code }: { code: string }) => {
      try {
        await api.get("/account/verify?token=" + code);
      } catch (error) {
        console.error("VERIFY ACCOUNT ERROR", error);
        throw error;
      }
    },
  });
};

export const useSendVerificationCode = () => {
  return useMutation({
    mutationFn: sendVerificationCode,
  });
};

export const sendVerificationCode = async () => {
  try {
    await api.get("/account/send-verification-email");
  } catch (error) {
    console.error("RESEND VERIFICATION CODE ERROR", error);
    throw error;
  }
};

// *================= CUSTOMER APIs =================*

export const useSetPreferences = () => {
  return useMutation({
    mutationFn: async (preferences: PreferenceJson) => {
      try {
        await api.post("/customer", {
          ...preferences,
        });
      } catch (error) {
        console.error(error);
        if (error instanceof AxiosError) {
          console.error("SET PREFERENCES ERROR", error.message);
        } else {
          console.error("SET PREFERENCES ERROR", error);
        }
        throw error;
      }
    },
  });
};

// *================= EXTERNAL APIs =================*

type City = {
  id: string;
  name: string;
  state: string;
};

export const getCities = async (state: string): Promise<string[]> => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json"
  );

  const cities: City[] = response.data;

  return cities
    .filter((city) => city.state.toLowerCase() === state.toLowerCase())
    .map((city) => city.name);
};
