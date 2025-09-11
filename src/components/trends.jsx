"use client"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";

export default function Trends() {
  const [active, setActive] = useState("Gut Fermentation")

  const tabs = [
    { label: "Gut Fermentation", color: "#DA5747" },
    { label: "Glucose -Vs- Fat", color: "#3FAF58" },
    { label: "Liver Heptic", color: "#3FAF58" },
  ]

  return (
    <div className="flex-1 min-w-0 bg-red-300 rounded-[15px]">
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
    <div className="w-[106px] flex gap-5 py-[11px] pl-[15px] pr-[10px] border border-[#D9D9D9] rounded-[5px] ">
        <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">Weekly</span>
        <IoIosArrowDown className="w-5 h-5 "/>
    </div>
</div>


      </div>
    </div>
  )
}
