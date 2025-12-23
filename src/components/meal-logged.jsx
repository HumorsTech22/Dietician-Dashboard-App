
// "use client";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import Image from "next/image";
// import MealSidebar from "./meal-sidebar";
// import MealTracked from "./meal-tracked";
// import { useState, useEffect } from "react";
// import React from "react";
// import { useSelector } from "react-redux";
// import { fetchWeeklyAnalysisComplete } from "../services/authService";
// import MealLoggedPopup from "./pop-folder/mealLogged-popup";
// import CreatePlanPopUp from "./pop-folder/create-plan-popup";

// export default function MealLogged() {
//   const [activeFilter, setActiveFilter] = useState("low");
//   const [weeklyAnalysisData, setWeeklyAnalysisData] = useState([]);
//   const [apiMessage, setApiMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [errorType, setErrorType] = useState(null); // "timeout" | "generic" | null
//   const [refreshKey, setRefreshKey] = useState(0); // used to re-trigger fetch

//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);


//   const [visibleWeekStart, setVisibleWeekStart] = useState(0);
//   const visibleWeeksCount = 4;

//   const clientProfile = useSelector((state) => state.clientProfile.data);
//   console.log("clientProfile134:-", clientProfile);

//   const [uploadedPdfName, setUploadedPdfName] = useState("");

//   const handleFilterChange = (filter) => setActiveFilter(filter);

//   const dataArr = Array.isArray(weeklyAnalysisData) ? weeklyAnalysisData : [];
//   const totalFoods = dataArr.length;

//   const avgScore = totalFoods
//     ? Math.round(
//       dataArr.reduce(
//         (sum, item) =>
//           sum + (Number(item.metabolic_compatibility_score) || 0),
//         0
//       ) / totalFoods
//     )
//     : 0;

//   const zone = avgScore >= 80 ? "High" : avgScore >= 61 ? "Moderate" : "Low";

//   const goalCounts = dataArr.reduce((acc, item) => {
//     const key = item.goal_alignment || "Unknown";
//     acc[key] = (acc[key] || 0) + 1;
//     return acc;
//   }, {});

//   const toLocalMidnight = (dateStr) => {
//     if (!dateStr) return new Date();
//     const [y, m, d] = String(dateStr).split("-").map(Number);
//     return new Date(y, m - 1, d);
//   };

//   const startOfDay = (d) =>
//     new Date(d.getFullYear(), d.getMonth(), d.getDate());

//   const endOfDay = (d) =>
//     new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);

//   const formatDateForApi = (d) => {
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   let weeks = [];
//   let currentWeekIdx = 0;

//   const fmt = (d) =>
//     d.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//   if (clientProfile?.plans_summary?.active?.length > 0) {
//     const activePlan = clientProfile.plans_summary.active[0];
//     const planStart = toLocalMidnight(activePlan.plan_start_date);
//     const planEnd = toLocalMidnight(activePlan.plan_end_date);

//     const planDurationMs = planEnd - planStart;
//     const planDurationDays =
//       Math.ceil(planDurationMs / (1000 * 60 * 60 * 24)) + 1;
//     const numberOfWeeks = Math.ceil(planDurationDays / 7);

//     for (let i = 0; i < numberOfWeeks; i++) {
//       const start = new Date(planStart);
//       start.setDate(planStart.getDate() + i * 7);

//       const end = new Date(start);
//       end.setDate(start.getDate() + 6);

//       if (end > planEnd) end.setTime(planEnd.getTime());

//       weeks.push({
//         label: `Week ${i + 1}`,
//         start: start.getDate(),
//         end: end.getDate(),
//         startDate: startOfDay(new Date(start)),
//         endDate: endOfDay(new Date(end)),
//       });
//     }

//     const today = startOfDay(new Date());
//     currentWeekIdx = weeks.findIndex(
//       (w) => today >= w.startDate && today <= w.endDate
//     );
//     if (currentWeekIdx === -1) currentWeekIdx = 0;
//   }

//   const getWeekDateRange = (weekIdx) => {
//     const w = weeks[weekIdx];
//     if (!w) return null;
//     return { start: w.startDate, end: w.endDate };
//   };

//   const [selectedWeekIdx, setSelectedWeekIdx] = useState(null);

//   const fetchWeeklyAnalysis = async (startDate, endDate, dietPlanId) => {
//     setLoading(true);
//     setError(null);
//     setErrorType(null);
//     setApiMessage(null);

//     try {
//       const requestBody = {
//         dietician_id: clientProfile?.dietician_id,
//         profile_id: clientProfile?.profile_id,
//         start_date: startDate,
//         end_date: endDate,
//         diet_plan_id: dietPlanId,
//       };

//       const response = await fetchWeeklyAnalysisComplete(requestBody);

//       // ✅ NEW: handle error shape { error: "...", details: "..." }
//       if (response?.error && response?.details) {
//         const isTimeout =
//           typeof response.details === "string" &&
//           response.details.toLowerCase().includes("timed out");

//         setWeeklyAnalysisData([]);
//         setApiMessage(null);
//         setError(
//           isTimeout
//             ? "Time out. Please refresh and try again."
//             : response.error || "Something went wrong."
//         );
//         setErrorType(isTimeout ? "timeout" : "generic");
//         return;
//       }

