// "use client"
// import Image from "next/image"
// import { ResultEvaluation } from "./result-evaluation"
// import { useSelector } from "react-redux"

// export default function HistoryPlan() {
    
//   const clientProfile = useSelector((state) => state.clientProfile?.data);
//   console.log("clientProfilehistory09:-", clientProfile);
//     return (
//         <>

//             <div className="w-full flex flex-col rounded-[10px] bg-white">

//                 <div className=" flex justify-between items-start pt-[30px] pl-[30px] pr-[25px] ">
//                     <div className="flex justify-between ">
//                         <div className="flex flex-col gap-[15px] ">
//                             <div className="flex gap-5  justify-between items-center ">
//                                 <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">1-Month Plan</span>
//                                 <span className="items-end text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24]">05 July-05 Aug</span>
//                             </div>
//                             <div className="flex gap-[3px]">
//                                 <Image
//                                     src="/icons/hugeicons_stop-watch.svg"
//                                     alt="hugeicons_stop-watch"
//                                     width={12}
//                                     height={12}
//                                 />

//                                 <span className="text-[#DA5747] text-[12px] font-normal leading-normal tracking-[-0.24px]">Status Pending</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex gap-5 ">
//                         <div className="flex gap-1.5 px-5 py-[15px] items-center border border-[#D9D9D9] bg-white rounded-[10px] cursor-alias">
//                             <Image
//                                 src="/icons/hugeicons_file-export.svg"
//                                 alt="export icon"
//                                 width={20}
//                                 height={20}
//                             />
//                             <span className="text-[12px] font-semibold text-black">
//                                 Export Data
//                             </span>
//                         </div>


//                         <div className="flex flex-wrap gap-1.5 px-5 py-[15px] items-center border border-[#D9D9D9] bg-[#308BF9] rounded-[10px] cursor-pointer">
//                             <Image
//                                 src="/icons/hugeicons_rotate-01.svg"
//                                 alt="hugeicons_rotate-01"
//                                 width={20}
//                                 height={20}
//                             />
//                             <span className="text-[12px] font-semibold text-white">
//                                 Repeat Plan
//                             </span>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>



//                 <div className="mx-[15px] mt-4  rounded-[15px] bg-[#F5F7FA]">
//                     <div className="flex flex-col gap-2.5 pt-[21px] pl-[30px]">
//                         <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">Plan Summary</span>
//                         <div className="flex gap-[3px]">
//                             <Image
//                                 src="/icons/hugeicons_stop-watch.svg"
//                                 alt="hugeicons_stop-watch"
//                                 width={12}
//                                 height={12}
//                             />
//                             <span className="text-[#DA5747] text-[12px] font-normal leading-normal tracking-[-0.24px]">Pending (1/1)</span>
//                         </div>
//                     </div>
//                     <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>


//                     <div className="flex flex-col gap-5">
//                         <div className="flex gap-[5px] pl-[30px] ">
//                             <Image
//                                 src="/icons/hugeicons_award-01.svg"
//                                 alt="hugeicons_award-01.svg"
//                                 width={15}
//                                 height={15}
//                             />
//                             <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[0.24px]">Goal</span>
//                         </div>


//                         <div className="flex justify-between pl-[50px] pr-[99px]">
//                             <div className="flex flex-col gap-5">
//                                 <span className="text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Weight Loss</span>

//                                 <div className="flex items-center gap-5">
//                                     <div className="flex flex-col gap-2.5">
//                                         <span className="text-[#252525] text-[20px] font-bold leading-[126%] tracking-[-0.4px]">75Kg</span>
//                                         <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">Past stat</span>
//                                     </div>


//                                     <div className="flex items-center h-px my-[7px] w-[205px] border border-[#E1E6ED]"></div>



//                                     <div className="flex flex-col gap-2.5">
//                                         <span className="text-[#252525] text-[20px] font-bold leading-[126%] tracking-[-0.4px]">70Kg</span>
//                                         <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">Target stat</span>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className="flex gap-5 px-5 py-[13px] border border-[#E1E6ED] bg-white rounded-[10px]">
//                                 <div className="w-[64px] flex flex-col gap-[5px]">
//                                     <div className="flex flex-col gap-2.5">
//                                         <span className="text-[#535359] text-[10px] font-normal tracking-[-0.2px]">After sat</span>
//                                         <div className="flex justify-end">
//                                             <Image
//                                                 src="/icons/hugeicons_edit-04.svg"
//                                                 alt="hugeicons_edit-04.svg"
//                                                 width={20}
//                                                 height={20}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="  border border-[#E1E6ED]"></div>
//                                 </div>

