import Image from "next/image"

export default function FoodEvaluation() {
    return (
        <>
            <div className="mt-[70px]">
                <div className="flex gap-5 ml-[45px]">
                    <div className="flex flex-col gap-2.5">
                        <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">Food Evaluation</span>
                        <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px] capitalize">Last Logged 05 Jul, 12:30pm</span>
                    </div>
                    <div className="flex gap-[15px] items-center">

                        <div className="relative w-[41px] h-[41px]">
                            {/* Track + Progress */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 41 41"
                                fill="none"
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* gray track */}
                                <circle cx="20.5" cy="20.5" r="18.5" stroke="#D9D9D9" strokeWidth="3" />
                                {/* green progress (Figma path) */}
                                <path
                                    d="M39 20.5C39 10.2827 30.7173 2 20.5 2C10.2827 2 2 10.2827 2 20.5C2 30.7173 10.2827 39 20.5 39C25.2292 39 29.5439 37.2255 32.8147 34.306"
                                    stroke="#3FAF58"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* centered icon */}
                            <Image
                                src="/icons/hugeicons_award-03.svg"
                                alt="hugeicons_award-03"
                                width={24}
                                height={24}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>


                        <div className="flex flex-col gap-2.5">
                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] capitalize">Daily Goal</span>
                            <span className="text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">75% completed</span>
                        </div>
                    </div>
                </div>

                <div className="border border-[#E1E6ED] mt-[18px]"></div>

                <div className="flex gap-[50px] mt-[30px]">

                    <div className="flex gap-5 items-center">
                        <div className="relative w-[51px] h-[51px] flex items-center justify-center">
                            {/* Gray track circle */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 51 51"
                                fill="none"
                                className="absolute inset-0 w-full h-full"
                            >
                                <circle
                                    cx="25.5"
                                    cy="25.5"
                                    r="22.5"
                                    stroke="#D9D9D9"
                                    strokeWidth="5"
                                />
                            </svg>

                            {/* Orange progress arc */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 51 51"
                                fill="none"
                                className="absolute inset-0 w-full h-full"
                            >
                                <path
                                    d="M48 25.5C48 13.0736 37.9264 3 25.5 3C13.0736 3 3 13.0736 3 25.5C3 37.9264 13.0736 48 25.5 48C31.2517 48 36.4994 45.8418 40.4773 42.291"
                                    stroke="#FF9800"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* Centered icon */}
                            <Image
                                src="/icons/calories.svg"
                                alt="calories"
                                width={24}
                                height={24}
                                className="relative"
                            />
                        </div>

                        {/* Text block */}
                        <div className="flex flex-col gap-[11px]">
                            <span className="text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px] capitalize">
                                Calories
                            </span>
                            <span className="text-[#252525] text-[18px] font-semibold leading-[126%] tracking-[-0.36px]">
                                1200/1800 kcal
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-[20px]">
                        <div className="w-[169px] bg-[#F5F7FA] rounded-[10px] py-2.5 pl-5 pr-2.5">
                            <div>
                                <span className="text-[#535359] text-[14px] font-medium">Protein</span>
                            </div>

                            <div className="flex justify-start py-[15px]">
                                <svg viewBox="0 0 117 6" className="h-[6px]">
                                    <path
                                        d="M3 3H114"
                                        stroke="#D9D9D9"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M3 3H81"
                                        stroke="#FFC107"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div className="mt-3 flex flex-col gap-[5px]">
                                <span className="text-[#252525] text-[18px] font-semibold leading-[126%] tracking-[-0.36px]">
                                    150g
                                </span>
                                <span className="text-[#252525] text-[10px] leading-[126%] tracking-[-0.2px]">
                                    out of 100g
                                </span>
                            </div>
                        </div>

                         <div className="w-[169px] bg-[#F5F7FA] rounded-[10px] py-2.5 pl-5 pr-2.5">
                            <div>
                                <span className="text-[#535359] text-[14px] font-medium">Protein</span>
                            </div>

                            <div className="flex justify-start py-[15px]">
                                <svg viewBox="0 0 117 6" className="h-[6px]">
                                    <path
                                        d="M3 3H114"
                                        stroke="#D9D9D9"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M3 3H81"
                                        stroke="#FFC107"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div className="mt-3 flex flex-col gap-[5px]">
                                <span className="text-[#252525] text-[18px] font-semibold leading-[126%] tracking-[-0.36px]">
                                    150g
                                </span>
                                <span className="text-[#252525] text-[10px] leading-[126%] tracking-[-0.2px]">
                                    out of 100g
                                </span>
                            </div>
                        </div>
                        

                        <div className="w-[169px] bg-[#F5F7FA] rounded-[10px] py-2.5 pl-5 pr-2.5">
                            <div>
                                <span className="text-[#535359] text-[14px] font-medium">Carbs</span>
                            </div>

                            <div className="flex justify-start py-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="117" height="6" viewBox="0 0 117 6" fill="none">
                                    <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                                    <path d="M3 3H81" stroke="#38A250" strokeWidth="5" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div className="mt-3 flex flex-col gap-[5px]">
                                <span className="text-[#252525] text-[18px] font-semibold leading-[126%] tracking-[-0.36px]">
                                    70 g
                                </span>
                                <span className="text-[#252525] text-[10px] leading-[126%] tracking-[-0.2px]">
                                    out of 100g
                                </span>
                            </div>
                        </div>

                        <div className="w-[169px] bg-[#F5F7FA] rounded-[10px] py-2.5 pl-5 pr-2.5">
                            <div>
                                <span className="text-[#535359] text-[14px] font-medium">Fats</span>
                            </div>

                            <div className="flex justify-start py-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="117" height="6" viewBox="0 0 117 6" fill="none">
                                    <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                                    <path d="M3 3H81" stroke="#38A250" strokeWidth="5" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div className="mt-3 flex flex-col gap-[5px]">
                                <span className="text-[#252525] text-[18px] font-semibold leading-[126%] tracking-[-0.36px]">
                                    25 g
                                </span>
                                <span className="text-[#252525] text-[10px] leading-[126%] tracking-[-0.2px]">
                                    out of 100g
                                </span>
                            </div>
                        </div>

                        <div className="w-[169px] bg-[#F5F7FA] rounded-[10px] py-2.5 pl-5 pr-2.5">
                            <div>
                                <span className="text-[#535359] text-[14px] font-medium">Fiber</span>
                            </div>

                            <div className="flex justify-start py-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="117" height="6" viewBox="0 0 117 6" fill="none">
                                    <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                                    <path d="M3 3H81" stroke="#FFC412" strokeWidth="5" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div className="mt-3 flex flex-col gap-[5px]">
                                <span className="text-[#252525] text-[18px] font-semibold leading-[126%] tracking-[-0.36px]">
                                    25g
                                </span>
                                <span className="text-[#252525] text-[10px] leading-[126%] tracking-[-0.2px]">
                                    out of 100g
                                </span>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </>
    )
};