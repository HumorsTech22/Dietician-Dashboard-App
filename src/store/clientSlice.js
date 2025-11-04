// store/slices/clientsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { apiFetcher } from "../config/fetcher";
import { API_ENDPOINTS } from "../config/apiConfig";

/**
 * Reads dietician_id from a cookie named "dietician".
 * Accepts either a raw string (like "Respyrd01") or a JSON string that contains { dietician_id: "..." }.
 */
function getDieticianIdFromCookie() {
  const raw = Cookies.get("dietician");
  if (!raw) return null;

  try {
    // Try JSON first
    const parsed = JSON.parse(raw);
    if (parsed?.dietician_id) return parsed.dietician_id;
    if (parsed?.dieticianId) return parsed.dieticianId;
    if (parsed?.id) return parsed.id;
  } catch (_) {
    // Fallback: treat cookie value as the id itself
    if (typeof raw === "string" && raw.trim()) return raw.trim();
  }
  return null;
}

/**
 * Thunk: fetch clients for a dietician.
 * Body required by API:
 *   { "dietician_id": "Respyrd01" }
 */
export const fetchClientsForDietician = createAsyncThunk(
  "clients/fetchForDietician",
  async (_, { rejectWithValue }) => {
    const dietician_id = getDieticianIdFromCookie();
    if (!dietician_id) {
      return rejectWithValue("Missing dietician cookie (dietician_id).");
    }

    try {
      const data = await apiFetcher(API_ENDPOINTS.CLIENT.CLIENTTABLE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dietician_id }),
      });

      // Your API returns: { success, count, data: [...] }
      if (data?.success !== true || !Array.isArray(data?.data)) {
        return rejectWithValue("Unexpected API response shape.");
      }

      return {
        list: data.data,
        count: Number(data.count ?? data.data.length),
      };
    } catch (err) {
      const message =
        err?.message || err?.data?.error || "Failed to fetch clients.";
      return rejectWithValue(message);
    }
  }
);

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    list: [],
    count: 0,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientsForDietician.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchClientsForDietician.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload.list || [];
        state.count = action.payload.count || 0;
      })
      .addCase(fetchClientsForDietician.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Request failed";
      });
  },
});

export default clientsSlice.reducer;