//                                 <p className="flex items-center text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.3px]">Update current stats of the goal. Once you update it will <br></br> be made visible to your client.</p>
//                             </div>
//                         </div>


//                         <div className="flex flex-wrap justify-end pr-10">
//                             <div className="flex items-center px-5 py-[15px] rounded-[10px] bg-[#D9D9D9] ">
//                                 <span className="text-[#535359] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Update</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>


//                     <div className="flex flex-col gap-[22px] mb-[30px]">
//                         <div className="flex gap-[5px] pl-[30px] ">
//                             <Image
//                                 src="/icons/hugeicons_sparkles.svg"
//                                 alt="hugeicons_sparkles.svg"
//                                 width={15}
//                                 height={15}
//                             />
//                             <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[0.24px]">Approach</span>
//                         </div>



//                         <div className="flex gap-[5px] ml-[50px]">
//                             <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 Low
//                             </div>

//                             <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 High Protein
//                             </div>

//                             <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 Balanced Fiber
//                             </div>

//                             <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 Calorie Deficit
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//                 <div className=" flex justify-between items-start pt-[70px] pl-[30px] pr-[25px] ">
//                     <div className="flex justify-between ">
//                         <div className="flex flex-col gap-[10px] ">
//                             <div className="flex gap-5  justify-between items-center ">
//                                 <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">Client Log</span>

//                             </div>
//                             <div className="flex gap-[3px]">
//                                 <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Last Logged 05 Jul, 12:30pm</span>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>

//                 <div className="flex flex-col gap-[15px]">

//                     <div className="flex gap-[442px]">
//                         <div className="flex gap-[5px] pl-[30px] ">
//                             <Image
//                                 src="/icons/hugeicons_rice-bowl-01.svg"
//                                 alt="hugeicons_rice-bowl-01"
//                                 width={15}
//                                 height={15}
//                             />
//                             <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[0.24px]">Test Log</span>
//                         </div>

//                         <div className="flex gap-[5px] pl-[30px] ">
//                             <Image
//                                 src="/icons/hugeicons_rice-bowl-01.svg"
//                                 alt="hugeicons_rice-bowl-01"
//                                 width={15}
//                                 height={15}
//                             />
//                             <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[0.24px]">Meal Log</span>
//                         </div>
//                     </div>


//                     <div className="flex gap-5 mx-5">
//                         <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
//                            <div className="flex items-start flex-col gap-[27px]">
                         
//                                 <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Taken</span>
                             

//                               <div className="flex flex-col gap-[5px] ">
//                                  <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">14</span>
//                                  <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of 15 tests</span>
//                               </div>
//                            </div>
                           
//                         </div>

//                       <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
//                            <div className="flex items-start flex-col gap-[27px]">
                         
//                                 <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Taken</span>
                             

//                               <div className="flex flex-col gap-[5px] ">
//                                  <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">14</span>
//                                  <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of 15 tests</span>
//                               </div>
//                            </div>
                           
//                         </div>


//                       <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
//                            <div className="flex items-start flex-col gap-[27px]">
                         
//                                 <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Taken</span>
                             

//                               <div className="flex flex-col gap-[5px] ">
//                                  <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">14</span>
//                                  <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of 15 tests</span>
//                               </div>
//                            </div>
                           
//                         </div>


//                         <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
//                            <div className="flex items-start flex-col gap-[27px]">
                         
//                                 <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Taken</span>
                             

//                               <div className="flex flex-col gap-[5px] ">
//                                  <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">14</span>
//                                  <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of 15 tests</span>
//                               </div>
//                            </div>
                           
//                         </div>
//                     </div>
//                 </div>



//  <ResultEvaluation/>
//             </div>
//         </>
//     )
// }











"use client"
import Image from "next/image"
import { ResultEvaluation } from "./result-evaluation"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchClientLog } from "../services/authService"
import { cookieManager } from "../lib/cookies"

