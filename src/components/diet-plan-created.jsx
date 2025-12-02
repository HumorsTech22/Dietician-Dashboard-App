
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



























// "use client"

// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import DietEvent from "./modal/diet-event-popup";
// import { useSelector } from "react-redux";

// export default function DietPlanCreated() {
//   const [activeDay, setActiveDay] = useState(0);
//   const [days, setDays] = useState([]);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedMeal, setSelectedMeal] = useState(null);

//   const extractedData = useSelector((state) => state.extractedData.data);
//   console.log("Extracted Data in DietPlanCreated1256:", extractedData);

//   // Diet plan data array
//   const dietPlanData = [
//     {
//       id: 1,
//       time: "Wake up",
//       timeRange: "06:00-06:30AM",
//       foodsCount: "2 food added",
//       meals: [
//         {
//           id: 1,
//           icon: "/icons/hugeicons_bubble-tea-02.svg",
//           number: "1",
//           status: "75% Filled",
//           statusColor: "#FFECEA",
//           textColor: "#DA5747",
//           foodItems: [
//             {
//               name: "Carrot + beetroot + fresh turmeric & zinger [ little ] with lemon drops",
//               details: ["220kcal", "1 cup (250 ml)"]
//             },
//             {
//               name: "Cinnamon water",
//               details: ["220kcal", "1 cup (250 ml)"]
//             }
//           ]
//         },
//         {
//           id: 2,
//           icon: "/icons/hugeicons_vegetarian-food.svg",
//           number: "2",
//           status: "100% Filled",
//           statusColor: "#E1F6E6",
//           textColor: "#3FAF58",
//           foodItems: [
//             {
//               name: "Cooked Vegetables",
//               details: ["1 bowl (250ml)", "leafy green / fruit veg / beans"]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 2,
//       time: "Breakfast",
//       timeRange: "08:00-08:30AM",
//       foodsCount: "3 food added",
//       meals: [
//         {
//           id: 1,
//           icon: "/icons/hugeicons_dish-02.svg",
//           number: "1",
//           status: "100% Filled",
//           statusColor: "#E1F6E6",
//           textColor: "#3FAF58",
//           foodItems: [
//             {
//               name: "Ragi porridge / Sattu / Oats /Cereals",
//               details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
//             },
//             {
//               name: "North Indian BF with small portions",
//               details: ["1 piece"]
//             }
//           ]
//         },
//         {
//           id: 2,
//           icon: "/icons/hugeicons_vegetarian-food.svg",
//           number: "2",
//           status: "75% Filled",
//           statusColor: "#FFECEA",
//           textColor: "#DA5747",
//           foodItems: [
//             {
//               name: "Boiled sprouts / grilled paneer",
//               details: ["1 bowl (250ml)"]
//             }
//           ]
//         },
//         {
//           id: 3,
//           icon: "/icons/hugeicons_vegetarian-food.svg",
//           number: "3",
//           status: "100% Filled",
//           statusColor: "#E1F6E6",
//           textColor: "#3FAF58",
//           foodItems: [
//             {
//               name: "Low fat curd",
//               details: ["1 bowl (250ml)"]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 3,
//       time: "Lunch",
//       timeRange: "01:00-01:30PM",
//       foodsCount: "3 food added",
//       meals: [
//         {
//           id: 1,
//           icon: "/icons/hugeicons_dish-02.svg",
//           number: "1",
//           status: "100% Filled",
//           statusColor: "#E1F6E6",
//           textColor: "#3FAF58",
//           foodItems: [
//             {
//               name: "Rice [regular/ basmati/ brown/ millets ]",
//               details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
//             },
//             {
//               name: "Wheat/ millet roti",
//               details: ["1 piece", "without ghee / oil"]
//             }
//           ]
//         },
//         {
//           id: 2,
//           icon: "/icons/hugeicons_vegetarian-food.svg",
//           number: "2",
//           status: "100% Filled",
//           statusColor: "#E1F6E6",
//           textColor: "#3FAF58",
//           foodItems: [
//             {
//               name: "Cooked Vegetables",
//               details: ["1 bowl (250ml)", "leafy green / fruit veg / beans"]
//             },
//             {
//               name: "Raw salad / boiled veggies / tossed salad",
//               details: ["1 piece", "without ghee / oil"]
//             }
//           ]
//         },
//         {
//           id: 3,
//           icon: "/icons/hugeicons_vegetarian-food.svg",
//           number: "3",
//           status: "100% Filled",
//           statusColor: "#E1F6E6",
//           textColor: "#3FAF58",
//           foodItems: [
//             {
//               name: "Boiled sprouts / grilled paneer",
//               details: ["1 bowl (250ml)"]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 4,
//       time: "Dinner",
//       timeRange: "07:00-07:30PM",
//       foodsCount: "3 food added",
//       options: [
//         {
//           id: 1,
//           name: "Option 1",
//           meals: [
//             {
//               id: 1,
//               icon: "/icons/hugeicons_dish-02.svg",
//               number: "1",
//               status: "75% Filled",
//               statusColor: "#FFECEA",
//               textColor: "#DA5747",
//               foodItems: [
//                 {
//                   name: "Rice [regular/ basmati/ brown/ millets]",
//                   details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
//                 },
//                 {
//                   name: "Wheat/ millet roti",
//                   details: ["1 piece", "without ghee / oil"]
//                 }
//               ]
//             },
//             {
//               id: 2,
//               icon: "/icons/hugeicons_vegetarian-food.svg",
//               number: "2",
//               status: "75% Filled",
//               statusColor: "#FFECEA",
//               textColor: "#DA5747",
//               foodItems: [
//                 {
//                   name: "Rice [regular/ basmati/ brown/ millets]",
//                   details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
//                 },
//                 {
//                   name: "Wheat/ millet roti",
//                   details: ["1 piece", "without ghee / oil"]
//                 }
//               ]
//             },
//             {
//               id: 3,
//               icon: "/icons/hugeicons_vegetarian-food.svg",
//               number: "3",
//               status: "75% Filled",
//               statusColor: "#FFECEA",
//               textColor: "#DA5747",
//               foodItems: [
//                 {
//                   name: "Rice [regular/ basmati/ brown/ millets]",
//                   details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
//                 },
//                 {
//                   name: "Wheat/ millet roti",
//                   details: ["1 piece", "without ghee / oil"]
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           id: 2,
//           name: "Option 2",
//           meals: [
//             {
//               id: 1,
//               icon: "/icons/hugeicons_dish-02.svg",
//               number: "1",
//               status: "100% Filled",
//               statusColor: "#E1F6E6",
//               textColor: "#3FAF58",
//               foodItems: [
//                 {
//                   name: "Rice [regular/ basmati/ brown/ millets]",
//                   details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
//                 },
//                 {
//                   name: "Wheat/ millet roti",
//                   details: ["1 piece", "without ghee / oil"]
//                 }
//               ]
//             },
//             {
//               id: 2,
//               icon: "/icons/hugeicons_vegetarian-food.svg",
//               number: "2",
//               status: "100% Filled",
//               statusColor: "#E1F6E6",
//               textColor: "#3FAF58",
//               foodItems: [
//                 {
//                   name: "Rice [regular/ basmati/ brown/ millets]",
//                   details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
//                 },
//                 {
//                   name: "Wheat/ millet roti",
//                   details: ["1 piece", "without ghee / oil"]
//                 }
//               ]
//             },
//             {
//               id: 3,
//               icon: "/icons/hugeicons_vegetarian-food.svg",
//               number: "3",
//               status: "100% Filled",
//               statusColor: "#E1F6E6",
//               textColor: "#3FAF58",
//               foodItems: [
//                 {
//                   name: "Rice [regular/ basmati/ brown/ millets]",
//                   details: ["1 bowl (250ml)", "2 tsp soaked chia seeds"]
//                 },
//                 {
//                   name: "Wheat/ millet roti",
//                   details: ["1 piece", "without ghee / oil"]
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ];

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

//   // Function to handle edit button click
//   const handleEditClick = (meal, section) => {
//     setSelectedMeal({
//       meal,
//       section,
//       day: days[activeDay]
//     });
//     setIsModalOpen(true);
//   };

