// "use client"
// import { useState } from 'react';
// import { toast } from 'sonner';
// import { submitPlanSummaryService } from '../services/authService';

// export default function TestLogInfo({ onConfirmNext }){
//     const [testsAllotted, setTestsAllotted] = useState('');
//     const [testRemaining, setTestRemaining] = useState(10000);
//     const [isLoading, setIsLoading] = useState(false);
//     const [apiResponse, setApiResponse] = useState(null); // Store API response
// console.log("apiResponse11:-", apiResponse);
//     const handleTestsAllottedChange = (e) => {
//         const value = e.target.value;
//         setTestsAllotted(value);

//         // If user enters a number, subtract from 10000
//         if (value && !isNaN(value)) {
//             const allotted = parseInt(value) || 0;
//             const remaining = 10000 - allotted;
//             setTestRemaining(remaining >= 0 ? remaining : 0);
//         } else {
//             // If input is empty or not a number, reset to 10000
//             setTestRemaining(10000);
//         }
//     };

//     const validateForm = () => {
//         if (!testsAllotted.trim()) {
//             toast.error('Please enter number of tests assigned');
//             return false;
//         }
//         if (isNaN(testsAllotted) || parseInt(testsAllotted) <= 0) {
//             toast.error('Please enter a valid number for tests assigned');
//             return false;
//         }
//         return true;
//     };

//     const saveToLocalStorage = (isDraft = false) => {
//         if (!isDraft && !validateForm()) {
//             return;
//         }

//         // Get existing planSummary from localStorage
//         const existingData = localStorage.getItem('planSummary');
//         let planSummary = existingData ? JSON.parse(existingData) : {};

//         // Update with test log info
//         planSummary = {
//             ...planSummary,
//             test_no_assigned: parseInt(testsAllotted) || 0
//         };

//         // Add draft flag if saving as draft
//         if (isDraft) {
//             planSummary.isDraft = true;
//         }

//         // Save back to localStorage
//         localStorage.setItem('planSummary', JSON.stringify(planSummary));

//         if (isDraft) {
//             toast.success('Test log info saved as draft successfully!');
//         } else {
//             toast.success('Test log info saved successfully!');
//         }
//     };

//     const handleSaveAsDraft = () => {
//         saveToLocalStorage(true);
//     };

//     const submitPlanSummary = async () => {
//         if (!validateForm()) {
//             return;
//         }

//         setIsLoading(true);
//         try {
//             // Get data from localStorage
//             const planSummaryData = localStorage.getItem('planSummary');
//             if (!planSummaryData) {
//                 toast.error('No plan summary data found');
//                 return;
//             }

//             const planSummary = JSON.parse(planSummaryData);

//             // Get dietitian_id and client_id from URL
//             const urlParams = new URLSearchParams(window.location.search);
//             const dietitianId = urlParams.get('dietician_id');
//             const clientId = urlParams.get('profile_id');
//             console.log('URL Parameters:', {
//                 dietitian_id: dietitianId,
//                 client_id: clientId,
//             });

//             if (!dietitianId || !clientId) {
//                 toast.error('Missing dietitian ID or client ID in URL');
//                 return;
//             }

//             // Prepare the API request body
//             const requestBody = {
//                 dietitian_id: dietitianId,
//                 client_id: clientId,
//                 plan_title: planSummary.plan_title || "",
//                 plan_start_date: planSummary.plan_start_date || "",
//                 plan_end_date: planSummary.plan_end_date || "",
//                 calories_target: planSummary.calories_target || 0,
//                 protein_target: planSummary.protein_target || 0,
//                 fiber_target: planSummary.fiber_target || 0,
//                 water_target: planSummary.water_target || 0,
//                 test_no_assigned: parseInt(testsAllotted) || 0,
//                 goal: planSummary.goal || [],
//                 approach: planSummary.approach || "",
//                 status: "active"
//             };

//             // Make API call using the service and store response in variable
//             const apiResponse = await submitPlanSummaryService(requestBody);
//             console.log("API Response:", apiResponse);

//             // Store the response in state
//             setApiResponse(apiResponse);

//             if (apiResponse.status) {
//                 toast.success('Plan summary submitted successfully!');
//                 onConfirmNext?.();
//             } else {
//                 toast.error(apiResponse.message || 'Failed to submit plan summary');
//             }

//         } catch (error) {
//             console.error('API Error:', error);
//             toast.error(error.message || 'Failed to submit plan summary');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleConfirmNext = () => {
//         // First save to localStorage
//         saveToLocalStorage(false);
//         // Then submit to API
//         submitPlanSummary();
//     };

