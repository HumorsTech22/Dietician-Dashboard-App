import { IoIosArrowDown } from "react-icons/io";
import MealSidebar from "./meal-sidebar";
import MealTracked from "./meal-tracked";

export default function MealLogged() {
    return (
        <>
            <div className="flex flex-col gap-[25px] mt-[42px] bg-[#F5F7FA] rounded-[15px] pt-[25px] pl-[30px] pr-7 pb-2.5">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2.5">
                        <span className="text-[#252525] text-[15px] font-semibold tracking-[-0.3] leading-[110%">Meal Logged</span>
                        <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">For 04 Jul, 2025</span>
                    </div>


                    <div className="flex gap-[26px] items-center">
                        <div className="w-fit flex">
                            <div className="rounded-l-[10px] border border-[#D9D9D9] pl-[15px] py-[11px] pr-[21px] bg-[#F0F0F0] text-center">
                                <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-medium">
                                    Filter
                                </p>
                            </div>
                            <div className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4 py-2 pr-2.5 bg-white">
                                <p className="cursor-pointer text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
                                    All Food (15)
                                </p>
                                <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" />
                            </div>
                        </div>


                        <div className="px-[20px] py-[15px] items-center bg-[#308BF9] rounded-[15px] cursor-pointer">

                            <p className="text-[12px] leading-[100%] font-semibold text-white space-x-0 tracking-[-0.24px]">
                                Update Diet plan
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full border-b border-[#E1E6ED]"></div>

                <div className=" flex justify-between bg-[#E1E6ED] rounded-[15px] px-5 py-[19px] ml-[59px] mr-[59px]">
                    <div className="flex flex-col justify-between w-[170px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
                        <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
                        <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">Total Foods</p>

                    </div>

                    <div className="flex gap-20 bg-white rounded-[8px] py-[19px] px-5">
                        <div className="flex flex-col justify-between">
                            <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
                            <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">Foods Consumed</span>
                        </div>

                        <div className="flex flex-col justify-between">
                            <span className="text-[#252525] text-[25px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
                            <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[0.2px]">foods missed</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-[12px] bg-white rounded-[8px] py-[19px] pl-5 pr-10">
                        <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2.5">
                            <span className="text-[#252525] text-[18px] font-semibold tracking-[-0.5px] leading-[126%]">40</span>
                            <div className="w-px h-4 bg-[#D9D9D9]" />
                            <span className="text-[#252525] text-[18px] font-semibold tracking-[-0.36px] leading-[126%]">Moderate</span>
                           
                        </div>
                         <div className="flex justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="117"
                                    height="6"
                                    viewBox="0 0 117 6"
                                    fill="none"
                                >
                                    <path
                                        d="M3 3H114"
                                        stroke="#D9D9D9"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M3 3H59"
                                        stroke="#FFC412"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
</div>
                            <div>
                                <p className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Overall Metabolic Compatibility Score</p>
                            </div>
                    </div>
                </div>

                <div className="flex gap-[5px] ">
                    <MealSidebar />
                    <MealTracked />
                </div>
            </div>

        </>
    )
};