//   // Function to close modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedMeal(null);
//   };

//   // ===== Added helpers (do not change your existing logic) =====
//   const selectedDayObj = days.find((d) => d.id === activeDay);
//   const formatDisplayDate = (dateObj) => {
//     if (!dateObj) return "";
//     const ddMon = dateObj.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }); // 08 May
//     const wk = dateObj.toLocaleDateString("en-US", { weekday: "long" }); // Friday
//     return `${ddMon}, ${wk}`;
//   };
//   // ============================================================

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

//               {/* Dynamic header that matches the selected day */}
//               <div className="flex flex-col gap-2.5 ml-[30px]">
//                 <span className="text-[#252525] text-[12px] font-normal leading-normal tracking-[-0.24px]">
//                   {selectedDayObj?.day ?? `Day ${activeDay + 1}`}
//                 </span>
//                 <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">
//                   {formatDisplayDate(selectedDayObj?.fullDate)}
//                 </span>
//               </div>

//               {/* Render diet plan sections from array */}
//               {dietPlanData.map((section) => (
//                 <div key={section.id} className="flex py-5 bg-white rounded-[15px] border-4 border-[#F5F7FA]">
//                   <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
//                     <div className="flex flex-col gap-2.5">
//                       <span className="text-[#252525] font-semibold leading-[110%] tracking-[-0.48px]">{section.time}</span>
//                       <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">{section.timeRange}</span>
//                     </div>

//                     <div className="w-[81px] py-1.5 px-2 rounded-[20px] bg-[#E1E6ED] text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                       {section.foodsCount}
//                     </div>
//                   </div>

//                   <div className="flex flex-col py-5 pl-5 gap-[30px] border-l border-l-[#E1E6ED] flex-1">
//                     {section.meals ? (
//                       // Regular meals layout
//                       section.meals.map((meal) => (
//                         <div key={meal.id} className="flex gap-5 justify-between">
//                           <div className="flex gap-5 items-start py-[5px]">
//                             <div className="flex items-center gap-1">
//                               <Image
//                                 src={meal.icon}
//                                 alt={meal.icon}
//                                 width={24}
//                                 height={24}
//                               />
//                               <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">{meal.number}</span>
//                             </div>
//                             <div
//                               className="rounded-[21px] p-2 text-[10px] font-semibold leading-[110%] tracking-[-0.2px]"
//                               style={{ backgroundColor: meal.statusColor, color: meal.textColor }}
//                             >
//                               {meal.status}
//                             </div>
//                           </div>

//                           <div className="flex gap-[33px] flex-1">
//                             <div className="flex-1">
//                               {meal.foodItems.map((foodItem, index) => (
//                                 <div key={index}>
//                                   <div className="flex flex-col gap-1">
//                                     <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">{foodItem.name}</span>
//                                     <div className="flex gap-[5px]">
//                                       {foodItem.details.map((detail, detailIndex) => (
//                                         <span key={detailIndex} className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">{detail}</span>
//                                       ))}
//                                       <Image
//                                         src="/icons/hugeicons_information-circle.svg"
//                                         alt="hugeicons_information-circle"
//                                         width={12}
//                                         height={12}
//                                       />
//                                     </div>
//                                   </div>

//                                   {index < meal.foodItems.length - 1 && (
//                                     <div className="relative flex items-center my-4">
//                                       <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                       <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">or</span>
//                                       <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                     </div>
//                                   )}
//                                 </div>
//                               ))}
//                             </div>

//                             {/* {meal.id === 1 && (
//                               <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer"
//                               onClick={() => handleEditClick(meal, section)}
//                               >
//                                 <Image
//                                   src="/icons/hugeicons_edit-03.svg"
//                                   alt="hugeicons_edit-03"
//                                   height={24}
//                                   width={24}
//                                 />
//                                 <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">Edit</span>
//                               </div>
//                             )} */}
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       // Options layout for dinner section
//                       <div className="flex flex-col flex-1 py-5 pl-5 gap-8 border-l border-l-[#E1E6ED]">
//                         {section.options.map((option) => (
//                           <div key={option.id} className="flex gap-8 w-full">
//                             <div className="flex-1">
//                               <div className="flex flex-col gap-5 w-full">
//                                 <div className="w-full h-[26px] bg-[#E1E6ED] rounded-[5px] py-[9px] pl-5 text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                                   {option.name}
//                                 </div>

//                                 <div className="flex flex-col gap-[30px]">
//                                   {option.meals.map((meal) => (
//                                     <div key={meal.id} className="flex gap-5">
//                                       <div className="flex gap-5 items-start">
//                                         <div className="flex gap-1">
//                                           <Image
//                                             src={meal.icon}
//                                             alt={meal.icon}
//                                             width={24}
//                                             height={24}
//                                           />
//                                           <span className="py-[3px] text-[#252525] text-[15px] font-bold leading-[126%] tracking-[-0.3px]">
//                                             {meal.number}
//                                           </span>
//                                         </div>

//                                         <div
//                                           className="rounded-[21px] p-2 text-[10px] font-semibold leading-[110%] tracking-[-0.2px]"
//                                           style={{ backgroundColor: meal.statusColor, color: meal.textColor }}
//                                         >
//                                           {meal.status}
//                                         </div>
//                                       </div>

//                                       <div className="flex gap-[33px] flex-1">
//                                         <div className="flex-1">
//                                           {meal.foodItems.map((foodItem, index) => (
//                                             <div key={index}>
//                                               <div className="flex flex-col gap-1">
//                                                 <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                                   {foodItem.name}
//                                                 </span>
//                                                 <div className="flex gap-[5px]">
//                                                   {foodItem.details.map((detail, detailIndex) => (
//                                                     <span key={detailIndex} className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
//                                                       {detail}
//                                                     </span>
//                                                   ))}
//                                                   <Image
//                                                     src="/icons/hugeicons_information-circle.svg"
//                                                     alt="hugeicons_information-circle"
//                                                     width={12}
//                                                     height={12}
//                                                   />
//                                                 </div>
//                                               </div>

//                                               {index < meal.foodItems.length - 1 && (
//                                                 <div className="relative flex items-center my-4">
//                                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                                   <span className="flex-shrink mx-3 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                                                     or
//                                                   </span>
//                                                   <div className="flex-grow border-t border-[#C7C6CE]"></div>
//                                                 </div>
//                                               )}
//                                             </div>
//                                           ))}
//                                         </div>
//                                       </div>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </div>
//                             </div>

//                             {/* {option.id === 1 && (
//                               <div className="flex flex-col h-[72px] gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer self-start"
//                                 onClick={() => handleEditClick(option.meals[0], section)}
//                               >
//                                 <Image
//                                   src="/icons/hugeicons_edit-03.svg"
//                                   alt="hugeicons_edit-03"
//                                   height={24}
//                                   width={24}
//                                 />
//                                 <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">
//                                   Edit
//                                 </span>
//                               </div>
//                             )} */}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}

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

//       <DietEvent
//         open={isModalOpen}
//         onClose={handleCloseModal}
//         selectedMeal={selectedMeal}
//       />
//     </>
//   )
// }

















// "use client"

// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import DietEvent from "./modal/diet-event-popup";
// import { useSelector } from "react-redux";

// export default function DietPlanCreated() {
//   const [activeDay, setActiveDay] = useState(0);
//   const [days, setDays] = useState([]);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedMeal, setSelectedMeal] = useState(null);
//   const [planSummary, setPlanSummary] = useState(null);
//   const [allDays, setAllDays] = useState([]);
// const [windowStartIndex, setWindowStartIndex] = useState(0);

// const VISIBLE_COUNT = 7;


//   const extractedData = useSelector((state) => state.extractedData.data);
// console.log("extractedData1958:-", extractedData);


// useEffect(() => {
//   if (typeof window === "undefined") return;
//   if (!extractedData) return; 

//   try {
//     localStorage.setItem("extractedData", JSON.stringify(extractedData));
//   } catch (err) {
//     console.error("Failed to save extractedData to localStorage", err);
//   }
// }, [extractedData]);


//   const visibleDays = allDays.slice(
//   windowStartIndex,
//   windowStartIndex + VISIBLE_COUNT
// );