export default function HistoryPlan() {
    
  const clientProfile = useSelector((state) => state.clientProfile?.data);
  console.log("clientProfile317:-", clientProfile);
  const [clientLogData, setClientLogData] = useState(null);
  console.log("clientLogData315:-", clientLogData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  const getProfileIdFromURL = () => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('profile_id');
    }
    return null;
  };

  // Get dietician_id from cookies
  const getDieticianId = () => {
    return cookieManager.get('dietician');
  };

  // Fetch client log data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dieticianId = getDieticianId();
        const profileId = getProfileIdFromURL();
        
        if (!dieticianId || !profileId) {
          throw new Error("Missing dietician ID or profile ID");
        }

        const response = await fetchClientLog(dieticianId, profileId);
        setClientLogData(response);
      } catch (err) {
        console.error("Error fetching client log:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);




  // Get plans from all statuses
  const allPlans = [
    ...(clientProfile?.plans_summary?.active || []),
    ...(clientProfile?.plans_summary?.completed || []),
    ...(clientProfile?.plans_summary?.not_started || [])
  ];
  
  // Use the first plan available (you can modify this logic as needed)
  const currentPlan = allPlans[0];
  
  // Calculate month difference for plan duration

const getPlanDuration = () => {
  if (!currentPlan?.plan_start_date || !currentPlan?.plan_end_date) return "1-Month Plan";
  
  const startDate = new Date(currentPlan.plan_start_date);
  const endDate = new Date(currentPlan.plan_end_date);
  
  // Calculate total days difference
  const daysDiff = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
  
  // Handle plans less than 30 days
  if (daysDiff < 30) {
    return `${daysDiff}-Day Plan`;
  }
  
  // For plans 30 days or more, check if it's exactly 1 month or more
  if (daysDiff <= 31) {
    return "1-Month Plan";
  } else {
    return "More than 1 month";
  }
};


  // Format date range
  const getFormattedDateRange = () => {
    if (!currentPlan?.plan_start_date || !currentPlan?.plan_end_date) return "05 July-05 Aug";
    
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short' 
      });
    };
    
    return `${formatDate(currentPlan.plan_start_date)}-${formatDate(currentPlan.plan_end_date)}`;
  };

  // Get status text based on plan status
  const getStatusText = () => {
    if (!currentPlan?.status) return "Pending";
    
    const statusMap = {
      'active': 'Active',
      'completed': 'Completed', 
      'not_started': 'Not Started',
      'pending': 'Pending'
    };
    
    return statusMap[currentPlan.status] || 'Pending';
  };

  // Get status color based on plan status
