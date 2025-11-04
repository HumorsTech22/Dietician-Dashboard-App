// config/apiConfig.js

// Base URLs (different for local, staging, prod)
export const API_BASE_URL =
process.env.NEXT_PUBLIC_API_BASE_URL  || "https://humorstech.com";

// Centralized API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/humors_app/app_final/dieticianapp/web/api/dietician_login.php",
    SEND_OTP: "/humors_app/app_final/dieticianapp/web/api/send_diatitian_otp.php",
    RESET_PASSWORD: "/humors_app/app_final/dieticianapp/web/api/update_diatitian_password.php",
  },
  CLIENT:{
    CLIENTTABLE:"/dietitian/api/web/get_clients_with_diet_plan.php"
  }
  
};
