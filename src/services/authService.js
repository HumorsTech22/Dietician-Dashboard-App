// services/authService.js

import { apiFetcher } from "../config/fetcher";
import { API_ENDPOINTS } from "../config/apiConfig";

export const loginService = async (email, password) => {
  return apiFetcher(API_ENDPOINTS.AUTH.LOGIN, {
    method: "POST",
    body: JSON.stringify({
      identifier: email,
      password: password,
    }),
  });
};

export const sendOtpService = async (email) => {
  return apiFetcher(API_ENDPOINTS.AUTH.SEND_OTP, {
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
  });
};

export const resetPasswordService = async (email, password) => {
  return apiFetcher(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};

export const fetchClientsWithDietPlan = async (dieticianId) => {
  return apiFetcher(API_ENDPOINTS.CLIENT.CLIENTTABLE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dietician_id: dieticianId,
    }),
  });
};

// export const fetchScoreTrend = async (dieticianId, profileId, mode = "weekly") => {
//   return apiFetcher(API_ENDPOINTS.SCOREANALYSIS.GRAPH, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       dietician_id: dieticianId,
//       profile_id: profileId,
//       mode: mode,
//     }),
//   });
// };



export const fetchScoreTrend = async (dieticianId, profileId, mode) => {
  return apiFetcher(API_ENDPOINTS.SCOREANALYSIS.GRAPH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // dietician_id: dieticianId,
      // profile_id: profileId,
       dietitian_id: "do01",
    profile_id: "p01",
      mode: mode.toLowerCase(), 
    }),
  });
};