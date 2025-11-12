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















// // config/fetcher.js
// import { API_BASE_URL } from "./apiConfig";

// export async function apiFetcher(endpoint, options = {}) {
//   try {
//     const res = await fetch(`${API_BASE_URL}${endpoint}`, {
//       ...options,
//       ...(options.headers ? { headers: options.headers } : {}),
//     });

//     // 🧠 Try to parse JSON safely
//     let data = null;
//     const text = await res.text();
//     if (text) {
//       try {
//         data = JSON.parse(text);
//       } catch {
//         throw new Error(`Invalid JSON response: ${text}`);
//       }
//     } else {
//       throw new Error(`Empty response body from ${endpoint}`);
//     }

//     if (!res.ok || data.ok === false) {
//       const errorMessage = data?.error || `Request failed with status ${res.status}`;
//       const error = new Error(errorMessage);
//       error.status = res.status;
//       error.data = data;
//       error.isApiError = true;
//       throw error;
//     }

//     return data;
//   } catch (error) {
//     if (!error.isApiError) console.error("API Fetch Error:", error);
//     throw error;
//   }
// }
