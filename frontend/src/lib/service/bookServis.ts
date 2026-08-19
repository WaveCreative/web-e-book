import { apiRequest, type ApiResponse } from "../api";
import type { Book } from "../../types/book";

export async function getTrendingBooks() {
  const response = await apiRequest<ApiResponse<Book[]>>(
    "/books/trending",
    {
      auth: false,
    }
  );

  return response.data;
}