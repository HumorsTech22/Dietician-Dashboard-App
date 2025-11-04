
// "use client"

// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function DietPlanCreated() {
//   const [activeDay, setActiveDay] = useState(0);
//   const [days, setDays] = useState([]);
//   const [currentDate, setCurrentDate] = useState(new Date());

//   // Function to generate days array based on current date
//   const generateDays = (startDate) => {
//     const newDays = [];
//     for (let i = 0; i < 5; i++) {
//       const date = new Date(startDate);
//       date.setDate(startDate.getDate() + i);

//       const dayNumber = i + 1;
//       const formattedDate = date.toLocaleDateString('en-US', {
//         day: '2-digit',
//         month: 'short'
//       });

//       newDays.push({
//         id: i,
//         day: `Day ${dayNumber}`,
//         date: formattedDate,
//         fullDate: new Date(date)
//       });
//     }
//     return newDays;
//   };

//   // Initialize days on component mount
//   useEffect(() => {
//     setDays(generateDays(currentDate));
//     setActiveDay(0);
//   }, [currentDate]);

//   // Function to navigate to previous days
//   const handlePreviousDays = () => {
//     const newDate = new Date(currentDate);
//     newDate.setDate(currentDate.getDate() - 5);
//     setCurrentDate(newDate);
//   };

//   // Function to navigate to next days
//   const handleNextDays = () => {
//     const newDate = new Date(currentDate);
//     newDate.setDate(currentDate.getDate() + 5);
//     setCurrentDate(newDate);
//   };

//   return (
//     <>
//       <div className='w-full max-w-full min-w-0 overflow-x-hidden relative flex flex-col gap-[310px]'>

//         <div className="">
//           <div className="flex justify-between pl-[15px] pr-[20px]">
//             <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Diet Plan</p>
//           </div>

//           <div className="flex flex-col gap-[15px]">
//             <div className="w-full  border-b border-[#E1E6ED]"></div>

//             <div className="flex gap-5">
//               <div className="w-fit flex justify-center">
//                 <div className="rounded-l-[10px] border border-[#D9D9D9] pl-4 py-2 pr-2.5 bg-[#F0F0F0] text-center">
//                   <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
//                     Diet Changes
//                   </p>
//                 </div>
//                 <div className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4 py-2 pr-2.5 bg-white">
//                   <p className="cursor-pointer text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
//                     Daily
//                   </p>
//                   <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" />
//                 </div>
//               </div>

//               <div className="w-fit flex justify-center">
//                 <div className="rounded-l-[10px] border border-[#D9D9D9] pl-4 py-2 pr-2.5 bg-[#F0F0F0] text-center">
//                   <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
//                     Type
//                   </p>
//                 </div>
//                 <div className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4 py-2 pr-2.5 bg-white">
//                   <p className="cursor-pointer text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
//                     Not specified
//                   </p>
//                   <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" />
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-9 bg-[#F5F7FA] rounded-[15px]">
//               <div className="flex items-center bg-[#E1E6ED] rounded-[15px] border-4 border-[#F5F7FA]">

//                 <div className="flex justify-between w-[170px] py-[30px] pl-[26px]">
//                   <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Select a day</span>
//                   <IoIosArrowBack
//                     className="text-[#252525] cursor-pointer"
//                     onClick={handlePreviousDays}
//                   />
//                 </div>

//                 <div className="flex items-center">
//                   {days.map((day, index) => (
//                     <div key={day.id} className="flex items-center">
//                       <div
//                         className={`flex flex-col w-[165px] gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer ${activeDay === day.id
//                           ? 'bg-[#308BF9]'
//                           : 'bg-transparent'
//                           }`}
//                         onClick={() => setActiveDay(day.id)}
//                       >
//                         <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${activeDay === day.id ? 'text-white' : 'text-[#252525]'
//                           }`}>
//                           {day.day}
//                         </span>
//                         <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${activeDay === day.id ? 'text-white' : 'text-[#252525]'
//                           }`}>
//                           {day.date}
//                         </span>
//                       </div>

//                       {index < days.length - 1 && (
//                         <div className="border-white border-r h-8 mx-2"></div>
//                       )}
//                     </div>
//                   ))}
//                   <IoIosArrowForward
//                     className="text-[#252525] ml-2 cursor-pointer"
//                     onClick={handleNextDays}
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2.5 ml-[30px]">
//                 <span className="text-[#252525] text-[12px] font-normal leading-normal tracking-[-0.24px]">Day 1</span>
//                 <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">08 May</span>
//               </div>




//               <div className="flex py-5 bg-white rounded-[15px] border-4 border-[#F5F7FA]">
//                 <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
//                   <div className="flex flex-col gap-2.5">
//                     <span className="text-[#252525] font-semibold leading-[110%] tracking-[-0.48px]">Wake up</span>
//                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">06:00-06:30AM</span>
//                   </div>

//                   <div className="w-[81px] py-1.5 px-2 rounded-[20px] bg-[#E1E6ED] text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                     2 food added
//                   </div>
//                 </div>

//                 <div className="flex flex-col py-5 pl-5 gap-[30px] border-l border-l-[#E1E6ED] flex-1">
//                   <div className="flex gap-5 justify-between">
//                     <div className="flex gap-5 items-start py-[5px]">
//                       <div className="flex items-center gap-1">
//                         <Image
//                           src="/icons/hugeicons_bubble-tea-02.svg"
//                           alt="hugeicons_bubble-tea-02"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">1</span>
//                       </div>
//                       <div className="bg-[#FFECEA] rounded-[21px] p-2 text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                         75% Filled
//                       </div>
//                     </div>

//                     <div className="flex gap-[33px] flex-1">
//                       <div className="flex-1">
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">220kcal</span>
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 cup (250 ml)</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                           </div>
//                         </div>

//                         <div className="relative flex items-center my-4">
//                           <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                           <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">or</span>
//                           <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                         </div>

//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Cinnamon water</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">220kcal</span>
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 cup (250 ml)</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer">
//                         <Image
//                           src="/icons/hugeicons_edit-03.svg"
//                           alt="hugeicons_edit-03"
//                           height={24}
//                           width={24}
//                         />
//                         <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">Edit</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex gap-5 justify-between">





//                     <div className="flex gap-5 items-start py-[5px]">
//                       <div className="flex items-center gap-1">
//                         <Image
//                           src="/icons/hugeicons_vegetarian-food.svg"
//                           alt="hugeicons_vegetarian-food.svg"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">2</span>
//                       </div>
//                       <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                         100% Filled
//                       </div>
//                     </div>




//                     <div className="flex gap-[33px] flex-1">
//                       <div className="flex-1">
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]"> Cooked Vegetables</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 bowl (250ml)</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">leafy green / fruit veg / beans</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>