//   // Get plan summary from localStorage
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const storedPlanSummary = localStorage.getItem('planSummary');
//       if (storedPlanSummary) {
//         setPlanSummary(JSON.parse(storedPlanSummary));
//       }
//     }
//   }, []);

//   // Function to get day name from date
//   const getDayName = (date) => {
//     const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
//     return days[date.getDay()];
//   };

//   // Function to get meal data for a specific day - FIXED: Use only dayDate parameter
//   const getMealDataForDay = (dayDate) => {
//     // Check if there's an error in extracted data
//     if (extractedData?.result?.error) {
//       console.error("PDF Extraction Error:", extractedData.result.error);
//       return [];
//     }

//     if (!extractedData?.result) {
//       return [];
//     }

//     // Get day name from the date
//     const dayName = getDayName(dayDate).toLowerCase();

//     const dayData = extractedData.result[dayName];

//     if (!dayData?.meals) {
//       return [];
//     }


//     // Transform the API data to match your component structure
//     return dayData.meals.map((meal, index) => {
//       const timeParts = meal.time.split(' at ');
//       const time = timeParts[0];
//       const timeRange = timeParts[1] || '';

//       // Dynamic icon selection based on meal time
//       const getIcon = (mealTime) => {
//         const timeLower = mealTime.toLowerCase();
//         if (timeLower.includes('waking') || timeLower.includes('wake up') || timeLower.includes('early morning')) {
//           return "/icons/hugeicons_bubble-tea-02.svg";
//         } else if (timeLower.includes('breakfast')) {
//           return "/icons/hugeicons_dish-02.svg";
//         } else if (timeLower.includes('lunch')) {
//           return "/icons/hugeicons_dish-02.svg";
//         } else if (timeLower.includes('dinner')) {
//           return "/icons/hugeicons_dish-02.svg";
//         } else if (timeLower.includes('mid morning') || timeLower.includes('evening') || timeLower.includes('snack')) {
//           return "/icons/hugeicons_vegetarian-food.svg";
//         } else {
//           return "/icons/hugeicons_vegetarian-food.svg";
//         }
//       };

//       // Create multiple meal sections if there are multiple food items
//       const meals = meal.items.map((item, itemIndex) => ({
//         id: itemIndex + 1,
//         icon: getIcon(time),
//         number: (itemIndex + 1).toString(),
//         status: "100% Filled",
//         statusColor: "#E1F6E6",
//         textColor: "#3FAF58",
//         foodItems: [{
//           name: item.name,
//           details: [
//             item.portion,
//             `${item.calories_kcal}kcal`,

//             `Protein: ${item.protein}g`,
//             `Carbs: ${item.carbs}g`,
//             `Fat: ${item.fat}g`
//           ]
//         }],
//         totals: {
//           calories_kcal: item.calories_kcal,
//           protein: item.protein,
//           carbs: item.carbs,
//           fat: item.fat
//         }
//       }));

//       return {
//         id: index + 1,
//         time: time,
//         timeRange: timeRange,
//         foodsCount: `${meal.items.length} food${meal.items.length > 1 ? 's' : ''} added`,
//         meals: meals,
//       };
//     });
//   };

//   // Function to generate 7 days array based on plan start date
//  const generateAllDays = (startDate, endDate) => {
//   const list = [];
//   const start = new Date(startDate);
//   const end = new Date(endDate);

//   const daysDiff =
//     Math.floor((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1;

//   for (let i = 0; i < daysDiff; i++) {
//     const date = new Date(start);
//     date.setDate(start.getDate() + i);

//     list.push({
//       id: i,
//       day: `Day ${i + 1}`,
//       date: date.toLocaleDateString("en-US", {
//         day: "2-digit",
//         month: "short"
//       }),
//       fullDate: date
//     });
//   }

//   return list;
// };


//  useEffect(() => {
//   if (!planSummary) return;

//   const start = new Date(planSummary.plan_start_date);
//   const end = new Date(planSummary.plan_end_date);

//   const generated = generateAllDays(start, end);
//   setAllDays(generated);

//   // always reset window to first 7
//   setWindowStartIndex(0);
//   setActiveDay(0);
// }, [planSummary]);


//   // Function to navigate to previous days
// const handlePreviousDays = () => {
//   if (windowStartIndex === 0) return; // can't go backward

//   setWindowStartIndex((prev) => Math.max(prev - VISIBLE_COUNT, 0));
//   setActiveDay(windowStartIndex - VISIBLE_COUNT);
// };

//   // Function to navigate to next days
// const handleNextDays = () => {
//   if (windowStartIndex + VISIBLE_COUNT >= allDays.length) return; // can't go beyond

//   setWindowStartIndex((prev) =>
//     Math.min(prev + VISIBLE_COUNT, allDays.length - VISIBLE_COUNT)
//   );
//   setActiveDay(windowStartIndex + VISIBLE_COUNT);
// };

//   // Function to handle edit button click
//   const handleEditClick = (section) => {  
//     setSelectedMeal({
//        section,
//     day: allDays[activeDay],
//     dayTotals: getDayTotals()
//     });
//     setIsModalOpen(true);
//   };

//   // Function to close modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedMeal(null);
//   };

//   // Get diet plan data for current active day - FIXED: Pass only the date
//   const getDietPlanDataForActiveDay = () => {
//     if (!allDays[activeDay]?.fullDate) {
//       return [];
//     }

//     const currentDay = allDays[activeDay];

//     const meals = getMealDataForDay(currentDay.fullDate);

//     return meals;
//   };

//  const selectedDayObj = allDays.find((d) => d.id === activeDay);
//   const formatDisplayDate = (dateObj) => {
//     if (!dateObj) return "";
//     const ddMon = dateObj.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
//     const wk = dateObj.toLocaleDateString("en-US", { weekday: "long" });
//     return `${ddMon}, ${wk}`;
//   };

//   // Calculate dietPlanData - THIS UPDATES WHEN activeDay CHANGES
//   const dietPlanData = getDietPlanDataForActiveDay();
// console.log("dietPlanData2164:-", dietPlanData);
// // Get day totals for the active day
// const getDayTotals = () => {
//   if (!extractedData?.result || !allDays[activeDay]?.fullDate) return null;

//   const dayName = getDayName(allDays[activeDay].fullDate).toLowerCase();
//   const dayData = extractedData.result[dayName];

//   return dayData?.totals || null;
// };

//   const dayTotals = getDayTotals();

//   return (
//     <>
//       <div className='w-full max-w-full min-w-0 overflow-x-hidden relative flex flex-col gap-[310px]'>

//         <div className="">
//           <div className="flex justify-between pl-[15px] pr-[20px]">
//             <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Diet Plan</p>
//           </div>

//           <div className="flex flex-col gap-[15px]">
//             <div className="w-full  border-b border-[#E1E6ED]"></div>

//             {/* <div className="flex gap-5">
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
//             </div> */}

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
              
// {visibleDays.map((day, index) => (
//   <div key={day.id} className="flex items-center">
//     <div
//       className={`flex flex-col w-[140px] gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer ${
//         activeDay === day.id ? 'bg-[#308BF9]' : 'bg-white'
//       }`}
//       onClick={() => {
//         setActiveDay(day.id);
//       }}
//     >
//       <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${
//         activeDay === day.id ? 'text-white' : 'text-[#252525]'
//       }`}>
//         {day.day}
//       </span>
//       <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${
//         activeDay === day.id ? 'text-white' : 'text-[#252525]'
//       }`}>
//         {day.date}
//       </span>
//     </div>

//     {index < visibleDays.length - 1 && (
//       <div className="border-white border-r h-8 mx-2"></div>
//     )}
//   </div>
// ))}
//                   <IoIosArrowForward
//                     className="text-[#252525] ml-2 cursor-pointer"
//                     onClick={handleNextDays}
//                   />
//                 </div>
//               </div>

//               {/* Dynamic header that matches the selected day */}
//               <div className="flex flex-col gap-2.5 ml-[30px]">
//                 <span className="text-[#252525] text-[12px] font-normal leading-normal tracking-[-0.24px]">
//                   {selectedDayObj?.day ?? `Day ${activeDay + 1}`}
//                 </span>
//                 <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">
//                   {formatDisplayDate(selectedDayObj?.fullDate)}
//                 </span>

