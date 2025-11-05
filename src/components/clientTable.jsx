// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useMemo, useState, useEffect  } from "react";
// import { UserProfile } from "./user-profile";
// import { toast } from "sonner";
// import {
//   selectClients,
//   getClientsForDietician
// } from "../store/clientSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function ClientTable({ showUserProfile = true, showDailyStatusHeader = true, testAssigned = true, 
//   clients: clientsList
// }) {

//   console.log("clientsList18:-", clientsList);
  
//   const [search, setSearch] = useState("");

//   const clients = [
//     {
//       name: "Sagar Hosur",
//       age: "29 years, Male",
//       dateCreated: "21 Jul 2025",
//       referenceCode: "521685982",
//       planStatus: "Active",
//       planType: "1-month plan",
//       lastLogged: "23 mins ago",
//       metabolismStatus: "Attention Required",
//       metabolismColor: "#DA5747",
//       metabolismBg: "#FFEDED",
//       dietGoal: "75% completed",
//       dietGoalDate: "21 July",
//       plansCompleted: 0,
//       testAssigned: 23,
//     },
//     {
//       name: "Humors Tech",
//       age: "29 years, Male",
//       dateCreated: "21 Jul 2025",
//       referenceCode: "521685982",
//       planStatus: "Active",
//       planType: "1-month plan",
//       lastLogged: "23 mins ago",
//       metabolismStatus: "Attention Required",
//       metabolismColor: "#DA5747",
//       metabolismBg: "#FFEDED",
//       dietGoal: "75% completed",
//       dietGoalDate: "21 July",
//       plansCompleted: 0,
//       testAssigned: 23,
//     },
//      {
//       name: "Zebster Tech",
//       age: "29 years, Male",
//       dateCreated: "21 Jul 2025",
//       referenceCode: "521685982",
//       planStatus: "Active",
//       planType: "1-month plan",
//       lastLogged: "23 mins ago",
//       metabolismStatus: "Attention Required",
//       metabolismColor: "#DA5747",
//       metabolismBg: "#FFEDED",
//       dietGoal: "75% completed",
//       dietGoalDate: "21 July",
//       plansCompleted: 0,
//       testAssigned: 23,
//     },
//      {
//       name: "Reynolds Tech",
//       age: "29 years, Male",
//       dateCreated: "21 Jul 2025",
//       referenceCode: "521685982",
//       planStatus: "Active",
//       planType: "1-month plan",
//       lastLogged: "23 mins ago",
//       metabolismStatus: "Attention Required",
//       metabolismColor: "#DA5747",
//       metabolismBg: "#FFEDED",
//       dietGoal: "75% completed",
//       dietGoalDate: "21 July",
//       plansCompleted: 0,
//       testAssigned: 23,
//     },
//      {
//       name: "Railnill Tech",
//       age: "29 years, Male",
//       dateCreated: "21 Jul 2025",
//       referenceCode: "521685982",
//       planStatus: "Active",
//       planType: "1-month plan",
//       lastLogged: "23 mins ago",
//       metabolismStatus: "Attention Required",
//       metabolismColor: "#DA5747",
//       metabolismBg: "#FFEDED",
//       dietGoal: "75% completed",
//       dietGoalDate: "21 July",
//       plansCompleted: 0,
//       testAssigned: 23,
//     },
//      {
//       name: "Respyr Tech",
//       age: "29 years, Male",
//       dateCreated: "21 Jul 2025",
//       referenceCode: "521685982",
//       planStatus: "Active",
//       planType: "1-month plan",
//       lastLogged: "23 mins ago",
//       metabolismStatus: "Attention Required",
//       metabolismColor: "#DA5747",
//       metabolismBg: "#FFEDED",
//       dietGoal: "75% completed",
//       dietGoalDate: "21 July",
//       plansCompleted: 0,
//       testAssigned: 23,
//     },
//      {
//       name: "Tcs mahindra",
//       age: "29 years, Male",
//       dateCreated: "21 Jul 2025",
//       referenceCode: "521685982",
//       planStatus: "Active",
//       planType: "1-month plan",
//       lastLogged: "23 mins ago",
//       metabolismStatus: "Attention Required",
//       metabolismColor: "#DA5747",
//       metabolismBg: "#FFEDED",
//       dietGoal: "75% completed",
//       dietGoalDate: "21 July",
//       plansCompleted: 0,
//       testAssigned: 23,
//     },


