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
    DIETPLANSTATUS:"/dietitian/api/web/update_diet_plan_status.php"
  },
  CLIENT:{
    CLIENTTABLE:"/dietitian/api/web/get_clients_with_diet_plan.php"
  },
  PROFILESCOREANALYSIS:{
    GRAPH:"/dietitian/api/web/get_score_trend1.php",
    SCORESINSIGHT:"/dietitian/api/web/get_latest_test_by_date.php"
  },
  PLAN:{
    PLANSUMMARYFORM:"/dietitian/api/web/insert_diet_plan_strategy.php",
    DIETPLAN:"/dietitian/api/web/update_diet_plan_json.php",
    DIETPLANJSON:"/dietitian/api/web/fetch_diet_json.php"
  },
  CLIENTPROFILE:{
    CLIENTPROFILEDATA:"/dietitian/api/web/get_client_data.php"
  },
  MEALANALYSIS:{
 WEEKLYANALYSISCOMPLETE:"/dietitian/api/web/weekly_analysis_complete.php"
  },
  DASHBOARD:{
    TABLECARDS:"/dietitian/api/web/test_statistic_by_dietitian.php",
    TESTANALYTICS:"/dietitian/api/web/get_test_analytics.php"
  },
  TESTINFO:{
    TESTREMAINING:"/dietitian/api/web/get_test_stat.php"
  },
  PLANHISTORY:{
    CLIENTLOG:"/dietitian/api/app/get_diet_plan_statistics.php"
  },
 
  
  
};
