import axios from "axios";

// const API_BASE = "http://localhost:4000/api/inicio";
const API_BASE = "https://agromanage.onrender.com/api/inicio";

// Obtener todo el dashboard
export const getDashboardData = async () => {
    const response = await axios.get(`${API_BASE}/dashboard`);
    return response.data;
};

// Actualizar total de cultivos
export const updateCrops = async (payload) => {
    // payload: { value: number, change: string }
    const response = await axios.put(`${API_BASE}/crops`, payload);
    return response.data;
};

// Actualizar total de animales
export const updateAnimals = async (payload) => {
    const response = await axios.put(`${API_BASE}/animals`, payload);
    return response.data;
};

// Actualizar stock
export const updateStock = async (payload) => {
    const response = await axios.put(`${API_BASE}/stock`, payload);
    return response.data;
};

// Actualizar ventas
export const updateSales = async (payload) => {
    const response = await axios.put(`${API_BASE}/sales`, payload);
    return response.data;
};

// Agregar nueva actividad
export const addActivity = async (activity) => {
    const response = await axios.post(`${API_BASE}/activities`, activity);
    return response.data;
};

// Agregar alerta
export const addAlert = async (alert) => {
    const response = await axios.post(`${API_BASE}/alerts`, alert);
    return response.data;
};

// Actualizar progreso
export const updateProgress = async (progressItem) => {
    const response = await axios.put(`${API_BASE}/progress/${progressItem.id}`, progressItem);
    return response.data;
};
