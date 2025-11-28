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


export const updateDietPlanStatusService = async (dieticianId) => {
  return apiFetcher(API_ENDPOINTS.AUTH.DIETPLANSTATUS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dietitian_id: dieticianId,
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





export const fetchScoreTrend = async (dieticianId, profileId, mode) => {
  return apiFetcher(API_ENDPOINTS.PROFILESCOREANALYSIS.GRAPH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dietitian_id: dieticianId,
      profile_id: profileId,
      // dietitian_id: "RespyrD02",
      // profile_id: "profile3",
      //mode: mode.toLowerCase(), 
    }),
  });
};  



export const fetchScoresInsight = async (dieticianId, profileId, date) => {
  try {
    const response = await apiFetcher(API_ENDPOINTS.PROFILESCOREANALYSIS.SCORESINSIGHT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dietician_id: dieticianId,
        profile_id: profileId,
        date: date,
      }),
    });

    return response;
  } catch (error) {
    // If it's the "no data" error, return a special object instead of throwing
    if (error.message === "No test_data found for given inputs") {
      return { noData: true, message: error.message };
    }
    // Re-throw other errors
    throw error;
  }
};




export const submitPlanSummaryService = async (planData) => {
  return apiFetcher(API_ENDPOINTS.PLAN.PLANSUMMARYFORM, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(planData),
  });
};



export const fetchClientProfileData = async (dieticianId, profileId) => {
  return apiFetcher(API_ENDPOINTS.CLIENTPROFILE.CLIENTPROFILEDATA, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dietician_id: dieticianId,
      profile_id: profileId,
    }),
  });
};




export const fetchWeeklyAnalysisComplete = async (requestData) => {
  return apiFetcher(API_ENDPOINTS.MEALANALYSIS.WEEKLYANALYSISCOMPLETE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
};


export const fetchDashboardTableCards = async (dieticianId) => {
  return apiFetcher(API_ENDPOINTS.DASHBOARD.TABLECARDS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dietician_id: dieticianId,
    }),
  });
};



export const fetchTestAnalytics = async (dieticianId, date = "") => {
  return apiFetcher(API_ENDPOINTS.DASHBOARD.TESTANALYTICS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dietitian_id: dieticianId,
      date: date,
    }),
  });
};



export const fetchTestRemaining = async (dieticianId) => {
  return apiFetcher(API_ENDPOINTS.TESTINFO.TESTREMAINING, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dietitian_id: dieticianId,
    }),
  });
};



export const fetchClientLog = async (dieticianId, clientId) => {
  return apiFetcher(API_ENDPOINTS.PLANHISTORY.CLIENTLOG, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dietitian_id: dieticianId,
      client_id: clientId,
    }),
  });
};