//               <div className="flex py-5 bg-white rounded-[15px] border-4 border-[#F5F7FA]">
//                 <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
//                   <div className="flex flex-col gap-2.5">
//                     <span className="text-[#252525] font-semibold leading-[110%] tracking-[-0.48px]">Wake up</span>
//                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">06:00-06:30AM</span>
//                   </div>

//                   <div className="w-[81px] py-1.5 px-2 rounded-[20px] bg-[#E1E6ED] text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                     3 food added
//                   </div>
//                 </div>

//                 <div className="flex flex-col py-5 pl-5 gap-[30px] border-l border-l-[#E1E6ED] flex-1">
//                   <div className="flex gap-5 justify-between">
//                     <div className="flex gap-5 items-start py-[5px]">
//                       <div className="flex items-center gap-1">
//                         <Image
//                           src="/icons/hugeicons_dish-02.svg"
//                           alt="hugeicons_dish-02.svg"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">1</span>
//                       </div>


//                       <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                         100% Filled
//                       </div>
//                     </div>

//                     <div className="flex gap-[33px] flex-1">
//                       <div className="flex-1">
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Ragi porridge / Sattu / Oats /Cereals</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 bowl (250ml)</span>

//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">2 tsp soaked chia seeds</span>
//                           </div>
//                         </div>

//                         <div className="relative flex items-center my-4">
//                           <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                           <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">or</span>
//                           <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                         </div>

//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">North Indian BF with small portions</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 piece</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer">
//                         <Image
//                           src="/icons/hugeicons_edit-03.svg"
//                           alt="hugeicons_edit-03"
//                           height={24}
//                           width={24}
//                         />
//                         <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">Edit</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex gap-5 justify-between">





//                     <div className="flex gap-5 items-start py-[5px]">
//                       <div className="flex items-center gap-1">
//                         <Image
//                           src="/icons/hugeicons_vegetarian-food.svg"
//                           alt="hugeicons_vegetarian-food.svg"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">2</span>
//                       </div>
//                       <div className="bg-[#FFECEA] rounded-[21px] p-2 text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                         75% Filled
//                       </div>
//                     </div>




//                     <div className="flex gap-[33px] flex-1">
//                       <div className="flex-1">
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Boiled sprouts / grilled paneer</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 bowl (250ml)</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />

//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                   <div className="flex gap-5 justify-between">





//                     <div className="flex gap-5 items-start py-[5px]">
//                       <div className="flex items-center gap-1">
//                         <Image
//                           src="/icons/hugeicons_vegetarian-food.svg"
//                           alt="hugeicons_vegetarian-food.svg"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">3</span>
//                       </div>
//                       <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                         100% Filled
//                       </div>
//                     </div>




//                     <div className="flex gap-[33px] flex-1">
//                       <div className="flex-1">
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Low fat curd</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 bowl (250ml)</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />

//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>












