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