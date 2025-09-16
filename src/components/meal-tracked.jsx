// import Image from "next/image";
// import { IoIosArrowUp } from "react-icons/io";

// export default function MealTracked() {
//     return (
//         <>
//             <div className="w-full flex flex-col gap-3">
//                 <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
//                     <div className="flex items-start justify-between gap-3">
//                         {/* Left: icon + count */}
//                         <div className="flex items-center">
//                             <Image
//                                 src="/icons/hugeicons_bubble-tea-02.svg"
//                                 alt="Drink"
//                                 width={24}
//                                 height={24}
//                             />
//                             <div className="py-[3px] px-[9px]">
//                                 {/* leading fixed to percentage */}
//                                 <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
//                                     1
//                                 </span>
//                             </div>
//                         </div>


//                         <div className="flex flex-1 justify-between ">
//                             {/* Middle: title + meta */}
//                             <div className=" flex flex-col gap-1">
//                                 <div>
//                                     {/* leading fixed to percentage */}
//                                     <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                         Carrot + beetroot + fresh turmeric &amp; zinger [ little ] <br />  with lemon drops
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         220kcal
//                                     </span>
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         1 cup (250 ml)
//                                     </span>
//                                     <Image
//                                         src="/icons/hugeicons_information-circle.svg"
//                                         alt="Info"
//                                         width={12}
//                                         height={12}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Right: score card */}
//                             <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
//                                 <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
//                                     Metabolic <br /> Compatibility Score
//                                 </span>

//                                 <div className="flex flex-col gap-2.5">
//                                     <div className="flex items-center gap-2.5">
//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             40
//                                         </span>

//                                         {/* visible thin divider */}
//                                         <div className="w-px h-4 bg-[#D9D9D9]" />

//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             Moderate
//                                         </span>
//                                     </div>

//                                     <div className="flex justify-start">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="117"
//                                             height="6"
//                                             viewBox="0 0 117 6"
//                                             fill="none"
//                                             aria-hidden="true"
//                                         >
//                                             <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
//                                             <path d="M3 3H59" stroke="#FFC412" strokeWidth="5" strokeLinecap="round" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="flex items-center w-full">

//                         <div className="flex-1 h-px bg-[#D9D9D9]" />


//                         <div className="flex items-center gap-[5px] ml-2">
//                             <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 View less
//                             </span>
//                             <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
//                         </div>
//                     </div>


//                     <div className="flex flex-col gap-5">
//                         <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
//                             <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110% tracking-[-0.2px]">Good Impacts</p>

//                             <div className="flex gap-5">
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                             </div>
//                         </div>


//                         <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
//                             <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110% tracking-[-0.2px]">Bad Impacts</p>

//                             <div className="flex gap-5">
//                                 <div className="p-2 bg-[#FFECEA] rounded-[5px]">
//                                     <span className="text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>
//                                 <div className="p-2 bg-[#FFECEA] rounded-[5px]">
//                                     <span className="text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>
//                                 <div className="p-2 bg-[#FFECEA] rounded-[5px]">
//                                     <span className="text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>




//                     <div className="flex gap-8 items-start pl-2.5 pr-4 pt-4 pb-[18px] bg-[#F0F5FD] rounded-[10px]">
//                         {/* Left: Icon + Title */}
//                         <div className="flex gap-[5px] items-center max-w-[118px]">
//                             <Image
//                                 src="/icons/hugeicons_award-01.svg"
//                                 alt="Award"
//                                 width={15}
//                                 height={15}
//                             />
//                             <span className="bg-gradient-to-r from-[#308BF9] to-[#1C5293] bg-clip-text text-transparent font-bold text-[12px] tracking-[-0.24px]">
//                                 Goal Alignment
//                             </span>
//                         </div>

//                         {/* Right: Description */}
//                         <div className="flex-1">
//                             <p className="text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
//                                 Oats are high in carbohydrates, which can hinder fat loss by maintaining
//                                 glucose reliance. The fiber content, while generally healthy, may contribute
//                                 to the high fermentation observed.
//                             </p>
//                         </div>
//                     </div>

//                 </div>


//                 <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
//                     <div className="flex items-start justify-between gap-3">
//                         {/* Left: icon + count */}
//                         <div className="flex items-center">
//                             <Image
//                                 src="/icons/hugeicons_plant-04.svg"
//                                 alt="hugeicons_plant-04"
//                                 width={24}
//                                 height={24}
//                             />
//                             <div className="py-[3px] px-[9px]">
//                                 {/* leading fixed to percentage */}
//                                 <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
//                                     2
//                                 </span>
//                             </div>
//                         </div>


