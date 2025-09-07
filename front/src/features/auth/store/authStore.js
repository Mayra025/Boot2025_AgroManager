import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setUser: (user, token) =>
    set({ user, token, isAuthenticated: !!user }),

  logout: () => {
    localStorage.removeItem("auth");
    set({ user: null, token: null, isAuthenticated: false });
  },

  loadUser: () => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      const { user, token } = JSON.parse(stored);
      set({ user, token, isAuthenticated: true });
    }
  },
}));