//               <div className="flex py-5 bg-white rounded-[15px] border-4 border-[#F5F7FA]">
//                 <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
//                   <div className="flex flex-col gap-2.5">
//                     <span className="text-[#252525] font-semibold leading-[110%] tracking-[-0.48px]">Wake up</span>
//                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">06:00-06:30AM</span>
//                   </div>

//                   <div className="w-[81px] py-1.5 px-2 rounded-[20px] bg-[#E1E6ED] text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                     3 food added
//                   </div>
//                 </div>

//                 <div className="flex flex-col py-5 pl-5 gap-[30px] border-l border-l-[#E1E6ED] flex-1">
//                   <div className="flex gap-5 justify-between">
//                     <div className="flex gap-5 items-start py-[5px]">
//                       <div className="flex items-center gap-1">
//                         <Image
//                           src="/icons/hugeicons_dish-02.svg"
//                           alt="hugeicons_dish-02.svg"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">1</span>
//                       </div>


//                       <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                         100% Filled
//                       </div>
//                     </div>

//                     <div className="flex gap-[33px] flex-1">
//                       <div className="flex-1">
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Rice [regular/ basmati/ brown/ millets ]</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 bowl (250ml)</span>

//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">2 tsp soaked chia seeds</span>
//                           </div>
//                         </div>

//                         <div className="relative flex items-center my-4">
//                           <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                           <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">or</span>
//                           <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                         </div>

//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Wheat/ millet roti</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 piece</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">without ghee / oil</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer">
//                         <Image
//                           src="/icons/hugeicons_edit-03.svg"
//                           alt="hugeicons_edit-03"
//                           height={24}
//                           width={24}
//                         />
//                         <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">Edit</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex gap-5 justify-between">





//                     <div className="flex gap-5 items-start py-[5px]">
//                       <div className="flex items-center gap-1">
//                         <Image
//                           src="/icons/hugeicons_vegetarian-food.svg"
//                           alt="hugeicons_vegetarian-food.svg"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">2</span>
//                       </div>
//                       <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                         100% Filled
//                       </div>
//                     </div>




//                     <div className="flex gap-[33px] flex-1">
//                       <div className="flex-1">
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]"> Cooked Vegetables</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 bowl (250ml)</span>

//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">leafy green / fruit veg / beans</span>
//                           </div>
//                         </div>

//                         <div className="relative flex items-center my-4">
//                           <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                           <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">or</span>
//                           <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                         </div>

//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Raw salad / boiled veggies / tossed salad</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 piece</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">without ghee / oil</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5  rounded-[10px] py-[15px] px-5 cursor-pointer">

//                       </div>
//                     </div>
//                   </div>


//                   <div className="flex gap-5 justify-between">





//                     <div className="flex gap-5 items-start py-[5px]">
//                       <div className="flex items-center gap-1">
//                         <Image
//                           src="/icons/hugeicons_vegetarian-food.svg"
//                           alt="hugeicons_vegetarian-food.svg"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">3</span>
//                       </div>
//                       <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                         100% Filled
//                       </div>
//                     </div>




//                     <div className="flex gap-[33px] flex-1">
//                       <div className="flex-1">
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Boiled sprouts / grilled paneer</span>
//                           <div className="flex gap-[5px]">
//                             <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">1 bowl (250ml)</span>
//                             <Image
//                               src="/icons/hugeicons_information-circle.svg"
//                               alt="hugeicons_information-circle"
//                               width={12}
//                               height={12}
//                             />

//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>






//               <div className="flex bg-white rounded-[15px] pt-2 pr-2.5 border-4  border-[#F5F7FA]">
//                 {/* Left Column */}
//                 <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
//                   <div className="flex flex-col gap-2.5">
//                     <span className="text-[#252525] font-semibold leading-[110%] tracking-[-0.48px]">
//                       Wake up
//                     </span>
//                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                       06:00-06:30AM
//                     </span>
//                   </div>

//                   <div className="w-[81px] py-1.5 px-2 rounded-[20px] bg-[#E1E6ED] text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                     3 food added
//                   </div>
//                 </div>

//                 {/* Right Column - Options Container */}
//                 <div className="flex flex-col flex-1 py-5 pl-5 gap-8 border-l border-l-[#E1E6ED]">

//                   {/* Option 1 with Edit Button */}
//                   <div className="flex gap-8 w-full">
//                     {/* Option 1 Content */}
//                     <div className="flex-1">
//                       <div className="flex flex-col gap-5 w-full">
//                         <div className="w-full h-[26px] bg-[#E1E6ED] rounded-[5px] py-[9px] pl-5 text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                           Option 1
//                         </div>

//                         <div className="flex flex-col gap-[30px]">
//                           <div className="flex gap-5">
//                             <div className="flex gap-5 items-start">
//                               <div className="flex gap-1">
//                                 <Image
//                                   src="/icons/hugeicons_dish-02.svg"
//                                   alt="hugeicons_dish-02.svg"
//                                   width={24}
//                                   height={24}
//                                 />
//                                 <span className="py-[3px] text-[#252525] text-[15px] font-bold leading-[126%] tracking-[-0.3px]">
//                                   1
//                                 </span>
//                               </div>