//                         <div className="flex flex-1 justify-between ">
//                             {/* Middle: title + meta */}
//                             <div className=" flex flex-col gap-1">
//                                 <div>
//                                     {/* leading fixed to percentage */}
//                                     <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                         Almonds [soaked + de skinned]
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         220kcal
//                                     </span>
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         1 cup (250 ml)
//                                     </span>
//                                     <Image
//                                         src="/icons/hugeicons_information-circle.svg"
//                                         alt="Info"
//                                         width={12}
//                                         height={12}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Right: score card */}
//                             <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
//                                 <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
//                                     Metabolic <br /> Compatibility Score
//                                 </span>

//                                 <div className="flex flex-col gap-2.5">
//                                     <div className="flex items-center gap-2.5">
//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             80
//                                         </span>

//                                         {/* visible thin divider */}
//                                         <div className="w-px h-4 bg-[#D9D9D9]" />

//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             High
//                                         </span>
//                                     </div>

//                                     <div className="flex justify-start">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="117"
//                                             height="6"
//                                             viewBox="0 0 117 6"
//                                             fill="none"
//                                         >
//                                             <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
//                                             <path d="M3 3H99" stroke="#3FAF58" strokeWidth="5" strokeLinecap="round" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="flex items-center w-full">

//                         <div className="flex-1 h-px bg-[#D9D9D9]" />


//                         <div className="flex items-center gap-[5px] ml-2">
//                             <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 View less
//                             </span>
//                             <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
//                         </div>
//                     </div>


//                     <div className="flex flex-col gap-5">
//                         <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
//                             <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110% tracking-[-0.2px]">Good Impacts</p>

//                             <div className="grid grid-cols-4 gap-5">
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>


//                             </div>
//                         </div>

//                     </div>

//                     <div className="flex gap-8 items-start pl-2.5 pr-4 pt-4 pb-[18px] bg-[#F0F5FD] rounded-[10px]">
//                         {/* Left: Icon + Title */}
//                         <div className="flex gap-[5px] items-center max-w-[118px]">
//                             <Image
//                                 src="/icons/hugeicons_award-01.svg"
//                                 alt="Award"
//                                 width={15}
//                                 height={15}
//                             />
//                             <span className="bg-gradient-to-r from-[#308BF9] to-[#1C5293] bg-clip-text text-transparent font-bold text-[12px] tracking-[-0.24px]">
//                                 Goal Alignment
//                             </span>
//                         </div>

//                         {/* Right: Description */}
//                         <div className="flex-1">
//                             <p className="text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
//                                 Oats are high in carbohydrates, which can hinder fat loss by maintaining
//                                 glucose reliance. The fiber content, while generally healthy, may contribute
//                                 to the high fermentation observed.
//                             </p>
//                         </div>
//                     </div>

//                 </div>



//                 <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
//                     <div className="flex items-start justify-between gap-3">
//                         {/* Left: icon + count */}
//                         <div className="flex items-center">
//                             <Image
//                                 src="/icons/hugeicons_plant-04.svg"
//                                 alt="hugeicons_plant-04"
//                                 width={24}
//                                 height={24}
//                             />
//                             <div className="py-[3px] px-[9px]">
//                                 {/* leading fixed to percentage */}
//                                 <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
//                                     3
//                                 </span>
//                             </div>
//                         </div>


//                         <div className="flex flex-1 justify-between ">
//                             {/* Middle: title + meta */}
//                             <div className=" flex flex-col gap-1">
//                                 <div>
//                                     {/* leading fixed to percentage */}
//                                     <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                         Almonds [soaked + de skinned]
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         220kcal
//                                     </span>
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         1 cup (250 ml)
//                                     </span>
//                                     <Image
//                                         src="/icons/hugeicons_information-circle.svg"
//                                         alt="Info"
//                                         width={12}
//                                         height={12}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Right: score card */}
//                             <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
//                                 <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
//                                     Metabolic <br /> Compatibility Score
//                                 </span>

//                                 <div className="flex flex-col gap-2.5">
//                                     <div className="flex items-center gap-2.5">
//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             20
//                                         </span>

//                                         {/* visible thin divider */}
//                                         <div className="w-px h-4 bg-[#D9D9D9]" />

//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             Low
//                                         </span>
//                                     </div>

//                                     <div className="flex justify-start">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="117"
//                                             height="6"
//                                             viewBox="0 0 117 6"
//                                             fill="none"
//                                         >
//                                             <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
//                                             <path d="M3 3H33" stroke="#DA5747" strokeWidth="5" strokeLinecap="round" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="flex items-center w-full">

