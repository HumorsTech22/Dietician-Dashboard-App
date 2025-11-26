// "use client";
// import React, { useMemo, useState } from "react";
// import { IoChevronBackSharp } from "react-icons/io5";
// import { IoIosArrowForward } from "react-icons/io";
// import TestEvaluation from "./test-evaluation";
// import Trends from "./trends";
// import FoodEvaluation from "./food-evaluation";
// import MealLogged from "./meal-logged";
// import { useSelector } from "react-redux";
// import Image from "next/image";
// import NoPlans from "./no-plans";

// function pad2(n) {
//   return n.toString().padStart(2, "0");
// }
// function startOfDay(d) {
//   const x = new Date(d);
//   x.setHours(0, 0, 0, 0);
//   return x;
// }
// function addDays(d, n) {
//   const x = new Date(d);
//   x.setDate(x.getDate() + n);
//   return x;
// }
// const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// export const ResultEvaluation = () => {

//    const clientData = useSelector((state) => state.clientProfile.data);
//    console.log("clientData31:-", clientData);


//    const hasActivePlan =
//     clientData?.plans_summary?.active &&
//     clientData.plans_summary.active.length > 0;

//     // Get plan dates from active plan
// const activePlan = hasActivePlan ? clientData.plans_summary.active[0] : null;
// const planStartDate = activePlan ? startOfDay(new Date(activePlan.plan_start_date)) : null;
// const planEndDate = activePlan ? startOfDay(new Date(activePlan.plan_end_date)) : null;


//   // today + selected state
//   const today = startOfDay(new Date());
//   const [selectedDate, setSelectedDate] = useState(today);

//   // config: allow only 7 days beyond today
//   const MAX_FUTURE_DAYS = 7;
//   const maxDate = startOfDay(addDays(today, MAX_FUTURE_DAYS));

//   // calendar strip window (16 boxes)
//   const VISIBLE_COUNT = 16;

//   // initial window puts today inside range; this already caps the right edge at today+7
//   const [windowStart, setWindowStart] = useState(
//     addDays(today, -(VISIBLE_COUNT / 2))
//   );

//   // the latest allowed windowStart such that the last box (index VISIBLE_COUNT-1) is <= maxDate
//   const maxWindowStart = startOfDay(
//     addDays(maxDate, 1 - VISIBLE_COUNT)
//   );

//   const canGoNext =
//     startOfDay(windowStart).getTime() < maxWindowStart.getTime();

//   const dates = useMemo(() => {
//     return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
//       const d = startOfDay(addDays(windowStart, i));
//       return {
//         date: d,
//         day: pad2(d.getDate()),
//         week: WEEK[d.getDay()],
//       };
//     });
//   }, [windowStart]);

//     // if no active plan → show NoPlans screen
//   if (!hasActivePlan) {
//     return <NoPlans />;
//   }


//   return (
//     <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
//       <div className="flex justify-start ml-[15px]">
//         <p className="text-[#252525] text-center text-[25px] font-semibold leading-normal tracking-[-1px]">
//           Result Evaluation
//         </p>
//       </div>

//       <div className="my-[20px] border border-[#E1E6ED]"></div>

//       <div className="flex flex-col gap-[20px]">
//         <div className="ml-4">
//           <span className="text-[#535359] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
//             Select a date
//           </span>
//         </div>

//         <div className="flex items-center justify-between">

//           <IoChevronBackSharp
//             className="w-[52px] h-[52px] cursor-pointer py-[13px] pl-2.5"
//             onClick={() => setWindowStart(addDays(windowStart, -VISIBLE_COUNT))}
//             title="Previous"
//           />

//           {dates.map((item, idx) => {
//             const isToday =
//               startOfDay(item.date).getTime() === today.getTime();
//             const isFuture =
//               startOfDay(item.date).getTime() > today.getTime();
//             const isSelected =
//               startOfDay(item.date).getTime() ===
//               startOfDay(selectedDate).getTime();
//             const isBeyondMax =
//               startOfDay(item.date).getTime() > maxDate.getTime();

//             // disabled if beyond +7
//             const disabled = isBeyondMax;

//             return (
//               <div
//                 key={idx}
//                 onClick={() => {
//                   if (disabled) return; // block selection
//                   setSelectedDate(item.date);

