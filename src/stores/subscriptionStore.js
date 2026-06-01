import { create } from 'zustand';
import { apiAdapter } from '../adapters/api';

export const useSubscriptionStore = create((set) => ({
  subscription: null,
  payments: [],
  loading: false,
  error: null,

  fetchSubscription: async () => {
    set({ loading: true });
    try {
      const subscription = await apiAdapter.get('/api/subscriptions/me');
      set({ subscription, loading: false, error: null });
    } catch (error) {
      set({ subscription: null, loading: false, error: error.message });
    }
  },

  fetchPayments: async () => {
    try {
      const payments = await apiAdapter.get('/api/payments/history');
      set({ payments });
    } catch (error) {
      set({ error: error.message });
    }
  },

  cancelSubscription: async () => {
    try {
      await apiAdapter.post('/api/subscriptions/cancel');
      set((state) => ({
        subscription: { ...state.subscription, status: 'cancelled' },
      }));
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  clear: () => set({ subscription: null, payments: [], loading: false, error: null }),
}));
