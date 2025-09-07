import axios from "axios"

const API_URL = "http://localhost:4000/api/actividades" 

// Obtener todas las actividades
export const fetchActividades = async () => {
    const res = await axios.get(API_URL)
    return res.data
}

// Crear nueva actividad
export const createActividad = async (actividad) => {
    const res = await axios.post(API_URL, actividad)
    return res.data
}

// Actualizar actividad
export const updateActividadApi = async (id, newData) => {
    const res = await axios.put(`${API_URL}/${id}`, newData)
    return res.data
}

// Eliminar actividad
export const deleteActividad = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    return id
}
