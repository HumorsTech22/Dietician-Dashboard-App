"use client"
import { GoPlus } from "react-icons/go";
import Image from "next/image";

export default function NoPlans() {
    return (
       <>
      <div className="flex flex-col">
        {/* Full-width box */}
        <div className="w-full border-[4px] border-dotted border-[#E1E6ED] rounded-[15px] py-[102px]">
          <div className="flex flex-col items-center gap-[30px]">
            <span className="text-[#738298] text-[25px] font-semibold leading-[110%] tracking-[-1px]">
              No Active plan
            </span>
            <div className="flex gap-[15px] px-[18px] py-[9px] bg-[#308BF9] rounded-[5px]">
              <GoPlus className="text-white w-[15px] h-[15px]" />
              <span className="text-white text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                Create New Plan
              </span>
            </div>
          </div>
        </div>

        {/* Plan History */}
        <div className="max-w-[332px] mt-[30px] bg-white rounded-[15px] px-[22px] py-10">
          <div className="ml-5">
            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
              Plan History(2)
            </span>
          </div>

          <div className="my-[22px] border border-[#E1E6ED]" />

          <div className="flex flex-col gap-[30px]">
            {/* Finished Plan */}
            <div className="flex flex-col">
              <div className="flex gap-[25px] justify-between">
                <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
                  1-Month Plan
                </span>
                <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                  05 July-05 Aug
                </span>
              </div>

              <div className="flex justify-between">
                <div>
                  <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px] capitalize">
                    Updated 05 Jul, 12:30pm
                  </span>
                </div>
                <div className="flex gap-[3px] items-center">
                  <Image
                    src="/icons/verified.svg"
                    alt="verified"
                    width={12}
                    height={12}
                  />
                  <span className="text-[#3FAF58] text-[12px] font-normal leading-normal tracking-[-0.24px]">
                    Finished
                  </span>
                </div>
              </div>
            </div>

            {/* Cancelled Plan */}
            <div className="flex flex-col">
              <div className="flex gap-[25px] justify-between">
                <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
                  1-Month Plan
                </span>
                <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                  05 July-05 Aug
                </span>
              </div>

              <div className="flex justify-between">
                <div>
                  <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px] capitalize">
                    Updated 05 Jul, 12:30pm
                  </span>
                </div>
                <div className="flex gap-[3px] items-center">
                  <Image
                    src="/icons/close icon.svg"
                    alt="close icon"
                    width={12}
                    height={12}
                  />
                  <span className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]">
                    Cancelled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
};