//   ];



//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       toast.success("Reference code copied!");
//     }).catch(err => {
//       toast.error("Failed to copy reference code");
//       console.error('Failed to copy: ', err);
//     });
//   };



//   const filteredClients = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     if (!q) return clients;
//     return clients.filter(c => c.name.toLowerCase().includes(q));
//   }, [search, clients]);

//   return (
//     <>
//       {/* Show the same search bar header; on /clients path this renders the client search */}
//       {showUserProfile && (
//         <div className="">
//           <UserProfile searchQuery={search} onSearchChange={setSearch} />
//         </div>
//       )}

//       <div>
//         <div className="rounded-[10px] overflow-hidden">
//           <table className="w-full bg-[#FFFFFF]">
//             <thead className="bg-[#F0F0F0]">
//               <tr>
//                 <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Client Name</p></th>
//                 <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Date Created</p></th>
//                 <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Reference code</p></th>
//                 <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Current Plan</p></th>
//                 <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Last Logged</p></th>
//                 {showDailyStatusHeader && (
//                   <th className="px-[15px] pt-5 pb-[5px] text-center">

//                     <div className="flex flex-col items-center gap-[15px]">
//                       <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Daily Status</p>
//                       <div className="flex justify-center w-[333px] items-center py-0.5 gap-5 bg-[#D9D9D9] rounded-[7px]">
//                         <p className="text-[#535359] text-center font-normal text-[12px] leading-[110%] tracking-[-0.24px]">Metabolism Status</p>
//                         <p className="text-[#535359] text-center font-normal text-[12px] leading-[110%] tracking-[-0.24px]">Diet Goal</p>
//                       </div>
//                     </div>

//                   </th>
//                 )}


//                 {showDailyStatusHeader && (
//                   <th className="px-[15px] pt-5 pb-[5px] text-left">

//                     <p className="text-[#535359] text-center font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Plans completed</p>

//                   </th>
//                 )}

