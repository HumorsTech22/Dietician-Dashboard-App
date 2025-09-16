
"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserPlus } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

export const UserProfile = () => {
  const pathname = usePathname();
  const isClientPage = pathname?.startsWith("/client") || pathname?.startsWith("/clients");
  const isMessagesPage = pathname?.startsWith("/messages");



  return (
    <div className={`flex w-full flex-wrap items-center justify-between gap-10 ${isClientPage || isMessagesPage ? "" : "mt-[130px] mb-[102px]"
      }`}>
      {/* LEFT: Greeting OR Search/Sort */}
      <div className="flex-1">
        {isClientPage ? (
          <div className="flex gap-[22px] mt-[46px] mb-[32px]">
            {/* <div className="flex pr-[271px] gap-2.5 pl-2.5 py-[5px] items-center border border-[#D9D9D9] rounded-[10px] bg-[#FFFFFF]">
              <Image
                src="/icons/hugeicons_search-02.svg"
                alt="hugeicons_search"
                width={20}
                height={20}
              />
              <p className="text-[#A1A1A1] font-normal text-[12px] leading-[110%] tracking-[-0.24px]">
                Search....
              </p>
            </div> */}

            <div className="flex gap-2.5 pl-2.5 pr-2.5 py-[5px] items-center border border-[#D9D9D9] rounded-[10px] bg-[#FFFFFF] w-[300px]">
              <Image
                src="/icons/hugeicons_search-02.svg"
                alt="hugeicons_search"
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder="Search...."
                className="flex-1 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px] outline-none bg-transparent"
              />
            </div>


            {/* Rounded search bar: hidden on /client */}
            {!isClientPage && (
              // <div className="flex pr-[227px] gap-[15px] pl-[14px] py-[10px] items-center border border-[#D9D9D9] rounded-3xl bg-[#F0F0F0]">
              //   <Image
              //     src="/icons/hugeicons_search-02.svg"
              //     alt="hugeicons_search"
              //     width={20}
              //     height={20}
              //   />
              //   <p className="text-[#A1A1A1] font-normal text-[12px] leading-[110%] tracking-[-0.24px]">
              //     Search....
              //   </p>
              // </div>

              <div className="flex gap-[15px] pl-[14px] pr-[14px] py-[10px] items-center border border-[#D9D9D9] rounded-3xl bg-[#F0F0F0] w-[300px]">
                <Image
                  src="/icons/hugeicons_search-02.svg"
                  alt="hugeicons_search"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Search...."
                  className="flex-1 bg-transparent outline-none text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]"
                />
              </div>

            )}

            <div className="w-fit flex items-center">
              <div className="rounded-l-[10px] border border-[#D9D9D9] pl-4 py-2 pr-2.5 bg-[#F0F0F0] text-center">
                <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
                  Sort By
                </p>
              </div>
              <div className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4 py-2 pr-2.5 bg-white">
                <p className="cursor-pointer text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
                  Recently Added
                </p>
                <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" />
              </div>
            </div>
          </div>
        ) : isMessagesPage ? (
          // <div className="flex gap-[22px] mt-[46px] mb-[12px] mx-[10px]">
          //   <div className="flex pr-[227px] gap-[15px] pl-[14px] py-[10px] items-center border border-[#D9D9D9] rounded-3xl bg-[#F0F0F0]">
          //     <Image
          //       src="/icons/hugeicons_search-02.svg"
          //       alt="hugeicons_search"
          //       width={20}
          //       height={20}
          //     />
          //     <p className="text-[#A1A1A1] font-normal text-[12px] leading-[110%] tracking-[-0.24px]">
          //       Search....
          //     </p>
          //   </div>
          // </div>

          <div className="flex gap-[22px] mt-[46px] mb-[12px] mx-[10px]">
            <div className="flex gap-[15px] pl-[14px] pr-[14px] py-[10px] items-center border border-[#D9D9D9] rounded-3xl bg-[#F0F0F0] w-[300px]">
              <Image
                src="/icons/hugeicons_search-02.svg"
                alt="hugeicons_search"
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder="Search...."
                className="flex-1 bg-transparent outline-none text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]"
              />
            </div>
          </div>

        ) : (
          <div className="flex flex-col gap-[15px]">
            <p className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
              Monday, 21 July
            </p>
            <p className="text-[#252525] text-[34px] font-normal leading-none tracking-[-2.04px]">
              Hello, Dt. Manoranjan
            </p>
          </div>
        )}
      </div>

      {/* RIGHT: Actions (hide on messages page) */}
      {!isMessagesPage && (
        <div className="flex flex-wrap gap-[15px] shrink-0">
          <div className="flex gap-1.5 px-[20px] py-[15px] items-center bg-[#308BF9] rounded-[15px] cursor-pointer">
            <UserPlus size={20} className="text-white" />
            <p className="text-[12px] leading-[100%] font-semibold text-white space-x-0">
              Add Client
            </p>
          </div>

          <div className="flex gap-1.5 px-5 py-[15px] items-center bg-white rounded-[15px] cursor-alias">
            <Image
              src="/icons/hugeicons_file-export.svg"
              alt="add-icons"
              width={20}
              height={20}
            />
            <p className="text-[12px] font-semibold text-black space-x-0">
              Export Data
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