//                         <div className="flex-1 h-px bg-[#D9D9D9]" />


//                         <div className="flex items-center gap-[5px] ml-2">
//                             <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 View less
//                             </span>
//                             <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
//                         </div>
//                     </div>


//                     <div className="flex flex-col gap-5">
//                         <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
//                             <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110% tracking-[-0.2px]">Good Impacts</p>

//                             <div className="grid grid-cols-4 gap-5">
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>
//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>

//                                 <div className="p-2 bg-[#E1F6E6] rounded-[5px]">
//                                     <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
//                                 </div>


//                             </div>
//                         </div>

//                     </div>

//                     <div className="flex gap-8 items-start pl-2.5 pr-4 pt-4 pb-[18px] bg-[#F0F5FD] rounded-[10px]">
//                         {/* Left: Icon + Title */}
//                         <div className="flex gap-[5px] items-center max-w-[118px]">
//                             <Image
//                                 src="/icons/hugeicons_award-01.svg"
//                                 alt="Award"
//                                 width={15}
//                                 height={15}
//                             />
//                             <span className="bg-gradient-to-r from-[#308BF9] to-[#1C5293] bg-clip-text text-transparent font-bold text-[12px] tracking-[-0.24px]">
//                                 Goal Alignment
//                             </span>
//                         </div>

//                         {/* Right: Description */}
//                         <div className="flex-1">
//                             <p className="text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
//                                 Oats are high in carbohydrates, which can hinder fat loss by maintaining
//                                 glucose reliance. The fiber content, while generally healthy, may contribute
//                                 to the high fermentation observed.
//                             </p>
//                         </div>
//                     </div>

//                 </div>



//                       <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
//                     <div className="flex items-start justify-between gap-3">
//                         {/* Left: icon + count */}
//                         <div className="flex items-center">
//                             <Image
//                                 src="/icons/hugeicons_plant-04.svg"
//                                 alt="hugeicons_plant-04"
//                                 width={24}
//                                 height={24}
//                             />
//                             <div className="py-[3px] px-[9px]">
//                                 {/* leading fixed to percentage */}
//                                 <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
//                                     4
//                                 </span>
//                             </div>
//                         </div>


//                         <div className="flex flex-1 justify-between ">
//                             {/* Middle: title + meta */}
//                             <div className=" flex flex-col gap-1">
//                                 <div>
//                                     {/* leading fixed to percentage */}
//                                     <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                         Almonds [soaked + de skinned]
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         220kcal
//                                     </span>
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         1 cup (250 ml)
//                                     </span>
//                                     <Image
//                                         src="/icons/hugeicons_information-circle.svg"
//                                         alt="Info"
//                                         width={12}
//                                         height={12}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Right: score card */}
//                             <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
//                                 <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
//                                     Metabolic <br /> Compatibility Score
//                                 </span>

//                                 <div className="flex flex-col gap-2.5">
//                                     <div className="flex items-center gap-2.5">
//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             20
//                                         </span>

//                                         {/* visible thin divider */}
//                                         <div className="w-px h-4 bg-[#D9D9D9]" />

//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             Low
//                                         </span>
//                                     </div>

//                                     <div className="flex justify-start">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="117"
//                                             height="6"
//                                             viewBox="0 0 117 6"
//                                             fill="none"
//                                         >
//                                             <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
//                                             <path d="M3 3H33" stroke="#DA5747" strokeWidth="5" strokeLinecap="round" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="flex items-center w-full">

//                         <div className="flex-1 h-px bg-[#D9D9D9]" />


//                         <div className="flex items-center gap-[5px] ml-2">
//                             <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 View less
//                             </span>
//                             <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
//                         </div>
//                     </div>



//                 </div>


//                              <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
//                     <div className="flex items-start justify-between gap-3">
//                         {/* Left: icon + count */}
//                         <div className="flex items-center">
//                             <Image
//                                 src="/icons/hugeicons_plant-04.svg"
//                                 alt="hugeicons_plant-04"
//                                 width={24}
//                                 height={24}
//                             />
//                             <div className="py-[3px] px-[9px]">
//                                 {/* leading fixed to percentage */}
//                                 <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
//                                     5
//                                 </span>
//                             </div>
//                         </div>