//                 {/* Day Totals Display */}
//                 {dayTotals ? (
//                   // <div className="flex gap-4 mt-2 p-3 bg-blue-50 rounded-lg">
//                   //   <span className="text-[#252525] text-[12px] font-semibold">
//                   //     Day Totals: 
//                   //   </span>
//                   //   <span className="text-[#252525] text-[12px]">
//                   //     Calories: {dayTotals.calories_kcal}kcal
//                   //   </span>
//                   //   <span className="text-[#252525] text-[12px]">
//                   //     Protein: {dayTotals.protein}g
//                   //   </span>
//                   //   <span className="text-[#252525] text-[12px]">
//                   //     Carbs: {dayTotals.carbs}g
//                   //   </span>
//                   //   <span className="text-[#252525] text-[12px]">
//                   //     Fat: {dayTotals.fat}g
//                   //   </span>
//                   // </div>
//                   ""
//                 ) : (
//                   <div className="flex gap-4 mt-2 p-3 bg-gray-100 rounded-lg">
//                     <span className="text-gray-500 text-[12px] font-semibold">
//                       No meal data available for this day
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {/* Render diet plan sections from dynamic data - THIS SHOWS FILTERED DATA */}
//               {dietPlanData.length > 0 ? (
//                 dietPlanData.map((section) => (
//                   <div key={section.id} className="flex py-5 bg-white rounded-[15px] border-4 border-[#F5F7FA]">
//                     <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
//                       <div className="flex flex-col gap-2.5">
//                         <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.48px]">{section.time}</span>
//                         <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">{section.timeRange}</span>
//                       </div>

//                       <div className="max-w-fit py-1.5 px-2 rounded-[20px] bg-[#E1E6ED] text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px] whitespace-nowrap">
//                         {section.foodsCount}
//                       </div>
//                     </div>

// <div className="flex items-start justify-between flex-1">
//                     <div className="flex flex-col py-5 pl-5 gap-[30px] border-l border-l-[#E1E6ED] flex-1">
//                       {section.meals.map((meal) => (
//                         <div key={meal.id} className="flex gap-5 justify-between">
//                           <div className="flex gap-5 items-start py-[5px]">
//                             <div className="flex items-center gap-1">
//                               {/* <Image
//                                 src={meal.icon}
//                                 alt={meal.icon}
//                                 width={24}
//                                 height={24}
//                               /> */}
//                               <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">{meal.number}</span>
//                             </div>
//                             {/* <div
//                               className="rounded-[21px] p-2 text-[10px] font-semibold leading-[110%] tracking-[-0.2px]"
//                               style={{ backgroundColor: meal.statusColor, color: meal.textColor }}
//                             >
//                               {meal.status}
//                             </div> */}
//                           </div>

//                           <div className="flex gap-[33px] flex-1">
//                             <div className="flex-1">
//                               {meal.foodItems.map((foodItem, index) => (
//                                 <div key={index} className="mb-4 last:mb-0">
//                                   <div className="flex flex-col gap-1">
//                                     <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">{foodItem.name}</span>
//                                     <div className="flex flex-wrap gap-[5px]">
//                                       {foodItem.details.map((detail, detailIndex) => (
//                                         // <span key={detailIndex} className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px] bg-gray-100 px-2 py-1 rounded">
//                                         //   {detail}
//                                         // </span>

//                                         <span
//                                           key={detailIndex}
//                                           className={`text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px] px-2 py-1 rounded ${detailIndex === 0 ? 'bg-white ' : 'bg-gray-100'
//                                             }`}
//                                         >
//                                           {detail}
//                                         </span>

//                                       ))}
//                                       {/* <Image
//                                         src="/icons/hugeicons_information-circle.svg"
//                                         alt="hugeicons_information-circle"
//                                         width={12}
//                                         height={12}
//                                       /> */}
//                                     </div>
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                    <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer"
//                    onClick={() => handleEditClick(section)}
//                    >
//                        <Image
//                           src="/icons/hugeicons_edit-03.svg"
//                            alt="hugeicons_edit-03"
//                          height={24}
//                       width={24}
//                        />
//                          <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">Edit</span>
//                      </div>
// </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="flex justify-center items-center py-10">
//                   <span className="text-[#252525] text-[16px] font-normal">
//                     {extractedData?.result?.error
//                       ? `PDF Extraction Error: ${extractedData.result.error}`
//                       : planSummary && extractedData?.result
//                         ? `No diet plan data available for ${selectedDayObj?.day}.`
//                         : 'Please Repload the pdf'
//                     }
//                   </span>
//                 </div>
//               )}

//             </div>

//             <div>
//               <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>

//               {/* <div className='py-[23px]'>
//                 <div className='flex gap-5 justify-end'>
//                   <div className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px] text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>
//                     Save as draft
//                   </div>

//                   <div className='px-20 py-[15px] bg-[#308BF9] rounded-[10px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>
//                     Confirm & Next
//                   </div>
//                 </div>
//               </div> */}
//             </div>

//           </div>

//         </div>
//       </div>

//       <DietEvent
//         open={isModalOpen}
//         onClose={handleCloseModal}
//         selectedMeal={selectedMeal}
//       />
//     </>
//   )
// }














// "use client"

// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import DietEvent from "./modal/diet-event-popup";
// import { useSelector } from "react-redux";

// export default function DietPlanCreated() {
//   const [activeDay, setActiveDay] = useState(0);
//   const [days, setDays] = useState([]);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedMeal, setSelectedMeal] = useState(null);
//   const [planSummary, setPlanSummary] = useState(null);
//   const [allDays, setAllDays] = useState([]);
//   const [windowStartIndex, setWindowStartIndex] = useState(0);
//   const [extractedData, setExtractedData] = useState(null);

//   const VISIBLE_COUNT = 7;

//   useEffect(() => {
//     if (typeof window === "undefined") return;
    
//     // Fetch extractedData from localStorage
//     const storedData = localStorage.getItem("extractedData");
//     if (storedData) {
//       setExtractedData(JSON.parse(storedData));
//     }
//   }, []);

//   const visibleDays = allDays.slice(windowStartIndex, windowStartIndex + VISIBLE_COUNT);

//   // Get plan summary from localStorage
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const storedPlanSummary = localStorage.getItem('planSummary');
//       if (storedPlanSummary) {
//         setPlanSummary(JSON.parse(storedPlanSummary));
//       }
//     }
//   }, []);

//   const getDayName = (date) => {
//     const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
//     return days[date.getDay()];
//   };

//   const getMealDataForDay = (dayDate) => {
//     if (!extractedData?.result) return [];

//     const dayName = getDayName(dayDate).toLowerCase();
//     const dayData = extractedData.result[dayName];

//     if (!dayData?.meals) {
//       return [];
//     }

//     return dayData.meals.map((meal, index) => {
//       const timeParts = meal.time.split(' at ');
//       const time = timeParts[0];
//       const timeRange = timeParts[1] || '';

//       const getIcon = (mealTime) => {
//         const timeLower = mealTime.toLowerCase();
//         if (timeLower.includes('waking') || timeLower.includes('wake up') || timeLower.includes('early morning')) {
//           return "/icons/hugeicons_bubble-tea-02.svg";
//         } else if (timeLower.includes('breakfast')) {
//           return "/icons/hugeicons_dish-02.svg";
//         } else if (timeLower.includes('lunch')) {
//           return "/icons/hugeicons_dish-02.svg";
//         } else if (timeLower.includes('dinner')) {
//           return "/icons/hugeicons_dish-02.svg";
//         } else if (timeLower.includes('mid morning') || timeLower.includes('evening') || timeLower.includes('snack')) {
//           return "/icons/hugeicons_vegetarian-food.svg";
//         } else {
//           return "/icons/hugeicons_vegetarian-food.svg";
//         }
//       };

