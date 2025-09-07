import { create } from "zustand"
import {
  fetchCultivos,
  createCultivo,
  updateCultivoApi,
  deleteCultivo,
} from "../service/cultivoService"

export const useCultivosStore = create((set, get) => ({
  cultivos: [],
  loading: false,
  error: null,

  // Cargar todos los cultivos
  loadCultivos: async () => {
    set({ loading: true, error: null })
    try {
      const data = await fetchCultivos()
      const normalizados = data.map((c) => ({
        ...c,
        id: c._id || c.id, 
      }))
      set({ cultivos: normalizados, loading: false })
    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },

  // Crear cultivo
  addCultivo: async (nuevo) => {
    try {
      const creado = await createCultivo(nuevo)
      set((state) => ({
        cultivos: [...state.cultivos, { ...creado, id: creado._id || creado.id }],
      }))
    } catch (err) {
      set({ error: err.message })
    }
  },

  // Editar cultivo
  editCultivo: async (id, updated) => {
    try {
      const actualizado = await updateCultivoApi(id, updated)
      set((state) => ({
        cultivos: state.cultivos.map((c) =>
          c.id === id ? { ...actualizado, id: actualizado._id || actualizado.id } : c
        ),
      }))
    } catch (err) {
      set({ error: err.message })
    }
  },

  // Eliminar cultivo
  removeCultivo: async (id) => {
    try {
      await deleteCultivo(id)
      set((state) => ({
        cultivos: state.cultivos.filter((c) => c.id !== id),
      }))
    } catch (err) {
      set({ error: err.message })
    }
  },
}))
