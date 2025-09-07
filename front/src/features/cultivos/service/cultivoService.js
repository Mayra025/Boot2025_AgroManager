import axios from "axios"

const API_URL = "http://localhost:4000/api/cultivos"

// Obtener todos los cultivos
export const fetchCultivos = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

// Crear un cultivo
export const createCultivo = async (cultivo) => {
  const res = await axios.post(API_URL, cultivo)
  return res.data
}

// Actualizar un cultivo
export const updateCultivoApi = async (id, cultivo) => {
  const res = await axios.put(`${API_URL}/${id}`, cultivo)
  return res.data
}

// Eliminar un cultivo
export const deleteCultivo = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`)
  return res.data
}
