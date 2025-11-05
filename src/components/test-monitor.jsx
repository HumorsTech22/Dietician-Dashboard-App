"use client"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io";
import ClientRisk from "./client-risk";
import DashboardGraph from "./dashboard-graph";
import { useState, useRef, useEffect } from 'react';

export default function TestMonitor() {
    const [selectedDate, setSelectedDate] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const datePickerRef = useRef(null);
    const calendarRef = useRef(null);

    // Format date as "Today, 12 April 2025"
    const formatDate = (dateString) => {
        if (!dateString) {
            const today = new Date();
            const day = today.getDate();
            const month = today.toLocaleString('en-US', { month: 'long' });
            const year = today.getFullYear();
            return `Today, ${day} ${month} ${year}`;
        }
        
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    // Open calendar picker
    const openCalendar = () => {
        if (datePickerRef.current) {
            if (datePickerRef.current.showPicker) {
                datePickerRef.current.showPicker();
            } else {
                datePickerRef.current.click();
            }
        }
    };

    // Handle date selection
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setShowCalendar(false);
    };

    // Close calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div className="border border-[#E1E6ED] rounded-[10px] px-[15px] pt-[30px]">
                <div className="flex justify-between pb-[23px] border-b border-[#E1E6ED]">
                    <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">Test Analytics</span>

                    <div className="flex gap-5 items-center relative" ref={calendarRef}>
                        <span className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]">
                            {formatDate(selectedDate)}
                        </span>
                        <div 
                            className="cursor-pointer"
                            onClick={openCalendar}
                        >
                            <Image
                                src="/icons/hugeicons_calendar-03.svg"
                                alt="hugeicons_calendar-03.svg"
                                width={24}
                                height={24}
                            />
                        </div>
                        
                        {/* Hidden native date input */}
                        <input
                            ref={datePickerRef}
                            type="date"
                            className="sr-only"
                            onChange={handleDateChange}
                        />
                    </div>
                </div>

                <div className=" flex flex-col gap-[18px]">
                    <span className="pl-3.5 text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] mt-[30px]">Tests Tracking</span>

                    <div className="flex gap-5">
                        <div className="flex flex-col gap-10 bg-white border border-[#E1E6ED] rounded-[10px] pt-5 pl-5 pb-8 pr-[238px]">
                            <div className="flex gap-[5px]">

                                <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px] whitespace-nowrap">
                                    Client Tracked
                                </span>
                            </div>
                            <span className="text-[#252525] text-[40px] font-bold leading-normal tracking-[-0.8px]">40</span>
                        </div>

                        <div className="flex flex-col gap-10 bg-[#F5F7FA] border border-[#E1E6ED] rounded-[10px] pt-5 pl-5 pb-8 ">
                            <div className="w-[333px] flex gap-[69px]">
                                <div className="flex gap-[5px]">

                                    <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px] whitespace-nowrap">
                                        Client Not tracked
                                    </span>
                                </div>
                                <div className="flex gap-2.5">
                                    <span className="text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px] whitespace-nowrap">
                                        Send Reminder
                                    </span>
                                    <IoIosArrowForward className="text-[#308BF9]" />
                                </div>
                            </div>
                            <span className="text-[#252525] text-[40px] font-bold leading-normal tracking-[-0.8px]">2000</span>
                        </div>
                    </div>
                </div>


                <div className="mt-[34px]">
                    <DashboardGraph />
                </div>


                <div className=" flex flex-col gap-[26px]">
                    <span className="mt-10 ml-3.5 text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Tests Results</span>
                    <ClientRisk hideDietGoal={true} />
                </div>
            </div>
        </>
    )
}