//       if (response?.message) {
//         setApiMessage({
//           message: response.message,
//           end_date: response.end_date,
//         });
//         setWeeklyAnalysisData([]);
//         setError(null);
//         setErrorType(null);
//       } else {
//         const arr = response?.api_response?.food_level_evaluation || [];
//         setWeeklyAnalysisData(arr);
//         setApiMessage(null);
//         setError(null);
//         setErrorType(null);
//       }
//     } catch (err) {
//       setError(err?.message || "Failed to fetch weekly analysis");
//       setErrorType("generic");
//       setWeeklyAnalysisData([]);
//       setApiMessage(null);
//     } finally {
//       setLoading(false);
//     }
//   };


//   // ▶️ Re-fetch logic (used for first load, week change, and refresh)
//   useEffect(() => {
//     if (!clientProfile?.plans_summary?.active?.length) {
//       setWeeklyAnalysisData([]);
//       setApiMessage(null);
//       setError(null);
//       setErrorType(null);
//       return;
//     }

//     const activePlan = clientProfile.plans_summary.active[0];
//     const dietPlanId = activePlan.id;

//     const planStart = toLocalMidnight(activePlan.plan_start_date);
//     const planEnd = toLocalMidnight(activePlan.plan_end_date);

//     const weekIdxToUse =
//       selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;

//     const range = getWeekDateRange(weekIdxToUse);
//     if (!range) return;


//     const today = new Date();

//     const isWeekOutOfRange =
//       range.start > today || range.end < today;

//     if (isWeekOutOfRange) {
//       setVisibleWeekStart(currentWeekIdx);
//     }



//     const startDateObj = range.start < planStart ? planStart : range.start;
//     const endDateObj = range.end > planEnd ? planEnd : range.end;

//     const startDate = formatDateForApi(startDateObj);
//     const endDate = formatDateForApi(endDateObj);

//     fetchWeeklyAnalysis(startDate, endDate, dietPlanId);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [clientProfile, selectedWeekIdx, refreshKey]);

//   const canGoNext = visibleWeekStart + visibleWeeksCount < weeks.length;
//   const canGoPrev = visibleWeekStart > 0;

//   const handleNextWeeks = () => {
//     if (canGoNext) setVisibleWeekStart(visibleWeekStart + 1);
//   };

//   const handlePrevWeeks = () => {
//     if (canGoPrev) setVisibleWeekStart(visibleWeekStart - 1);
//   };


//   const handleCreatePlanClick = () => {
//     // Clear localStorage when creating a new plan
//     localStorage.clear();
//     setIsModalOpen(true);
//   };

//   const visibleWeeks = weeks.slice(
//     visibleWeekStart,
//     visibleWeekStart + visibleWeeksCount
//   );
//   console.log("visibleWeeks257:-", visibleWeeks);

//   const showMessageState = apiMessage && dataArr.length === 0;
//   const showNoDataState =
//     !apiMessage && dataArr.length === 0 && !loading && !error;
//   const showDataState = dataArr.length > 0;

