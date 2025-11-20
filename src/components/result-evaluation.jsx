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
import React, { useMemo, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import TestEvaluation from "./test-evaluation";
import Trends from "./trends";
import FoodEvaluation from "./food-evaluation";
import MealLogged from "./meal-logged";
import { useSelector } from "react-redux";
import Image from "next/image";
import NoPlans from "./no-plans";

function pad2(n) {
  return n.toString().padStart(2, "0");
}
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const ResultEvaluation = () => {
  const clientData = useSelector((state) => state.clientProfile.data);
  const isLoading = useSelector((state) => state.clientProfile.loading);

  const hasActivePlan =
    clientData?.plans_summary?.active &&
    clientData.plans_summary.active.length > 0;

  // Get plan dates from active plan
  const activePlan = hasActivePlan ? clientData.plans_summary.active[0] : null;
  const planStartDate = activePlan ? startOfDay(new Date(activePlan.plan_start_date)) : null;
  const planEndDate = activePlan ? startOfDay(new Date(activePlan.plan_end_date)) : null;

  // today + selected state
  const today = startOfDay(new Date());

  // --------------------------------------------------------
  // FIX: Highlight TODAY always when inside plan range
  // --------------------------------------------------------
  const getInitialSelectedDate = () => {
    if (!planStartDate || !planEndDate) return today;

    if (today < planStartDate) return planStartDate;
    if (today > planEndDate) return planEndDate;

    return today; // << always highlight today
  };

  const [selectedDate, setSelectedDate] = useState(() => getInitialSelectedDate());

  // calendar strip window (16 boxes)
  const VISIBLE_COUNT = 16;

  // --------------------------------------------------------
  // FIX: Window should start around TODAY instead of plan start
  // --------------------------------------------------------
  const getInitialWindowStart = () => {
    if (!planStartDate || !planEndDate) return today;

    if (today < planStartDate) return planStartDate;
    if (today > planEndDate) return addDays(planEndDate, 1 - VISIBLE_COUNT);

    const middleStart = addDays(today, -Math.floor(VISIBLE_COUNT / 2));

    if (middleStart < planStartDate) return planStartDate;

    const lastPossible = addDays(middleStart, VISIBLE_COUNT - 1);
    if (lastPossible > planEndDate) {
      return addDays(planEndDate, 1 - VISIBLE_COUNT);
    }

    return middleStart;
  };

  const [windowStart, setWindowStart] = useState(() => getInitialWindowStart());

  // Navigation constraints based on plan dates
  const canGoPrev = planStartDate && startOfDay(windowStart).getTime() > planStartDate.getTime();
  const canGoNext = planEndDate && startOfDay(addDays(windowStart, VISIBLE_COUNT - 1)).getTime() < planEndDate.getTime();

  const dates = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
      const d = startOfDay(addDays(windowStart, i));
      return {
        date: d,
        day: pad2(d.getDate()),
        week: WEEK[d.getDay()],
      };
    });
  }, [windowStart]);

  // Loading
  if (isLoading) {
    return (
      <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
        <div className="flex justify-start ml-[15px]">
          <p className="text-[#252525] text-center text-[25px] font-semibold leading-normal tracking-[-1px]">
            Result Evaluation
          </p>
        </div>
        <div className="my-[20px] border border-[#E1E6ED]"></div>
        <div className="text-center py-10">
          <p className="text-[#535359] text-[18px]">Loading...</p>
        </div>
      </div>
    );
  }

  // No active plan
  if (!hasActivePlan) {
    return <NoPlans />;
  }

  // If no dates
  if (!planStartDate || !planEndDate) {
    return (
      <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
        <div className="flex justify-start ml-[15px]">
          <p className="text-[#252525] text-center text-[25px] font-semibold leading-normal tracking-[-1px]">
            Result Evaluation
          </p>
        </div>
        <div className="my-[20px] border border-[#E1E6ED]"></div>
        <div className="text-center py-10">
          <p className="text-[#535359] text-[18px]">Plan dates are not available</p>
        </div>
      </div>
    );
  }

  const handleDateClick = (date) => {
    if (date < planStartDate || date > planEndDate) return;
    setSelectedDate(startOfDay(date));
  };

  const handlePrevClick = () => {
    if (!canGoPrev) return;
    const newWindowStart = addDays(windowStart, -VISIBLE_COUNT);
    setWindowStart(newWindowStart < planStartDate ? planStartDate : newWindowStart);
  };

  const handleNextClick = () => {
    if (!canGoNext) return;
    const newWindowStart = addDays(windowStart, VISIBLE_COUNT);
    const lastDateInNewWindow = addDays(newWindowStart, VISIBLE_COUNT - 1);

    if (lastDateInNewWindow > planEndDate) {
      const adjustedWindowStart = addDays(planEndDate, 1 - VISIBLE_COUNT);
      setWindowStart(adjustedWindowStart);
    } else {
      setWindowStart(newWindowStart);
    }
  };

  const visibleDates = dates.filter((item) => {
    const itemDate = startOfDay(item.date);
    return itemDate >= planStartDate && itemDate <= planEndDate;
  });

  return (
    <div className="w-full bg-white px-[15px] py-[30px] rounded-[15px]">
      <div className="flex justify-start ml-[15px]">
        <p className="text-[#252525] text-center text-[25px] font-semibold leading-normal tracking-[-1px]">
          Result Evaluation
        </p>
      </div>

      <div className="my-[20px] border border-[#E1E6ED]"></div>

      <div className="flex flex-col gap-[20px]">
        <div className="ml-4">
          <span className="text-[#535359] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
            Select a date
          </span>
        </div>

        {/* ----------------- DATE ROW ----------------- */}
        <div className="flex items-center justify-between">
          <IoChevronBackSharp
            className={[
              "w-[52px] h-[52px] py-[13px] pl-2.5",
              canGoPrev ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            ].join(" ")}
            onClick={handlePrevClick}
            title={canGoPrev ? "Previous" : "Beginning of plan period"}
            aria-disabled={!canGoPrev}
          />

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
                <span className="text-center text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
                  {item.day}
                </span>
                <span className="text-center text-[10px] font-normal leading-normal tracking-[-0.2px]">
                  {item.week}
                </span>

                {/* {isToday && !isSelected && (
                  <span className="mx-auto mt-[2px] w-[4px] h-[4px] rounded-full bg-[#308BF9]" />
                )} */}

                {/* Show plan boundary indicators */}
                {/* {startOfDay(item.date).getTime() === planStartDate.getTime() && !isSelected && (
                  <span className="mx-auto mt-[2px] w-[4px] h-[4px] rounded-full bg-green-500" title="Plan start" />
                )} */}

                {/* {startOfDay(item.date).getTime() === planEndDate.getTime() && !isSelected && (
                  <span className="mx-auto mt-[2px] w-[4px] h-[4px] rounded-full bg-red-500" title="Plan end" />
                )} */}

                {/* Today indicator */}
                {isToday && !isSelected && (
                  <span className="mx-auto mt-[2px] w-[4px] h-[4px] rounded-full bg-[#308BF9]" />
                )}
              </div>
            );
          })}

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
        <TestEvaluation />
      </div>

      <div className="flex flex-col gap-[50px]">
        <Trends selectedDate={selectedDate} />
        <FoodEvaluation />
        <MealLogged />
      </div>
    </div>
  );
};
