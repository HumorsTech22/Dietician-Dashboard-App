// import { IoIosArrowDown } from "react-icons/io";
// import MealSidebar from "./meal-sidebar";
// import MealTracked from "./meal-tracked";

// export default function MealLogged() {
//     return (
//         <>
//             <div className="flex flex-col gap-[25px] mt-[42px] bg-[#F5F7FA] rounded-[15px] pt-[25px] pl-[30px] pr-7 pb-2.5">
//                 <div className="flex justify-between">
//                     <div className="flex flex-col gap-2.5">
//                         <span className="text-[#252525] text-[15px] font-semibold tracking-[-0.3] leading-[110%">Meal Logged</span>
//                         <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">For 04 Jul, 2025</span>
//                     </div>


//                     <div className="flex gap-[26px] items-center">
//                         <div className="w-fit flex">
//                             <div className="rounded-l-[10px] border border-[#D9D9D9] pl-[15px] py-[11px] pr-[21px] bg-[#F0F0F0] text-center">
//                                 <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-medium">
//                                     Filter
//                                 </p>
//                             </div>
//                             <div className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4 py-2 pr-2.5 bg-white">
//                                 <p className="cursor-pointer text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
//                                     All Food (15)
//                                 </p>
//                                 <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" />
//                             </div>
//                         </div>


//                         <div className="px-[20px] py-[15px] items-center bg-[#308BF9] rounded-[15px] cursor-pointer">

