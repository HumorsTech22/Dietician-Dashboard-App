"use client"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Graph from "./graph";

export default function Trends() {
  const [active, setActive] = useState("Gut Fermentation")

  const labels = ["05 Aug", "06 Aug", "07 Aug", "07 Aug", "07 Aug", "07 Aug", "07 Aug"];
  const values = [30, 42, 55, 48, 60, 54, 62];

  const tabs = [
    { label: "Gut Fermentation", color: "#DA5747" },
    { label: "Glucose -Vs- Fat", color: "#3FAF58" },
    { label: "Liver Heptic", color: "#3FAF58" },
  ]

  return (
    <div className="flex-1 min-w-0  rounded-[15px]">
      <div className="mt-[15px] ml-[13px]">
        <span className=" text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
          Trends
        </span>
      </div>

      <div>
        <div className="flex w-full gap-6 mt-[18px]">
          {tabs.map(tab => {
            const isActive = active === tab.label
            return (
              <button
                key={tab.label}
                onClick={() => setActive(tab.label)}
                className={`flex gap-2.5 items-center pb-[13px] pl-[5px] pr-[25px] cursor-pointer
                  ${isActive ? "border-b-2 border-[#308BF9]" : ""}
                `}
              >
                <span
                  className={`text-[12px] font-semibold leading-[110%] tracking-[-0.24px] 
                    ${isActive ? "text-[#308BF9]" : "text-[#A1A1A1]"}
                  `}
                >
                  {tab.label}
                </span>
                <div
                  className="w-[6px] h-[6px] rounded-full"
                  style={{ backgroundColor: tab.color }}
                />
              </button>
            )
          })}
        </div>

        <div className="w-full border-b border-[#E1E6ED]" />



        <div className="mx-[15px] my-4">
          <div className="flex justify-between ">
            <div className="flex gap-5 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-2.5 pl-[11px] pr-[10px] ">
              <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">Weekly</span>
              <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>



        <div className="flex  gap-12 items-start ml-[27px] mt-[20px] mr-[15px]">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[#252525] text-[18px] not-italic font-semibold leading-normal tracking-[-0.36px]">5%</span>
              <Image
                src="/icons/Frame 427319409.svg"
                alt="Frame 427319409"
                width={20}
                height={20}
              />
            </div>
            <span className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]">than yesterday</span>
          </div>




          <div className="flex-1 min-w-0">
            <Graph  title="Absorptive Metabolism Score" labels={labels} values={values} />
          </div>

        </div>



  <div className="flex gap-12 items-start ml-[27px] mt-[20px]">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[#252525] text-[18px] not-italic font-semibold leading-normal tracking-[-0.36px]">5%</span>
              <Image
                src="/icons/Frame 427319309.png"
                alt="Frame 427319309"
                width={20}
                height={20}
              />
            </div>
            <span className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]">than yesterday</span>
          </div>




          <div className="flex-1 min-w-0">
            <Graph   title="Fermentative Metabolism Score" labels={labels} values={values} />
          </div>

        </div>


      </div>
    </div>
  )
}
