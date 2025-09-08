// const API_URL = "http://localhost:4000/api/auth";
const API_URL = "https://agromanage.onrender.com/api/auth";

export const loginService = async (email, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error en login");

  // Persistencia local
  localStorage.setItem("auth", JSON.stringify(data));

  return data; // { user, token }
};

export const registerService = async (name, email, password) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error en registro");

  localStorage.setItem("auth", JSON.stringify(data));
  return data; // { user, token }
};

export const logoutService = () => {
  localStorage.removeItem("auth");
};
