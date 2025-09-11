"use client"
import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import TestEvaluation from "./test-evaluation";
import Trends from "./trends";

export const ResultEvaluation = () => {
    const dates = [
        { day: "06", week: "Tue" },
        { day: "07", week: "Wed" },
        { day: "08", week: "Thu" },
        { day: "09", week: "Fri" },
        { day: "10", week: "Sat" },
        { day: "11", week: "Sun" },
        { day: "12", week: "Mon" },
        { day: "13", week: "Tue" },
        { day: "14", week: "Wed" },
        { day: "15", week: "Thu" },
        { day: "16", week: "Fri" },
        { day: "17", week: "Sat" },
        { day: "18", week: "Sun" },
        { day: "19", week: "Mon" },
        { day: "20", week: "Tue" },
        { day: "21", week: "Wed" },
    ];

    // Get today’s date (dd format)
    const today = new Date();
    const todayDay = today.getDate().toString().padStart(2, "0"); // "10"

    return (
        <>
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
                        <IoChevronBackSharp className="w-[52px] h-[52px] cursor-pointer py-[13px] pl-2.5" />

                        {dates.map((item, index) => {
                            // condition checks
                            const isToday = item.day === todayDay;
                            const isFuture = parseInt(item.day) > parseInt(todayDay);

                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col px-[7px] py-2 gap-1 rounded-[12px] ${isToday
                                        ? "bg-[#308BF9]"
                                        : isFuture
                                            ? "text-[#A1A1A1]"
                                            : ""
                                        }`}
                                >
                                    <span
                                        className={`text-center text-[15px] font-semibold leading-[126%] tracking-[-0.3px] ${isToday
                                            ? "text-white"
                                            : isFuture
                                                ? "text-[#A1A1A1]"
                                                : "text-[#535359]"
                                            }`}
                                    >
                                        {item.day}
                                    </span>
                                    <span
                                        className={`text-center text-[10px] font-normal leading-normal tracking-[-0.2px] ${isToday
                                            ? "text-white"
                                            : isFuture
                                                ? "text-[#A1A1A1]"
                                                : "text-[#535359]"
                                            }`}
                                    >
                                        {item.week}
                                    </span>
                                </div>
                            );
                        })}

                        <IoIosArrowForward className="w-[52px] h-[52px] cursor-pointer py-[13px] pl-2.5" />
                    </div>

                    <div className="my-[20px] border border-[#E1E6ED]"></div>
                </div>


<div className="flex justify-start gap-[17px]">
    
              <TestEvaluation/>
           

            
              <Trends/>
         
              </div>

            </div>
        </>
    );
};
