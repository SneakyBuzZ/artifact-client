import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/utils";
import useAuth from "@/lib/stores/auth-store";

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
  try {
    await api.get("/auth/status");
    console.log("User is authenticated");
    return true;
  } catch {
    console.log("User is not authenticated");
    return false;
  }
};

//*================= USER APIs =================*

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
  const { setUser, setIsAuthenticated } = useAuth.getState();
  const response = await api.get("/user");
  setUser(response.data.payload);
  setIsAuthenticated(true);
  return response.data.payload;
};