//                             <p className="text-[12px] leading-[100%] font-semibold text-white space-x-0 tracking-[-0.24px]">
//                                 Update Diet plan
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full border-b border-[#E1E6ED]"></div>

//                 <div className=" flex justify-between bg-[#E1E6ED] rounded-[15px] px-5 py-[19px] ml-[59px] mr-[59px]">
//                     <div className="flex flex-col justify-between w-[170px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
//                         <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
//                         <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">Total Foods</p>

//                     </div>

//                     <div className="flex gap-20 bg-white rounded-[8px] py-[19px] px-5">
//                         <div className="flex flex-col justify-between">
//                             <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
//                             <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">Foods Consumed</span>
//                         </div>

//                         <div className="flex flex-col justify-between">
//                             <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
//                             <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">foods missed</span>
//                         </div>
//                     </div>


//                     <div className="flex flex-col gap-[12px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
//                         <div className="flex flex-col gap-5">
//                         <div className="flex items-center gap-2.5">
//                             <span className="text-[#252525] text-[18px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
//                             <div className="w-px h-4 bg-[#D9D9D9]" />
//                             <span className="text-[#252525] text-[18px] font-semibold tracking-[-0.36px] leading-[126%]">Moderate</span>

//                         </div>
//                          <div className="flex justify-start">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="117"
//                                     height="6"
//                                     viewBox="0 0 117 6"
//                                     fill="none"
//                                 >
//                                     <path
//                                         d="M3 3H114"
//                                         stroke="#D9D9D9"
//                                         strokeWidth="5"
//                                         strokeLinecap="round"
//                                     />
//                                     <path
//                                         d="M3 3H59"
//                                         stroke="#FFC412"
//                                         strokeWidth="5"
//                                         strokeLinecap="round"
//                                     />
//                                 </svg>
//                             </div>
// </div>
//                             <div>
//                                 <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Overall Metabolic Compatibility Score</p>
//                             </div>
//                     </div>
//                 </div>

//                 <div className="flex gap-[5px] ">
//                     <MealSidebar />
//                     <MealTracked />
//                 </div>
//             </div>

//         </>
//     )
// };


"use client";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import MealSidebar from "./meal-sidebar";
import MealTracked from "./meal-tracked";
import { useState, useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { fetchWeeklyAnalysisComplete } from "../services/authService";

export default function MealLogged() {
  const [activeFilter, setActiveFilter] = useState("low");
  const [weeklyAnalysisData, setWeeklyAnalysisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clientProfile = useSelector((state) => state.clientProfile.data);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // ===== Derived stats from array =====
  const dataArr = Array.isArray(weeklyAnalysisData) ? weeklyAnalysisData : [];
  const totalFoods = dataArr.length;

  const avgScore = totalFoods
    ? Math.round(
        dataArr.reduce(
          (sum, item) =>
            sum + (Number(item.metabolic_compatibility_score) || 0),
          0
        ) / totalFoods
      )
    : 0;

  const zone = avgScore >= 80 ? "High" : avgScore >= 61 ? "Moderate" : "Low";

  const goalCounts = dataArr.reduce((acc, item) => {
    const key = item.goal_alignment || "Unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  // ====== Plan-based weeks builder logic ======
  let weeks = [];
  let currentWeekIdx = 0;

  const fmt = (d) =>
    d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  if (clientProfile?.plans_summary?.active?.length > 0) {
    // Use plan dates
    const activePlan = clientProfile.plans_summary.active[0];
    const planStart = new Date(activePlan.plan_start_date);
    const planEnd = new Date(activePlan.plan_end_date);
    
    // Calculate weeks based on plan duration
    const planDurationMs = planEnd - planStart;
    const planDurationDays = Math.ceil(planDurationMs / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end dates
    
    const numberOfWeeks = Math.ceil(planDurationDays / 7);
    
    for (let i = 0; i < numberOfWeeks; i++) {
      const start = new Date(planStart);
      start.setDate(planStart.getDate() + (i * 7));
      
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      
      // Don't exceed plan end date
      if (end > planEnd) {
        end.setTime(planEnd.getTime());
      }
      
      weeks.push({ 
        label: `Week ${i + 1}`, 
        start: start.getDate(),
        end: end.getDate(),
        startDate: new Date(start),
        endDate: new Date(end)
      });
    }
    
    // Find current week index based on today's date
    const today = new Date();
    currentWeekIdx = weeks.findIndex(week => 
      today >= week.startDate && today <= week.endDate
    );
    if (currentWeekIdx === -1) currentWeekIdx = 0;
  } else {
    // Fallback to current month
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = today.getDate();
    currentWeekIdx = Math.ceil(currentDay / 7) - 1;

    for (let i = 0; i < 5; i++) {
      const start = i * 7 + 1;
      if (start > daysInMonth) break;
      const end = Math.min(start + 6, daysInMonth);
      weeks.push({ 
        label: `Week ${i + 1}`, 
        start, 
        end,
        startDate: new Date(year, month, start),
        endDate: new Date(year, month, end)
      });
    }
  }

  const monthDate = (day) => {
    if (clientProfile?.plans_summary?.active?.length > 0) {
      const activePlan = clientProfile.plans_summary.active[0];
      const planStart = new Date(activePlan.plan_start_date);
      return new Date(planStart.getFullYear(), planStart.getMonth(), day);
    } else {
      const today = new Date();
      return new Date(today.getFullYear(), today.getMonth(), day);
    }
  };

  const getWeekDateRange = (weekIdx) => {
    const w = weeks[weekIdx];
    if (!w) return null;
    return {
      start: w.startDate,
      end: w.endDate
    };
  };

  // null => auto-select current calendar week
  const [selectedWeekIdx, setSelectedWeekIdx] = useState(null);

  // Function to fetch weekly analysis data
  const fetchWeeklyAnalysis = async (startDate, endDate, dietPlanId) => {
    setLoading(true);
    setError(null);
    try {
      const requestBody = {
        dietician_id: clientProfile?.dietician_id,
        profile_id: clientProfile?.profile_id,
        // dietician_id: "Respyrd01",
        // profile_id: "profile1",
        start_date: startDate,
        end_date: endDate,
        diet_plan_id: dietPlanId,
      };

      const response = await fetchWeeklyAnalysisComplete(requestBody);
      const arr = response?.api_response?.food_level_evaluation || [];
      setWeeklyAnalysisData(arr);
    } catch (err) {
      setError(err?.message || "Failed to fetch weekly analysis");
      setWeeklyAnalysisData([]);
    } finally {
      setLoading(false);
    }
  };

  // Use selected week + clamp into plan range
  useEffect(() => {
    if (!clientProfile?.plans_summary?.active?.length) {
      setWeeklyAnalysisData([]);
      return;
    }

    const activePlan = clientProfile.plans_summary.active[0];
    const dietPlanId = activePlan.id;

    const planStart = new Date(activePlan.plan_start_date);
    const planEnd = new Date(activePlan.plan_end_date);

    // Choose which week index to use (default = current calendar week)
    const weekIdxToUse =
      selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;

    const range = getWeekDateRange(weekIdxToUse);
    if (!range) return;

    // Clamp week range inside plan range
    const startDateObj = range.start < planStart ? planStart : range.start;
    const endDateObj = range.end > planEnd ? planEnd : range.end;

    const startDate = startDateObj.toISOString().slice(0, 10); // yyyy-mm-dd
    const endDate = endDateObj.toISOString().slice(0, 10);

    fetchWeeklyAnalysis(startDate, endDate, dietPlanId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientProfile, selectedWeekIdx]);

  return (
    <>
      <div className="flex flex-col gap-[25px] mt-[42px] bg-[#F5F7FA] rounded-[15px] pt-[25px] pl-[30px] pr-7 pb-2.5">
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-[#252525] text-[15px] font-semibold tracking-[-0.3] leading-[110%]">
              Meal Logged Analysis
            </span>
          </div>

          <div className="flex gap-[26px] items-center">
            <div className="px-[20px] py-[15px] items-center bg-[#308BF9] rounded-[15px] cursor-pointer">
              <p className="text-[12px] leading-[100%] font-semibold text-white space-x-0 tracking-[-0.24px]">
                Update Diet plan
              </p>
            </div>
          </div>
        </div>

        <div className="w-full border-b border-[#E1E6ED]"></div>

        {/* Error State */}
        {error && (
          <div className="flex justify-center items-center py-4">
            <p className="text-red-500">Error: {error}</p>
          </div>
        )}

        {/* ===== Select Week Section ===== */}
        <div className="flex flex-col gap-9 bg-[#F5F7FA] rounded-[15px]">
          <div className="flex items-center bg-[#E1E6ED] rounded-[15px] border-4 border-[#F5F7FA]">
            <div className="flex justify-between w-[170px] py-[30px] pl-[30px]">
              <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap">
                Select a Week
              </span>
              <IoIosArrowBack className="text-[#252525] cursor-pointer" />
            </div>

            <div className="flex items-center">
              <div className="flex items-center">
                {weeks.map((w, idx) => {
                  // Effective selected index (auto-select current week if user hasn't clicked)
                  const effectiveIdx =
                    selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;

                  const today = new Date();
                  
                  // If a plan exists, disable weeks that are fully outside plan range OR are future weeks
                  let isDisabled = false;
                  if (clientProfile?.plans_summary?.active?.length > 0) {
                    const activePlan = clientProfile.plans_summary.active[0];
                    const planStart = new Date(activePlan.plan_start_date);
                    const planEnd = new Date(activePlan.plan_end_date);
                    const range = getWeekDateRange(idx);

                    if (range) {
                      // Disable if outside plan range OR if it's a future week
                      if (range.end < planStart || range.start > planEnd || range.start > today) {
                        isDisabled = true;
                      }
                    }
                  } else {
                    // For fallback (no plan), disable future weeks
                    const range = getWeekDateRange(idx);
                    if (range && range.start > today) {
                      isDisabled = true;
                    }
                  }

                  const isSelected = idx === effectiveIdx && !isDisabled;

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
                          if (!isDisabled) setSelectedWeekIdx(idx);
                        }}
                      >
                        <span className={titleClass}>{w.label}</span>
                        <span className={dateClass}>
                          {fmt(w.startDate)} -{" "}
                          {fmt(w.endDate)}
                        </span>
                      </div>
                      {idx !== weeks.length - 1 && (
                        <div className="border-white border-r h-8 mx-2"></div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <IoIosArrowForward className="text-[#252525] ml-2 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* ===== End Select Week Section ===== */}

        {/* Show message when no data, otherwise show stats and content */}
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <span className="text-[#535359] text-[14px] font-medium">
              Loading analysis...
            </span>
          </div>
        ) : dataArr.length === 0 ? (
          <div className="flex justify-center items-center py-8">
            <span className="text-[#C0CAD8] text-[20px] font-semibold leading-[110%] tracking-[-0.4px] text-center">
              {(() => {
                const weekIdxToUse = selectedWeekIdx === null ? currentWeekIdx : selectedWeekIdx;
                const range = getWeekDateRange(weekIdxToUse);
                const today = new Date();
                
                if (range && range.end < today) {
                  return `No Data Found for ${fmt(range.start)} - ${fmt(range.end)}`;
                } else {
                  return "Analysis will be generated after each week.";
                }
              })()}
            </span>
          </div>
        ) : (
          <>
            {/* Stats Row */}
            <div className="flex justify-between bg-[#E1E6ED] rounded-[15px] px-5 py-[19px] ml-[59px] mr-[59px]">
              <div className="flex flex-col justify-between w-[170px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
                <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">
                  {totalFoods}
                </span>
                <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">
                  Total Foods
                </p>
              </div>

              <div className="flex gap-20 bg-white rounded-[8px] py-[19px] px-5">
                <div className="flex flex-col justify-between">
                  <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">
                    {goalCounts.Support || 0}
                  </span>
                  <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">
                    Foods Consumed
                  </span>
                </div>

                <div className="flex flex-col justify-between">
                  <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">
                    {goalCounts.Low || 0}
                  </span>
                  <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">
                    Foods Missed
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[12px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#252525] text-[18px] font-semibold tracking-[-0.5px] leading-[126%]">
                      {avgScore}
                    </span>
                    <div className="w-px h-4 bg-[#D9D9D9]" />
                    <span className="text-[#252525] text-[18px] font-semibold tracking-[-0.36px] leading-[126%]">
                      {zone}
                    </span>
                  </div>
                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="6"
                      viewBox="0 0 117 6"
                      fill="none"
                    >
                      <path
                        d="M3 3H114"
                        stroke="#D9D9D9"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d={`M3 3H${Math.max(
                          3,
                          Math.min(
                            114,
                            Math.round((avgScore / 100) * 111) + 3
                          )
                        )}`}
                        stroke="#FFC412"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
                    Overall Metabolic Compatibility Score
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar + Main Section */}
            <div className="flex gap-[5px]">
              <MealSidebar
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
                weeklyAnalysisData={dataArr}
              />
              <div className="w-full max-h-[600px] overflow-y-auto hide-scrollbar">
                <MealTracked
                  activeFilter={activeFilter}
                  weeklyAnalysisData={dataArr}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}




// "use client";

// import React, { useState, useMemo, useCallback } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import MealSidebar from "./meal-sidebar";
// import MealTracked from "./meal-tracked";

// // ---- helpers ----
// const categorizeItems = (items) => {
//   const categorized = { low: [], moderate: [], high: [], others: [] };
//   items.forEach((item) => {
//     if (item.score === null) categorized.others.push(item);
//     else if (item.score >= 0 && item.score <= 60) categorized.low.push(item);
//     else if (item.score >= 61 && item.score <= 79) categorized.moderate.push(item);
//     else if (item.score >= 80 && item.score <= 100) categorized.high.push(item);
//   });
//   return categorized;
// };

// export default function MealLogged() {
//   // ---- your original items (unchanged content) ----
//   const allMealItems = [
//     {
//       id: 1, score: 65, level: "Moderate", strokeColor: "#FFC412", strokeWidth: 76,
//       icon: "/icons/hugeicons_bubble-tea-02.svg",
//       name: "Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops",
//       calories: "220kcal", portion: "1 cup (250 ml)",
//     },
//     { id: 11, score: 78, level: "Moderate", strokeColor: "#FFC412", strokeWidth: 76, icon: "/icons/hugeicons_bubble-tea-02.svg", name: "Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 12, score: 65, level: "Moderate", strokeColor: "#FFC412", strokeWidth: 76, icon: "/icons/hugeicons_bubble-tea-02.svg", name: "Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 15, score: 96, level: "High", strokeColor: "#3FAF58", strokeWidth: 117, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 13, score: 68, level: "Moderate", strokeColor: "#FFC412", strokeWidth: 76, icon: "/icons/hugeicons_bubble-tea-02.svg", name: "Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 14, score: 63, level: "Moderate", strokeColor: "#FFC412", strokeWidth: 76, icon: "/icons/hugeicons_bubble-tea-02.svg", name: "Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 8, score: 75, level: "Moderate", strokeColor: "#FFC412", strokeWidth: 76, icon: "/icons/hugeicons_bubble-tea-02.svg", name: "Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 2, score: 80, level: "High", strokeColor: "#3FAF58", strokeWidth: 94, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 3, score: 20, level: "Low", strokeColor: "#DA5747", strokeWidth: 23, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 16, score: 22, level: "Low", strokeColor: "#DA5747", strokeWidth: 23, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 17, score: 10, level: "Low", strokeColor: "#DA5747", strokeWidth: 23, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 24, score: 24, level: "Low", strokeColor: "#DA5747", strokeWidth: 23, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 18, score: 35, level: "Low", strokeColor: "#DA5747", strokeWidth: 23, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 19, score: 30, level: "Low", strokeColor: "#DA5747", strokeWidth: 23, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 7, score: 36, level: "Low", strokeColor: "#DA5747", strokeWidth: 23, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     {
//       id: 4, score: null, level: null, strokeColor: null, strokeWidth: 0, icon: null,
//       name: "", calories: "", portion: "",
//       description: "Oats are high in carbohydrates, which can hinder fat loss by maintaining glucose reliance. The fiber content, while generally healthy, may contribute to the high fermentation observed."
//     },
//     { id: 5, score: 100, level: "High", strokeColor: "#3FAF58", strokeWidth: 117, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//     { id: 6, score: 98, level: "High", strokeColor: "#3FAF58", strokeWidth: 117, icon: "/icons/hugeicons_plant-04.svg", name: "Almonds [soaked + de skinned]", calories: "220kcal", portion: "1 cup (250 ml)" },
//   ];

//   // Memoize categorization
//   const categorized = useMemo(() => categorizeItems(allMealItems), [allMealItems]);

//   // live heights (in px) of each category stack from the right pane
//   const [heights, setHeights] = useState({
//     low: 0,
//     moderate: 0,
//     high: 0,
//     others: 0,
//   });

//   // fallback estimates before first measure (optional)
//   const EST_ITEM = 156;
//   const EST_GAP = 12;
//   const fallbackHeights = useMemo(() => ({
//     low: categorized.low.length * EST_ITEM + Math.max(0, categorized.low.length - 1) * EST_GAP,
//     moderate: categorized.moderate.length * EST_ITEM + Math.max(0, categorized.moderate.length - 1) * EST_GAP,
//     high: categorized.high.length * EST_ITEM + Math.max(0, categorized.high.length - 1) * EST_GAP,
//     others: categorized.others.length * EST_ITEM + Math.max(0, categorized.others.length - 1) * EST_GAP,
//   }), [categorized]);

//   const safeHeights = {
//     low: heights.low || fallbackHeights.low,
//     moderate: heights.moderate || fallbackHeights.moderate,
//     high: heights.high || fallbackHeights.high,
//     others: heights.others || fallbackHeights.others,
//   };

//   // Stable callback that only updates when values actually change
//   const handleCategoryHeights = useCallback((next) => {
//     setHeights((prev) => {
//       if (
//         prev.low === next.low &&
//         prev.moderate === next.moderate &&
//         prev.high === next.high &&
//         prev.others === next.others
//       ) {
//         return prev; // no change -> no render
//       }
//       return next;
//     });
//   }, []);

//   return (
//     <>
//       <div className="flex flex-col gap-[25px] mt-[42px] bg-[#F5F7FA] rounded-[15px] pt-[25px] pl-[30px] pr-7 pb-2.5">
//         {/* Header */}
//         <div className="flex justify-between">
//           <div className="flex items-center">
//             <span className="text-[#252525] text-[15px] font-semibold tracking-[-0.3] leading-[110%]">
//               Meal Logged Analysis
//             </span>
//           </div>
//           <div className="flex gap-[26px] items-center">
//             <div className="px-[20px] py-[15px] items-center bg-[#308BF9] rounded-[15px] cursor-pointer">
//               <p className="text-[12px] leading-[100%] font-semibold text-white tracking-[-0.24px]">
//                 Update Diet plan
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="w-full border-b border-[#E1E6ED]" />

//         {/* Week selector (trimmed to keep example short) */}
//         <div className="flex items-center bg-[#E1E6ED] rounded-[15px] border-4 border-[#F5F7FA]">
//           <div className="flex justify-between w-[170px] py-[30px] pl-[30px]">
//             <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap">
//               Select a Week
//             </span>
//             <IoIosArrowBack className="text-[#252525] cursor-pointer" />
//           </div>
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <div className="flex flex-col w-full gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer bg-[#308BF9]">
//                 <span className="text-white text-[12px] font-semibold">Week 1</span>
//                 <span className="text-white text-[10px]">04 Jul, 2025 - 12 Jul, 2025</span>
//               </div>
//               <div className="border-white border-r h-8 mx-2" />
//               <div className="flex flex-col w-full gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer bg-transparent">
//                 <span className="text-[#252525] text-[12px] font-semibold">Week 2</span>
//                 <span className="text-[#252525] text-[10px]">04 Jul, 2025 - 12 Jul, 2025</span>
//               </div>
//               <div className="border-white border-r h-8 mx-2" />
//               <div className="flex flex-col w-full gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer bg-transparent">
//                 <span className="text-[#A1A1A1] text-[12px] font-semibold">Week 3</span>
//                 <span className="text-[#A1A1A1] text-[10px]">04 Jul, 2025 - 12 Jul, 2025</span>
//               </div>
//               <div className="border-white border-r h-8 mx-2" />
//               <div className="flex flex-col w-full gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer bg-transparent">
//                 <span className="text-[#A1A1A1] text-[12px] font-semibold">Week 4</span>
//                 <span className="text-[#A1A1A1] text-[10px]">04 Jul, 2025 - 12 Jul, 2025</span>
//               </div>
//               <div className="border-white border-r h-8 mx-2" />
//               <div className="flex flex-col w-full gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer bg-transparent">
//                 <span className="text-[#A1A1A1] text-[12px] font-semibold">Week 5</span>
//                 <span className="text-[#A1A1A1] text-[10px]">04 Jul, 2025 - 12 Jul, 2025</span>
//               </div>
//             </div>
//             <IoIosArrowForward className="text-[#252525] ml-2 cursor-pointer" />
//           </div>
//         </div>

//         {/* KPI row (short) */}
//         <div className=" flex justify-between bg-[#E1E6ED] rounded-[15px] px-5 py-[19px] ml-[59px] mr-[59px]">
//           <div className="flex flex-col justify-between w-[170px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
//             <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
//             <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">Total Foods</p>
//           </div>
//           <div className="flex gap-20 bg-white rounded-[8px] py-[19px] px-5">
//             <div className="flex flex-col justify-between">
//               <span className="text-[#252525] text-[25px] font-semibold leading-[126%]">40</span>
//               <span className="text-[#535359] text-[10px] font-semibold">Foods Consumed</span>
//             </div>
//             <div className="flex flex-col justify-between">
//               <span className="text-[#252525] text-[25px] font-semibold leading-[126%]">40</span>
//               <span className="text-[#535359] text-[10px] font-semibold">foods missed</span>
//             </div>
//           </div>
//           <div className="flex flex-col gap-[12px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
//             <div className="flex flex-col gap-5">
//               <div className="flex items-center gap-2.5">
//                 <span className="text-[#252525] text-[18px] font-semibold">40</span>
//                 <div className="w-px h-4 bg-[#D9D9D9]" />
//                 <span className="text-[#252525] text_[18px] font-semibold">Moderate</span>
//               </div>
//               <div className="flex justify-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="117" height="6" viewBox="0 0 117 6" fill="none">
//                   <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
//                   <path d="M3 3H59" stroke="#FFC412" strokeWidth="5" strokeLinecap="round" />
//                 </svg>
//               </div>
//             </div>
//             <div>
//               <p className="text-[#535359] text-[10px] font-semibold">Overall Metabolic Compatibility Score</p>
//             </div>
//           </div>
//         </div>

//         {/* Main two-column area */}
//         <div className="flex gap-[5px]">
//           <MealSidebar
//             counts={{
//               low: categorized.low.length,
//               moderate: categorized.moderate.length,
//               high: categorized.high.length,
//               others: categorized.others.length,
//             }}
//             heights={safeHeights}
//           />
//           <MealTracked
//             categorizedItems={categorized}
//             onCategoryHeights={handleCategoryHeights}  // stable callback
//           />
//         </div>
//       </div>
//     </>
//   );
// }
