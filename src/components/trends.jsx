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

  // Define percentage values for each section
  const firstSectionPercentage = 80;
  const secondSectionPercentage = 20;

  return (
    <div className="flex-1 min-w-0  rounded-[15px] mx-2">
      <div className="mt-[15px] ml-[13px]">
        <span className=" text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
          Score Analysis
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex w-full gap-6 mt-[18px] border-b border-[#E1E6ED]">
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

        <div className="flex flex-col gap-9 pt-1.5 pl-[5px] pr-[13px] rounded-[15px]">
          <div className="flex flex-col gap-[5px] px-[15px] py-[18px] bg-[#F0F0F0] rounded-[15px]">
            <span className="text-[#252525] text-[12px] font-semibold leading-[130%] tracking-[-0.24px]">Main Marker: Hydrogen</span>
            <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">4.752 ppm</span>
          </div>

          <div className="flex flex-col gap-[42px]">
            {/* First Section */}
            <div className="flex flex-col gap-5">
              <div className="pb-5 border-b border-[#E1E6ED]">
                <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">Absorptive Metabolism Score</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-[30px] items-start">

                <div className="flex-1 min-w-0 w-full">
                  <div className="mx-[15px] my-4">
                    <div className="flex justify-between ">
                      <div className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] ">
                        <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">Weekly</span>
                        <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  <Graph title="Absorptive Metabolism Score" labels={labels} values={values} />
                </div>

                <div className="flex flex-col gap-5 w-full lg:w-auto">
                  <div className="flex flex-col gap-[5px] w-full relative">
                    {/* Progress Bar */}
                    <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
                      <div
                        className="bg-[#DA5747] h-2.5 rounded-[5px]"
                        style={{ width: "30%" }}
                      ></div>
                      <div
                        className="bg-[#FFC412] h-2.5 rounded-[5px]"
                        style={{ width: "40%" }}
                      ></div>
                      <div
                        className="bg-[#3FAF58] h-2.5 rounded-[5px]"
                        style={{ width: "30%" }}
                      ></div>

                      {/* Pointer Indicator - dynamically positioned */}
                      <div
                        className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
                        style={{ left: `${firstSectionPercentage}%` }}
                      ></div>
                    </div>

                    {/* Labels (positioned absolutely) */}
                    <div className="relative w-full">
                      <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">
                        0
                      </span>
                      <span
                        className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
                        style={{ left: "30%" }}
                      >
                        60
                      </span>
                      <span
                        className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
                        style={{ left: "70%" }}
                      >
                        80
                      </span>
                      <span className="absolute right-0 text-[8px] text-[#252525] font-normal">
                        100
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{firstSectionPercentage}%</p>
                    <div className="mx-3 h-4 w-px bg-[#252525]"></div>
                    <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Good</p>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
                    <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
                  </div>
                  <div className="border-b border-[#E1E6ED]"></div>
                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
                    <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col gap-5">
              <div className="pb-5 border-b border-[#E1E6ED]">
                <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">Absorptive Metabolism Score</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-[30px] items-start">

                <div className="flex-1 min-w-0 w-full">
                  <div className="mx-[15px] my-4">
                    <div className="flex justify-between ">
                      <div className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] ">
                        <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">Weekly</span>
                        <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  <Graph title="Absorptive Metabolism Score" labels={labels} values={values} />
                </div>

                <div className="flex flex-col gap-5 w-full lg:w-auto">
                  <div className="flex flex-col gap-[5px] w-full relative">
                    {/* Progress Bar */}
                    <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
                       <div
                        className="bg-[#3FAF58] h-2.5 rounded-[5px]"
                        style={{ width: "30%" }}
                      ></div>
                      
                      <div
                        className="bg-[#FFC412] h-2.5 rounded-[5px]"
                        style={{ width: "40%" }}
                      ></div>
                     <div
                        className="bg-[#DA5747] h-2.5 rounded-[5px]"
                        style={{ width: "30%" }}
                      ></div>

                      {/* Pointer Indicator - dynamically positioned */}
                      <div
                        className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
                        style={{ left: `${secondSectionPercentage}%` }}
                      ></div>
                    </div>

                    {/* Labels (positioned absolutely) */}
                    <div className="relative w-full">
                      <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">
                        0
                      </span>
                      <span
                        className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
                        style={{ left: "30%" }}
                      >
                        60
                      </span>
                      <span
                        className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
                        style={{ left: "70%" }}
                      >
                        80
                      </span>
                      <span className="absolute right-0 text-[8px] text-[#252525] font-normal">
                        100
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{secondSectionPercentage}%</p>
                    <div className="mx-3 h-4 w-px bg-[#252525]"></div>
                    <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Good</p>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
                    <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
                  </div>
                  <div className="border-b border-[#E1E6ED]"></div>
                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
                    <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}