//                 }}
//                 title={
//                   disabled ? "Selection disabled (beyond +7 days)" : undefined
//                 }
//                 className={[
//                   "flex flex-col px-[7px] py-2 gap-1 rounded-[12px] select-none",
//                   disabled ? "opacity-40 pointer-events-none" : "cursor-pointer",
//                   isSelected
//                     ? "bg-[#308BF9] text-white"
//                     : isFuture
//                       ? "text-[#A1A1A1]"
//                       : "text-[#535359]",
//                 ].join(" ")}
//               >
//                 <span className="text-center text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
//                   {item.day}
//                 </span>
//                 <span className="text-center text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                   {item.week}
//                 </span>

//                 {isToday && !isSelected && (
//                   <span className="mx-auto mt-[2px] w-[4px] h-[4px] rounded-full bg-[#308BF9]" />
//                 )}
//               </div>
//             );
//           })}


//           <IoIosArrowForward
//             className={[
//               "w-[52px] h-[52px] py-[13px] pl-2.5",
//               canGoNext ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
//             ].join(" ")}
//             onClick={() => {
//               if (!canGoNext) return;
//               setWindowStart(addDays(windowStart, VISIBLE_COUNT));
//             }}
//             title={canGoNext ? "Next" : "No further future dates"}
//             aria-disabled={!canGoNext}
//           />
//         </div>

//         <div className="my-[20px] border border-[#E1E6ED]"></div>
//         <TestEvaluation />
//       </div>

//       <div className="flex flex-col gap-[50px] ">

//         <Trends
//           selectedDate={selectedDate}
//         />
//         <FoodEvaluation />
//         <MealLogged />
//       </div>


//     </div>
//   );
// };










"use client";
import React, { useMemo, useState, useEffect } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import TestEvaluation from "./test-evaluation";
import Trends from "./trends";
import FoodEvaluation from "./food-evaluation";
import MealLogged from "./meal-logged";
import { useSelector } from "react-redux";
import Image from "next/image";
import NoPlans from "./no-plans";
import WeightTracker from "./weight-tracker";

// Utility function to pad single digit numbers with leading zero
function pad2(n) {
  return n.toString().padStart(2, "0");
}

// Utility function to set time to start of day (00:00:00)
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

// Utility function to add/subtract days from a date
function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