const getStatusColor = () => {
  if (!currentPlan?.status) return "#DA5747";
  
  const colorMap = {
    'active': '#3FAF58',      // Green for active
    'completed': '#535359',   // Gray for completed
    'not_started': '#DA5747', // Red for not started
    'pending': '#DA5747'      // Red for pending (same as not_started)
  };
  
  return colorMap[currentPlan.status] || '#DA5747';
};


 const getPlanProgress = () => {
    if (!clientProfile?.plans_count) return "(1/1)";
    
    const { active, completed, not_started, total } = clientProfile.plans_count;
    
    // For active status: show active/total
    if (currentPlan?.status === 'active') {
      return `(${active})`;
    }
    // For completed status: show completed/total
    else if (currentPlan?.status === 'completed') {
      return `(${completed})`;
    }
    // For not_started status: show not_started/total
    else if (currentPlan?.status === 'not_started') {
      return `(${not_started})`;
    }
    // Default fallback
    else {
      return `(${active || 0}/${total || 1})`;
    }
  };



    return (
        <>

            <div className="w-full flex flex-col rounded-[10px] bg-white">

                <div className=" flex justify-between items-start pt-[30px] pl-[30px] pr-[25px] ">
                    <div className="flex justify-between ">
                        <div className="flex flex-col gap-[15px] ">
                            <div className="flex gap-5  justify-between items-center ">
                                <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">
                                  {getPlanDuration()}
                                </span>
                                <span className="items-end text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24]">
                                  {getFormattedDateRange()}
                                </span>
                            </div>
                           <div className="flex gap-[3px]">
  {/* <Image
    src="/icons/hugeicons_stop-watch.svg"
    alt="hugeicons_stop-watch"
    width={12}
    height={12}
  /> */}
  <span className="text-[12px] font-normal leading-normal tracking-[-0.24px]" style={{color: getStatusColor()}}>
    Status {getStatusText()}
  </span>
</div>
                        </div>
                    </div>

                    {/* <div className="flex gap-5 ">
                        <div className="flex gap-1.5 px-5 py-[15px] items-center border border-[#D9D9D9] bg-white rounded-[10px] cursor-alias">
                            <Image
                                src="/icons/hugeicons_file-export.svg"
                                alt="export icon"
                                width={20}
                                height={20}
                            />
                            <span className="text-[12px] font-semibold text-black">
                                Export Data
                            </span>
                        </div>


                        <div className="flex flex-wrap gap-1.5 px-5 py-[15px] items-center border border-[#D9D9D9] bg-[#308BF9] rounded-[10px] cursor-pointer">
                            <Image
                                src="/icons/hugeicons_rotate-01.svg"
                                alt="hugeicons_rotate-01"
                                width={20}
                                height={20}
                            />
                            <span className="text-[12px] font-semibold text-white">
                                Repeat Plan
                            </span>
                        </div>
                    </div> */}

                </div>

                <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>



                <div className="mx-[15px] mt-4  rounded-[15px] bg-[#F5F7FA]">
                    <div className="flex flex-col gap-2.5 pt-[21px] pl-[30px]">
                        <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">Plan Summary</span>
                        <div className="flex gap-[3px]">
                            {/* <Image
                                src="/icons/hugeicons_stop-watch.svg"
                                alt="hugeicons_stop-watch"
                                width={12}
                                height={12}
                            /> */}
                          <span className="text-[12px] font-normal leading-normal tracking-[-0.24px]" style={{color: getStatusColor()}}>
  {getStatusText()} {getPlanProgress()}
</span>
                        </div>
                    </div>
                    <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>


                    <div className="flex flex-col gap-5">
                        <div className="flex gap-[5px] pl-[30px] ">
                            <Image
                                src="/icons/hugeicons_award-01.svg"
                                alt="hugeicons_award-01.svg"
                                width={15}
                                height={15}
                            />
                            <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[0.24px]">Goal</span>
                        </div>


                        <div className="flex justify-between pl-[50px] pr-[99px]">
                            <div className="flex flex-col gap-5">
                                <span className="text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                  {currentPlan?.goal ? JSON.parse(currentPlan.goal)[0]?.name || 'Weight Loss' : 'Weight Loss'}
                                </span>

                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col gap-2.5">
                                        <span className="text-[#252525] text-[20px] font-bold leading-[126%] tracking-[-0.4px]">
                                          {currentPlan?.goal ? JSON.parse(currentPlan.goal)[0]?.current_stat || '-' : '-'}
                                        </span>
                                        <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">Past stat</span>
                                    </div>


                                    <div className="flex items-center h-px my-[7px] w-[205px] border border-[#E1E6ED]"></div>



                                    <div className="flex flex-col gap-2.5">
                                        <span className="text-[#252525] text-[20px] font-bold leading-[126%] tracking-[-0.4px]">
                                          {currentPlan?.goal ? JSON.parse(currentPlan.goal)[0]?.target_stat || '-' : '-'}
                                        </span>
                                        <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">Target stat</span>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="flex gap-5 px-5 py-[13px] border border-[#E1E6ED] bg-white rounded-[10px]">
                                <div className="w-[64px] flex flex-col gap-[5px]">
                                    <div className="flex flex-col gap-2.5">
                                        <span className="text-[#535359] text-[10px] font-normal tracking-[-0.2px]">After sat</span>
                                        <div className="flex justify-end">
                                            <Image
                                                src="/icons/hugeicons_edit-04.svg"
                                                alt="hugeicons_edit-04.svg"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                    <div className="  border border-[#E1E6ED]"></div>
                                </div>

                                <p className="flex items-center text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.3px]">Update current stats of the goal. Once you update it will <br></br> be made visible to your client.</p>
                            </div> */}
                        </div>


                        {/* <div className="flex flex-wrap justify-end pr-10">
                            <div className="flex items-center px-5 py-[15px] rounded-[10px] bg-[#D9D9D9] ">
                                <span className="text-[#535359] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Update</span>
                            </div>
                        </div> */}
                    </div>

                    <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>


                    <div className="flex flex-col gap-[22px] mb-[30px]">
                        <div className="flex gap-[5px] pl-[30px] ">
                            <Image
                                src="/icons/hugeicons_sparkles.svg"
                                alt="hugeicons_sparkles.svg"
                                width={15}
                                height={15}
                            />
                            <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[0.24px]">Approach</span>
                        </div>



                        <div className="flex gap-[5px] ml-[50px]">
                            {currentPlan?.approach ? (
                                currentPlan.approach.split(',').map((approach, index) => (
                                    <div 
                                        key={index}
                                        className={`px-5 py-[5px] rounded-[20px] bg-white text-[12px] font-semibold leading-[110%] tracking-[-0.24px] ${
                                            index === 0 ? 'text-[#252525]' : 'text-[#535359]'
                                        }`}
                                    >
                                        {approach.trim()}
                                    </div>
                                ))
                            ) : (
                                // Fallback to your original hardcoded values
                                <>
                                    <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                        -
                                    </div>

                                    <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                        -
                                    </div>

                                    <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                        -
                                    </div>

                                    <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                        -
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>



                <div className=" flex justify-between items-start pt-[70px] pl-[30px] pr-[25px] ">
                    <div className="flex justify-between ">
                        <div className="flex flex-col gap-[10px] ">
                            <div className="flex gap-5  justify-between items-center ">
                                <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">Client Log</span>

                            </div>
                            {/* <div className="flex gap-[3px]">
                                <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Last Logged 05 Jul, 12:30pm</span>
                            </div> */}
                        </div>
                    </div>

                </div>

                <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>

                <div className="flex flex-col gap-[15px]">

                    <div className="flex gap-[442px]">
                        <div className="flex gap-[5px] pl-[30px] ">
                            <Image
                                src="/icons/hugeicons_note-01.svg"
                                alt="hugeicons_note-01.svg"
                                width={15}
                                height={15}
                            />
                            <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[0.24px]">Test Log</span>
                        </div>

                        <div className="flex gap-[5px] pl-[30px] ">
                            <Image
                                src="/icons/hugeicons_rice-bowl-01.svg"
                                alt="hugeicons_rice-bowl-01"
                                width={15}
                                height={15}
                            />
                            <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[0.24px]">Meal Log</span>
                        </div>
                    </div>


                    <div className="flex gap-5 mx-5">
                        <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
                           <div className="flex items-start flex-col gap-[27px]">
                         
                                <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Taken</span>
                             

                              <div className="flex flex-col gap-[5px] ">
                                 <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">{clientLogData?.data?.[0]?.test_days_till_today || "0"}</span>
                                 <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of {clientLogData?.data?.[0]?.tests_total || "-"} tests</span>
                              </div>
                           </div>
                           
                        </div>

                      <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
                           <div className="flex items-start flex-col gap-[27px]">
                         
                                <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Missed</span>
                             

                              <div className="flex flex-col gap-[5px] ">
                                 <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">{clientLogData?.data?.[0]?.missed_days_till_today || "0"}</span>
                                 <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of {clientLogData?.data?.[0]?.tests_total || "-"} tests</span>
                              </div>
                           </div>
                           
                        </div>


                      <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
                           <div className="flex items-start flex-col gap-[27px]">
                         
                                <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Days Logged</span>
                             

                              <div className="flex flex-col gap-[5px] ">
                                 <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">{clientLogData?.data?.[0]?.food_log_days || "0"}</span>
                                 <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of {clientLogData?.data?.[0]?.tests_total || "-"} tests</span>
                              </div>
                           </div>
                           
                        </div>


                        <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
                           <div className="flex items-start flex-col gap-[27px]">
                         
                                <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Days Missed</span>
                             

                              <div className="flex flex-col gap-[5px] ">
                                 <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">{clientLogData?.data?.[0]?.food_log_missed_days || "0"}</span>
                                 <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of {clientLogData?.data?.[0]?.tests_total || "-"} tests</span>
                              </div>
                           </div>
                           
                        </div>
                    </div>
                </div>



 <ResultEvaluation/>
            </div>
        </>
    )
}