//       const meals = meal.items.map((item, itemIndex) => ({
//         id: itemIndex + 1,
//         icon: getIcon(time),
//         number: (itemIndex + 1).toString(),
//         status: "100% Filled",
//         statusColor: "#E1F6E6",
//         textColor: "#3FAF58",
//         foodItems: [{
//           name: item.name,
//           details: [
//             item.portion,
//             `${item.calories_kcal}kcal`,
//             `Protein: ${item.protein}g`,
//             `Carbs: ${item.carbs}g`,
//             `Fat: ${item.fat}g`
//           ]
//         }],
//         totals: {
//           calories_kcal: item.calories_kcal,
//           protein: item.protein,
//           carbs: item.carbs,
//           fat: item.fat
//         }
//       }));

//       return {
//         id: index + 1,
//         time: time,
//         timeRange: timeRange,
//         foodsCount: `${meal.items.length} food${meal.items.length > 1 ? 's' : ''} added`,
//         meals: meals,
//       };
//     });
//   };

//   const generateAllDays = (startDate, endDate) => {
//     const list = [];
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     const daysDiff = Math.floor((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1;

//     for (let i = 0; i < daysDiff; i++) {
//       const date = new Date(start);
//       date.setDate(start.getDate() + i);

//       list.push({
//         id: i,
//         day: `Day ${i + 1}`,
//         date: date.toLocaleDateString("en-US", { day: "2-digit", month: "short" }),
//         fullDate: date
//       });
//     }

//     return list;
//   };

//   useEffect(() => {
//     if (!planSummary) return;

//     const start = new Date(planSummary.plan_start_date);
//     const end = new Date(planSummary.plan_end_date);

//     const generated = generateAllDays(start, end);
//     setAllDays(generated);

//     setWindowStartIndex(0);
//     setActiveDay(0);
//   }, [planSummary]);

//   const handlePreviousDays = () => {
//     if (windowStartIndex === 0) return;
//     setWindowStartIndex((prev) => Math.max(prev - VISIBLE_COUNT, 0));
//     setActiveDay(windowStartIndex - VISIBLE_COUNT);
//   };

//   const handleNextDays = () => {
//     if (windowStartIndex + VISIBLE_COUNT >= allDays.length) return;
//     setWindowStartIndex((prev) => Math.min(prev + VISIBLE_COUNT, allDays.length - VISIBLE_COUNT));
//     setActiveDay(windowStartIndex + VISIBLE_COUNT);
//   };

//   const handleEditClick = (section) => {
//     setSelectedMeal({ section, day: allDays[activeDay], dayTotals: getDayTotals() });
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedMeal(null);
//   };

//   const getDietPlanDataForActiveDay = () => {
//     if (!allDays[activeDay]?.fullDate) {
//       return [];
//     }

//     const currentDay = allDays[activeDay];
//     const meals = getMealDataForDay(currentDay.fullDate);

//     return meals;
//   };

//   const selectedDayObj = allDays.find((d) => d.id === activeDay);
//   const formatDisplayDate = (dateObj) => {
//     if (!dateObj) return "";
//     return `${dateObj.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}, ${dateObj.toLocaleDateString("en-US", { weekday: "long" })}`;
//   };

//   const dietPlanData = getDietPlanDataForActiveDay();
//   const dayTotals = getDayTotals();

//   return (
//     <>
//       <div className="w-full max-w-full min-w-0 overflow-x-hidden relative flex flex-col gap-[310px]">
//         <div>
//           <div className="flex justify-between pl-[15px] pr-[20px]">
//             <p className="text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap">Diet Plan</p>
//           </div>
//           <div className="flex flex-col gap-[15px]">
//             <div className="w-full border-b border-[#E1E6ED]"></div>

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
//                   {visibleDays.map((day, index) => (
//                     <div key={day.id} className="flex items-center">
//                       <div
//                         className={`flex flex-col w-[140px] gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer ${
//                           activeDay === day.id ? 'bg-[#308BF9]' : 'bg-white'
//                         }`}
//                         onClick={() => setActiveDay(day.id)}
//                       >
//                         <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${
//                           activeDay === day.id ? 'text-white' : 'text-[#252525]'
//                         }`}>
//                           {day.day}
//                         </span>
//                         <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${
//                           activeDay === day.id ? 'text-white' : 'text-[#252525]'
//                         }`}>
//                           {day.date}
//                         </span>
//                       </div>
//                       {index < visibleDays.length - 1 && <div className="border-white border-r h-8 mx-2"></div>}
//                     </div>
//                   ))}
//                   <IoIosArrowForward
//                     className="text-[#252525] ml-2 cursor-pointer"
//                     onClick={handleNextDays}
//                   />
//                 </div>
//               </div>
//               {/* Render dynamic content for the selected day */}
//               <div className="flex flex-col gap-2.5 ml-[30px]">
//                 <span className="text-[#252525] text-[12px] font-normal leading-normal tracking-[-0.24px]">{selectedDayObj?.day ?? `Day ${activeDay + 1}`}</span>
//                 <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">{formatDisplayDate(selectedDayObj?.fullDate)}</span>
//               </div>
//               {dietPlanData.length > 0 ? (
//                 dietPlanData.map((section) => (
//                   <div key={section.id} className="flex py-5 bg-white rounded-[15px] border-4 border-[#F5F7FA]">
//                     <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
//                       <div className="flex flex-col gap-2.5">
//                         <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.48px]">{section.time}</span>
//                         <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">{section.timeRange}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-start justify-between flex-1">
//                       <div className="flex flex-col py-5 pl-5 gap-[30px] border-l border-l-[#E1E6ED] flex-1">
//                         {section.meals.map((meal) => (
//                           <div key={meal.id} className="flex gap-5 justify-between">
//                             <div className="flex gap-5 items-start py-[5px]">
//                               <div className="flex items-center gap-1">
//                                 <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">{meal.number}</span>
//                               </div>
//                             </div>
//                             <div className="flex gap-[33px] flex-1">
//                               <div className="flex-1">
//                                 {meal.foodItems.map((foodItem, index) => (
//                                   <div key={index} className="mb-4 last:mb-0">
//                                     <div className="flex flex-col gap-1">
//                                       <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">{foodItem.name}</span>
//                                       <div className="flex flex-wrap gap-[5px]">
//                                         {foodItem.details.map((detail, detailIndex) => (
//                                           <span key={detailIndex} className={`text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px] px-2 py-1 rounded ${detailIndex === 0 ? 'bg-white ' : 'bg-gray-100'}`}>{detail}</span>
//                                         ))}
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer" onClick={() => handleEditClick(section)}>
//                         <Image src="/icons/hugeicons_edit-03.svg" alt="hugeicons_edit-03" height={24} width={24} />
//                         <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">Edit</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="flex justify-center items-center py-10">
//                   <span className="text-[#252525] text-[16px] font-normal">
//                     {extractedData?.result?.error ? `PDF Extraction Error: ${extractedData.result.error}` : 'Please Repload the pdf'}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <DietEvent open={isModalOpen} onClose={handleCloseModal} selectedMeal={selectedMeal} />
//       </div>
//     </>
//   );
// }








"use client"

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import Image from "next/image";
import DietEvent from "./modal/diet-event-popup"
import Cookies from "js-cookie";;
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { updateDietPlanJsonService } from "../services/authService";
import { toast } from "sonner";

export default function DietPlanCreated() {
  const [activeDay, setActiveDay] = useState(0);
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  console.log("selectedMeal2801:-", selectedMeal);
  const [planSummary, setPlanSummary] = useState(null);
  const [allDays, setAllDays] = useState([]);
  const [windowStartIndex, setWindowStartIndex] = useState(0);
   const [isSubmitting, setIsSubmitting] = useState(false);
  const reduxExtractedData = useSelector((state) => state.extractedData.data);
  console.log("reduxExtractedData2801:-", reduxExtractedData);
  const clientProfile = useSelector((state) => state.clientProfile.data);
  console.log("clientProfile2803:-", clientProfile);


   const searchParams = useSearchParams();
  const profile_id = searchParams.get("profile_id") || clientProfile?.profile_id;


  const getDieticianIdFromCookies = () => {
    if (typeof window === 'undefined') return null;
    
    // Try to get from cookies
    const cookieValue = Cookies.get("dietician");
    if (cookieValue) {
      try {
        const parsedCookie = JSON.parse(cookieValue);
        return parsedCookie.dietician_id;
      } catch (e) {
        console.error("Error parsing dietician cookie:", e);
      }
    }
    
    // Fallback: check if you have it in localStorage or other storage
    const storedDieticianId = localStorage.getItem("dietician_id");
    if (storedDieticianId) return storedDieticianId;
    
    return null;
  };


  // Initialize localExtractedData from localStorage synchronously to avoid race conditions
  // This ensures user edits are preserved when navigating back
  const [localExtractedData, setLocalExtractedData] = useState(() => {
    if (typeof window === "undefined") return null;
    
    try {
      const storedData = localStorage.getItem("updatedExtractedData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log("Initialized localExtractedData from localStorage:", parsedData);
        return parsedData;
      }
    } catch (err) {
      console.error("Failed to get updatedExtractedData from localStorage:", err);
    }
    return null;
  });

  console.log("localExtractedData2802:-", localExtractedData);
  const VISIBLE_COUNT = 7;

  // Save Redux data to localStorage when it changes, but ONLY if:
  // 1. localStorage doesn't have updatedExtractedData (no user edits exist)
  // 2. localExtractedData is null (component just mounted and no localStorage data)
  // This prevents overwriting user edits when navigating back
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!reduxExtractedData) return;
    
    // Check if localStorage has updated data - if it does, preserve it
    try {
      const storedData = localStorage.getItem("updatedExtractedData");
      if (storedData) {
        // localStorage has data, don't overwrite it with Redux data
        console.log("Preserving localStorage data, skipping Redux update");
        // Make sure localExtractedData is set from localStorage
        if (localExtractedData === null) {
          setLocalExtractedData(JSON.parse(storedData));
        }
        return;
      }
    } catch (err) {
      console.error("Failed to check localStorage:", err);
    }
    
    // Only update if localExtractedData is null AND localStorage is empty
    // This means it's a fresh load with no user edits
    if (localExtractedData !== null) return;

    try {
      localStorage.setItem("updatedExtractedData", JSON.stringify(reduxExtractedData)); // Save Redux data in localStorage
      setLocalExtractedData(reduxExtractedData); // Set the Redux data as localExtractedData
      console.log("Initialized with Redux data:", reduxExtractedData);
    } catch (err) {
      console.error("Failed to save updatedExtractedData to localStorage", err);
    }
  }, [reduxExtractedData, localExtractedData]);

  // Use localExtractedData if available (has updates), otherwise use Redux data
  // This ensures that when we update localExtractedData, it takes precedence
  const extractedData = localExtractedData || reduxExtractedData;
  console.log("extractedData:-", extractedData);

  const visibleDays = allDays.slice(
    windowStartIndex,
    windowStartIndex + VISIBLE_COUNT
  );

  // Get plan summary from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedPlanSummary = localStorage.getItem('planSummary');
      if (storedPlanSummary) {
        setPlanSummary(JSON.parse(storedPlanSummary));
      }
    }
  }, []);

  // Function to get day name from date
  const getDayName = (date) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[date.getDay()];
  };

  // Function to get full diet plan data (all days)
  const getFullDietPlanData = () => {
    if (!extractedData?.result) {
      return {};
    }
    
    return extractedData.result;
  };

  // Get full diet plan data - This contains the entire structure
  const dietPlanData = getFullDietPlanData();
  console.log("dietPlanData (full structure2931):", dietPlanData);

  // Function to get UI formatted meal data for a specific day FROM dietPlanData
  const getMealDataForDayFromDietPlan = (dayDate) => {
    if (!dietPlanData || Object.keys(dietPlanData).length === 0) {
      console.log("No diet plan data available");
      return [];
    }

    if (dietPlanData?.error) {
      console.error("PDF Extraction Error:", dietPlanData.error);
      return [];
    }

    const dayName = getDayName(dayDate).toLowerCase();
    const dayData = dietPlanData[dayName];

    if (!dayData?.meals) return [];

    return dayData.meals.map((meal, index) => {
      const timeParts = meal.time.split(" at ");
      const time = timeParts[0];
      const timeRange = timeParts[1] || "";

      const getIcon = (mealTime) => {
        const timeLower = mealTime.toLowerCase();
        if (
          timeLower.includes("waking") ||
          timeLower.includes("wake up") ||
          timeLower.includes("early morning")
        ) {
          return "/icons/hugeicons_bubble-tea-02.svg";
        } else if (timeLower.includes("breakfast")) {
          return "/icons/hugeicons_dish-02.svg";
        } else if (timeLower.includes("lunch")) {
          return "/icons/hugeicons_dish-02.svg";
        } else if (timeLower.includes("dinner")) {
          return "/icons/hugeicons_dish-02.svg";
        } else if (
          timeLower.includes("mid morning") ||
          timeLower.includes("evening") ||
          timeLower.includes("snack")
        ) {
          return "/icons/hugeicons_vegetarian-food.svg";
        } else {
          return "/icons/hugeicons_vegetarian-food.svg";
        }
      };

      const meals = (meal.items || []).map((item, itemIndex) => {
        // ✅ If your saved item already has `details`, use them (they include user units)
        const details =
          item.details && Array.isArray(item.details) && item.details.length
            ? item.details
            : [
                item.portion ?? "",
                item.calories_kcal != null ? `${item.calories_kcal}kcal` : "",
                item.protein != null ? `Protein: ${item.protein}g` : "",
                item.carbs != null ? `Carbs: ${item.carbs}g` : "",
                item.fat != null ? `Fat: ${item.fat}g` : "",
              ];

        return {
          id: itemIndex + 1,
          icon: getIcon(time),
          number: (itemIndex + 1).toString(),
          status: "100% Filled",
          statusColor: "#E1F6E6",
          textColor: "#3FAF58",
          foodItems: [
            {
              name: item.name,
              details, // ✅ use user-defined units from details
            },
          ],
          totals: {
            calories_kcal: item.calories_kcal,
            protein: item.protein,
            carbs: item.carbs,
            fat: item.fat,
          },
        };
      });

      return {
        id: index + 1,
        time,
        timeRange,
        foodsCount: `${meal.items.length} food${
          meal.items.length > 1 ? "s" : ""
        } added`,
        meals,
      };
    });
  };



  // Function to generate 7 days array based on plan start date
  const generateAllDays = (startDate, endDate) => {
    const list = [];
    const start = new Date(startDate);
    const end = new Date(endDate);

    const daysDiff =
      Math.floor((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1;

    for (let i = 0; i < daysDiff; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);

      list.push({
        id: i,
        day: `Day ${i + 1}`,
        date: date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short"
        }),
        fullDate: date
      });
    }

    return list;
  };

  useEffect(() => {
    if (!planSummary) return;

    const start = new Date(planSummary.plan_start_date);
    const end = new Date(planSummary.plan_end_date);

    const generated = generateAllDays(start, end);
    setAllDays(generated);

    // always reset window to first 7
    setWindowStartIndex(0);
    setActiveDay(0);
  }, [planSummary]);

  // Function to navigate to previous days
  const handlePreviousDays = () => {
    if (windowStartIndex === 0) return; // can't go backward

    setWindowStartIndex((prev) => Math.max(prev - VISIBLE_COUNT, 0));
    setActiveDay(windowStartIndex - VISIBLE_COUNT);
  };

  // Function to navigate to next days
  const handleNextDays = () => {
    if (windowStartIndex + VISIBLE_COUNT >= allDays.length) return; // can't go beyond

    setWindowStartIndex((prev) =>
      Math.min(prev + VISIBLE_COUNT, allDays.length - VISIBLE_COUNT)
    );
    setActiveDay(windowStartIndex + VISIBLE_COUNT);
  };

 