//                 {testAssigned && (
//                   <th className="px-[15px] pt-5 pb-[5px] text-left">
//                     <p className="text-[#535359] text-center font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Test Assigned</p>
//                   </th>
//                 )}
//                 <th className="px-[15px] pt-5 pb-[5px] text-left">
//                   <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Actions</p>
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredClients.length === 0 ? (
//                 <tr>
//                   <td colSpan={8} className="px-[15px] py-8 text-center">
//                     <p className="text-[#A1A1A1] text-sm">No clients match “{search}”.</p>
//                   </td>
//                 </tr>
//               ) : (
//                 filteredClients.map((client, idx) => (
//                   <tr
//                     key={`${client.name}-${idx}`}
//                     className="align-top cursor-pointer [&>td]:cursor-pointer"
//                     onClick={() => window.location.href = "/profile"}
//                   >
//                     {/* Client Name */}
//                     <td className="px-[15px] py-5">
//                       <div className="flex flex-col gap-1">
//                         <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                           {client.name}
//                         </span>
//                         <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">
//                           {client.age}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Date Created */}
//                     <td className="px-[15px] py-5">
//                       <span className="text-[#A1A1A1] text-[12px] font-normal leading-[126%] tracking-[-0.24px]">
//                         {client.dateCreated}
//                       </span>
//                     </td>

//                     {/* Reference code */}
//                     <td className="px-[15px] py-5">
//                       <div className="flex items-center gap-[5px]">
//                         <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                           {client.referenceCode}
//                         </span>
//                         <Image src="/icons/hugeicons_copy-02.svg" alt="copy" width={15} height={15} className="cursor-pointer"
//                           onClick={() => copyToClipboard(client.referenceCode)}
//                         />
//                       </div>
//                     </td>

//                     {/* Current Plan */}
//                     <td className="px-[15px] py-5">
//                       <div className="flex flex-col gap-1">
//                         <span className="text-[#3FAF58] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                           {client.planStatus}
//                         </span>
//                         <span className="text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">{client.planType}</span>
//                         <div className="flex gap-[5px]">
//                           <p className="text-[#308BF9] cursor-pointer font-semibold text-[10px] leading-[110%] tracking-[-0.2px]">
//                             View Plan
//                           </p>
//                           <Image src="/icons/right button.svg" width={10} height={10} alt="right button" className="cursor-pointer" />
//                         </div>
//                       </div>
//                     </td>

//                     {/* Last Logged */}
//                     <td className="px-[15px] py-5">
//                       <p className="text-[12px] text-[#252525] font-semibold tracking-[-0.24] leading-[126%]">
//                         {client.lastLogged}
//                       </p>
//                     </td>

//                     {/* Daily Status */}
//                     {showDailyStatusHeader && (
//                       <td className="px-[15px] py-5">

//                         <div className="flex justify-center gap-5">
//                           <div>
//                             <div
//                               className="w-[179px] flex justify-center items-center rounded-[20px] px-2 py-2.5"
//                               style={{ backgroundColor: client.metabolismBg }}
//                             >
//                               <p
//                                 className="text-[12px] font-semibold tracking-[-0.24px] leading-[126%]"
//                                 style={{ color: client.metabolismColor }}
//                               >
//                                 {client.metabolismStatus}
//                               </p>
//                             </div>
//                           </div>
//                           <div className="flex flex-col gap-1">
//                             <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                               {client.dietGoal}
//                             </span>
//                             <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">
//                               {client.dietGoalDate}
//                             </span>
//                           </div>
//                         </div>

//                       </td>
//                     )}

//                     {/* Plans completed */}
//                     {showDailyStatusHeader && (
//                       <td className="text-center px-[15px] py-5">

//                         <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">
//                           {client.plansCompleted}
//                         </span>

//                       </td>
//                     )}

//                     {testAssigned && (
//                       <td className="text-center px-[15px] py-5">
//                         <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">
//                           {client.testAssigned}
//                         </span>
//                       </td>
//                     )}


//                     {/* Actions */}
//                     <td className="px-[15px] py-5">
//                       <div className="py-2.5 flex gap-5">
//                         <Image src="/icons/hugeicons_message-02.svg" alt="message" width={20} height={20} className="cursor-pointer" />
//                         <Image src="/icons/hugeicons_view.svg" alt="view" width={20} height={20} className="cursor-pointer" />
//                       </div>
//                       <div />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }















"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect  } from "react";
import { UserProfile } from "./user-profile";
import { toast } from "sonner";
import {
  selectClients,
  getClientsForDietician
} from "../store/clientSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ClientTable({ showUserProfile = true, showDailyStatusHeader = true, testAssigned = true, 
  clients: clientsList
}) {

  console.log("clientsList18:-", clientsList);

  const [search, setSearch] = useState("");

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch (error) {
      return "N/A";
    }
  };

  // Helper function to determine plan status
  const getPlanStatus = (plansCount) => {
    if (!plansCount) return "No Plan";
    return plansCount.active > 0 ? "Active" : "Inactive";
  };

  // Helper function to get the most relevant plan
  const getMostRelevantPlan = (client) => {
    if (!client.plans_summary) return null;

    // Get all plans from all statuses
    const allPlans = [
      ...(client.plans_summary.active || []),
      ...(client.plans_summary.not_started || []),
      ...(client.plans_summary.completed || [])
    ];

    if (allPlans.length === 0) return null;

    // Sort by start date (most recent first) as default
    const sortedPlans = allPlans.sort((a, b) => 
      new Date(b.plan_start_date || 0) - new Date(a.plan_start_date || 0)
    );

    // Prioritize active plans first
    const activePlans = client.plans_summary.active || [];
    if (activePlans.length > 0) {
      return activePlans.sort((a, b) => 
        new Date(b.plan_start_date || 0) - new Date(a.plan_start_date || 0)
      )[0];
    }

    // Then not started plans
    const notStartedPlans = client.plans_summary.not_started || [];
    if (notStartedPlans.length > 0) {
      return notStartedPlans.sort((a, b) => 
        new Date(b.plan_start_date || 0) - new Date(a.plan_start_date || 0)
      )[0];
    }

    // Finally completed plans
    return sortedPlans[0];
  };

  // Helper function to calculate plan duration and type
  const getPlanType = (activePlan) => {
    if (!activePlan) return "No plan";
    
    const startDate = activePlan.plan_start_date;
    const endDate = activePlan.plan_end_date;
    
    if (!startDate || !endDate) return "Custom plan";
    
    try {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      // Calculate difference in days
      const timeDiff = end.getTime() - start.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // +1 to include both start and end days
      
      if (dayDiff <= 0) return "Invalid dates";
      
      // Convert to months and days for better display
      const months = Math.floor(dayDiff / 30);
      const days = dayDiff % 30;
      
      if (months > 0) {
        return days > 0 ? `${months}-month ${days}-day plan` : `${months}-month plan`;
      } else {
        return `${dayDiff}-day plan`;
      }
    } catch (error) {
      return "Custom plan";
    }
  };

  // Transform API data to match your table structure
  const transformClientData = (apiData) => {
    if (!apiData || !Array.isArray(apiData)) return [];

    return apiData.map(client => {
      // Get the most relevant plan
      const relevantPlan = getMostRelevantPlan(client);
      
      return {
        name: client.profile_name || "N/A",
        age: `${client.age || "N/A"} years, ${client.gender || "N/A"}`,
        dateCreated: formatDate(client.dttm),
        referenceCode: client.profile_id || "N/A",
        planStatus: getPlanStatus(client.plans_count),
        planType: getPlanType(relevantPlan),
        lastLogged: "",
        metabolismStatus: "",
        metabolismColor: "#DA5747",
        metabolismBg: "#FFEDED",
        dietGoal: "",
        dietGoalDate: formatDate(client.dttm),
        plansCompleted: client.plans_count?.completed || 0,
        testAssigned: 23,
        // Keep original API data for reference
        originalData: client,
        image:client.profile_image_url
      };
    });
  };

  // Use the transformed data
  const clients = useMemo(() => {
    return transformClientData(clientsList);
  }, [clientsList]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Reference code copied!");
    }).catch(err => {
      toast.error("Failed to copy reference code");
      console.error('Failed to copy: ', err);
    });
  };

  const filteredClients = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter(c => c.name.toLowerCase().includes(q));
  }, [search, clients]);

  return (
    <>
      {/* Show the same search bar header; on /clients path this renders the client search */}
      {showUserProfile && (
        <div className="">
          <UserProfile searchQuery={search} onSearchChange={setSearch} />
        </div>
      )}

      <div>
        <div className="rounded-[10px] overflow-hidden">
          <table className="w-full bg-[#FFFFFF]">
            <thead className="bg-[#F0F0F0]">
              <tr>
                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Client Name</p></th>
                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Date Created</p></th>
                {/* <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Reference code</p></th> */}
                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Current Plan</p></th>
                {/* <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Last Logged</p></th> */}
                {/* {showDailyStatusHeader && (
                  <th className="px-[15px] pt-5 pb-[5px] text-center">

                    <div className="flex flex-col items-center gap-[15px]">
                      <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Daily Status</p>
                      <div className="flex justify-center w-[333px] items-center py-0.5 gap-5 bg-[#D9D9D9] rounded-[7px]">
                        <p className="text-[#535359] text-center font-normal text-[12px] leading-[110%] tracking-[-0.24px]">Metabolism Status</p>
                        <p className="text-[#535359] text-center font-normal text-[12px] leading-[110%] tracking-[-0.24px]">Diet Goal</p>
                      </div>
                    </div>

                  </th>
                )} */}


                {showDailyStatusHeader && (
                  <th className="px-[15px] pt-5 pb-[5px] text-left">

                    <p className="text-[#535359] text-center font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Plans completed</p>

                  </th>
                )}

                {testAssigned && (
                  <th className="px-[15px] pt-5 pb-[5px] text-left">
                    <p className="text-[#535359] text-center font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Test Assigned</p>
                  </th>
                )}
                <th className="px-[15px] pt-5 pb-[5px] text-left">
                  <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Actions</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredClients.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-[15px] py-8 text-center">
                    <p className="text-[#A1A1A1] text-sm">No clients found.</p>
                  </td>
                </tr>
              ) : (
                filteredClients.map((client, idx) => (
                  <tr
                    key={`${client.name}-${idx}`}
                    className="align-top cursor-pointer [&>td]:cursor-pointer"
                    onClick={() => window.location.href = "/profile"}
                  >
                    {/* Client Name */}
                    <td className="px-[15px] py-5">
                      <div className="flex gap-[15px]">
<div className="rounded-full bg-[#F0F0F0] p-2">
 <Image
    src={client.image || "/icons/hugeicons_user-circle-02.svg"}
    alt={client.name || "profile"}
    width={24}
    height={24}
    className="rounded-full object-cover"
    unoptimized={false} 
  />
</div>

                      <div className="flex flex-col gap-1">
                        <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                          {client.name}
                        </span>
                        <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">
                          {client.age}
                        </span>
                      </div>
                      </div>
                    </td>

                    {/* Date Created */}
                    <td className="px-[15px] py-5">
                      <span className="text-[#A1A1A1] text-[12px] font-normal leading-[126%] tracking-[-0.24px]">
                        {client.dateCreated}
                      </span>
                    </td>

                    {/* Reference code */}
                    {/* <td className="px-[15px] py-5">
                      <div className="flex items-center gap-[5px]">
                        <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                          {client.referenceCode}
                        </span>
                        <Image src="/icons/hugeicons_copy-02.svg" alt="copy" width={15} height={15} className="cursor-pointer"
                          onClick={() => copyToClipboard(client.referenceCode)}
                        />
                      </div>
                    </td> */}

                    {/* Current Plan */}
                    <td className="px-[15px] py-5">
                      <div className="flex flex-col gap-1">
                        <span className="text-[#3FAF58] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                          {client.planStatus}
                        </span>
                        <span className="text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">{client.planType}</span>
                        <div className="flex gap-[5px]">
                          <p className="text-[#308BF9] cursor-pointer font-semibold text-[10px] leading-[110%] tracking-[-0.2px]">
                            View Plan
                          </p>
                          <Image src="/icons/right button.svg" width={10} height={10} alt="right button" className="cursor-pointer" />
                        </div>
                      </div>
                    </td>

                    {/* Last Logged */}
                    {/* <td className="px-[15px] py-5">
                      <p className="text-[12px] text-[#252525] font-semibold tracking-[-0.24] leading-[126%]">
                        {client.lastLogged}
                      </p>
                    </td> */}

                    {/* Daily Status */}
                    {/* {showDailyStatusHeader && (
                      <td className="px-[15px] py-5">

                        <div className="flex justify-center gap-5">
                          <div>
                            <div
                              className="w-[179px] flex justify-center items-center rounded-[20px] px-2 py-2.5"
                              style={{ backgroundColor: client.metabolismBg }}
                            >
                              <p
                                className="text-[12px] font-semibold tracking-[-0.24px] leading-[126%]"
                                style={{ color: client.metabolismColor }}
                              >
                                {client.metabolismStatus}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                              {client.dietGoal}
                            </span>
                            <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">
                              {client.dietGoalDate}
                            </span>
                          </div>
                        </div>

                      </td>
                    )} */}

                    {/* Plans completed */}
                    {showDailyStatusHeader && (
                      <td className="text-center px-[15px] py-5">

                        <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">
                          {client.plansCompleted}
                        </span>

                      </td>
                    )}

                    {testAssigned && (
                      <td className="text-center px-[15px] py-5">
                        <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">
                          {client.testAssigned}
                        </span>
                      </td>
                    )}


                    {/* Actions */}
                    <td className="px-[15px] py-5">
                      <div className="py-2.5 flex gap-5">
                        <Image src="/icons/hugeicons_message-02.svg" alt="message" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/hugeicons_view.svg" alt="view" width={20} height={20} className="cursor-pointer" />
                      </div>
                      <div />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}