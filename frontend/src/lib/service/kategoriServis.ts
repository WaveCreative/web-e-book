import { apiRequest, type ApiResponse } from "../../lib/api";
import type { Kategori } from "../../types/kategori";

export async function getCategories() {
  const response = await apiRequest<ApiResponse<Kategori[]>>(
    "/categories",
    {
      auth: false,
    }
  );

  return response.data;
}

export async function getCategory(id: number) {
  const response = await apiRequest<ApiResponse<Kategori>>(
    `/categories/${id}`,
    {
      auth: false,
    }
  );

  return response.data;
}