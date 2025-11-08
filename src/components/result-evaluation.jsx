"use client";
import React, { useMemo, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import TestEvaluation from "./test-evaluation";
import Trends from "./trends";
import FoodEvaluation from "./food-evaluation";
import MealLogged from "./meal-logged";

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
  // today + selected state
  const today = startOfDay(new Date());
  const [selectedDate, setSelectedDate] = useState(today);

  // config: allow only 7 days beyond today
  const MAX_FUTURE_DAYS = 7;
  const maxDate = startOfDay(addDays(today, MAX_FUTURE_DAYS));

  // calendar strip window (16 boxes)
  const VISIBLE_COUNT = 16;

  // initial window puts today inside range; this already caps the right edge at today+7
  const [windowStart, setWindowStart] = useState(
    addDays(today, -(VISIBLE_COUNT / 2))
  );

  // the latest allowed windowStart such that the last box (index VISIBLE_COUNT-1) is <= maxDate
  const maxWindowStart = startOfDay(
    addDays(maxDate, 1 - VISIBLE_COUNT)
  );

  const canGoNext =
    startOfDay(windowStart).getTime() < maxWindowStart.getTime();

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

        <div className="flex items-center justify-between">
         
          <IoChevronBackSharp
            className="w-[52px] h-[52px] cursor-pointer py-[13px] pl-2.5"
            onClick={() => setWindowStart(addDays(windowStart, -VISIBLE_COUNT))}
            title="Previous"
          />

          {dates.map((item, idx) => {
            const isToday =
              startOfDay(item.date).getTime() === today.getTime();
            const isFuture =
              startOfDay(item.date).getTime() > today.getTime();
            const isSelected =
              startOfDay(item.date).getTime() ===
              startOfDay(selectedDate).getTime();
            const isBeyondMax =
              startOfDay(item.date).getTime() > maxDate.getTime();

            // disabled if beyond +7
            const disabled = isBeyondMax;

            return (
              <div
                key={idx}
                onClick={() => {
                  if (disabled) return; // block selection
                  setSelectedDate(item.date);
                 
                }}
                title={
                  disabled ? "Selection disabled (beyond +7 days)" : undefined
                }
                className={[
                  "flex flex-col px-[7px] py-2 gap-1 rounded-[12px] select-none",
                  disabled ? "opacity-40 pointer-events-none" : "cursor-pointer",
                  isSelected
                    ? "bg-[#308BF9] text-white"
                    : isFuture
                      ? "text-[#A1A1A1]"
                      : "text-[#535359]",
                ].join(" ")}
              >
                <span className="text-center text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
                  {item.day}
                </span>
                <span className="text-center text-[10px] font-normal leading-normal tracking-[-0.2px]">
                  {item.week}
                </span>
               
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
            onClick={() => {
              if (!canGoNext) return;
              setWindowStart(addDays(windowStart, VISIBLE_COUNT));
            }}
            title={canGoNext ? "Next" : "No further future dates"}
            aria-disabled={!canGoNext}
          />
        </div>

        <div className="my-[20px] border border-[#E1E6ED]"></div>
      </div> 

      <div className="flex flex-col gap-[50px] ">
     <TestEvaluation /> 
       <Trends 
        selectedDate={selectedDate}
       /> 
    <FoodEvaluation /> 
      <MealLogged /> 
      </div>


    </div>
  );
};
