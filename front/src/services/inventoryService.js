import axios from "axios";

const API_URL = "http://localhost:4000/api/inventory"; // Cambiado de products a inventory

// Obtener todos los productos
export const getInventory = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    return [];
  }
};

// Crear nuevo producto
export const createInventory = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    console.error("Error creating inventory item:", error);
    throw error;
  }
};

// Actualizar producto existente
export const updateInventory = async (id, payload) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating inventory item:", error);
    throw error;
  }
};

// Eliminar producto
export const deleteInventory = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting inventory item:", error);
    throw error;
  }
};