//     return(
//         <>
//          <div className='flex-1 flex-col gap-[310px] h-full'>

//             <div className='pt-[23px] pb-[18px] '>
//               <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Test log info</p>

//               <div className="w-full  border-b border-[#E1E6ED]"></div>

//               <div className='mt-[15px]'>
//                 <div className="flex gap-5 items-end">
//                   <div className="relative flex-1">
//                     <input 
//                       type="text" 
//                       id="tests_allotted"
//                       value={testsAllotted}
//                       onChange={handleTestsAllottedChange}
//                       className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//                       placeholder=" " 
//                     />
//                     <label htmlFor="tests_allotted" className="absolute text-[14px] text-[#9CA3AF] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
//                       Tests assigned
//                     </label>
//                   </div>

//                   <div className="relative flex-1">
//                     <input 
//                       type="text" 
//                       id="test_remaining"
//                       value={testRemaining}
//                       readOnly
//                       className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//                       placeholder=" " 
//                     />
//                     <label htmlFor="test_remaining" className="absolute text-[14px] text-[#9CA3AF] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
//                       Test remaining
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>

//               <div className='py-[23px]'>
//                 <div className='flex gap-5 justify-end'>
//                   <div 
//                     className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px] cursor-pointer'
//                     onClick={handleSaveAsDraft}
//                   >
//                     <span className='text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px]'>Save as draft</span>
//                   </div>

//                   <div 
//                     className='px-5 py-[15px] bg-[#308BF9] rounded-[10px] cursor-pointer flex items-center justify-center'
//                     onClick={handleConfirmNext}
//                     disabled={isLoading}
//                   >
//                     <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.24px]'>
//                       {isLoading ? 'Submitting...' : 'Confirm & Next'}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </>
//     )
// };














"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { submitPlanSummaryService } from "../services/authService";

