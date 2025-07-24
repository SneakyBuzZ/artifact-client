import { create } from "zustand";
import type { User } from "@/lib/types/user-type";

type State = {
  user: User;
  isAuthenticated: boolean;
};

type Actions = {
  setUser: (user: User) => void;
  resetUser: () => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const useAuth = create<State & Actions>((set) => ({
  user: {
    email: null,
    profileUrl: null,
    role: null,
    onBoardingStatus: null,
  },
  isAuthenticated: false,
  setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
  setIsAuthenticated: (isAuthenticated) => set(() => ({ isAuthenticated })),
  resetUser: () =>
    set(() => ({
      user: {
        email: null,
        profileUrl: null,
        role: null,
        onBoardingStatus: null,
      },
      isAuthenticated: false,
    })),
}));

export default useAuth;