// Array of weekday abbreviations
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const ResultEvaluation = () => {
  // Get client data from Redux store
  const clientData = useSelector((state) => state.clientProfile.data);
  const isLoading = useSelector((state) => state.clientProfile.loading);

  // Get today's date at start of day for comparisons (needed for hooks)
  const today = startOfDay(new Date());
  const VISIBLE_COUNT = 16;

  // Compute plan data with safe defaults for when clientData is null/undefined
  const hasActivePlan =
    clientData?.plans_summary?.active &&
    clientData.plans_summary.active.length > 0;
  
  const hasNotStartedPlan =
    clientData?.plans_summary?.not_started &&
    clientData.plans_summary.not_started.length > 0;

  const hasCompletedPlan =
    clientData?.plans_summary?.completed &&
    clientData.plans_summary.completed.length > 0;

  // Get plan data based on priority: active > not_started > completed
  const activePlan = hasActivePlan ? clientData?.plans_summary?.active[0] : null;
  const notStartedPlan = hasNotStartedPlan ? clientData?.plans_summary?.not_started[0] : null;
  const completedPlan = hasCompletedPlan ? clientData?.plans_summary?.completed[0] : null;
  
  // Determine which plan to use (priority order - active plans take precedence)
  const currentPlan = activePlan || notStartedPlan || completedPlan;
  
  // Extract plan start and end dates from the current plan
  const planStartDate = currentPlan ? startOfDay(new Date(currentPlan.plan_start_date)) : null;
  const planEndDate = currentPlan ? startOfDay(new Date(currentPlan.plan_end_date)) : null;

  // Function to determine initial selected date (with safe defaults)
  const getInitialSelectedDate = () => {
    if (!planStartDate || !planEndDate) return today;

    // If today is before plan start, select plan start date
    if (today < planStartDate) return planStartDate;
    // If today is after plan end, select plan end date
    if (today > planEndDate) return planEndDate;

    // Default to today if within plan range
    return today;
  };

  // Function to determine initial window start for calendar (with safe defaults)
  const getInitialWindowStart = () => {
    if (!planStartDate || !planEndDate) return today;

    // If today is before plan start, start from plan start
    if (today < planStartDate) return planStartDate;
    // If today is after plan end, show the last possible window
    if (today > planEndDate) return addDays(planEndDate, 1 - VISIBLE_COUNT);

    // Try to center today in the middle of the visible window
    const middleStart = addDays(today, -Math.floor(VISIBLE_COUNT / 2));

    // Adjust if middle start is before plan start
    if (middleStart < planStartDate) return planStartDate;

    // Check if the window would extend beyond plan end
    const lastPossible = addDays(middleStart, VISIBLE_COUNT - 1);
    if (lastPossible > planEndDate) {
      return addDays(planEndDate, 1 - VISIBLE_COUNT);
    }

    return middleStart;
  };

  // =========================================================================
  // ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
  // =========================================================================
  // State for currently selected date in the calendar
  const [selectedDate, setSelectedDate] = useState(() => getInitialSelectedDate());

  // State for the starting date of the visible calendar window
  const [windowStart, setWindowStart] = useState(() => getInitialWindowStart());

  // Update windowStart and selectedDate when plan dates become available
  useEffect(() => {
    if (!planStartDate || !planEndDate) return;
    
    // Recalculate initial window start based on actual plan dates
    const newWindowStart = getInitialWindowStart();
    const newSelectedDate = getInitialSelectedDate();
    
    // Only update if they're different to avoid unnecessary re-renders
    const currentWindowStartTime = startOfDay(windowStart).getTime();
    const newWindowStartTime = startOfDay(newWindowStart).getTime();
    const currentSelectedTime = startOfDay(selectedDate).getTime();
    const newSelectedTime = startOfDay(newSelectedDate).getTime();
    
    if (currentWindowStartTime !== newWindowStartTime) {
      setWindowStart(newWindowStart);
    }
    if (currentSelectedTime !== newSelectedTime) {
      setSelectedDate(newSelectedDate);
    }
  }, [planStartDate?.getTime(), planEndDate?.getTime()]); // eslint-disable-line react-hooks/exhaustive-deps

  // Memoized array of dates for the visible calendar window
  const dates = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
      const d = startOfDay(addDays(windowStart, i));
      return {
        date: d,
        day: pad2(d.getDate()), // Padded day (01, 02, etc.)
        week: WEEK[d.getDay()], // Weekday abbreviation
      };
    });
  }, [windowStart]);

  // =========================================================================
  // LOADING STATE - Check after all hooks are called
  // =========================================================================
  if (isLoading || !clientData) {
    return (
      <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
        <div className="text-center py-10">
          <p className="text-[#535359] text-[18px]">Loading...</p>
        </div>
      </div>
    );
  }

  // Check specific plan status for conditional rendering
  const isPlanNotStarted = hasNotStartedPlan && !hasActivePlan;
  const isPlanCompleted = hasCompletedPlan && !hasActivePlan && !hasNotStartedPlan;

  // Navigation constraints - check if we can go previous/next
  const canGoPrev = planStartDate && startOfDay(windowStart).getTime() > planStartDate.getTime();
  const canGoNext = planEndDate && startOfDay(addDays(windowStart, VISIBLE_COUNT - 1)).getTime() < planEndDate.getTime();

  // Handler for previous navigation (must be defined before conditional returns)
  const handlePrevClick = () => {
    if (!canGoPrev || !planStartDate) return;
    const newWindowStart = addDays(windowStart, -VISIBLE_COUNT);
    // Ensure we don't go before plan start date
    setWindowStart(newWindowStart < planStartDate ? planStartDate : newWindowStart);
  };

  // Handler for next navigation (must be defined before conditional returns)
  const handleNextClick = () => {
    if (!canGoNext || !planEndDate) return;
    const newWindowStart = addDays(windowStart, VISIBLE_COUNT);
    const lastDateInNewWindow = addDays(newWindowStart, VISIBLE_COUNT - 1);

    // Adjust if new window would extend beyond plan end
    if (lastDateInNewWindow > planEndDate) {
      const adjustedWindowStart = addDays(planEndDate, 1 - VISIBLE_COUNT);
      setWindowStart(adjustedWindowStart);
    } else {
      setWindowStart(newWindowStart);
    }
  };

  // Utility function to format dates for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // =========================================================================
  // NO PLANS STATE - No active, not_started, or completed plans
  // =========================================================================
  if (!hasActivePlan && !hasNotStartedPlan && !hasCompletedPlan) {
    return <NoPlans />;
  }

  // =========================================================================
  // NO DATES AVAILABLE STATE - Plan exists but dates are missing/invalid
  // =========================================================================
  // if (!planStartDate || !planEndDate) {
    
    

  //   return (
  //     <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
        
  //       <div className="my-[20px] border border-[#E1E6ED]"></div>
  //       <div className="text-center py-10">
  //         <p className="text-[#535359] text-[18px]">Loading</p>
  //       </div>
  //     </div>
  //   );
  // }

  // =========================================================================
  // NOT STARTED PLAN STATE - Show "Will Start" message
  // =========================================================================
  if (isPlanNotStarted) {
    return (
      <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
        <div className="flex justify-start ml-[15px]">
          <p className="text-[#252525] text-center text-[25px] font-semibold leading-normal tracking-[-1px]">
            Result Evaluation
          </p>
        </div>
        <div className="my-[20px] border border-[#E1E6ED]"></div>
        <div className="text-center py-10">
          <div className="flex flex-col items-center justify-center">
            {/* Main message */}
            <p className="text-[#535359] text-[18px] font-semibold mb-2">
              Plan Will Start On
            </p>
            {/* Formatted start date */}
            <p className="text-[#308BF9] text-[20px] font-bold">
              {formatDate(currentPlan.plan_start_date)}
            </p>
            {/* Additional information */}
            <p className="text-[#535359] text-[14px] mt-4">
              Your result evaluation will be available once your plan begins.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // COMPLETED PLAN STATE - Show completion message with historical data access
  // =========================================================================
  if (isPlanCompleted) {
    return (
      <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
        <div className="flex justify-start ml-[15px]">
          <p className="text-[#252525] text-center text-[25px] font-semibold leading-normal tracking-[-1px]">
            Result Evaluation
          </p>
        </div>
        <div className="my-[20px] border border-[#E1E6ED]"></div>
        
        {/* Completion Message Section */}
        <div className="text-center py-10">
          <div className="flex flex-col items-center justify-center">
            {/* Main completion message */}
            <p className="text-[#535359] text-[18px] font-semibold mb-2">
              Plan Has Been Completed
            </p>
            {/* Date range display */}
            <div className="flex items-center gap-2 mb-4">
              <p className="text-[#308BF9] text-[16px] font-bold">
                {formatDate(currentPlan.plan_start_date)}
              </p>
              <span className="text-[#535359]">to</span>
              <p className="text-[#308BF9] text-[16px] font-bold">
                {formatDate(currentPlan.plan_end_date)}
              </p>
            </div>
            {/* Additional information */}
            <p className="text-[#535359] text-[14px] mt-2">
              This plan has been completed. You can view your historical data below.
            </p>
          </div>
        </div>

        {/* Historical Data Section - Allow access to completed plan data */}
        <div className="flex flex-col gap-[20px]">
          <div className="ml-4">
            <span className="text-[#535359] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
              Select a date from completed plan
            </span>
          </div>

          {/* ----------------- DATE ROW FOR COMPLETED PLAN ----------------- */}
          <div className="flex items-center justify-between">
            {/* Previous arrow */}
            <IoChevronBackSharp
              className={[
                "w-[52px] h-[52px] py-[13px] pl-2.5",
                canGoPrev ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
              ].join(" ")}
              onClick={handlePrevClick}
              title={canGoPrev ? "Previous" : "Beginning of plan period"}
              aria-disabled={!canGoPrev}
            />

            {/* Date boxes */}
            {dates.map((item, idx) => {
              const itemDate = startOfDay(item.date);
              const isSelected = itemDate.getTime() === startOfDay(selectedDate).getTime();
              const isInPlanRange = itemDate >= planStartDate && itemDate <= planEndDate;

              // Only show dates within the completed plan range
              if (!isInPlanRange) return null;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedDate(item.date)}
                  title={`Select ${item.date.toDateString()}`}
                  className={[
                    "flex flex-col px-[7px] py-2 gap-1 rounded-[12px] select-none cursor-pointer",
                    isSelected ? "bg-[#308BF9] text-white" : "text-[#535359]",
                  ].join(" ")}
                >
                  <span className="text-center text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
                    {item.day}
                  </span>
                  <span className="text-center text-[10px] font-normal leading-normal tracking-[-0.2px]">
                    {item.week}
                  </span>
                </div>
              );
            })}

            {/* Next arrow */}
            <IoIosArrowForward
              className={[
                "w-[52px] h-[52px] py-[13px] pl-2.5",
                canGoNext ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
              ].join(" ")}
              onClick={handleNextClick}
              title={canGoNext ? "Next" : "End of plan period"}
              aria-disabled={!canGoNext}
            />
          </div>

          <div className="my-[20px] border border-[#E1E6ED]"></div>
          {/* Test evaluation component */}
          <TestEvaluation />
        </div>

        {/* Additional evaluation components for historical data */}
        <div className="flex flex-col gap-[50px]">
          <Trends selectedDate={selectedDate} />
          <FoodEvaluation />
          <MealLogged />
        </div>
      </div>
    );
  }

  // =========================================================================
  // ACTIVE PLAN STATE - Normal functionality for currently active plans
  // =========================================================================

  // Handler for date selection
  const handleDateClick = (date) => {
    // Only allow selection of dates within plan range
    if (date < planStartDate || date > planEndDate) return;
    setSelectedDate(startOfDay(date));
  };

  // Filter dates to only show those within the plan range
  const visibleDates = dates.filter((item) => {
    const itemDate = startOfDay(item.date);
    return itemDate >= planStartDate && itemDate <= planEndDate;
  });

  return (
    <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
      {/* Header Section */}
      <div className="flex justify-start ml-[15px]">
        <p className="text-[#252525] text-center text-[25px] font-semibold leading-normal tracking-[-1px]">
          Result Evaluation
        </p>
      </div>

      <div className="my-[20px] border border-[#E1E6ED]"></div>

      {/* Date Selection Section */}
      <div className="flex flex-col gap-[20px]">
        <div className="ml-4">
          <span className="text-[#535359] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
            Select a date
          </span>
        </div>

        {/* ----------------- DATE ROW ----------------- */}
        <div className="flex items-center justify-between">
          {/* Previous arrow */}
          <IoChevronBackSharp
            className={[
              "w-[52px] h-[52px] py-[13px] pl-2.5",
              canGoPrev ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            ].join(" ")}
            onClick={handlePrevClick}
            title={canGoPrev ? "Previous" : "Beginning of plan period"}
            aria-disabled={!canGoPrev}
          />

          {/* Date boxes */}
          {visibleDates.map((item, idx) => {
            const isToday = startOfDay(item.date).getTime() === today.getTime();
            const isSelected = startOfDay(item.date).getTime() === startOfDay(selectedDate).getTime();
            const isFutureDate = item.date > today;
            const isSelectable = !isFutureDate && item.date >= planStartDate && item.date <= planEndDate;

            return (
              <div
                key={idx}
                onClick={() => isSelectable && setSelectedDate(item.date)}
                title={
                  isFutureDate
                    ? "Future dates are not selectable"
                    : `Select ${item.date.toDateString()}`
                }
                className={[
                  "flex flex-col px-[7px] py-2 gap-1 rounded-[12px] select-none",
                  isSelectable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
                  isSelected ? "bg-[#308BF9] text-white" : "text-[#535359]",
                ].join(" ")}
              >
                {/* Day number */}
                <span className="text-center text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
                  {item.day}
                </span>
                {/* Weekday abbreviation */}
                <span className="text-center text-[10px] font-normal leading-normal tracking-[-0.2px]">
                  {item.week}
                </span>

                {/* Today indicator (blue dot) */}
                {isToday && !isSelected && (
                  <span className="mx-auto mt-[2px] w-[4px] h-[4px] rounded-full bg-[#308BF9]" />
                )}
              </div>
            );
          })}

          {/* Next arrow */}
          <IoIosArrowForward
            className={[
              "w-[52px] h-[52px] py-[13px] pl-2.5",
              canGoNext ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            ].join(" ")}
            onClick={handleNextClick}
            title={canGoNext ? "Next" : "End of plan period"}
            aria-disabled={!canGoNext}
          />
        </div>

        <div className="my-[20px] border border-[#E1E6ED]"></div>
        {/* Test evaluation component */}
        <TestEvaluation />
      </div>

      {/* Additional evaluation components */}
      <div className="flex flex-col gap-[50px]">
        <Trends selectedDate={selectedDate} />
        <WeightTracker/>
        <FoodEvaluation />
        <MealLogged />
      </div>
    </div>
  );
};