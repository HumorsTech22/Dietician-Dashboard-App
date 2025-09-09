// "use client"

// import ClientTable from "@/components/clientTable"
// import { UserProfile } from "@/components/user-profile"

// export default function Client() {
//     return (
//         <>
//             <p className="text-black">Client Page</p>
           
//            <div className="">
//             <div className="flex">
// <div className="flex items-center px-20 py-5 bg-white border border-black border-b-0 border-r-0 rounded-t-[10px]">
//   <p className="text-[#308BF9] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] cursor-pointer">
//     All Clients(45)
//   </p>
// </div>


               
//                  <div className="flex items-center px-20 py-5 bg-[#D9D9D9]  border border-black rounded-[10px]">
//  <p className="text-[#535359] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] cursor-pointer">Active Plan(40)</p>
//                 </div>

//                   <div className="flex items-center px-20 py-5 bg-[#D9D9D9] border border-black rounded-[10px]">
//                 <p className="text-[#535359] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] cursor-pointer">Needs Plan(10)</p>
//                 </div>
//    </div>
               

                

            
// <UserProfile/>
//             <ClientTable/>
         
//             </div>
//         </>
//     )
// }


"use client"

import { useState, useMemo } from "react"
import ClientTable from "@/components/clientTable"
import { UserProfile } from "@/components/user-profile"

export default function Client() {
  const tabs = useMemo(
    () => [
      { id: "all", label: "All Clients (45)" },
      { id: "active", label: "Active Plan (40)" },
      { id: "needs", label: "Needs Plan (10)" },
    ],
    []
  )

  const [activeTab, setActiveTab] = useState("all")
  const activeIndex = tabs.findIndex(t => t.id === activeTab)

  const TabItem = ({ id, label, index, isLast }) => {
    const isActive = activeTab === id
    const isLeftOfActive = index === activeIndex - 1
    const isRightOfActive = index === activeIndex + 1

    // Give neighbor tabs a bottom corner toward the active tab
    const neighborBottomRadius =
      !isActive && isLeftOfActive
        ? "rounded-br-[20px]"
        : !isActive && isRightOfActive
        ? "rounded-bl-[20px]"
        : ""

    return (
      <div
        onClick={() => setActiveTab(id)}
        className={[
          "relative flex items-center px-20 py-5 cursor-pointer select-none",
          // 3-side border on tabs, no bottom
          "border-t border-l border-r border-[#D9D9D9] border-b-0",
          !isLast && "border-r-0",
          "rounded-t-[20px]",
          neighborBottomRadius,
          // pull tabs down 1px to overlap content box top edge
          "-mb-px",
          "transition-colors",
          isActive
            ? "bg-white [filter:drop-shadow(1px_-1px_4.5px_rgba(0,0,0,0.25))] z-10"
            : "bg-[#F5F7FA] z-0"
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* mask the bottom shadow so it never looks like a bottom border on the active tab */}
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
        )}

        <p
          className={[
            "text-[15px] font-semibold leading-[110%] tracking-[-0.3px]",
            isActive ? "text-[#308BF9]" : "text-[#535359]"
          ].join(" ")}
        >
          {label}
        </p>
      </div>
    )
  }

  return (
    <>
      <p className="text-black">Client Page</p>

      <div>
        {/* Tabs */}
        <div className="flex">
          {tabs.map((t, i) => (
            <TabItem
              key={t.id}
              id={t.id}
              label={t.label}
              index={i}
              isLast={i === tabs.length - 1}
            />
          ))}
        </div>

        {/* Content wrapper: NO top border so white is continuous under tabs */}
        <div className="border border-[#D9D9D9] border-t-0 rounded-b-[10px] rounded-tr-[10px] bg-white p-5 shadow-[1px_-1px_4.5px_rgba(0,0,0,0.25)]">
          <UserProfile />
          <ClientTable activeTab={activeTab} />
        </div>
      </div>
    </>
  )
}




// "use client";
// import React, { useState } from "react";

// import ClientTable from "@/components/clientTable"
// import { UserProfile } from "@/components/user-profile"

// export default function ClientsTabs() {
//   const [tab, setTab] = useState("all");

//   const tabs = [
//     { key: "all", label: "All Clients", count: 45 },
//     { key: "active", label: "Active Plans", count: 40 },
//     { key: "needs", label: "Needs Plan", count: 10 },
//   ];

//   return (
//     <div className="w-full">
//       {/* rail */}
//       <div className="relative">
//         <div className="h-11 rounded-t-xl border border-gray-200 bg-[#F5F7FA]" />

//         {/* tabs */}
//         <div
//           role="tablist"
//           className="absolute inset-x-0 top-0 flex gap-3 px-2"
//         >
//           {tabs.map((t) => {
//             const isActive = tab === t.key;
//             return (
//               <button
//                 key={t.key}
//                 role="tab"
//                 aria-selected={isActive}
//                 onClick={() => setTab(t.key)}
//                 className={[
//                   // layout
//                   "mx-20 my-5 text-[14px] leading-none",
//                   "transition-colors rounded-t-[10px] focus:outline-none",
//                   "focus:ring-2 focus:ring-blue-400/30",
//                   // styles
//                   isActive
//                     ? "bg-transparent border-0 text-[#308BF9] font-semibold"
//                     : "bg-white text-[#3A3A3A] font-medium border border-gray-200 shadow-sm rounded-[12px]",
//                 ].join(" ")}
//               >
//                 {t.label}
//                 <span className={isActive ? "ml-1 text-[#308BF9]" : "ml-1 text-[#6B7280]"}>
//                   ({t.count})
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* example content area border radius to match your card */}
//       <div className="border border-gray-200 rounded-b-xl">
// <UserProfile/>
// <ClientTable/>

//       </div>
//     </div>
//   );
// }
