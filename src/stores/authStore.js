import { create } from 'zustand';
import { authAdapter } from '../adapters/auth';
import { apiAdapter } from '../adapters/api';

export const useAuthStore = create((set, get) => ({
  user: null,
  profile: null,
  loading: true,
  error: null,

  initialize: () => {
    const unsubscribe = authAdapter.onAuthStateChange(async (user, session) => {
      if (user && session) {
        try {
          const profile = await apiAdapter.get('/api/users/profile');
          set({ user, profile, loading: false, error: null });
        } catch {
          set({ user, profile: { role: 'user' }, loading: false, error: null });
        }
      } else {
        set({ user: null, profile: null, loading: false, error: null });
      }
    });
    return unsubscribe;
  },

  signInWithGoogle: async () => {
    try {
      set({ error: null });
      await authAdapter.signInWithGoogle();
    } catch (error) {
      set({ error: error.message });
    }
  },

  signInWithEmail: async (email, password) => {
    try {
      set({ error: null });
      const result = await authAdapter.signInWithEmail(email, password);
      return result;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  signUp: async (email, password, metadata) => {
    try {
      set({ error: null });
      const result = await authAdapter.signUp(email, password, metadata);
      return result;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  verifyOtp: async (email, token) => {
    try {
      set({ error: null });
      const result = await authAdapter.verifyOtp(email, token);
      return result;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  resendOtp: async (email) => {
    try {
      set({ error: null });
      await authAdapter.resendOtp(email);
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  signOut: async () => {
    await authAdapter.signOut();
    set({ user: null, profile: null });
  },

  resetPassword: async (email) => {
    try {
      set({ error: null });
      await authAdapter.resetPassword(email);
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  get isAdmin() {
    return get().profile?.role === 'admin';
  },

  clearError: () => set({ error: null }),
}));
