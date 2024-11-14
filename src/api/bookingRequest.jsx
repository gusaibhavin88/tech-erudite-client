import axios from "axios";
import interceptor from "./interceptor";
const apiUrl = import.meta.env.VITE_BASE_URL;

const baseURL = `${apiUrl}/api/v1/`;

const api = axios.create({
  baseURL,
});
interceptor(api);

export const addBooking = (formData) => api.post("/booking/add", formData);
