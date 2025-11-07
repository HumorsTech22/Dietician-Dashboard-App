// "use client"
// import { useState } from "react"
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
// import Graph from "./graph";

// export default function Trends() {
//   const [active, setActive] = useState("Gut Fermentation")
//   // Separate state for each dropdown
//   const [firstTimeRange, setFirstTimeRange] = useState("Weekly")
//   const [secondTimeRange, setSecondTimeRange] = useState("Weekly")
//   const [firstShowDropdown, setFirstShowDropdown] = useState(false)
//   const [secondShowDropdown, setSecondShowDropdown] = useState(false)

//   const labels = ["05 Aug", "06 Aug", "07 Aug", "07 Aug", "07 Aug", "07 Aug", "07 Aug"];
//   const values = [30, 42, 55, 48, 60, 54, 62];

//   const tabs = [
//     { label: "Gut Fermentation", color: "#DA5747" },
//     { label: "Glucose -Vs- Fat", color: "#3FAF58" },
//     { label: "Liver Heptic", color: "#3FAF58" },
//   ]

//   // Define percentage values for each section
//   const firstSectionPercentage = 80;
//   const secondSectionPercentage = 20;

//   // Function to get titles based on active tab
//   const getTitles = () => {
//     switch(active) {
//       case "Gut Fermentation":
//         return {
//           firstTitle: "Absorptive Metabolism Score",
//           secondTitle: "Fermentative Metabolism Score"
//         };
//       case "Glucose -Vs- Fat":
//         return {
//           firstTitle: "Fat Metabolism Score",
//           secondTitle: "Glucose Metabolism Score"
//         };
//       case "Liver Heptic":
//         return {
//           firstTitle: "Heptic Metabolism Score",
//           secondTitle: "Detoxification Metabolism Score"
//         };
//       default:
//         return {
//           firstTitle: "Absorptive Metabolism Score",
//           secondTitle: "Fermentative Metabolism Score"
//         };
//     }
//   };

//   const titles = getTitles();

//   return (
//     <div className="flex-1 min-w-0  rounded-[15px] mx-2">
//       <div className="mt-[15px] ml-[13px]">
//         <span className=" text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
//           Score Analysis
//         </span>
//       </div>

//       <div className="flex flex-col gap-6">
//         <div className="flex w-full gap-6 mt-[18px] border-b border-[#E1E6ED]">
//           {tabs.map(tab => {
//             const isActive = active === tab.label
//             return (
//               <button
//                 key={tab.label}
//                 onClick={() => setActive(tab.label)}
//                 className={`flex gap-2.5 items-center pb-[13px] pl-[5px] pr-[25px] cursor-pointer
//                   ${isActive ? "border-b-2 border-[#308BF9]" : ""}
//                 `}
//               >
//                 <span
//                   className={`text-[12px] font-semibold leading-[110%] tracking-[-0.24px] 
//                     ${isActive ? "text-[#308BF9]" : "text-[#A1A1A1]"}
//                   `}
//                 >
//                   {tab.label}
//                 </span>
//                 <div
//                   className="w-[6px] h-[6px] rounded-full"
//                   style={{ backgroundColor: tab.color }}
//                 />
//               </button>
//             )
//           })}
//         </div>

//         <div className="flex flex-col gap-9 pt-1.5 pl-[5px] pr-[13px] rounded-[15px]">
//           <div className="flex flex-col gap-[5px] px-[15px] py-[18px] bg-[#F0F0F0] rounded-[15px]">
//             <span className="text-[#252525] text-[12px] font-semibold leading-[130%] tracking-[-0.24px]">Main Marker: Hydrogen</span>
//             <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">4.752 ppm</span>
//           </div>

//           <div className="flex flex-col gap-[42px]">
//             {/* First Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.firstTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">