//                               <div className="bg-[#FFECEA] rounded-[21px] p-2 text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                                 75% Filled
//                               </div>
//                             </div>

//                             <div className="flex gap-[33px] flex-1">
//                               <div className="flex-1">
//                                 {/* Food Option 1 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Rice [regular/ basmati/ brown/ millets]
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 bowl (250ml)
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       2 tsp soaked chia seeds
//                                     </span>
//                                   </div>
//                                 </div>

//                                 {/* Divider */}
//                                 <div className="relative flex items-center my-4">
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                   <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                                     or
//                                   </span>
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                 </div>

//                                 {/* Food Option 2 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Wheat/ millet roti
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 piece
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       without ghee / oil
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="flex gap-5">
//                             <div className="flex gap-5 items-start">
//                               <div className="flex gap-1">
//                                 <Image
//                                   src="/icons/hugeicons_vegetarian-food.svg"
//                                   alt="hugeicons_vegetarian-food.svg"
//                                   width={24}
//                                   height={24}
//                                 />
//                                 <span className="py-[3px] text-[#252525] text-[15px] font-bold leading-[126%] tracking-[-0.3px]">
//                                   2
//                                 </span>
//                               </div>

//                               <div className="bg-[#FFECEA] rounded-[21px] p-2 text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                                 75% Filled
//                               </div>
//                             </div>

//                             <div className="flex gap-[33px] flex-1">
//                               <div className="flex-1">
//                                 {/* Food Option 1 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Rice [regular/ basmati/ brown/ millets]
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 bowl (250ml)
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       2 tsp soaked chia seeds
//                                     </span>
//                                   </div>
//                                 </div>

//                                 {/* Divider */}
//                                 <div className="relative flex items-center my-4">
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                   <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                                     or
//                                   </span>
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                 </div>

//                                 {/* Food Option 2 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Wheat/ millet roti
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 piece
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       without ghee / oil
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="flex gap-5">
//                             <div className="flex gap-5 items-start">
//                               <div className="flex gap-1">
//                                 <Image
//                                   src="/icons/hugeicons_vegetarian-food.svg"
//                                   alt="hugeicons_vegetarian-food.svg"
//                                   width={24}
//                                   height={24}
//                                 />
//                                 <span className="py-[3px] text-[#252525] text-[15px] font-bold leading-[126%] tracking-[-0.3px]">
//                                   3
//                                 </span>
//                               </div>

//                               <div className="bg-[#FFECEA] rounded-[21px] p-2 text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                                 75% Filled
//                               </div>
//                             </div>

//                             <div className="flex gap-[33px] flex-1">
//                               <div className="flex-1">
//                                 {/* Food Option 1 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Rice [regular/ basmati/ brown/ millets]
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 bowl (250ml)
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       2 tsp soaked chia seeds
//                                     </span>
//                                   </div>
//                                 </div>

//                                 {/* Divider */}
//                                 <div className="relative flex items-center my-4">
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                   <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                                     or
//                                   </span>
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                 </div>

//                                 {/* Food Option 2 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Wheat/ millet roti
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 piece
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       without ghee / oil
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Edit Button for Option 1 */}
//                     <div className="flex flex-col h-[72px] gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer self-start">
//                       <Image
//                         src="/icons/hugeicons_edit-03.svg"
//                         alt="hugeicons_edit-03"
//                         height={24}
//                         width={24}
//                       />
//                       <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">
//                         Edit
//                       </span>
//                     </div>
//                   </div>

//                   {/* Option 2 with Edit Button */}
//                   <div className="flex gap-8 w-full">
//                     {/* Option 2 Content */}
//                     <div className="flex-1">
//                       <div className="flex flex-col gap-5 w-full">
//                         <div className="w-full h-[26px] bg-[#E1E6ED] rounded-[5px] py-[9px] pl-5 text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                           Option 2
//                         </div>

//                         <div className="flex flex-col gap-[30px]">
//                           <div className="flex gap-5">
//                             <div className="flex gap-5 items-start">
//                               <div className="flex gap-1">
//                                 <Image
//                                   src="/icons/hugeicons_dish-02.svg"
//                                   alt="hugeicons_dish-02.svg"
//                                   width={24}
//                                   height={24}
//                                 />
//                                 <span className="py-[3px] text-[#252525] text-[15px] font-bold leading-[126%] tracking-[-0.3px]">
//                                   1
//                                 </span>
//                               </div>

//                               <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                                 100% Filled
//                               </div>
//                             </div>

//                             <div className="flex gap-[33px] flex-1">
//                               <div className="flex-1">
//                                 {/* Food Option 1 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Rice [regular/ basmati/ brown/ millets]
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 bowl (250ml)
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       2 tsp soaked chia seeds
//                                     </span>
//                                   </div>
//                                 </div>

