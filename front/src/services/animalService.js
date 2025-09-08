// import api from "./api";

// export const getGroups = async () => (await api.get("/animals")).data;
// export const createGroup = async (payload) => (await api.post("/animals", payload)).data;
// export const updateGroup = async (id, payload) => (await api.put(`/animals/${id}`, payload)).data;
// export const deleteGroup = async (id) => (await api.delete(`/animals/${id}`)).data;

// front/src/services/animalService.js
import axios from "axios";

// const API_URL = "http://localhost:4000/api/animals";
const API_URL = "https://agromanage.onrender.com/api/animals";

export const getAnimals = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createAnimalGroup = async (group) => {
  const res = await axios.post(API_URL, group);
  return res.data;
};