// SIMPLE: use what you already rendered in activeDayMeals
const handleEditClick = (section) => {
  if (!section || !allDays[activeDay]?.fullDate) return;

  const dayObj = allDays[activeDay];
  const dayName = getDayName(dayObj.fullDate).toLowerCase();

  // Build a clean object for the modal
  const selected = {
    dayName,                         // "monday"
    dayLabel: dayObj.day,            // "Day 1"
    fullDate: dayObj.fullDate,       // Date object
    time: section.time,              // "Breakfast"
    timeRange: section.timeRange,    // "10:00 AM"
    foodsCount: section.foodsCount,  // "1 food added"

    // Take meals + foodItems exactly as shown in activeDayMeals
    meals: section.meals.map((meal) => ({
      id: meal.id,
      number: meal.number,
      foodItems: meal.foodItems,     // [{ name, details: [...] }]
      totals: meal.totals ?? null,
    })),
  };

  // This is what DietEvent will receive
  setSelectedMeal(selected);
  setIsModalOpen(true);
};




  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMeal(null);
  };

  // Function to handle save from modal - merges extractedData with updated data
  const handleSaveFromModal = (updatedData) => {
    if (!extractedData) return;

    try {
      // Get existing updatedExtractedData from localStorage if available
      let existingUpdatedData = null;
      try {
        const storedData = localStorage.getItem("updatedExtractedData");
        if (storedData) {
          existingUpdatedData = JSON.parse(storedData);
        }
      } catch (err) {
        console.error("Failed to get existing updatedExtractedData:", err);
      }

      // Start with extractedData as base to ensure all days are included
      const mergedData = {
        ...extractedData,
        result: {}
      };

      // First, copy all days from extractedData
      if (extractedData.result) {
        Object.keys(extractedData.result).forEach(dayName => {
          mergedData.result[dayName] = {
            ...extractedData.result[dayName]
          };
        });
      }

      // Then merge existing updatedExtractedData day by day to preserve previous edits
      if (existingUpdatedData?.result) {
        Object.keys(existingUpdatedData.result).forEach(dayName => {
          if (!mergedData.result[dayName]) {
            mergedData.result[dayName] = {};
          }
          
          // Merge meals array properly - update existing meals or add new ones
          const existingMeals = mergedData.result[dayName].meals || [];
          const updatedMeals = existingUpdatedData.result[dayName].meals || [];
          
          const mergedMeals = [...existingMeals];
          updatedMeals.forEach(updatedMeal => {
            // Normalize the meal time format - combine time and timeRange if they're separate
            let normalizedTime = updatedMeal.time || "";
            if (updatedMeal.timeRange && !normalizedTime.includes(" at ")) {
              normalizedTime = `${normalizedTime} at ${updatedMeal.timeRange}`;
            }
            
            // Create normalized meal object
            const normalizedMeal = {
              ...updatedMeal,
              time: normalizedTime
            };
            
            // Find matching meal by comparing base time (before " at ")
            const baseTime = normalizedTime.split(" at ")[0].trim();
            const mealIndex = mergedMeals.findIndex(m => {
              const mBaseTime = (m.time || "").split(" at ")[0].trim();
              return mBaseTime === baseTime;
            });
            
            if (mealIndex !== -1) {
              mergedMeals[mealIndex] = normalizedMeal;
            } else {
              mergedMeals.push(normalizedMeal);
            }
          });
          
          // Normalize all existing meals to ensure consistent format
          const normalizedMergedMeals = mergedMeals.map(meal => {
            // If meal has separate timeRange, combine it with time
            if (meal.timeRange && !meal.time.includes(" at ")) {
              return {
                ...meal,
                time: `${meal.time} at ${meal.timeRange}`
              };
            }
            return meal;
          });
          
          // Recalculate totals for the day
          const totals = {
            calories_kcal: 0,
            protein: 0,
            carbs: 0,
            fat: 0
          };
          
          normalizedMergedMeals.forEach(meal => {
            if (meal.items) {
              meal.items.forEach(item => {
                totals.calories_kcal += parseInt(item.calories_kcal) || 0;
                totals.protein += parseFloat(item.protein) || 0;
                totals.carbs += parseFloat(item.carbs) || 0;
                totals.fat += parseFloat(item.fat) || 0;
              });
            }
          });
          
          mergedData.result[dayName] = {
            ...mergedData.result[dayName],
            meals: normalizedMergedMeals,
            totals: totals
          };
        });
      }

      // Finally merge the new updatedData from modal day by day
      if (updatedData?.result) {
        Object.keys(updatedData.result).forEach(dayName => {
          if (!mergedData.result[dayName]) {
            mergedData.result[dayName] = {};
          }
          
          const existingMeals = mergedData.result[dayName].meals || [];
          const newMeals = updatedData.result[dayName].meals || [];
          
          // Normalize and merge meals
          const mergedMeals = [...existingMeals];
          newMeals.forEach(newMeal => {
            // Normalize the meal time format - combine time and timeRange if they're separate
            let normalizedTime = newMeal.time || "";
            if (newMeal.timeRange && !normalizedTime.includes(" at ")) {
              normalizedTime = `${normalizedTime} at ${newMeal.timeRange}`;
            }
            
            // Create normalized meal object
            const normalizedMeal = {
              ...newMeal,
              time: normalizedTime
            };
            
            // Find matching meal by comparing base time (before " at ")
            const baseTime = normalizedTime.split(" at ")[0].trim();
            const mealIndex = mergedMeals.findIndex(m => {
              const mBaseTime = (m.time || "").split(" at ")[0].trim();
              return mBaseTime === baseTime;
            });
            
            if (mealIndex !== -1) {
              mergedMeals[mealIndex] = normalizedMeal;
            } else {
              mergedMeals.push(normalizedMeal);
            }
          });
          
          // Normalize all existing meals to ensure consistent format
          const normalizedMergedMeals = mergedMeals.map(meal => {
            // If meal has separate timeRange, combine it with time
            if (meal.timeRange && !meal.time.includes(" at ")) {
              return {
                ...meal,
                time: `${meal.time} at ${meal.timeRange}`
              };
            }
            return meal;
          });
          
          // Recalculate totals for the day
          const totals = {
            calories_kcal: 0,
            protein: 0,
            carbs: 0,
            fat: 0
          };
          
          normalizedMergedMeals.forEach(meal => {
            if (meal.items) {
              meal.items.forEach(item => {
                totals.calories_kcal += parseInt(item.calories_kcal) || 0;
                totals.protein += parseFloat(item.protein) || 0;
                totals.carbs += parseFloat(item.carbs) || 0;
                totals.fat += parseFloat(item.fat) || 0;
              });
            }
          });
          
          mergedData.result[dayName] = {
            ...mergedData.result[dayName],
            meals: normalizedMergedMeals,
            totals: totals
          };
        });
      }

      // Update localStorage with merged data
      localStorage.setItem("updatedExtractedData", JSON.stringify(mergedData));
      setLocalExtractedData(mergedData);
      console.log("Updated extractedData merged and saved:", mergedData);
    } catch (error) {
      console.error("Failed to merge and save updatedExtractedData:", error);
    }
  };
  