//                                 {/* Divider */}
//                                 <div className="relative flex items-center my-4">
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                   <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                                     or
//                                   </span>
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                 </div>

//                                 {/* Food Option 2 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Wheat/ millet roti
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 piece
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       without ghee / oil
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="flex gap-5">
//                             <div className="flex gap-5 items-start">
//                               <div className="flex gap-1">
//                                 <Image
//                                   src="/icons/hugeicons_vegetarian-food.svg"
//                                   alt="hugeicons_vegetarian-food.svg"
//                                   width={24}
//                                   height={24}
//                                 />
//                                 <span className="py-[3px] text-[#252525] text-[15px] font-bold leading-[126%] tracking-[-0.3px]">
//                                   2
//                                 </span>
//                               </div>

//                               <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                                 100% Filled
//                               </div>
//                             </div>

//                             <div className="flex gap-[33px] flex-1">
//                               <div className="flex-1">
//                                 {/* Food Option 1 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Rice [regular/ basmati/ brown/ millets]
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 bowl (250ml)
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       2 tsp soaked chia seeds
//                                     </span>
//                                   </div>
//                                 </div>

//                                 {/* Divider */}
//                                 <div className="relative flex items-center my-4">
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                   <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                                     or
//                                   </span>
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                 </div>

//                                 {/* Food Option 2 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Wheat/ millet roti
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 piece
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       without ghee / oil
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="flex gap-5">
//                             <div className="flex gap-5 items-start">
//                               <div className="flex gap-1">
//                                 <Image
//                                   src="/icons/hugeicons_vegetarian-food.svg"
//                                   alt="hugeicons_vegetarian-food.svg"
//                                   width={24}
//                                   height={24}
//                                 />
//                                 <span className="py-[3px] text-[#252525] text-[15px] font-bold leading-[126%] tracking-[-0.3px]">
//                                   3
//                                 </span>
//                               </div>

//                               <div className="bg-[#E1F6E6] rounded-[21px] p-2 text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
//                                 100% Filled
//                               </div>
//                             </div>

//                             <div className="flex gap-[33px] flex-1">
//                               <div className="flex-1">
//                                 {/* Food Option 1 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Rice [regular/ basmati/ brown/ millets]
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 bowl (250ml)
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       2 tsp soaked chia seeds
//                                     </span>
//                                   </div>
//                                 </div>

//                                 {/* Divider */}
//                                 <div className="relative flex items-center my-4">
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                   <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                                     or
//                                   </span>
//                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                 </div>

//                                 {/* Food Option 2 */}
//                                 <div className="flex flex-col gap-1">
//                                   <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                     Wheat/ millet roti
//                                   </span>
//                                   <div className="flex gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       1 piece
//                                     </span>
//                                     <Image
//                                       src="/icons/hugeicons_information-circle.svg"
//                                       alt="hugeicons_information-circle"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                       without ghee / oil
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>


//                   </div>
//                 </div>
//               </div>


//             </div>

//             <div>
//               <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>

//               <div className='py-[23px]'>
//                 <div className='flex gap-5 justify-end'>
//                   <div className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px] text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>
//                     Save as draft
//                   </div>

//                   <div className='px-20 py-[15px] bg-[#308BF9] rounded-[10px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>
//                     Confirm & Next
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </>
//   )
// }





























"use client"

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import Image from "next/image";
import DietEvent from "./modal/diet-event-popup";