//                 <div className="flex-1 min-w-0 w-full">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between ">
//                       <div className="relative">
//                         <div 
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setFirstShowDropdown(!firstShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {firstTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>
                        
//                         {/* First Dropdown Menu */}
//                         {firstShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setFirstTimeRange("Weekly");
//                                 setFirstShowDropdown(false);
//                               }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setFirstTimeRange("Monthly");
//                                 setFirstShowDropdown(false);
//                               }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <Graph title={titles.firstTitle} labels={labels} values={values} />
//                 </div>

//                 <div className="flex flex-col gap-5 w-full lg:w-auto">
//                   <div className="flex flex-col gap-[5px] w-full relative">
//                     {/* Progress Bar */}
//                     <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
//                       <div
//                         className="bg-[#DA5747] h-2.5 rounded-[5px]"
//                         style={{ width: "30%" }}
//                       ></div>
//                       <div
//                         className="bg-[#FFC412] h-2.5 rounded-[5px]"
//                         style={{ width: "40%" }}
//                       ></div>
//                       <div
//                         className="bg-[#3FAF58] h-2.5 rounded-[5px]"
//                         style={{ width: "30%" }}
//                       ></div>

//                       {/* Pointer Indicator - dynamically positioned */}
//                       <div
//                         className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
//                         style={{ left: `${firstSectionPercentage}%` }}
//                       ></div>
//                     </div>

//                     {/* Labels (positioned absolutely) */}
//                     <div className="relative w-full">
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">
//                         0
//                       </span>
//                       <span
//                         className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
//                         style={{ left: "30%" }}
//                       >
//                         60
//                       </span>
//                       <span
//                         className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
//                         style={{ left: "70%" }}
//                       >
//                         80
//                       </span>
//                       <span className="absolute right-0 text-[8px] text-[#252525] font-normal">
//                         100
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{firstSectionPercentage}%</p>
//                     <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//                     <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Good</p>
//                   </div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
//                   </div>
//                   <div className="border-b border-[#E1E6ED]"></div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Second Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.secondTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">

//                 <div className="flex-1 min-w-0 w-full">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between ">
//                       <div className="relative">
//                         <div 
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setSecondShowDropdown(!secondShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {secondTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>
                        
//                         {/* Second Dropdown Menu */}
//                         {secondShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setSecondTimeRange("Weekly");
//                                 setSecondShowDropdown(false);
//                               }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setSecondTimeRange("Monthly");
//                                 setSecondShowDropdown(false);
//                               }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <Graph title={titles.secondTitle} labels={labels} values={values} />
//                 </div>

//                 <div className="flex flex-col gap-5 w-full lg:w-auto">
//                   <div className="flex flex-col gap-[5px] w-full relative">
//                     {/* Progress Bar */}
//                     <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
//                        <div
//                         className="bg-[#3FAF58] h-2.5 rounded-[5px]"
//                         style={{ width: "30%" }}
//                       ></div>
                      
//                       <div
//                         className="bg-[#FFC412] h-2.5 rounded-[5px]"
//                         style={{ width: "40%" }}
//                       ></div>
//                      <div
//                         className="bg-[#DA5747] h-2.5 rounded-[5px]"
//                         style={{ width: "30%" }}
//                       ></div>

//                       {/* Pointer Indicator - dynamically positioned */}
//                       <div
//                         className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
//                         style={{ left: `${secondSectionPercentage}%` }}
//                       ></div>
//                     </div>

//                     {/* Labels (positioned absolutely) */}
//                     <div className="relative w-full">
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">
//                         0
//                       </span>
//                       <span
//                         className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
//                         style={{ left: "30%" }}
//                       >
//                         60
//                       </span>
//                       <span
//                         className="absolute -translate-x-1/2 text-[#252525] text-[8px] font-normal"
//                         style={{ left: "70%" }}
//                       >
//                         80
//                       </span>
//                       <span className="absolute right-0 text-[8px] text-[#252525] font-normal">
//                         100
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{secondSectionPercentage}%</p>
//                     <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//                     <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Good</p>
//                   </div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
//                   </div>
//                   <div className="border-b border-[#E1E6ED]"></div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }













// "use client"
// import { useMemo, useState } from "react"
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
// import Graph from "./graph";

// export default function Trends() {
//   const [active, setActive] = useState("Gut Fermentation")
//   const [firstTimeRange, setFirstTimeRange] = useState("Weekly")
//   const [secondTimeRange, setSecondTimeRange] = useState("Weekly")
//   const [firstShowDropdown, setFirstShowDropdown] = useState(false)
//   const [secondShowDropdown, setSecondShowDropdown] = useState(false)

//   // ---- helpers (labels) ----
//   const formatDDMon = (d) =>
//     d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }); // "07 Nov"

//   const getWeeklyLabels = () => {
//     // last 7 days including today
//     const today = new Date();
//     const arr = [];
//     for (let i = 6; i >= 0; i--) {
//       const dt = new Date(today);
//       dt.setDate(today.getDate() - i);
//       arr.push(formatDDMon(dt).replace(",", ""));
//     }
//     return arr;
//   };

//   const getMonthlyWeekLabels = () => {
//     const now = new Date();
//     const monthShort = now.toLocaleDateString("en-GB", { month: "short" }); // "Nov"
//     const year = now.getFullYear();
//     const month = now.getMonth();

//     // Count how many ISO-like weeks exist in current month (Mon–Sun buckets)
//     const firstOfMonth = new Date(year, month, 1);
//     const lastOfMonth = new Date(year, month + 1, 0);

//     // Start at Monday of the week containing the 1st
//     const start = new Date(firstOfMonth);
//     const day = start.getDay(); // 0 Sun ... 6 Sat
//     const diffToMonday = (day + 6) % 7; // days to go back to Monday
//     start.setDate(start.getDate() - diffToMonday);

//     // Step weeks forward until we pass the last day of month
//     const labels = [];
//     let w = 1;
//     let cursor = new Date(start);
//     while (cursor <= lastOfMonth) {
//       labels.push(`${monthShort} W${w}`);
//       // jump 7 days
//       cursor.setDate(cursor.getDate() + 7);
//       w += 1;
//       // Avoid infinite loops; max 6 week labels
//       if (w > 6) break;
//     }
//     return labels;
//   };

//   // ---- helpers (values) ----
//   const baseValues = [30, 42, 55, 48, 60, 54, 62]; // your existing sample
//   const fitValues = (desiredLen) => {
//     if (desiredLen === baseValues.length) return baseValues;
//     if (desiredLen < baseValues.length) return baseValues.slice(0, desiredLen);
//     // if we need more, extend by repeating last value
//     const extra = Array.from({ length: desiredLen - baseValues.length }, () => baseValues[baseValues.length - 1]);
//     return [...baseValues, ...extra];
//   };

//   const tabs = [
//     { label: "Gut Fermentation", color: "#DA5747" },
//     { label: "Glucose -Vs- Fat", color: "#3FAF58" },
//     { label: "Liver Heptic", color: "#3FAF58" },
//   ]

//   const firstSectionPercentage = 80;
//   const secondSectionPercentage = 20;

//   const getTitles = () => {
//     switch(active) {
//       case "Gut Fermentation":
//         return { firstTitle: "Absorptive Metabolism Score", secondTitle: "Fermentative Metabolism Score" };
//       case "Glucose -Vs- Fat":
//         return { firstTitle: "Fat Metabolism Score", secondTitle: "Glucose Metabolism Score" };
//       case "Liver Heptic":
//         return { firstTitle: "Heptic Metabolism Score", secondTitle: "Detoxification Metabolism Score" };
//       default:
//         return { firstTitle: "Absorptive Metabolism Score", secondTitle: "Fermentative Metabolism Score" };
//     }
//   };
//   const titles = getTitles();

//   // Compute labels per section based on dropdown
//   const firstLabels = useMemo(
//     () => (firstTimeRange === "Weekly" ? getWeeklyLabels() : getMonthlyWeekLabels()),
//     [firstTimeRange]
//   );
//   const secondLabels = useMemo(
//     () => (secondTimeRange === "Weekly" ? getWeeklyLabels() : getMonthlyWeekLabels()),
//     [secondTimeRange]
//   );

//   // Fit values length to labels length for each section
//   const firstValues = useMemo(() => fitValues(firstLabels.length), [firstLabels]);
//   const secondValues = useMemo(() => fitValues(secondLabels.length), [secondLabels]);

//   return (
//     <div className="flex-1 min-w-0  rounded-[15px] mx-2">
//       <div className="mt-[15px] ml-[13px]">
//         <span className=" text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
//           Score Analysis
//         </span>
//       </div>

//       <div className="flex flex-col gap-6">
//         <div className="flex w-full gap-6 mt-[18px] border-b border-[#E1E6ED]">
//           {tabs.map(tab => {
//             const isActive = active === tab.label
//             return (
//               <button
//                 key={tab.label}
//                 onClick={() => setActive(tab.label)}
//                 className={`flex gap-2.5 items-center pb-[13px] pl-[5px] pr-[25px] cursor-pointer
//                   ${isActive ? "border-b-2 border-[#308BF9]" : ""}
//                 `}
//               >
//                 <span
//                   className={`text-[12px] font-semibold leading-[110%] tracking-[-0.24px] 
//                     ${isActive ? "text-[#308BF9]" : "text-[#A1A1A1]"}
//                   `}
//                 >
//                   {tab.label}
//                 </span>
//                 <div
//                   className="w-[6px] h-[6px] rounded-full"
//                   style={{ backgroundColor: tab.color }}
//                 />
//               </button>
//             )
//           })}
//         </div>

//         <div className="flex flex-col gap-9 pt-1.5 pl-[5px] pr-[13px] rounded-[15px]">
//           <div className="flex flex-col gap-[5px] px-[15px] py-[18px] bg-[#F0F0F0] rounded-[15px]">
//             <span className="text-[#252525] text-[12px] font-semibold leading-[130%] tracking-[-0.24px]">Main Marker: Hydrogen</span>
//             <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">4.752 ppm</span>
//           </div>

//           <div className="flex flex-col gap-[42px]">
//             {/* First Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.firstTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">

//                 <div className="flex-1 min-w-0 w-full">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between ">
//                       <div className="relative">
//                         <div 
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setFirstShowDropdown(!firstShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {firstTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>
                        
//                         {firstShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => { setFirstTimeRange("Weekly"); setFirstShowDropdown(false); }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => { setFirstTimeRange("Monthly"); setFirstShowDropdown(false); }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   {/* Pass computed labels/values */}
//                   <Graph title={titles.firstTitle} labels={firstLabels} values={firstValues} />
//                 </div>

//                 <div className="flex flex-col gap-5 w-full lg:w-auto">
//                   <div className="flex flex-col gap-[5px] w-full relative">
//                     <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
//                       <div className="bg-[#DA5747] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
//                       <div className="bg-[#FFC412] h-2.5 rounded-[5px]" style={{ width: "40%" }}></div>
//                       <div className="bg-[#3FAF58] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
//                       <div className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2" style={{ left: `${firstSectionPercentage}%` }}></div>
//                     </div>
//                     <div className="relative w-full">
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">0</span>
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "30%" }}>60</span>
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "70%" }}>80</span>
//                       <span className="absolute right-0 text-[8px] text-[#252525] font-normal">100</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{firstSectionPercentage}%</p>
//                     <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//                     <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Good</p>
//                   </div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
//                   </div>
//                   <div className="border-b border-[#E1E6ED]"></div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Second Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.secondTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">

//                 <div className="flex-1 min-w-0 w-full">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between ">
//                       <div className="relative">
//                         <div 
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setSecondShowDropdown(!secondShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {secondTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>
                        
//                         {secondShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => { setSecondTimeRange("Weekly"); setSecondShowDropdown(false); }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => { setSecondTimeRange("Monthly"); setSecondShowDropdown(false); }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   {/* Pass computed labels/values */}
//                   <Graph title={titles.secondTitle} labels={secondLabels} values={secondValues} />
//                 </div>

//                 <div className="flex flex-col gap-5 w-full lg:w-auto">
//                   <div className="flex flex-col gap-[5px] w-full relative">
//                     <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
//                       <div className="bg-[#3FAF58] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
//                       <div className="bg-[#FFC412] h-2.5 rounded-[5px]" style={{ width: "40%" }}></div>
//                       <div className="bg-[#DA5747] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
//                       <div className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2" style={{ left: `${secondSectionPercentage}%` }}></div>
//                     </div>
//                     <div className="relative w-full">
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">0</span>
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "30%" }}>60</span>
//                       <span className="absolute -translate-x-1/2 text-[#252525] text-[8px] font-normal" style={{ left: "70%" }}>80</span>
//                       <span className="absolute right-0 text-[8px] text-[#252525] font-normal">100</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{secondSectionPercentage}%</p>
//                     <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//                     <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Good</p>
//                   </div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
//                   </div>
//                   <div className="border-b border-[#E1E6ED]"></div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }























"use client"
import { useMemo, useState, useEffect } from "react"
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Graph from "./graph";
import { fetchScoreTrend } from "../services/authService"; // adjust path as needed
import { useSearchParams } from "next/navigation";

export default function Trends() {
  const searchParams = useSearchParams();
  const dieticianId = searchParams.get('dietician_id');
  const profileId = searchParams.get('profile_id');
  
  const [active, setActive] = useState("Gut Fermentation")
  const [firstTimeRange, setFirstTimeRange] = useState("Weekly")
  const [secondTimeRange, setSecondTimeRange] = useState("Weekly")
  const [firstShowDropdown, setFirstShowDropdown] = useState(false)
  const [secondShowDropdown, setSecondShowDropdown] = useState(false)
  const [graphData, setGraphData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Helper functions
  const getWeekOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Adjust to start week from Monday (if you want Sunday start, remove the adjustment)
    const adjustedFirstDay = (firstDayOfWeek === 0) ? 6 : firstDayOfWeek - 1;
    
    const diff = Math.floor((date.getDate() + adjustedFirstDay - 1) / 7) + 1;
    return diff;
  };

  const aggregateDataByWeek = (data, scoreType) => {
    const weeklyData = {};
    
    data.forEach(item => {
      const date = new Date(item.date);
      const weekNumber = getWeekOfMonth(date);
      const weekKey = `Week ${weekNumber}`;
      
      if (!weeklyData[weekKey]) {
        weeklyData[weekKey] = {
          values: [],
          count: 0
        };
      }
      
      // Get the score based on score type
      let score = 0;
      switch(scoreType) {
        case "absorptive":
          score = parseInt(item.absorptive_metabolism_score) || 0;
          break;
        case "fermentative":
          score = parseInt(item.fermentative_metabolism_score) || 0;
          break;
        case "fat":
          score = parseInt(item.fat_metabolism_score) || 0;
          break;
        case "glucose":
          score = parseInt(item.glucose_metabolism_score) || 0;
          break;
        case "hepatic":
          score = parseInt(item.hepatic_stress_metabolism_score) || 0;
          break;
        case "detoxification":
          score = parseInt(item.detoxification_metabolism_score) || 0;
          break;
        default:
          score = 0;
      }
      
      weeklyData[weekKey].values.push(score);
      weeklyData[weekKey].count++;
    });
    
    // Calculate average for each week
    const result = {
      labels: [],
      values: []
    };
    
    Object.keys(weeklyData).sort().forEach(week => {
      const weekData = weeklyData[week];
      const average = weekData.values.reduce((sum, val) => sum + val, 0) / weekData.values.length;
      result.labels.push(week);
      result.values.push(Math.round(average));
    });
    
    return result;
  };

  // Fetch graph data
  const fetchGraphData = async (mode) => {
    if (!dieticianId || !profileId) return;
    
    setLoading(true);
    setError(null);
    try {
      const response = await fetchScoreTrend(dieticianId, profileId, mode);
      if (response.success) {
        setGraphData(response);
      } else {
        setError("Failed to fetch graph data");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when component mounts or time range changes
  useEffect(() => {
    fetchGraphData(firstTimeRange);
  }, [dieticianId, profileId, firstTimeRange]);

  // ---- helpers (labels) ----
  const formatDateLabel = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }).replace(",", "");
  };

  const getLabelsFromApiData = () => {
    if (!graphData || !graphData.data) return [];
    return graphData.data.map(item => formatDateLabel(item.date));
  };

  const getWeeklyLabels = () => {
    if (graphData && graphData.data) {
      return getLabelsFromApiData();
    }
    // Fallback to original logic if no API data
    const today = new Date();
    const arr = [];
    for (let i = 6; i >= 0; i--) {
      const dt = new Date(today);
      dt.setDate(today.getDate() - i);
      arr.push(formatDateLabel(dt));
    }
    return arr;
  };

  const getMonthlyWeekLabels = (scoreType = "absorptive") => {
    if (graphData && graphData.data) {
      const weeklyData = aggregateDataByWeek(graphData.data, scoreType);
      return weeklyData.labels;
    }
    
    // Fallback to original logic if no API data
    const now = new Date();
    const monthShort = now.toLocaleDateString("en-GB", { month: "short" });
    const year = now.getFullYear();
    const month = now.getMonth();

    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);

    const start = new Date(firstOfMonth);
    const day = start.getDay();
    const diffToMonday = (day + 6) % 7;
    start.setDate(start.getDate() - diffToMonday);

    const labels = [];
    let w = 1;
    let cursor = new Date(start);
    while (cursor <= lastOfMonth) {
      labels.push(`Week ${w}`);
      cursor.setDate(cursor.getDate() + 7);
      w += 1;
      if (w > 6) break;
    }
    return labels;
  };

  // ---- helpers (values) ----
  const getScoreValues = (scoreType, timeRange) => {
    if (!graphData || !graphData.data) return fitValues(firstLabels.length);
    
    if (timeRange === "Monthly") {
      // For monthly mode, return weekly aggregated values
      const weeklyData = aggregateDataByWeek(graphData.data, scoreType);
      return weeklyData.values;
    } else {
      // For weekly mode, return daily values
      return graphData.data.map(item => {
        switch(scoreType) {
          case "absorptive":
            return parseInt(item.absorptive_metabolism_score) || 0;
          case "fermentative":
            return parseInt(item.fermentative_metabolism_score) || 0;
          case "fat":
            return parseInt(item.fat_metabolism_score) || 0;
          case "glucose":
            return parseInt(item.glucose_metabolism_score) || 0;
          case "hepatic":
            return parseInt(item.hepatic_stress_metabolism_score) || 0;
          case "detoxification":
            return parseInt(item.detoxification_metabolism_score) || 0;
          default:
            return 0;
        }
      });
    }
  };

  const baseValues = [30, 42, 55, 48, 60, 54, 62];
  const fitValues = (desiredLen) => {
    if (desiredLen === baseValues.length) return baseValues;
    if (desiredLen < baseValues.length) return baseValues.slice(0, desiredLen);
    const extra = Array.from({ length: desiredLen - baseValues.length }, () => baseValues[baseValues.length - 1]);
    return [...baseValues, ...extra];
  };

  const tabs = [
    { label: "Gut Fermentation", color: "#DA5747" },
    { label: "Glucose -Vs- Fat", color: "#3FAF58" },
    { label: "Liver Heptic", color: "#3FAF58" },
  ]

  const firstSectionPercentage = 80;
  const secondSectionPercentage = 20;

  const getTitles = () => {
    switch(active) {
      case "Gut Fermentation":
        return { 
          firstTitle: "Absorptive Metabolism Score", 
          secondTitle: "Fermentative Metabolism Score",
          firstScoreType: "absorptive",
          secondScoreType: "fermentative"
        };
      case "Glucose -Vs- Fat":
        return { 
          firstTitle: "Fat Metabolism Score", 
          secondTitle: "Glucose Metabolism Score",
          firstScoreType: "fat",
          secondScoreType: "glucose"
        };
      case "Liver Heptic":
        return { 
          firstTitle: "Heptic Metabolism Score", 
          secondTitle: "Detoxification Metabolism Score",
          firstScoreType: "hepatic",
          secondScoreType: "detoxification"
        };
      default:
        return { 
          firstTitle: "Absorptive Metabolism Score", 
          secondTitle: "Fermentative Metabolism Score",
          firstScoreType: "absorptive",
          secondScoreType: "fermentative"
        };
    }
  };
  const titles = getTitles();

  // Compute labels per section based on dropdown
  const firstLabels = useMemo(
    () => (firstTimeRange === "Weekly" ? getWeeklyLabels() : getMonthlyWeekLabels(titles.firstScoreType)),
    [firstTimeRange, graphData, titles.firstScoreType]
  );
  const secondLabels = useMemo(
    () => (secondTimeRange === "Weekly" ? getWeeklyLabels() : getMonthlyWeekLabels(titles.secondScoreType)),
    [secondTimeRange, graphData, titles.secondScoreType]
  );

  // Fit values length to labels length for each section
  const firstValues = useMemo(() => 
    getScoreValues(titles.firstScoreType, firstTimeRange), 
    [graphData, titles.firstScoreType, firstLabels, firstTimeRange]
  );
  const secondValues = useMemo(() => 
    getScoreValues(titles.secondScoreType, secondTimeRange), 
    [graphData, titles.secondScoreType, secondLabels, secondTimeRange]
  );

  // Handle time range change
  const handleFirstTimeRangeChange = (newRange) => {
    setFirstTimeRange(newRange);
    setFirstShowDropdown(false);
    fetchGraphData(newRange);
  };

  const handleSecondTimeRangeChange = (newRange) => {
    setSecondTimeRange(newRange);
    setSecondShowDropdown(false);
    fetchGraphData(newRange);
  };

  if (loading) {
    return <div className="flex-1 min-w-0 rounded-[15px] mx-2 p-4">Loading graph data...</div>;
  }

  if (error) {
    return <div className="flex-1 min-w-0 rounded-[15px] mx-2 p-4 text-red-500">Error: {error}</div>;
  }

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
                <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.firstTitle}</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-[30px] items-start">

                <div className="flex-1 min-w-0 w-full">
                  <div className="mx-[15px] my-4">
                    <div className="flex justify-between ">
                      <div className="relative">
                        <div 
                          className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                          onClick={() => setFirstShowDropdown(!firstShowDropdown)}
                        >
                          <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
                            {firstTimeRange}
                          </span>
                          <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
                        </div>
                        
                        {firstShowDropdown && (
                          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                            <div 
                              className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                              onClick={() => handleFirstTimeRangeChange("Weekly")}
                            >
                              <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                Weekly
                              </span>
                            </div>
                            <div 
                              className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                              onClick={() => handleFirstTimeRangeChange("Monthly")}
                            >
                              <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                Monthly
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Pass computed labels/values */}
                  <Graph title={titles.firstTitle} labels={firstLabels} values={firstValues} />
                </div>

                <div className="flex flex-col gap-5 w-full lg:w-auto">
                  <div className="flex flex-col gap-[5px] w-full relative">
                    <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
                      <div className="bg-[#DA5747] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
                      <div className="bg-[#FFC412] h-2.5 rounded-[5px]" style={{ width: "40%" }}></div>
                      <div className="bg-[#3FAF58] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
                      <div className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2" style={{ left: `${firstSectionPercentage}%` }}></div>
                    </div>
                    <div className="relative w-full">
                      <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">0</span>
                      <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "30%" }}>60</span>
                      <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "70%" }}>80</span>
                      <span className="absolute right-0 text-[8px] text-[#252525] font-normal">100</span>
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
                <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.secondTitle}</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-[30px] items-start">

                <div className="flex-1 min-w-0 w-full">
                  <div className="mx-[15px] my-4">
                    <div className="flex justify-between ">
                      <div className="relative">
                        <div 
                          className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                          onClick={() => setSecondShowDropdown(!secondShowDropdown)}
                        >
                          <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
                            {secondTimeRange}
                          </span>
                          <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
                        </div>
                        
                        {secondShowDropdown && (
                          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                            <div 
                              className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                              onClick={() => handleSecondTimeRangeChange("Weekly")}
                            >
                              <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                Weekly
                              </span>
                            </div>
                            <div 
                              className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                              onClick={() => handleSecondTimeRangeChange("Monthly")}
                            >
                              <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                Monthly
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Pass computed labels/values */}
                  <Graph title={titles.secondTitle} labels={secondLabels} values={secondValues} />
                </div>

                <div className="flex flex-col gap-5 w-full lg:w-auto">
                  <div className="flex flex-col gap-[5px] w-full relative">
                    <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
                      <div className="bg-[#3FAF58] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
                      <div className="bg-[#FFC412] h-2.5 rounded-[5px]" style={{ width: "40%" }}></div>
                      <div className="bg-[#DA5747] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
                      <div className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2" style={{ left: `${secondSectionPercentage}%` }}></div>
                    </div>
                    <div className="relative w-full">
                      <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">0</span>
                      <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "30%" }}>60</span>
                      <span className="absolute -translate-x-1/2 text-[#252525] text-[8px] font-normal" style={{ left: "70%" }}>80</span>
                      <span className="absolute right-0 text-[8px] text-[#252525] font-normal">100</span>
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