export default function TestLogInfo({ onConfirmNext }) {
  const [testsAllotted, setTestsAllotted] = useState("");
  const [testRemaining, setTestRemaining] = useState(10000);
  const [isLoading, setIsLoading] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [progress, setProgress] = useState(0); // ✅ new

  // ✅ get PDF from Redux
  const pdfState = useSelector((state) => state.pdf);
  const pdfFile = pdfState?.uploadedFile;

  // ---- PROGRESS EFFECT ----
  useEffect(() => {
    let interval;
    if (isLoading || isExtracting) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2; // adjust for speed
        });
      }, 100);
    } else {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isLoading, isExtracting]);

  // ---- Cookie Reader ----
  function getCookie(name) {
    const m = document.cookie.match(
      new RegExp(
        "(?:^|; )" + name.replace(/([$?*|{}\]\\^])/g, "\\$1") + "=([^;]*)"
      )
    );
    return m ? decodeURIComponent(m[1]) : "";
  }

  // ---- Handlers ----
  const handleTestsAllottedChange = (e) => {
    const value = e.target.value;
    setTestsAllotted(value);
    if (value && !isNaN(value)) {
      const allotted = parseInt(value) || 0;
      const remaining = 10000 - allotted;
      setTestRemaining(remaining >= 0 ? remaining : 0);
    } else {
      setTestRemaining(10000);
    }
  };

  const validateForm = () => {
    if (!testsAllotted.trim()) {
      toast.error("Please enter number of tests assigned");
      return false;
    }
    if (isNaN(testsAllotted) || parseInt(testsAllotted) <= 0) {
      toast.error("Please enter a valid number for tests assigned");
      return false;
    }
    return true;
  };

  const saveToLocalStorage = (isDraft = false) => {
    if (!isDraft && !validateForm()) {
      return;
    }
    const existingData = localStorage.getItem("planSummary");
    let planSummary = existingData ? JSON.parse(existingData) : {};
    planSummary = {
      ...planSummary,
      test_no_assigned: parseInt(testsAllotted) || 0,
    };
    if (isDraft) {
      planSummary.isDraft = true;
    }
    localStorage.setItem("planSummary", JSON.stringify(planSummary));
    if (isDraft) {
      toast.success("Test log info saved as draft successfully!");
    } else {
      toast.success("Test log info saved successfully!");
    }
  };

  const handleSaveAsDraft = () => {
    saveToLocalStorage(true);
  };

  // ---- Extract Diet PDF ----
  const extractDietPdf = async ({ dieticianId, clientId, dietplanId }) => {
    if (!pdfFile) {
      toast.error("No PDF found in Redux. Please upload a file first.");
      return false;
    }
    try {
      setIsExtracting(true);
      toast.message("Extracting PDF… this may take 3–5 minutes. Please wait.");

      const formData = new FormData();
      formData.append("file", pdfFile);
      formData.append("login_id", dieticianId || "");
      formData.append("profile_id", clientId || "");
      formData.append("dietplan_id", dietplanId || "");

      const res = await fetch("https://respyr.in/mini/api/extract", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(
          `Extractor error (${res.status}): ${txt || "Failed to extract"}`
        );
      }

      const json = await res.json();
      setExtractedData(json);
      toast.success("PDF extracted successfully.");
      return true;
    } catch (err) {
      console.error("Extractor Error:", err);
      toast.error(err.message || "Failed to extract PDF");
      return false;
    } finally {
      setIsExtracting(false);
    }
  };

  // ---- Submit Plan Summary ----
  const submitPlanSummary = async () => {
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      const planSummaryData = localStorage.getItem("planSummary");
      if (!planSummaryData) {
        toast.error("No plan summary data found");
        return;
      }
      const planSummary = JSON.parse(planSummaryData);

      const urlParams = new URLSearchParams(window.location.search);
      const dietitianId = urlParams.get("dietician_id");
      const clientId = urlParams.get("profile_id");
      const cookieDietician = getCookie("dietician");

      const effectiveDieticianId = dietitianId || cookieDietician || "";
      const effectiveClientId = clientId || "";

      if (!effectiveDieticianId || !effectiveClientId) {
        toast.error("Missing dietician ID or client ID (URL/cookie)");
        return;
      }

      const requestBody = {
        dietitian_id: effectiveDieticianId,
        client_id: effectiveClientId,
        plan_title: planSummary.plan_title || "",
        plan_start_date: planSummary.plan_start_date || "",
        plan_end_date: planSummary.plan_end_date || "",
        calories_target: planSummary.calories_target || 0,
        protein_target: planSummary.protein_target || 0,
        fiber_target: planSummary.fiber_target || 0,
        water_target: planSummary.water_target || 0,
        test_no_assigned: parseInt(testsAllotted) || 0,
        goal: planSummary.goal || [],
        approach: planSummary.approach || "",
        status: "active",
      };

      const resp = await submitPlanSummaryService(requestBody);
      setApiResponse(resp);

      if (resp?.status) {
        toast.success("Plan summary submitted successfully!");

        const dietplanId = resp?.inserted_data?.id || "";
        const extractedOk = await extractDietPdf({
          dieticianId: effectiveDieticianId,
          clientId: effectiveClientId,
          dietplanId,
        });

        if (extractedOk) {
          onConfirmNext?.();
        }
      } else {
        toast.error(resp?.message || "Failed to submit plan summary");
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error(error.message || "Failed to submit plan summary");
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmNext = () => {
    saveToLocalStorage(false);
    submitPlanSummary();
  };

  return (
    <>
      <div className="flex-1 flex-col gap-[310px] h-full">
        <div className="pt-[23px] pb-[18px] ">
          <p className="text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap">
            Test log info
          </p>

          <div className="w-full  border-b border-[#E1E6ED]"></div>

          <div className="mt-[15px]">
            <div className="flex gap-5 items-end">
              <div className="relative flex-1">
                <input
                  type="text"
                  id="tests_allotted"
                  value={testsAllotted}
                  onChange={handleTestsAllottedChange}
                  className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="tests_allotted"
                  className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                >
                  Tests assigned
                </label>
              </div>

              <div className="relative flex-1">
                <input
                  type="text"
                  id="test_remaining"
                  value={testRemaining}
                  readOnly
                  className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="test_remaining"
                  className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                >
                  Test remaining
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>

          <div className="py-[23px]">
            <div className="flex gap-5 justify-end">
              <div
                className="px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px] cursor-pointer"
                onClick={handleSaveAsDraft}
              >
                <span className="text-[#308BF9] text-[12px] font-semibold">
                  Save as draft
                </span>
              </div>

              {/* ✅ Updated button with progress */}
              <button
                type="button"
                className="relative px-5 py-[15px] bg-[#308BF9] rounded-[10px] cursor-pointer flex items-center justify-center overflow-hidden disabled:opacity-60 w-[180px]"
                onClick={handleConfirmNext}
                disabled={isLoading || isExtracting}
              >
                {(isLoading || isExtracting) && (
                  <div
                    className="absolute left-0 top-0 h-full bg-[#1D6EDC] transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                )}

                <span className="relative text-white text-[12px] font-semibold z-10">
                  {isLoading
                    ? `Submitting ${progress}%`
                    : isExtracting
                    ? `Extracting ${progress}%`
                    : "Confirm & Next"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
