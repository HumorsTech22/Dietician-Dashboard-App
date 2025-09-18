"use client"
import { GoPlus } from "react-icons/go";

export default function NoPlans() {
    return (
        <>
            <p className="text-black"></p>
            <div className="border-[4px] border-dotted border-[#E1E6ED] rounded-[15px] px-[408px] py-[102px]">
                <div className="flex flex-col items-center gap-[30px]">
                    <span className="text-[#738298] text-[25px] font-semibold leading-[110%] tracking-[-1px]">No Active plan</span>
                    <div className='flex gap-[15px] px-[18px] py-[9px] bg-[#308BF9] rounded-[5px]'>
                        <GoPlus className='text-white w-[15px] h-[15px]' />
                        <span className='text-white text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>Create New Plan</span>
                    </div>
                </div>
            </div>
        </>
    )
};