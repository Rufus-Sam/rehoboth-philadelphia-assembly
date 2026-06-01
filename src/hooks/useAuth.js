import { useEffect } from 'react';
import { useAuthStore } from '../stores/authStore';

export const useAuth = () => {
  const store = useAuthStore();

  useEffect(() => {
    const unsubscribe = store.initialize();
    return unsubscribe;
  }, []);

  return {
    user: store.user,
    profile: store.profile,
    loading: store.loading,
    error: store.error,
    isAdmin: store.profile?.role === 'admin',
    isAuthenticated: !!store.user,
    signInWithGoogle: store.signInWithGoogle,
    signInWithEmail: store.signInWithEmail,
    signUp: store.signUp,
    signOut: store.signOut,
    resetPassword: store.resetPassword,
    clearError: store.clearError,
  };
};