export default function DietPlanCreated() {
  const [activeDay, setActiveDay] = useState(0);
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Diet plan data array
  const dietPlanData = [
    {
      id: 1,
      time: "Wake up",
      timeRange: "06:00-06:30AM",
      foodsCount: "2 food added",
      meals: [
        {
          id: 1,
          icon: "/icons/hugeicons_bubble-tea-02.svg",
          number: "1",
          status: "75% Filled",
          statusColor: "#FFECEA",
          textColor: "#DA5747",
          foodItems: [
            {
              name: "Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops",
              details: ["220kcal", "1 cup (250 ml)"]
            },
            {
              name: "Cinnamon water",
              details: ["220kcal", "1 cup (250 ml)"]
            }
          ]
        },
        {
          id: 2,
          icon: "/icons/hugeicons_vegetarian-food.svg",
          number: "2",
          status: "100% Filled",
          statusColor: "#E1F6E6",
          textColor: "#3FAF58",
          foodItems: [
            {
              name: "Cooked Vegetables",
              details: ["1 bowl (250ml)", "leafy green / fruit veg / beans"]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      time: "Breakfast",
      timeRange: "08:00-08:30AM",
      foodsCount: "3 food added",
      meals: [
        {
          id: 1,
          icon: "/icons/hugeicons_dish-02.svg",
          number: "1",
          status: "100% Filled",
          statusColor: "#E1F6E6",
          textColor: "#3FAF58",
          foodItems: [
            {
              name: "Ragi porridge / Sattu / Oats /Cereals",
              details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
            },
            {
              name: "North Indian BF with small portions",
              details: ["1 piece"]
            }
          ]
        },
        {
          id: 2,
          icon: "/icons/hugeicons_vegetarian-food.svg",
          number: "2",
          status: "75% Filled",
          statusColor: "#FFECEA",
          textColor: "#DA5747",
          foodItems: [
            {
              name: "Boiled sprouts / grilled paneer",
              details: ["1 bowl (250ml)"]
            }
          ]
        },
        {
          id: 3,
          icon: "/icons/hugeicons_vegetarian-food.svg",
          number: "3",
          status: "100% Filled",
          statusColor: "#E1F6E6",
          textColor: "#3FAF58",
          foodItems: [
            {
              name: "Low fat curd",
              details: ["1 bowl (250ml)"]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      time: "Lunch",
      timeRange: "01:00-01:30PM",
      foodsCount: "3 food added",
      meals: [
        {
          id: 1,
          icon: "/icons/hugeicons_dish-02.svg",
          number: "1",
          status: "100% Filled",
          statusColor: "#E1F6E6",
          textColor: "#3FAF58",
          foodItems: [
            {
              name: "Rice [regular/ basmati/ brown/ millets ]",
              details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
            },
            {
              name: "Wheat/ millet roti",
              details: ["1 piece", "without ghee / oil"]
            }
          ]
        },
        {
          id: 2,
          icon: "/icons/hugeicons_vegetarian-food.svg",
          number: "2",
          status: "100% Filled",
          statusColor: "#E1F6E6",
          textColor: "#3FAF58",
          foodItems: [
            {
              name: "Cooked Vegetables",
              details: ["1 bowl (250ml)", "leafy green / fruit veg / beans"]
            },
            {
              name: "Raw salad / boiled veggies / tossed salad",
              details: ["1 piece", "without ghee / oil"]
            }
          ]
        },
        {
          id: 3,
          icon: "/icons/hugeicons_vegetarian-food.svg",
          number: "3",
          status: "100% Filled",
          statusColor: "#E1F6E6",
          textColor: "#3FAF58",
          foodItems: [
            {
              name: "Boiled sprouts / grilled paneer",
              details: ["1 bowl (250ml)"]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      time: "Dinner",
      timeRange: "07:00-07:30PM",
      foodsCount: "3 food added",
      options: [
        {
          id: 1,
          name: "Option 1",
          meals: [
            {
              id: 1,
              icon: "/icons/hugeicons_dish-02.svg",
              number: "1",
              status: "75% Filled",
              statusColor: "#FFECEA",
              textColor: "#DA5747",
              foodItems: [
                {
                  name: "Rice [regular/ basmati/ brown/ millets]",
                  details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
                },
                {
                  name: "Wheat/ millet roti",
                  details: ["1 piece", "without ghee / oil"]
                }
              ]
            },
            {
              id: 2,
              icon: "/icons/hugeicons_vegetarian-food.svg",
              number: "2",
              status: "75% Filled",
              statusColor: "#FFECEA",
              textColor: "#DA5747",
              foodItems: [
                {
                  name: "Rice [regular/ basmati/ brown/ millets]",
                  details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
                },
                {
                  name: "Wheat/ millet roti",
                  details: ["1 piece", "without ghee / oil"]
                }
              ]
            },
            {
              id: 3,
              icon: "/icons/hugeicons_vegetarian-food.svg",
              number: "3",
              status: "75% Filled",
              statusColor: "#FFECEA",
              textColor: "#DA5747",
              foodItems: [
                {
                  name: "Rice [regular/ basmati/ brown/ millets]",
                  details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
                },
                {
                  name: "Wheat/ millet roti",
                  details: ["1 piece", "without ghee / oil"]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "Option 2",
          meals: [
            {
              id: 1,
              icon: "/icons/hugeicons_dish-02.svg",
              number: "1",
              status: "100% Filled",
              statusColor: "#E1F6E6",
              textColor: "#3FAF58",
              foodItems: [
                {
                  name: "Rice [regular/ basmati/ brown/ millets]",
                  details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
                },
                {
                  name: "Wheat/ millet roti",
                  details: ["1 piece", "without ghee / oil"]
                }
              ]
            },
            {
              id: 2,
              icon: "/icons/hugeicons_vegetarian-food.svg",
              number: "2",
              status: "100% Filled",
              statusColor: "#E1F6E6",
              textColor: "#3FAF58",
              foodItems: [
                {
                  name: "Rice [regular/ basmati/ brown/ millets]",
                  details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
                },
                {
                  name: "Wheat/ millet roti",
                  details: ["1 piece", "without ghee / oil"]
                }
              ]
            },
            {
              id: 3,
              icon: "/icons/hugeicons_vegetarian-food.svg",
              number: "3",
              status: "100% Filled",
              statusColor: "#E1F6E6",
              textColor: "#3FAF58",
              foodItems: [
                {
                  name: "Rice [regular/ basmati/ brown/ millets]",
                  details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
                },
                {
                  name: "Wheat/ millet roti",
                  details: ["1 piece", "without ghee / oil"]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  // Function to generate days array based on current date
  const generateDays = (startDate) => {
    const newDays = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayNumber = i + 1;
      const formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short'
      });

      newDays.push({
        id: i,
        day: `Day ${dayNumber}`,
        date: formattedDate,
        fullDate: new Date(date)
      });
    }
    return newDays;
  };

  // Initialize days on component mount
  useEffect(() => {
    setDays(generateDays(currentDate));
    setActiveDay(0);
  }, [currentDate]);

  // Function to navigate to previous days
  const handlePreviousDays = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 5);
    setCurrentDate(newDate);
  };

  // Function to navigate to next days
  const handleNextDays = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 5);
    setCurrentDate(newDate);
  };


    // Function to handle edit button click
  const handleEditClick = (meal, section) => {
    setSelectedMeal({
      meal,
      section,
      day: days[activeDay]
    });
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMeal(null);
  };

  return (
    <>
      <div className='w-full max-w-full min-w-0 overflow-x-hidden relative flex flex-col gap-[310px]'>

        <div className="">
          <div className="flex justify-between pl-[15px] pr-[20px]">
            <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Diet Plan</p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-full  border-b border-[#E1E6ED]"></div>

            <div className="flex gap-5">
              <div className="w-fit flex justify-center">
                <div className="rounded-l-[10px] border border-[#D9D9D9] pl-4 py-2 pr-2.5 bg-[#F0F0F0] text-center">
                  <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
                    Diet Changes
                  </p>
                </div>
                <div className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4 py-2 pr-2.5 bg-white">
                  <p className="cursor-pointer text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
                    Daily
                  </p>
                  <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" />
                </div>
              </div>

              <div className="w-fit flex justify-center">
                <div className="rounded-l-[10px] border border-[#D9D9D9] pl-4 py-2 pr-2.5 bg-[#F0F0F0] text-center">
                  <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
                    Type
                  </p>
                </div>
                <div className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4 py-2 pr-2.5 bg-white">
                  <p className="cursor-pointer text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
                    Not specified
                  </p>
                  <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-9 bg-[#F5F7FA] rounded-[15px]">
              <div className="flex items-center bg-[#E1E6ED] rounded-[15px] border-4 border-[#F5F7FA]">

                <div className="flex justify-between w-[170px] py-[30px] pl-[26px]">
                  <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Select a day</span>
                  <IoIosArrowBack
                    className="text-[#252525] cursor-pointer"
                    onClick={handlePreviousDays}
                  />
                </div>

                <div className="flex items-center">
                  {days.map((day, index) => (
                    <div key={day.id} className="flex items-center">
                      <div
                        className={`flex flex-col w-[165px] gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer ${activeDay === day.id
                          ? 'bg-[#308BF9]'
                          : 'bg-transparent'
                          }`}
                        onClick={() => setActiveDay(day.id)}
                      >
                        <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${activeDay === day.id ? 'text-white' : 'text-[#252525]'
                          }`}>
                          {day.day}
                        </span>
                        <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${activeDay === day.id ? 'text-white' : 'text-[#252525]'
                          }`}>
                          {day.date}
                        </span>
                      </div>

                      {index < days.length - 1 && (
                        <div className="border-white border-r h-8 mx-2"></div>
                      )}
                    </div>
                  ))}
                  <IoIosArrowForward
                    className="text-[#252525] ml-2 cursor-pointer"
                    onClick={handleNextDays}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 ml-[30px]">
                <span className="text-[#252525] text-[12px] font-normal leading-normal tracking-[-0.24px]">Day 1</span>
                <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">08 May</span>
              </div>

              {/* Render diet plan sections from array */}
              {dietPlanData.map((section) => (
                <div key={section.id} className="flex py-5 bg-white rounded-[15px] border-4 border-[#F5F7FA]">
                  <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
                    <div className="flex flex-col gap-2.5">
                      <span className="text-[#252525] font-semibold leading-[110%] tracking-[-0.48px]">{section.time}</span>
                      <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">{section.timeRange}</span>
                    </div>

                    <div className="w-[81px] py-1.5 px-2 rounded-[20px] bg-[#E1E6ED] text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
                      {section.foodsCount}
                    </div>
                  </div>

                  <div className="flex flex-col py-5 pl-5 gap-[30px] border-l border-l-[#E1E6ED] flex-1">
                    {section.meals ? (
                      // Regular meals layout
                      section.meals.map((meal) => (
                        <div key={meal.id} className="flex gap-5 justify-between">
                          <div className="flex gap-5 items-start py-[5px]">
                            <div className="flex items-center gap-1">
                              <Image
                                src={meal.icon}
                                alt={meal.icon}
                                width={24}
                                height={24}
                              />
                              <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">{meal.number}</span>
                            </div>
                            <div 
                              className="rounded-[21px] p-2 text-[10px] font-semibold leading-[110%] tracking-[-0.2px]"
                              style={{ backgroundColor: meal.statusColor, color: meal.textColor }}
                            >
                              {meal.status}
                            </div>
                          </div>

                          <div className="flex gap-[33px] flex-1">
                            <div className="flex-1">
                              {meal.foodItems.map((foodItem, index) => (
                                <div key={index}>
                                  <div className="flex flex-col gap-1">
                                    <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">{foodItem.name}</span>
                                    <div className="flex gap-[5px]">
                                      {foodItem.details.map((detail, detailIndex) => (
                                        <span key={detailIndex} className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">{detail}</span>
                                      ))}
                                      <Image
                                        src="/icons/hugeicons_information-circle.svg"
                                        alt="hugeicons_information-circle"
                                        width={12}
                                        height={12}
                                      />
                                    </div>
                                  </div>

                                  {index < meal.foodItems.length - 1 && (
                                    <div className="relative flex items-center my-4">
                                      <div className="flex-grow border-t border-[#C7C6CE]"></div>
                                      <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">or</span>
                                      <div className="flex-grow border-t border-[#C7C6CE]"></div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {meal.id === 1 && (
                              <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer"
                              onClick={() => handleEditClick(meal, section)}
                              >
                                <Image
                                  src="/icons/hugeicons_edit-03.svg"
                                  alt="hugeicons_edit-03"
                                  height={24}
                                  width={24}
                                />
                                <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">Edit</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      // Options layout for dinner section
                      <div className="flex flex-col flex-1 py-5 pl-5 gap-8 border-l border-l-[#E1E6ED]">
                        {section.options.map((option) => (
                          <div key={option.id} className="flex gap-8 w-full">
                            <div className="flex-1">
                              <div className="flex flex-col gap-5 w-full">
                                <div className="w-full h-[26px] bg-[#E1E6ED] rounded-[5px] py-[9px] pl-5 text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                                  {option.name}
                                </div>

                                <div className="flex flex-col gap-[30px]">
                                  {option.meals.map((meal) => (
                                    <div key={meal.id} className="flex gap-5">
                                      <div className="flex gap-5 items-start">
                                        <div className="flex gap-1">
                                          <Image
                                            src={meal.icon}
                                            alt={meal.icon}
                                            width={24}
                                            height={24}
                                          />
                                          <span className="py-[3px] text-[#252525] text-[15px] font-bold leading-[126%] tracking-[-0.3px]">
                                            {meal.number}
                                          </span>
                                        </div>

                                        <div 
                                          className="rounded-[21px] p-2 text-[10px] font-semibold leading-[110%] tracking-[-0.2px]"
                                          style={{ backgroundColor: meal.statusColor, color: meal.textColor }}
                                        >
                                          {meal.status}
                                        </div>
                                      </div>

                                      <div className="flex gap-[33px] flex-1">
                                        <div className="flex-1">
                                          {meal.foodItems.map((foodItem, index) => (
                                            <div key={index}>
                                              <div className="flex flex-col gap-1">
                                                <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                                                  {foodItem.name}
                                                </span>
                                                <div className="flex gap-[5px]">
                                                  {foodItem.details.map((detail, detailIndex) => (
                                                    <span key={detailIndex} className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
                                                      {detail}
                                                    </span>
                                                  ))}
                                                  <Image
                                                    src="/icons/hugeicons_information-circle.svg"
                                                    alt="hugeicons_information-circle"
                                                    width={12}
                                                    height={12}
                                                  />
                                                </div>
                                              </div>

                                              {index < meal.foodItems.length - 1 && (
                                                <div className="relative flex items-center my-4">
                                                  <div className="flex-grow border-t border-[#C7C6CE]"></div>
                                                  <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                                                    or
                                                  </span>
                                                  <div className="flex-grow border-t border-[#C7C6CE]"></div>
                                                </div>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {option.id === 1 && (
                              <div className="flex flex-col h-[72px] gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer self-start"
                                onClick={() => handleEditClick(option.meals[0], section)}
                              >
                                <Image
                                  src="/icons/hugeicons_edit-03.svg"
                                  alt="hugeicons_edit-03"
                                  height={24}
                                  width={24}
                                />
                                <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">
                                  Edit
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

            </div>

            <div>
              <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>

              <div className='py-[23px]'>
                <div className='flex gap-5 justify-end'>
                  <div className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px] text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>
                    Save as draft
                  </div>

                  <div className='px-20 py-[15px] bg-[#308BF9] rounded-[10px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>
                    Confirm & Next
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


 <DietEvent 
        open={isModalOpen} 
        onClose={handleCloseModal}
        selectedMeal={selectedMeal}
      />

    </>
  )
}