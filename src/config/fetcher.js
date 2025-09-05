// config/fetcher.js
import { API_BASE_URL } from "./apiConfig";

export async function apiFetcher(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...(options.headers ? { headers: options.headers } : {}),
      ...options,
    });

    const data = await res.json();
    if (!res.ok || data.ok === false) {
      const errorMessage = data.error || `Request failed with status ${res.status}`;
      
      const error = new Error(errorMessage);
      error.status = res.status;
      error.data = data;
      error.isApiError = true; 
      throw error;
    }

    return data;
  } catch (error) {
    // Only log unexpected errors to console, not API errors
    if (!error.isApiError) {
      console.error("API Fetch Error:", error);
    }
    throw error;
  }
}