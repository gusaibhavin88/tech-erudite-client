import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_URL;

const baseURL = `${apiUrl}/api/v1/`;

const api = axios.create({
  baseURL,
});

export const logInUser = (formData) => api.post("/auth/login", formData);
export const registerUser = (formData) => api.post("/auth/signup", formData);
export const verifyUser = (formData) => {
  api.post("/auth/verify-user", formData);
};
