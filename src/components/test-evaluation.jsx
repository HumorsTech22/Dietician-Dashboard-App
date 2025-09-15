"use client"
import Image from "next/image"

export default function TestEvaluation() {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col bg-[#F5F7FA] rounded-[15px]">
                    <div className="flex flex-col gap-2.5 ml-[30px] mt-5">
                        <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">Test Evaluation</span>
                        <span className="text-[#535359] text-[10px] font-normal leading-[-0.2px] tracking-[-0.2px]">Tracked at 05 Jul, 12:30pm</span>
                    </div>

                    <div className="border boder-[#E1E6ED] mx-[15px] my-5"></div>

                    <div className="flex rounded-[10px]">
                        <div>
                            <Image
                                src="/icons/Frame 427320804.svg"
                                alt="Frame 427320804"
                                width={235}
                                height={442}
                            />
                        </div>



                        <div className="flex flex-col gap-[50px]">
                            <div className="flex flex-col gap-[15px] mr-[18px]">
                                <div className="flex gap-2.5 items-center">
                                    <div className="p-2 rounded-[10px] bg-white">
                                        <Image
                                            src="/icons/hugeicons_digestion.svg"
                                            alt="hugeicons_digestion"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div>
                                        <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
                                            Gut Fermentation
                                        </span>
                                        <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
                                            Metabolism
                                        </span>

                                    </div>
                                </div>



                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-[15px]">
                                        <div className="flex flex-col">
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Absorptive</span>
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">97%</span>
                                            <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
                                        </div>
                                    </div>

                                    <div className="border border-[#A1A1A1]"></div>

                                    <div className="flex flex-col gap-[15px]">
                                        <div className="flex flex-col">
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Fermentative </span>
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">95%</span>
                                            <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
                                        </div>
                                    </div>

                                </div>
                            </div>





                            <div className="flex flex-col gap-[15px] mr-[18px]">
                                <div className="flex gap-2.5 items-center">
                                    <div className="p-2 rounded-[10px] bg-white">
                                        <Image
                                            src="/icons/healthicons_pancreas-outline.svg"
                                            alt="healthicons_pancreas-outline"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div>
                                        <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
                                            Glucose

                                        </span>
                                        <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
                                            -Vs-
                                        </span>
                                        <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">

                                            Fat Metabolism
                                        </span>

                                    </div>
                                </div>



                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-[15px]">
                                        <div className="flex flex-col">
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Fat </span>
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">91%</span>
                                            <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
                                        </div>
                                    </div>

                                    <div className="border border-[#A1A1A1]"></div>

                                    <div className="flex flex-col gap-[15px]">
                                        <div className="flex flex-col">
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Glucose </span>
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">92%</span>
                                            <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
                                        </div>
                                    </div>

                                </div>
                            </div>







                            <div className="flex flex-col gap-[15px] mr-[18px]">
                                <div className="flex gap-2.5 items-center">
                                    <div className="p-2 rounded-[10px] bg-white">
                                        <Image
                                            src="/icons/hugeicons_liver.svg"
                                            alt="hugeicons_liver.svg"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div>
                                        <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
                                            Liver Hepatic
                                        </span>
                                        <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
                                            Metabolism
                                        </span>

                                    </div>
                                </div>



                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-[15px]">
                                        <div className="flex flex-col">
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Hepatic Stress </span>
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">85%</span>
                                            <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
                                        </div>
                                    </div>

                                    <div className="border border-[#A1A1A1]"></div>

                                    <div className="flex flex-col gap-[15px]">
                                        <div className="flex flex-col">
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Detoxification </span>
                                            <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">89%</span>
                                            <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>

                </div>

                {/* <div className="flex flex-col bg-[#F5F7FA] rounded-[15px]">
                    <div className="flex flex-col gap-2.5 ml-[30px] mt-5 mb-[15px]">
                        <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">Test Evaluation</span>
                        <span className="text-[#535359] text-[10px] font-normal leading-[-0.2px] tracking-[-0.2px]">Tracked at 05 Jul, 12:30pm</span>
                    </div>

                    <div className="border boder-[#E1E6ED]"></div>

                    <div>
                        <div>
                            <Image
                                src="/icons/Frame 427320804.svg"
                                alt="Frame 427320804"
                                width={235}
                                height={442}
                            />
                        </div>
                    </div>

                </div> */}
            </div>

        </>
    )
};