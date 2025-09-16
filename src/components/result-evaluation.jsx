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

  // calendar strip window (DON’T change design — still 16 boxes)
  const VISIBLE_COUNT = 16;
  const [windowStart, setWindowStart] = useState(
    // start the strip so that today sits inside your initial range look/feel
    addDays(today, - (VISIBLE_COUNT / 2))
  );

  // build dates for the strip
  const dates = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
      const d = startOfDay(addDays(windowStart, i));
      return {
        date: d,
        day: pad2(d.getDate()),          // "06"
        week: WEEK[d.getDay()],          // "Tue"
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

        <div className="flex justify-between">
          <IoChevronBackSharp
            className="w-[52px] h-[52px] cursor-pointer py-[13px] pl-2.5"
            onClick={() => setWindowStart(addDays(windowStart, -VISIBLE_COUNT))}
            title="Previous"
          />

          {dates.map((item, idx) => {
            const isToday = startOfDay(item.date).getTime() === today.getTime();
            const isFuture = startOfDay(item.date).getTime() > today.getTime();
            const isSelected =
              startOfDay(item.date).getTime() === startOfDay(selectedDate).getTime();

            return (
              <div
                key={idx}
                onClick={() => {
                  setSelectedDate(item.date);
                  console.log(
                    `Selected -> Date: ${item.date.toISOString().slice(0,10)}, Day: ${item.day}, Week: ${item.week}`
                  );
                }}
                className={`flex flex-col px-[7px] py-2 gap-1 cursor-pointer rounded-[12px] ${
                  isSelected
                    ? "bg-[#308BF9] text-white"
                    : isFuture
                    ? "text-[#A1A1A1]"
                    : "text-[#535359]"
                }`}
              >
                <span className="text-center text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
                  {item.day}
                </span>
                <span className="text-center text-[10px] font-normal leading-normal tracking-[-0.2px]">
                  {item.week}
                </span>
                {/* optional tiny dot for today (keeps design intact) */}
                {isToday && !isSelected && (
                  <span className="mx-auto mt-[2px] w-[4px] h-[4px] rounded-full bg-[#308BF9]" />
                )}
              </div>
            );
          })}

          <IoIosArrowForward
            className="w-[52px] h-[52px] cursor-pointer py-[13px] pl-2.5"
            onClick={() => setWindowStart(addDays(windowStart, VISIBLE_COUNT))}
            title="Next"
          />
        </div>

        <div className="my-[20px] border border-[#E1E6ED]"></div>
      </div>

      <div className="flex justify-start gap-[17px]">
        <TestEvaluation />
        <Trends />
      </div>
      <FoodEvaluation/>
      <MealLogged/>
    </div>
  );
};
