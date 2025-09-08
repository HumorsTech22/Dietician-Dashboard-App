"use client"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io";

export default function Search() {
    return (
        <>
            <div className="flex gap-[22px] mt-[46px] mb-[32px]">
                <div className="flex pr-[271px] gap-2.5 pl-2.5 py-[5px] items-center border border-[#D9D9D9] rounded-[10px] bg-[#FFFFFF]">
                    <Image
                        src="/icons/hugeicons_search-02.svg"
                        alt="hugeicons_search"
                        width="20"
                        height="20"
                    />
                    <p className="text-[#A1A1A1] font-normal text-[12px] leading-[110%] tracking-[-0.24px]">Search....</p>
                </div>

                <div className="w-fit flex items-center">
                    <div className=" rounded-l-[10px] border border-[#D9D9D9]  pl-4  py-2 pr-2.5 bg-[#F0F0F0] text-center">
                        <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">Sort By</p>
                    </div>
                    <div className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4  py-2 pr-2.5 bg-white">
                        <p className="cursor-pointer text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">Recently Added</p>
                        <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" />

                    </div>
                </div>
            </div>
        </>
    )
};