//   const handleRefresh = () => {
//     // clear only timeout error and re-trigger fetch
//     setError(null);
//     setErrorType(null);
//     setRefreshKey((prev) => prev + 1);
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-[25px] mt-[42px] bg-[#F5F7FA] rounded-[15px] pt-[25px] pl-[30px] pr-7 pb-2.5">
//         {/* Header */}
//         <div className="flex justify-between">
//           {/* Header */}

//           <span className="text-[#252525] text-[20px] font-semibold tracking-[-0.3] leading-[110%]">
//             Weekly Food Analysis
//           </span>


//           <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px]">
//             {uploadedPdfName ? uploadedPdfName : "Please Upload pdf"}
//           </span>



//         </div>

//         <div className="w-full border-b border-[#E1E6ED]"></div>

//         {/* Error State */}
//         {/* {error && (
//           <div className="flex flex-col justify-center items-center py-4 gap-3">
//             <p className="text-red-500 text-[14px] font-medium">
//               {errorType === "timeout"
//                 ? "Time out. Please refresh and try again."
//                 : `Error: ${error}`}
//             </p>

//             {errorType === "timeout" && (
//               <button
//                 type="button"
//                 onClick={handleRefresh}
//                 className="px-4 py-2 rounded-[8px] bg-[#308BF9] text-white text-[14px] font-semibold leading-[110%] tracking-[-0.2px]"
//               >
//                 Refresh
//               </button>
//             )}
//           </div>
//         )} */}

//         {/* ===== Select Week Section ===== */}
//         <div className="flex flex-col gap-9 bg-[#F5F7FA] rounded-[15px]">
//           <div className="flex items-center bg-[#E1E6ED] rounded-[15px] border-4 border-[#F5F7FA]">
//             <div className="flex justify-between w-[170px] py-[30px] pl-[30px]">
//               <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap">
//                 Select a Week
//               </span>
//               <IoIosArrowBack
//                 className={`${canGoPrev
//                     ? "text-[#252525] cursor-pointer"
//                     : "text-[#A1A1A1] cursor-not-allowed"
//                   }`}
//                 onClick={canGoPrev ? handlePrevWeeks : undefined}
//               />
//             </div>

//             <div className="flex items-center">
//               <div className="flex items-center">
//                 {visibleWeeks.map((w, idx) => {
//                   const actualIndex = visibleWeekStart + idx;

//                   const effectiveIdx =
//                     selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;

//                   const today = new Date();

//                   let isDisabled = false;
//                   if (clientProfile?.plans_summary?.active?.length > 0) {
//                     const activePlan = clientProfile.plans_summary.active[0];

//                     const planStart = toLocalMidnight(
//                       activePlan.plan_start_date
//                     );
//                     const planEnd = toLocalMidnight(activePlan.plan_end_date);

//                     const range = getWeekDateRange(actualIndex);

//                     if (range) {
//                       if (
//                         range.end < planStart ||
//                         range.start > planEnd ||
//                         range.start > today
//                       ) {
//                         isDisabled = true;
//                       }
//                     }
//                   } else {
//                     const range = getWeekDateRange(actualIndex);
//                     if (range && range.start > today) {
//                       isDisabled = true;
//                     }
//                   }

//                   const isSelected =
//                     actualIndex === effectiveIdx && !isDisabled;

//                   const wrapBase =
//                     "flex flex-col w-full gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px]";
//                   const wrapClass = isDisabled
//                     ? `${wrapBase} bg-transparent cursor-not-allowed`
//                     : isSelected
//                       ? `${wrapBase} bg-[#308BF9] cursor-pointer`
//                       : `${wrapBase} bg-transparent cursor-pointer`;

//                   const titleClass = isDisabled
//                     ? "text-[#A1A1A1] text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap"
//                     : isSelected
//                       ? "text-white text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap"
//                       : "text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap";

//                   const dateClass = isDisabled
//                     ? "text-[#A1A1A1] text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap"
//                     : isSelected
//                       ? "text-white text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap"
//                       : "text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap";

//                   return (
//                     <React.Fragment key={w.label}>
//                       <div
//                         className={wrapClass}
//                         onClick={() => {
//                           if (!isDisabled) setSelectedWeekIdx(actualIndex);
//                         }}
//                       >
//                         <span className={titleClass}>{w.label}</span>
//                         <span className={dateClass}>
//                           {fmt(w.startDate)} - {fmt(w.endDate)}
//                         </span>
//                       </div>
//                       {idx !== visibleWeeks.length - 1 && (
//                         <div className="border-white border-r h-8 mx-2"></div>
//                       )}
//                     </React.Fragment>
//                   );
//                 })}
//               </div>

//               <IoIosArrowForward
//                 className={`ml-2 ${canGoNext
//                     ? "text-[#252525] cursor-pointer"
//                     : "text-[#A1A1A1] cursor-not-allowed"
//                   }`}
//                 onClick={canGoNext ? handleNextWeeks : undefined}
//               />
//             </div>
//           </div>
//         </div>



//         {/* {loading ? (
//           <div className="flex flex-col justify-center items-center py-8 gap-3">
//             <div className="flex gap-2 items-center">
//             <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#308BF9] border-t-transparent"></div>
//             <span className="text-[#C0CAD8] text-[20px] font-semibold leading-[110%] tracking-[-0.4px] text-center">
//               Generating Report. Please Wait...
//             </span>
//             </div>
//           </div>
//         ) : showMessageState ? (
//           <div className="flex justify-center items-center py-8">
//             <span className="text-[#C0CAD8] text-[20px] font-semibold leading-[110%] tracking-[-0.4px] text-center">
//               {apiMessage.message}
//             </span>
//           </div>
//         ) : showNoDataState ? (
//           <div className="flex justify-center items-center py-8">
//             <span className="text-[#C0CAD8] text-[20px] font-semibold leading-[110%] tracking-[-0.4px] text-center">
//               {(() => {
//                 const weekIdxToUse =
//                   selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;
//                 const range = getWeekDateRange(weekIdxToUse);
//                 const today = new Date();

//                 if (range && range.end < today) {
//                   return `Analysis will be available after - ${range?.end ? fmt(range.end) : 'N/A'} 9pm`;
//                 } else {
//                   return `Analysis will be available after ${range?.end ? fmt(range.end) : 'N/A'} 9pm`;
//                 }
//               })()}
//             </span>
//           </div>
//         ) : showDataState ? (
//           <>
          
//             <div className="flex justify-between bg-[#E1E6ED] rounded-[15px] px-5 py-[19px] ml-[59px] mr-[59px]">
//               <div className="flex flex-col justify-between w-[170px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
//                 <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">
//                   {totalFoods}
//                 </span>
//                 <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">
//                   Total Foods
//                 </p>
//               </div>

//               <div className="flex gap-20 bg-white rounded-[8px] py-[19px] px-5">
//                 <div className="flex flex-col justify-between">
//                   <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">
//                     {goalCounts.Support || 0}
//                   </span>
//                   <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">
//                     Foods Consumed
//                   </span>
//                 </div>

//                 <div className="flex flex-col justify-between">
//                   <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">
//                     {goalCounts.Low || 0}
//                   </span>
//                   <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">
//                     Foods Missed
//                   </span>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-[12px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
//                 <div className="flex flex-col gap-5">
//                   <div className="flex items-center gap-2.5">
//                     <span className="text-[#252525] text-[18px] font-semibold tracking-[-0.5px] leading-[126%]">
//                       {avgScore}
//                     </span>
//                     <div className="w-px h-4 bg-[#D9D9D9]" />
//                     <span className="text-[#252525] text-[18px] font-semibold tracking-[-0.36px] leading-[126%]">
//                       {zone}
//                     </span>
//                   </div>
//                   <div className="flex justify-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="117"
//                       height="6"
//                       viewBox="0 0 117 6"
//                       fill="none"
//                     >
//                       <path
//                         d="M3 3H114"
//                         stroke="#D9D9D9"
//                         strokeWidth="5"
//                         strokeLinecap="round"
//                       />
//                       <path
//                         d={`M3 3H${Math.max(
//                           3,
//                           Math.min(
//                             114,
//                             Math.round((avgScore / 100) * 111) + 3
//                           )
//                         )}`}
//                         stroke="#FFC412"
//                         strokeWidth="5"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                     Overall Metabolic Compatibility Score
//                   </p>
//                 </div>
//               </div>
//             </div>

           
//             <div className="flex gap-[5px]">
//               <MealSidebar
//                 activeFilter={activeFilter}
//                 onFilterChange={handleFilterChange}
//                 weeklyAnalysisData={dataArr}
//               />
//               <div className="w-full max-h-[600px] overflow-y-auto hide-scrollbar">
//                 <MealTracked
//                   activeFilter={activeFilter}
//                   weeklyAnalysisData={dataArr}
//                 />
//               </div>
//             </div>
//           </>
//         ) : null} */}

//         <div className="flex justify-between items-center px-5 py-[19px] bg-[#E1E6ED] rounded-[15px]">
//           <p className="text-[20px] font-semibold leading-[110%] tracking-[-0.4px] text-[#535359]">No food added for this week.</p>
//           <button
//             onClick={handleCreatePlanClick}
//             className="w-[146px] font-semibold text-[#308BF9] text-[12px] px-5 py-[15px] cursor-pointer rounded-[10px] bg-[#FFFFFF] border border-[#308BF9]"
//           >
//             Add Food
//           </button>
//         </div>


//       </div>


//       {/* <MealLoggedPopup
//   open={isPopupOpen}
//   onClose={() => setIsPopupOpen(false)}
// /> */}



//       <CreatePlanPopUp
//         open={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onUploaded={(file) => setUploadedPdfName(file?.name || "")}
//       />
//     </>
//   );
// }
















// "use client";

// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import Image from "next/image";
// import MealSidebar from "./meal-sidebar";
// import MealTracked from "./meal-tracked";
// import { useState, useEffect } from "react";
// import React from "react";
// import { useSelector } from "react-redux";
// import { fetchWeeklyAnalysisComplete } from "../services/authService";
// import MealLoggedPopup from "./pop-folder/mealLogged-popup";
// import CreatePlanPopUp from "./pop-folder/create-plan-popup";

// export default function MealLogged() {
//   const [activeFilter, setActiveFilter] = useState("low");
//   const [weeklyAnalysisData, setWeeklyAnalysisData] = useState([]);
//   const [apiMessage, setApiMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [errorType, setErrorType] = useState(null); // "timeout" | "generic" | null
//   const [refreshKey, setRefreshKey] = useState(0); // used to re-trigger fetch
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [visibleWeekStart, setVisibleWeekStart] = useState(0);
//   const visibleWeeksCount = 4;

//   const clientProfile = useSelector((state) => state.clientProfile.data);

//   const [uploadedPdfName, setUploadedPdfName] = useState("");

//   const handleFilterChange = (filter) => setActiveFilter(filter);

//   const dataArr = Array.isArray(weeklyAnalysisData) ? weeklyAnalysisData : [];
//   const totalFoods = dataArr.length;

//   const avgScore = totalFoods
//     ? Math.round(
//         dataArr.reduce(
//           (sum, item) => sum + (Number(item.metabolic_compatibility_score) || 0),
//           0
//         ) / totalFoods
//       )
//     : 0;

//   const zone = avgScore >= 80 ? "High" : avgScore >= 61 ? "Moderate" : "Low";

//   const goalCounts = dataArr.reduce((acc, item) => {
//     const key = item.goal_alignment || "Unknown";
//     acc[key] = (acc[key] || 0) + 1;
//     return acc;
//   }, {});

//   const toLocalMidnight = (dateStr) => {
//     if (!dateStr) return new Date();
//     const [y, m, d] = String(dateStr).split("-").map(Number);
//     return new Date(y, m - 1, d);
//   };

//   const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
//   const endOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);

//   const formatDateForApi = (d) => {
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   let weeks = [];
//   let currentWeekIdx = 0;

//   const fmt = (d) =>
//     d.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//   const planStart = toLocalMidnight(clientProfile?.dttm.split(" ")[0]); // Start date from dttm
//   const planEnd = startOfDay(new Date()); // End date as current date

//   const planDurationMs = planEnd - planStart;
//   const planDurationDays = Math.ceil(planDurationMs / (1000 * 60 * 60 * 24)) + 1;
//   const numberOfWeeks = Math.ceil(planDurationDays / 7);

//   const dttm = clientProfile?.dttm; // "2025-11-20 14:17:27"
//   const planStartDate = new Date(dttm.split(" ")[0]); // Use the date part

//   for (let i = 0; i < numberOfWeeks; i++) {
//     const start = new Date(planStartDate);
//     start.setDate(planStartDate.getDate() + i * 7);

//     const end = new Date(start);
//     end.setDate(start.getDate() + 6);

//     // Adjust the end date so it doesn't exceed the plan's actual end date
//     if (end > planEnd) end.setTime(planEnd.getTime());

//     weeks.push({
//       label: `Week ${i + 1}`,
//       start: start.getDate(),
//       end: end.getDate(),
//       startDate: startOfDay(new Date(start)),
//       endDate: endOfDay(new Date(end)),
//     });
//   }

//   const today = startOfDay(new Date());
//   currentWeekIdx = weeks.findIndex((w) => today >= w.startDate && today <= w.endDate);
//   if (currentWeekIdx === -1) currentWeekIdx = 0;

//   const getWeekDateRange = (weekIdx) => {
//     const w = weeks[weekIdx];
//     if (!w) return null;
//     return { start: w.startDate, end: w.endDate };
//   };

//   const [selectedWeekIdx, setSelectedWeekIdx] = useState(null);

//   const fetchWeeklyAnalysis = async (startDate, endDate, dietPlanId) => {
//     setLoading(true);
//     setError(null);
//     setErrorType(null);
//     setApiMessage(null);

//     try {
//       const requestBody = {
//         dietician_id: clientProfile?.dietician_id,
//         profile_id: clientProfile?.profile_id,
//         start_date: startDate,
//         end_date: endDate,
//         diet_plan_id: dietPlanId,
//       };

//       const response = await fetchWeeklyAnalysisComplete(requestBody);

//       // ✅ NEW: handle error shape { error: "...", details: "..." }
//       if (response?.error && response?.details) {
//         const isTimeout =
//           typeof response.details === "string" && response.details.toLowerCase().includes("timed out");

//         setWeeklyAnalysisData([]);
//         setApiMessage(null);
//         setError(
//           isTimeout ? "Time out. Please refresh and try again." : response.error || "Something went wrong."
//         );
//         setErrorType(isTimeout ? "timeout" : "generic");
//         return;
//       }

//       if (response?.message) {
//         setApiMessage({
//           message: response.message,
//           end_date: response.end_date,
//         });
//         setWeeklyAnalysisData([]);
//         setError(null);
//         setErrorType(null);
//       } else {
//         const arr = response?.api_response?.food_level_evaluation || [];
//         setWeeklyAnalysisData(arr);
//         setApiMessage(null);
//         setError(null);
//         setErrorType(null);
//       }
//     } catch (err) {
//       setError(err?.message || "Failed to fetch weekly analysis");
//       setErrorType("generic");
//       setWeeklyAnalysisData([]);
//       setApiMessage(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ▶️ Re-fetch logic (used for first load, week change, and refresh)
//   useEffect(() => {
//     if (!clientProfile?.plans_summary?.active?.length) {
//       setWeeklyAnalysisData([]);
//       setApiMessage(null);
//       setError(null);
//       setErrorType(null);
//       return;
//     }

//     const activePlan = clientProfile.plans_summary.active[0];
//     const dietPlanId = activePlan.id;

//     const planStart = toLocalMidnight(activePlan.plan_start_date);
//     const planEnd = toLocalMidnight(activePlan.plan_end_date);

//     const weekIdxToUse = selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;

//     const range = getWeekDateRange(weekIdxToUse);
//     if (!range) return;

//     const today = new Date();

//     const isWeekOutOfRange = range.start > today || range.end < today;

//     if (isWeekOutOfRange) {
//       setVisibleWeekStart(currentWeekIdx);
//     }

//     const startDateObj = range.start < planStart ? planStart : range.start;
//     const endDateObj = range.end > planEnd ? planEnd : range.end;

//     const startDate = formatDateForApi(startDateObj);
//     const endDate = formatDateForApi(endDateObj);

//     fetchWeeklyAnalysis(startDate, endDate, dietPlanId);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [clientProfile, selectedWeekIdx, refreshKey]);

//   const canGoNext = visibleWeekStart + visibleWeeksCount < weeks.length;
//   const canGoPrev = visibleWeekStart > 0;

//   const handleNextWeeks = () => {
//     if (canGoNext) setVisibleWeekStart(visibleWeekStart + 1);
//   };

//   const handlePrevWeeks = () => {
//     if (canGoPrev) setVisibleWeekStart(visibleWeekStart - 1);
//   };

//   const handleCreatePlanClick = () => {
//     // Clear localStorage when creating a new plan
//     localStorage.clear();
//     setIsModalOpen(true);
//   };

//   const visibleWeeks = weeks.slice(visibleWeekStart, visibleWeekStart + visibleWeeksCount);

//   const showMessageState = apiMessage && dataArr.length === 0;
//   const showNoDataState = !apiMessage && dataArr.length === 0 && !loading && !error;
//   const showDataState = dataArr.length > 0;

//   const handleRefresh = () => {
//     // clear only timeout error and re-trigger fetch
//     setError(null);
//     setErrorType(null);
//     setRefreshKey((prev) => prev + 1);
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-[25px] mt-[42px] bg-[#F5F7FA] rounded-[15px] pt-[25px] pl-[30px] pr-7 pb-2.5">
//         {/* Header */}
//         <div className="flex justify-between">
//           <span className="text-[#252525] text-[20px] font-semibold tracking-[-0.3] leading-[110%]">
//             Weekly Food Analysis
//           </span>
          
//         </div>

//         <div className="w-full border-b border-[#E1E6ED]"></div>

//         {/* ===== Select Week Section ===== */}
//         <div className="flex flex-col gap-9 bg-[#F5F7FA] rounded-[15px]">
//           <div className="flex items-center bg-[#E1E6ED] rounded-[15px] border-4 border-[#F5F7FA]">
//             <div className="flex justify-between w-[170px] py-[30px] pl-[30px]">
//               <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap">
//                 Select a Week
//               </span>
//               <IoIosArrowBack
//                 className={`${canGoPrev ? "text-[#252525] cursor-pointer" : "text-[#A1A1A1] cursor-not-allowed"}`}
//                 onClick={canGoPrev ? handlePrevWeeks : undefined}
//               />
//             </div>
//             <div className="flex items-center">
//               <div className="flex items-center">
//                 {visibleWeeks.map((w, idx) => {
//                   const actualIndex = visibleWeekStart + idx;
//                   const effectiveIdx = selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;
//                   const today = new Date();

//                   let isDisabled = false;
//                   const range = getWeekDateRange(actualIndex);

//                   // Disable future weeks
//                   if (range && range.start > today) {
//                     isDisabled = true;
//                   }

//                   const isSelected = actualIndex === effectiveIdx && !isDisabled;

//                   const wrapBase = "flex flex-col w-full gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px]";
//                   const wrapClass = isDisabled
//                     ? `${wrapBase} bg-transparent cursor-not-allowed`
//                     : isSelected
//                     ? `${wrapBase} bg-[#308BF9] cursor-pointer`
//                     : `${wrapBase} bg-transparent cursor-pointer`;

//                   const titleClass = isDisabled
//                     ? "text-[#A1A1A1] text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap"
//                     : isSelected
//                     ? "text-white text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap"
//                     : "text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap";

//                   const dateClass = isDisabled
//                     ? "text-[#A1A1A1] text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap"
//                     : isSelected
//                     ? "text-white text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap"
//                     : "text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap";

//                   return (
//                     <React.Fragment key={w.label}>
//                       <div
//                         className={wrapClass}
//                         onClick={() => {
//                           if (!isDisabled) setSelectedWeekIdx(actualIndex);
//                         }}
//                       >
//                         <span className={titleClass}>{w.label}</span>
//                         <span className={dateClass}>
//                           {fmt(w.startDate)} - {fmt(w.endDate)}
//                         </span>
//                       </div>
//                       {idx !== visibleWeeks.length - 1 && <div className="border-white border-r h-8 mx-2"></div>}
//                     </React.Fragment>
//                   );
//                 })}
//               </div>
//               <IoIosArrowForward
//                 className={`ml-2 ${canGoNext ? "text-[#252525] cursor-pointer" : "text-[#A1A1A1] cursor-not-allowed"}`}
//                 onClick={canGoNext ? handleNextWeeks : undefined}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-between items-center px-5 py-[19px] bg-[#E1E6ED] rounded-[15px]">
//           <p className="text-[20px] font-semibold leading-[110%] tracking-[-0.4px] text-[#535359]">No food added for this week.</p>
//           <button
//             onClick={handleCreatePlanClick}
//             className="w-[146px] font-semibold text-[#308BF9] text-[12px] px-5 py-[15px] cursor-pointer rounded-[10px] bg-[#FFFFFF] border border-[#308BF9]"
//           >
//             Add Food
//           </button>
//         </div>
//       </div>

//       <CreatePlanPopUp open={isModalOpen} onClose={() => setIsModalOpen(false)} onUploaded={(file) => setUploadedPdfName(file?.name || "")} />
//     </>
//   );
// }










"use client";

import React, { useEffect, useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { fetchWeeklyAnalysisComplete } from "../services/authService";
import CreatePlanPopUp from "./pop-folder/create-plan-popup";

export default function MealLogged() {
  const [activeFilter, setActiveFilter] = useState("low");
  const [weeklyAnalysisData, setWeeklyAnalysisData] = useState([]);
  const [apiMessage, setApiMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState(null); // "timeout" | "generic" | null
  const [refreshKey, setRefreshKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [visibleWeekStart, setVisibleWeekStart] = useState(0);
  const visibleWeeksCount = 4;

  const [selectedWeekIdx, setSelectedWeekIdx] = useState(null);
  const [uploadedPdfName, setUploadedPdfName] = useState("");

  const clientProfile = useSelector((state) => state.clientProfile.data);

  const handleFilterChange = (filter) => setActiveFilter(filter);

  // ---------- helpers ----------
  const toLocalMidnight = (dateStr) => {
    if (!dateStr) return new Date();
    const [y, m, d] = String(dateStr).split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const endOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);

  const formatDateForApi = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const fmt = (d) =>
    d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  // ---------- computed stats ----------
  const dataArr = Array.isArray(weeklyAnalysisData) ? weeklyAnalysisData : [];
  const totalFoods = dataArr.length;

  const avgScore = totalFoods
    ? Math.round(
        dataArr.reduce((sum, item) => sum + (Number(item.metabolic_compatibility_score) || 0), 0) / totalFoods
      )
    : 0;

  const zone = avgScore >= 80 ? "High" : avgScore >= 61 ? "Moderate" : "Low";

  const goalCounts = useMemo(() => {
    return dataArr.reduce((acc, item) => {
      const key = item.goal_alignment || "Unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  }, [dataArr]);

  // ---------- build weeks (based on clientProfile.dttm -> today) ----------
  // const { weeks, currentWeekIdx } = useMemo(() => {
  //   const result = { weeks: [], currentWeekIdx: 0 };

  //   const dttm = clientProfile?.dttm; // "YYYY-MM-DD HH:mm:ss"
  //   if (!dttm) return result;

  //   const planStartDate = toLocalMidnight(dttm.split(" ")[0]);
  //   const planStart = startOfDay(planStartDate);
  //   const planEnd = startOfDay(new Date()); // today

  //   const planDurationMs = planEnd - planStart;
  //   const planDurationDays = Math.ceil(planDurationMs / (1000 * 60 * 60 * 24)) + 1;
  //   const numberOfWeeks = Math.ceil(planDurationDays / 7);

  //   const list = [];
  //   for (let i = 0; i < numberOfWeeks; i++) {
  //     const start = new Date(planStartDate);
  //     start.setDate(planStartDate.getDate() + i * 7);

  //     const end = new Date(start);
  //     end.setDate(start.getDate() + 6);

  //     if (end > planEnd) end.setTime(planEnd.getTime());

  //     list.push({
  //       label: `Week ${i + 1}`,
  //       startDate: startOfDay(new Date(start)),
  //       endDate: endOfDay(new Date(end)),
  //     });
  //   }

  //   const today = startOfDay(new Date());
  //   let idx = list.findIndex((w) => today >= w.startDate && today <= w.endDate);
  //   if (idx === -1) idx = 0;

  //   result.weeks = list;
  //   result.currentWeekIdx = idx;
  //   return result;
  // }, [clientProfile]);


// ---------- build weeks (based on clientProfile.dttm -> today) ----------
const { weeks, currentWeekIdx } = useMemo(() => {
  const result = { weeks: [], currentWeekIdx: 0 };

  const dttm = clientProfile?.dttm; // "YYYY-MM-DD HH:mm:ss"
  if (!dttm) return result;

  const planStartDate = toLocalMidnight(dttm.split(" ")[0]);
  const planStart = startOfDay(planStartDate);

  const today = startOfDay(new Date()); // for calculating how many weeks we need
  const durationDays =
    Math.ceil((today - planStart) / (1000 * 60 * 60 * 24)) + 1;

  const numberOfWeeks = Math.ceil(durationDays / 7);

  const list = [];
  for (let i = 0; i < numberOfWeeks; i++) {
    const start = new Date(planStart);
    start.setDate(planStart.getDate() + i * 7);

    // ✅ always a full 7-day week range (start + 6 days)
    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    list.push({
      label: `Week ${i + 1}`,
      startDate: startOfDay(start),
      endDate: endOfDay(end),
    });
  }

  // current week = week where today lies between start & end (even if end is future)
  let idx = list.findIndex((w) => today >= w.startDate && today <= w.endDate);
  if (idx === -1) idx = 0;

  result.weeks = list;
  result.currentWeekIdx = idx;
  return result;
}, [clientProfile]);





  const getWeekDateRange = (weekIdx) => {
    const w = weeks?.[weekIdx];
    if (!w) return null;
    return { start: w.startDate, end: w.endDate };
  };

  // ---------- fetch ----------
  const fetchWeeklyAnalysis = async (startDate, endDate, dietPlanId) => {
    setLoading(true);
    setError(null);
    setErrorType(null);
    setApiMessage(null);

    try {
      const requestBody = {
        dietician_id: clientProfile?.dietician_id,
        profile_id: clientProfile?.profile_id,
        start_date: startDate,
        end_date: endDate,
        diet_plan_id: dietPlanId,
      };

      const response = await fetchWeeklyAnalysisComplete(requestBody);

      // handle error shape { error: "...", details: "..." }
      if (response?.error && response?.details) {
        const isTimeout =
          typeof response.details === "string" && response.details.toLowerCase().includes("timed out");

        setWeeklyAnalysisData([]);
        setApiMessage(null);
        setError(isTimeout ? "Time out. Please refresh and try again." : response.error || "Something went wrong.");
        setErrorType(isTimeout ? "timeout" : "generic");
        return;
      }

      if (response?.message) {
        setApiMessage({
          message: response.message,
          end_date: response.end_date,
        });
        setWeeklyAnalysisData([]);
        setError(null);
        setErrorType(null);
      } else {
        const arr = response?.api_response?.food_level_evaluation || [];
        setWeeklyAnalysisData(arr);
        setApiMessage(null);
        setError(null);
        setErrorType(null);
      }
    } catch (err) {
      setError(err?.message || "Failed to fetch weekly analysis");
      setErrorType("generic");
      setWeeklyAnalysisData([]);
      setApiMessage(null);
    } finally {
      setLoading(false);
    }
  };

  // Re-fetch on initial load / week change / refreshKey
  useEffect(() => {
    if (!clientProfile?.plans_summary?.active?.length) {
      setWeeklyAnalysisData([]);
      setApiMessage(null);
      setError(null);
      setErrorType(null);
      return;
    }

    const activePlan = clientProfile.plans_summary.active[0];
    const dietPlanId = activePlan.id;

    const planStart = toLocalMidnight(activePlan.plan_start_date);
    const planEnd = toLocalMidnight(activePlan.plan_end_date);

    const weekIdxToUse = selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;
    const range = getWeekDateRange(weekIdxToUse);
    if (!range) return;

    // const startDateObj = range.start < planStart ? planStart : range.start;
    // const endDateObj = range.end > planEnd ? planEnd : range.end;


const todayEnd = endOfDay(new Date());

const startDateObj = range.start < planStart ? planStart : range.start;

// ✅ cap end date to "today" as well (prevents future fetch)
let endDateObj = range.end;
if (endDateObj > planEnd) endDateObj = planEnd;
if (endDateObj > todayEnd) endDateObj = todayEnd;




    const startDate = formatDateForApi(startDateObj);
    const endDate = formatDateForApi(endDateObj);

    fetchWeeklyAnalysis(startDate, endDate, dietPlanId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientProfile, selectedWeekIdx, refreshKey, currentWeekIdx, weeks?.length]);

  // ✅ FIX: prevent "jumping forward" after clicking a week
  // Keep selected week visible (without forcing it back to currentWeekIdx)
  useEffect(() => {
    if (selectedWeekIdx === null) return;

    if (selectedWeekIdx < visibleWeekStart) {
      setVisibleWeekStart(selectedWeekIdx);
      return;
    }

    if (selectedWeekIdx >= visibleWeekStart + visibleWeeksCount) {
      setVisibleWeekStart(Math.max(0, selectedWeekIdx - (visibleWeeksCount - 1)));
    }
  }, [selectedWeekIdx, visibleWeekStart]);

  // ---------- week navigation ----------
  const canGoNext = visibleWeekStart + visibleWeeksCount < (weeks?.length || 0);
  const canGoPrev = visibleWeekStart > 0;

  const handleNextWeeks = () => {
    if (canGoNext) setVisibleWeekStart((p) => p + 1);
  };

  const handlePrevWeeks = () => {
    if (canGoPrev) setVisibleWeekStart((p) => p - 1);
  };

  const visibleWeeks = (weeks || []).slice(visibleWeekStart, visibleWeekStart + visibleWeeksCount);

  const handleCreatePlanClick = () => {
    localStorage.clear();
    setIsModalOpen(true);
  };

  const handleRefresh = () => {
    setError(null);
    setErrorType(null);
    setRefreshKey((prev) => prev + 1);
  };

  const showMessageState = apiMessage && dataArr.length === 0;
  const showNoDataState = !apiMessage && dataArr.length === 0 && !loading && !error;
  const showDataState = dataArr.length > 0;

  return (
    <>
      <div className="flex flex-col gap-[25px] mt-[42px] bg-[#F5F7FA] rounded-[15px] pt-[25px] pl-[30px] pr-7 pb-2.5">
        {/* Header */}
        <div className="flex justify-between">
          <span className="text-[#252525] text-[20px] font-semibold tracking-[-0.3] leading-[110%]">
            Weekly Food Analysis
          </span>
        </div>

        <div className="w-full border-b border-[#E1E6ED]"></div>

        {/* ===== Select Week Section ===== */}
        <div className="flex flex-col gap-9 bg-[#F5F7FA] rounded-[15px]">
          <div className="flex items-center bg-[#E1E6ED] rounded-[15px] border-4 border-[#F5F7FA]">
            <div className="flex justify-between w-[170px] py-[30px] pl-[30px]">
              <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap">
                Select a Week
              </span>

              <IoIosArrowBack
                className={`${canGoPrev ? "text-[#252525] cursor-pointer" : "text-[#A1A1A1] cursor-not-allowed"}`}
                onClick={canGoPrev ? handlePrevWeeks : undefined}
              />
            </div>

            <div className="flex items-center">
              <div className="flex items-center">
                {visibleWeeks.map((w, idx) => {
                  const actualIndex = visibleWeekStart + idx;
                  const effectiveIdx = selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;

                  const today = new Date();
                  const range = getWeekDateRange(actualIndex);

                  // Disable future weeks
                  const isDisabled = !!(range && range.start > today);

                  const isSelected = actualIndex === effectiveIdx && !isDisabled;

                  const wrapBase =
                    "flex flex-col w-full gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px]";
                  const wrapClass = isDisabled
                    ? `${wrapBase} bg-transparent cursor-not-allowed`
                    : isSelected
                    ? `${wrapBase} bg-[#308BF9] cursor-pointer`
                    : `${wrapBase} bg-transparent cursor-pointer`;

                  const titleClass = isDisabled
                    ? "text-[#A1A1A1] text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap"
                    : isSelected
                    ? "text-white text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap"
                    : "text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.48px] whitespace-nowrap";

                  const dateClass = isDisabled
                    ? "text-[#A1A1A1] text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap"
                    : isSelected
                    ? "text-white text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap"
                    : "text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] whitespace-nowrap";

                  return (
                    <React.Fragment key={w.label}>
                      <div
                        className={wrapClass}
                        onClick={() => {
                          if (!isDisabled) setSelectedWeekIdx(actualIndex);
                        }}
                      >
                        <span className={titleClass}>{w.label}</span>
                        <span className={dateClass}>
                          {fmt(w.startDate)} - {fmt(w.endDate)}
                        </span>
                      </div>

                      {idx !== visibleWeeks.length - 1 && <div className="border-white border-r h-8 mx-2"></div>}
                    </React.Fragment>
                  );
                })}
              </div>

              <IoIosArrowForward
                className={`ml-2 ${canGoNext ? "text-[#252525] cursor-pointer" : "text-[#A1A1A1] cursor-not-allowed"}`}
                onClick={canGoNext ? handleNextWeeks : undefined}
              />
            </div>
          </div>
        </div>

        {/* Example empty state */}
        <div className="flex justify-between items-center px-5 py-[19px] bg-[#E1E6ED] rounded-[15px]">
          <p className="text-[20px] font-semibold leading-[110%] tracking-[-0.4px] text-[#535359]">
            No food added for this week.
          </p>
          <button
            onClick={handleCreatePlanClick}
            className="w-[146px] font-semibold text-[#308BF9] text-[12px] px-5 py-[15px] cursor-pointer rounded-[10px] bg-[#FFFFFF] border border-[#308BF9]"
          >
            Add Food
          </button>
        </div>
      </div>

      <CreatePlanPopUp
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUploaded={(file) => setUploadedPdfName(file?.name || "")}
      />
    </>
  );
}
