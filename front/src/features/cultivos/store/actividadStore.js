import { create } from "zustand"
import {
  fetchActividades,
  createActividad,
  updateActividadApi,
  deleteActividad,
} from "../service/actividadService"

export const useActividadStore = create((set, get) => ({
  actividades: [],
  loading: false,
  error: null,

  // Cargar actividades desde API
  loadActividades: async () => {
    set({ loading: true, error: null })
    try {
      const data = await fetchActividades()
      // Normalizar: siempre habrá `id`
      const normalizadas = data.map((a) => ({
        ...a,
        id: a._id || a.id,
      }))
      set({ actividades: normalizadas, loading: false })
    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },

  // Crear
  addActividad: async (actividad) => {
    try {
      const newAct = await createActividad(actividad)
      set((state) => ({
        actividades: [
          ...state.actividades,
          { ...newAct, id: newAct._id || newAct.id },
        ],
      }))
    } catch (err) {
      set({ error: err.message })
    }
  },

  // Actualizar
  updateActividad: async (id, newData) => {
    try {
      const updated = await updateActividadApi(id, newData)
      set((state) => ({
        actividades: state.actividades.map((a) =>
          a.id === id ? { ...updated, id: updated._id || updated.id } : a
        ),
      }))
    } catch (err) {
      set({ error: err.message })
    }
  },

  // Eliminar
  removeActividad: async (id) => {
    try {
      await deleteActividad(id)
      set((state) => ({
        actividades: state.actividades.filter((a) => a.id !== id),
      }))
    } catch (err) {
      set({ error: err.message })
    }
  },
}))
