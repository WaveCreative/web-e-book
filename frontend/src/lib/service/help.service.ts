import axios from "axios";
import type { HelpResponse } from "../../types/help";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export async function sendHelp(
  message: string,
  image?: File | null,
): Promise<HelpResponse> {
  const formData = new FormData();

  formData.append("message", message);

  if (image) {
    formData.append("image", image);
  }

  const { data } = await api.post("/help", formData);

  return data;
}