//                         <div className="flex flex-1 justify-between ">
//                             {/* Middle: title + meta */}
//                             <div className=" flex flex-col gap-1">
//                                 <div>
//                                     {/* leading fixed to percentage */}
//                                     <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
//                                         Almonds [soaked + de skinned]
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-[5px]">
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         220kcal
//                                     </span>
//                                     <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
//                                         1 cup (250 ml)
//                                     </span>
//                                     <Image
//                                         src="/icons/hugeicons_information-circle.svg"
//                                         alt="Info"
//                                         width={12}
//                                         height={12}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Right: score card */}
//                             <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
//                                 <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
//                                     Metabolic <br /> Compatibility Score
//                                 </span>

//                                  <div className="flex flex-col gap-2.5">
//                                     <div className="flex items-center gap-2.5">
//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             100
//                                         </span>

//                                         {/* visible thin divider */}
//                                         <div className="w-px h-4 bg-[#D9D9D9]" />

//                                         <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
//                                             High
//                                         </span>
//                                     </div>

//                                     <div className="flex justify-start">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="117"
//                                             height="6"
//                                             viewBox="0 0 117 6"
//                                             fill="none"
//                                         >
//                                             <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
//                                             <path d="M3 3H99" stroke="#3FAF58" strokeWidth="5" strokeLinecap="round" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="flex items-center w-full">

//                         <div className="flex-1 h-px bg-[#D9D9D9]" />


//                         <div className="flex items-center gap-[5px] ml-2">
//                             <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                                 View less
//                             </span>
//                             <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
//                         </div>
//                     </div>



//                 </div>
//             </div>
//         </>
//     );
// }












"use client";

import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// helper: map score 0..100 → svg endpoint (x from 3..114)
function progressX(score) {
  const clamped = Math.max(0, Math.min(100, Number(score) || 0));
  return 3 + (111 * clamped) / 100;
}

