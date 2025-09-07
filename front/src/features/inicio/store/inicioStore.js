import { create } from "zustand";
import * as inicioService from "../service/inicioService";

const useInicioStore = create((set) => ({
  crops: { value: 0, change: "" },
  animals: { value: 0, change: "" },
  stock: { value: 0, change: "" },
  sales: { value: 0, change: "" },
  activities: [],
  alerts: [],
  progress: [],

  loadDashboard: async () => {
    const data = await inicioService.getDashboardData();
    set({ ...data });
  },

  setCrops: async (value, change) => {
    const updated = await inicioService.updateCrops({ value, change });
    set({ crops: updated });
  },

  setAnimals: async (value, change) => {
    const updated = await inicioService.updateAnimals({ value, change });
    set({ animals: updated });
  },

  setStock: async (value, change) => {
    const updated = await inicioService.updateStock({ value, change });
    set({ stock: updated });
  },

  setSales: async (value, change) => {
    const updated = await inicioService.updateSales({ value, change });
    set({ sales: updated });
  },

  addActivity: async (activity) => {
    const newActivity = await inicioService.addActivity(activity);
    set((state) => ({ activities: [newActivity, ...state.activities] }));
  },

  addAlert: async (alert) => {
    const newAlert = await inicioService.addAlert(alert);
    set((state) => ({ alerts: [newAlert, ...state.alerts] }));
  },

  updateProgress: async (progressItem) => {
    const updated = await inicioService.updateProgress(progressItem);
    set((state) => ({
      progress: state.progress.map((p) => (p.id === updated.id ? updated : p)),
    }));
  },
}));

export default useInicioStore;
