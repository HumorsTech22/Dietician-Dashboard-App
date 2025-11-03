
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io";
import ClientRisk from "./client-risk";
export default function TestMonitor() {
    return (
        <>
            <div className="border border-[#E1E6ED] rounded-[10px] px-[15px] pt-[30px]">
                <div className="flex justify-between pb-[23px] border-b border-[#E1E6ED]">
                    <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">Test Analytics</span>

                    <div className="flex gap-5">
                        <span className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]"></span>
                        <Image
                            src="/icons/hugeicons_calendar-03.svg"
                            alt="hugeicons_calendar-03.svg"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>

                <div className=" flex flex-col gap-[18px]">
                    <span className="pl-3.5 text-[#252525] text-[15px] font-semibold leading-[110%">Tests Tracking</span>

                    <div className="flex gap-5">
                        <div className="flex flex-col gap-10 bg-white border border-[#E1E6ED] rounded-[10px] pt-5 pl-5 pb-8 pr-[238px]">
                            <div className="flex gap-[5px]">

                                <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px] whitespace-nowrap">
                                    Client Tracked
                                </span>
                            </div>
                            <span className="text-[#252525] text-[40px] font-bold leading-normal tracking-[-0.8px]">40</span>
                        </div>

                        <div className="flex flex-col gap-10 bg-[#F5F7FA] border border-[#E1E6ED] rounded-[10px] pt-5 pl-5 pb-8 pr-[238px]">
                            <div className="flex gap-[119px]">
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



                <div className=" flex flex-col gap-[26px]">
                    <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Tests Results</span>
                    <ClientRisk />
                </div>
            </div>
        </>
    )
}