function MealCard({
  iconSrc,
  count,
  title,
  kcal,
  portion,
  scoreValue,
  scoreLabel,
  scoreColor,
  goodImpacts = [],
  badImpacts = [],
  goalText,
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
      {/* Header Row */}
      <div className="flex items-start justify-between gap-3">
        {/* Left: icon + count */}
        <div className="flex items-center">
          <Image src={iconSrc} alt="item-icon" width={24} height={24} />
          <div className="py-[3px] px-[9px]">
            <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
              {count}
            </span>
          </div>
        </div>

        <div className="flex flex-1 justify-between">
          {/* Middle: title + meta */}
          <div className="flex flex-col gap-1">
            <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
              {title}
            </p>

            <div className="flex items-center gap-[5px]">
              <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
                {kcal}
              </span>
              <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">
                {portion}
              </span>
              <Image
                src="/icons/hugeicons_information-circle.svg"
                alt="Info"
                width={12}
                height={12}
              />
            </div>
          </div>

          {/* Right: score card */}
          <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
            <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px] capitalize">
              Metabolic <br /> Compatibility Score
            </span>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                  {scoreValue}
                </span>
                <div className="w-px h-4 bg-[#D9D9D9]" />
                <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                  {scoreLabel}
                </span>
              </div>

              <div className="flex justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="117"
                  height="6"
                  viewBox="0 0 117 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                  <path
                    d={`M3 3H${progressX(scoreValue)}`}
                    stroke={scoreColor}
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider + Toggle */}
      <div className="flex items-center w-full">
        <div className="flex-1 h-px bg-[#D9D9D9]" />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-[5px] ml-2"
        >
          <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
            {open ? "View less" : "View more"}
          </span>
          {open ? (
            <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
          ) : (
            <IoIosArrowDown className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
          )}
        </button>
      </div>

      {/* Details (conditional) */}
      {open && (
        <>
          {(goodImpacts.length > 0 || badImpacts.length > 0) && (
            <div className="flex flex-col gap-5">
              {goodImpacts.length > 0 && (
                <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
                  <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
                    Good Impacts
                  </p>

                  <div
                    className={
                      goodImpacts.length > 3 ? "grid grid-cols-4 gap-5" : "flex gap-5"
                    }
                  >
                    {goodImpacts.map((g, idx) => (
                      <div key={`good-${idx}`} className="p-2 bg-[#E1F6E6] rounded-[5px]">
                        <span className="whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
                          {g.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {badImpacts.length > 0 && (
                <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
                  <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
                    Bad Impacts
                  </p>

                  <div
                    className={
                      badImpacts.length > 3 ? "grid grid-cols-4 gap-5" : "flex gap-5"
                    }
                  >
                    {badImpacts.map((b, idx) => (
                      <div key={`bad-${idx}`} className="p-2 bg-[#FFECEA] rounded-[5px]">
                        <span className="whitespace-nowrap text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">
                          {b.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {goalText && (
            <div className="flex gap-8 items-start pl-2.5 pr-4 pt-4 pb-[18px] bg-[#F0F5FD] rounded-[10px]">
              <div className="flex gap-[5px] items-center max-w-[118px]">
                <Image src="/icons/hugeicons_award-01.svg" alt="Award" width={15} height={15} />
                <span className="bg-gradient-to-r from-[#308BF9] to-[#1C5293] bg-clip-text text-transparent font-bold text-[12px] tracking-[-0.24px]">
                  Goal Alignment
                </span>
              </div>

              <div className="flex-1">
                <p className="text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
                  {goalText}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

MealCard.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.node.isRequired,
  kcal: PropTypes.string.isRequired,
  portion: PropTypes.string.isRequired,
  scoreValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  scoreLabel: PropTypes.oneOf(["Low", "Moderate", "High"]).isRequired,
  scoreColor: PropTypes.string.isRequired,
  goodImpacts: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired })),
  badImpacts: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired })),
  goalText: PropTypes.string,
  defaultOpen: PropTypes.bool,
};

export default function MealTracked() {
  const commonGood = [
    { label: "Fermentative Metabolism Score" },
    { label: "Fermentative Metabolism Score" },
    { label: "Fermentative Metabolism Score" },
  ];

  const commonBad = [
    { label: "Fermentative Metabolism Score" },
    { label: "Fermentative Metabolism Score" },
    { label: "Fermentative Metabolism Score" },
  ];

  const longGood = Array.from({ length: 7 }, () => ({
    label: "Fermentative Metabolism Score",
  }));

  return (
    <div className="w-full flex flex-col gap-3">
      {/* CARD 1 */}
      <MealCard
        iconSrc="/icons/hugeicons_bubble-tea-02.svg"
        count={1}
        title={
          <>
            Carrot + beetroot + fresh turmeric &amp; zinger [ little ] <br /> with lemon drops
          </>
        }
        kcal="220kcal"
        portion="1 cup (250 ml)"
        scoreValue={40}
        scoreLabel="Moderate"
        scoreColor="#FFC412"
        goodImpacts={commonGood}
        badImpacts={commonBad}
        goalText="Oats are high in carbohydrates, which can hinder fat loss by maintaining glucose reliance. The fiber content, while generally healthy, may contribute to the high fermentation observed."
        defaultOpen={true}
      />

      {/* CARD 2 */}
      <MealCard
        iconSrc="/icons/hugeicons_plant-04.svg"
        count={2}
        title={<>Almonds [soaked + de skinned]</>}
        kcal="220kcal"
        portion="1 cup (250 ml)"
        scoreValue={80}
        scoreLabel="High"
        scoreColor="#3FAF58"
        goodImpacts={longGood}
        badImpacts={[]}
        goalText="Oats are high in carbohydrates, which can hinder fat loss by maintaining glucose reliance. The fiber content, while generally healthy, may contribute to the high fermentation observed."
        defaultOpen={true}
      />

      {/* CARD 3 */}
      <MealCard
        iconSrc="/icons/hugeicons_plant-04.svg"
        count={3}
        title={<>Almonds [soaked + de skinned]</>}
        kcal="220kcal"
        portion="1 cup (250 ml)"
        scoreValue={20}
        scoreLabel="Low"
        scoreColor="#DA5747"
        goodImpacts={longGood}
        badImpacts={[]}
        goalText="Oats are high in carbohydrates, which can hinder fat loss by maintaining glucose reliance. The fiber content, while generally healthy, may contribute to the high fermentation observed."
        defaultOpen={true}
      />

      {/* CARD 4 */}
      <MealCard
        iconSrc="/icons/hugeicons_plant-04.svg"
        count={4}
        title={<>Almonds [soaked + de skinned]</>}
        kcal="220kcal"
        portion="1 cup (250 ml)"
        scoreValue={20}
        scoreLabel="Low"
        scoreColor="#DA5747"
        goodImpacts={[]}
        badImpacts={[]}
        goalText={undefined}
        defaultOpen={true}
      />

      {/* CARD 5 */}
      <MealCard
        iconSrc="/icons/hugeicons_plant-04.svg"
        count={5}
        title={<>Almonds [soaked + de skinned]</>}
        kcal="220kcal"
        portion="1 cup (250 ml)"
        scoreValue={100}
        scoreLabel="High"
        scoreColor="#3FAF58"
        goodImpacts={[]}
        badImpacts={[]}
        goalText={undefined}
        defaultOpen={true}
      />
    </div>
  );
}