const handleFinishClick = async () => {
  try {
    setIsSubmitting(true);
    
    // 1. Get required data
    const login_id = getDieticianIdFromCookies(); // From cookies
    
    if (!login_id) {
      toast.error("Please log in again. Dietician ID not found.");
      return;
    }
    
    if (!profile_id) {
      toast.error("Profile ID not found.");
      return;
    }
    
    // 2. Get diet_plan_id from clientProfile - FIXED
    console.log("Full clientProfile:", clientProfile);
    
    // Check if clientProfile exists
    if (!clientProfile) {
      toast.error("Client profile not loaded. Please try again.");
      return;
    }
    
    // Check if plans_summary exists
    if (!clientProfile.plans_summary) {
      toast.error("No plan summary found in client profile.");
      return;
    }
    
    // Check if active plans exist
    const activePlans = clientProfile.plans_summary.active;
    console.log("Active plans:", activePlans);
    
    if (!activePlans || !Array.isArray(activePlans) || activePlans.length === 0) {
      toast.error("No active diet plan found.");
      return;
    }
    
    // Get the first active plan
    const firstActivePlan = activePlans[0];
    const diet_plan_id = firstActivePlan?.id;
    console.log("diet_plan_id3351:-", diet_plan_id);
    
    if (!diet_plan_id) {
      toast.error("Active diet plan ID is missing.");
      return;
    }
    
    // 3. Prepare diet_json from updatedExtractedData
    let diet_json = {};
    try {
      const storedData = localStorage.getItem("updatedExtractedData");
      if (storedData) {
        diet_json = JSON.parse(storedData);
      } else if (extractedData) {
        diet_json = extractedData;
      }
    } catch (error) {
      console.error("Error getting diet plan data:", error);
      diet_json = extractedData || {};
    }
    
    // 4. Call the API with loading toast
    const toastId = toast.loading("Saving diet plan...");
    
    const response = await updateDietPlanJsonService(
      login_id,
      profile_id,
      diet_plan_id,
      diet_json.result   
    );
    
    if (response.success) {
      console.log("response3341:-", response);
      toast.success("Diet plan saved successfully!", {
        id: toastId,
        duration: 3000,
      });
      
    } else {
      toast.error(`Failed to save diet plan: ${response.message || "Unknown error"}`, {
        id: toastId,
        duration: 5000,
      });
    }
    
  } catch (error) {
    console.error("Error saving diet plan:", error);
    toast.error(`Error saving diet plan: ${error.message}`, {
      duration: 5000,
    });
  } finally {
    setIsSubmitting(false);
  }
};

  // Function to get meal data for active day (for UI rendering) FROM dietPlanData
  const getActiveDayMealsFromDietPlan = () => {
    if (!allDays[activeDay]?.fullDate) {
      return [];
    }

    const currentDay = allDays[activeDay];
    const meals = getMealDataForDayFromDietPlan(currentDay.fullDate);

    return meals;
  };

  const selectedDayObj = allDays.find((d) => d.id === activeDay);
  const formatDisplayDate = (dateObj) => {
    if (!dateObj) return "";
    const ddMon = dateObj.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
    const wk = dateObj.toLocaleDateString("en-US", { weekday: "long" });
    return `${ddMon}, ${wk}`;
  };

  // Get active day meals for UI rendering FROM dietPlanData
  const activeDayMeals = getActiveDayMealsFromDietPlan();
  console.log("activeDayMeals (for UI3462):", activeDayMeals);

  // Get day totals for the active day FROM dietPlanData
  const getDayTotalsFromDietPlan = () => {
    if (!dietPlanData || !allDays[activeDay]?.fullDate) return null;

    const dayName = getDayName(allDays[activeDay].fullDate).toLowerCase();
    const dayData = dietPlanData[dayName];

    return dayData?.totals || null;
  };

  const dayTotals = getDayTotalsFromDietPlan();

  return (
    <>
      <div className='w-full max-w-full min-w-0 overflow-x-hidden relative flex flex-col gap-[310px]'>

        <div className="">
          <div className="flex justify-between pl-[15px] pr-[20px]">
            <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Diet Plan</p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-full  border-b border-[#E1E6ED]"></div>

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
              
                  {visibleDays.map((day, index) => (
                    <div key={day.id} className="flex items-center">
                      <div
                        className={`flex flex-col w-[140px] gap-2.5 pt-[15px] pb-2.5 pr-2.5 pl-[15px] rounded-[8px] cursor-pointer ${
                          activeDay === day.id ? 'bg-[#308BF9]' : 'bg-white'
                        }`}
                        onClick={() => {
                          setActiveDay(day.id);
                        }}
                      >
                        <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${
                          activeDay === day.id ? 'text-white' : 'text-[#252525]'
                        }`}>
                          {day.day}
                        </span>
                        <span className={`text-[12px] font-semibold leading-[110%] tracking-[-0.48px] ${
                          activeDay === day.id ? 'text-white' : 'text-[#252525]'
                        }`}>
                          {day.date}
                        </span>
                      </div>

                      {index < visibleDays.length - 1 && (
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

              {/* Dynamic header that matches the selected day */}
                <div className="flex-1 overflow-y-auto max-h-[420px] pr-[10px] pt-4 pb-4  [scrollbar-width:none] 
                [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col gap-2.5 ml-[30px]">
                <span className="text-[#252525] text-[12px] font-normal leading-normal tracking-[-0.24px]">
                  {selectedDayObj?.day ?? `Day ${activeDay + 1}`}
                </span>
                <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">
                  {formatDisplayDate(selectedDayObj?.fullDate)}
                </span>

                {/* Day Totals Display */}
                {dayTotals ? (
                  ""
                ) : (
                  <div className="flex gap-4 mt-2 p-3 bg-gray-100 rounded-lg">
                    <span className="text-gray-500 text-[12px] font-semibold">
                      No meal data available for this day
                    </span>
                  </div>
                )}
              </div>

              {/* Render diet plan sections from dynamic data - THIS SHOWS FILTERED DATA */}
              {activeDayMeals.length > 0 ? (
                activeDayMeals.map((section) => (
                  <div key={section.id} className="flex py-5 bg-white rounded-[15px] border-4 border-[#F5F7FA]">
                    <div className="flex flex-col gap-[30px] pt-[15px] pl-[15px] pr-2.5 pb-2.5 min-w-[200px]">
                      <div className="flex flex-col gap-2.5">
                        <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.48px]">{section.time}</span>
                        <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">{section.timeRange}</span>
                      </div>

                      <div className="max-w-fit py-1.5 px-2 rounded-[20px] bg-[#E1E6ED] text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px] whitespace-nowrap">
                        {section.foodsCount}
                      </div>
                    </div>

                    <div className="flex items-start justify-between flex-1">
                      <div className="flex flex-col py-5 pl-5 gap-[30px] border-l border-l-[#E1E6ED] flex-1">
                        {section.meals.map((meal) => (
                          <div key={meal.id} className="flex gap-5 justify-between">
                            <div className="flex gap-5 items-start py-[5px]">
                              <div className="flex items-center gap-1">
                                <span className="text-[#252525] text-[15px] font-bold leading-none tracking-[-0.3px]">{meal.number}</span>
                              </div>
                            </div>

                            <div className="flex gap-[33px] flex-1">
                              <div className="flex-1">
                                {meal.foodItems.map((foodItem, index) => (
                                  <div key={index} className="mb-4 last:mb-0">
                                    <div className="flex flex-col gap-1">
                                      <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">{foodItem.name}</span>
                                      <div className="flex flex-wrap gap-[5px]">
                                        {foodItem.details.map((detail, detailIndex) => (
                                          <span
                                            key={detailIndex}
                                            className={`text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px] px-2 py-1 rounded ${detailIndex === 0 ? 'bg-white ' : 'bg-gray-100'
                                              }`}
                                          >
                                            {detail}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col ml-[33px] mb-[44px] mr-2.5 gap-2.5 border border-[#D9D9D9] rounded-[10px] py-[15px] px-5 cursor-pointer"
                        onClick={() => handleEditClick(section)}
                      >
                        <Image
                          src="/icons/hugeicons_edit-03.svg"
                          alt="hugeicons_edit-03"
                          height={24}
                          width={24}
                        />
                        <span className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[0.24px]">Edit</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center py-10">
                  <span className="text-[#252525] text-[16px] font-normal">
                    {dietPlanData?.error
                      ? `PDF Extraction Error: ${dietPlanData.error}`
                      : planSummary && Object.keys(dietPlanData).length > 0
                        ? `No diet plan data available for ${selectedDayObj?.day}.`
                        : !dietPlanData || Object.keys(dietPlanData).length === 0 ? 'Loading data from storage...' : 'Please upload the PDF'
                    }
                  </span>
                </div>
              )}
</div>
            </div>

           <div className="mt-[30px]">
  <div className="w-full border-b border-[#E1E6ED]"></div>
  <div className="flex justify-end my-[23px] mr-5">
    <button 
              onClick={handleFinishClick}
              disabled={isSubmitting}
              className={`cursor-pointer text-[#FFFFFF] text-[12px] font-semibold leading-normal tracking-[-0.24px] px-5 py-[15px] rounded-[10px] ${
                isSubmitting ? 'bg-gray-400' : 'bg-[#308BF9]'
              }`}
            >
              {isSubmitting ? 'Saving...' : 'Finish'}
            </button>
  </div>
</div>

          </div>

        </div>
      </div>

      <DietEvent
        open={isModalOpen}
        onClose={handleCloseModal}
        selectedMeal={selectedMeal}
        onSave={handleSaveFromModal}
      />
    </>
  )
}