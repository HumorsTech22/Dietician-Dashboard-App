"use client"
import Image from "next/image"
import { ResultEvaluation } from "./result-evaluation"

export default function HistoryPlan() {
    return (
        <>

            <div className="w-full flex flex-col rounded-[10px] bg-white">

                <div className=" flex justify-between items-start pt-[30px] pl-[30px] pr-[25px] ">
                    <div className="flex justify-between ">
                        <div className="flex flex-col gap-[15px] ">
                            <div className="flex gap-5  justify-between items-center ">
                                <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">1-Month Plan</span>
                                <span className="items-end text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24]">05 July-05 Aug</span>
                            </div>
                            <div className="flex gap-[3px]">
                                <Image
                                    src="/icons/hugeicons_stop-watch.svg"
                                    alt="hugeicons_stop-watch"
                                    width={12}
                                    height={12}
                                />

                                <span className="text-[#DA5747] text-[12px] font-normal leading-normal tracking-[-0.24px]">Status Pending</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-5 ">
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
                    </div>

                </div>

                <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>



                <div className="mx-[15px] mt-4  rounded-[15px] bg-[#F5F7FA]">
                    <div className="flex flex-col gap-2.5 pt-[21px] pl-[30px]">
                        <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">Plan Summary</span>
                        <div className="flex gap-[3px]">
                            <Image
                                src="/icons/hugeicons_stop-watch.svg"
                                alt="hugeicons_stop-watch"
                                width={12}
                                height={12}
                            />
                            <span className="text-[#DA5747] text-[12px] font-normal leading-normal tracking-[-0.24px]">Pending (1/1)</span>
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
                                <span className="text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Weight Loss</span>

                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col gap-2.5">
                                        <span className="text-[#252525] text-[20px] font-bold leading-[126%] tracking-[-0.4px]">75Kg</span>
                                        <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">Past stat</span>
                                    </div>


                                    <div className="flex items-center h-px my-[7px] w-[205px] border border-[#E1E6ED]"></div>



                                    <div className="flex flex-col gap-2.5">
                                        <span className="text-[#252525] text-[20px] font-bold leading-[126%] tracking-[-0.4px]">70Kg</span>
                                        <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">Target stat</span>
                                    </div>
                                </div>
                            </div>


                            <div className="flex gap-5 px-5 py-[13px] border border-[#E1E6ED] bg-white rounded-[10px]">
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
                            </div>
                        </div>


                        <div className="flex flex-wrap justify-end pr-10">
                            <div className="flex items-center px-5 py-[15px] rounded-[10px] bg-[#D9D9D9] ">
                                <span className="text-[#535359] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Update</span>
                            </div>
                        </div>
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
                            <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                Low
                            </div>

                            <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                High Protein
                            </div>

                            <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                Balanced Fiber
                            </div>

                            <div className="px-5 py-[5px] rounded-[20px] bg-white text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                                Calorie Deficit
                            </div>
                        </div>
                    </div>
                </div>



                <div className=" flex justify-between items-start pt-[70px] pl-[30px] pr-[25px] ">
                    <div className="flex justify-between ">
                        <div className="flex flex-col gap-[10px] ">
                            <div className="flex gap-5  justify-between items-center ">
                                <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">Client Log</span>

                            </div>
                            <div className="flex gap-[3px]">
                                <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Last Logged 05 Jul, 12:30pm</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="my-[20px] mx-[15px] border border-[#E1E6ED]"></div>

                <div className="flex flex-col gap-[15px]">

                    <div className="flex gap-[442px]">
                        <div className="flex gap-[5px] pl-[30px] ">
                            <Image
                                src="/icons/hugeicons_rice-bowl-01.svg"
                                alt="hugeicons_rice-bowl-01"
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
                                 <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">14</span>
                                 <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of 15 tests</span>
                              </div>
                           </div>
                           
                        </div>

                      <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
                           <div className="flex items-start flex-col gap-[27px]">
                         
                                <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Taken</span>
                             

                              <div className="flex flex-col gap-[5px] ">
                                 <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">14</span>
                                 <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of 15 tests</span>
                              </div>
                           </div>
                           
                        </div>


                      <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
                           <div className="flex items-start flex-col gap-[27px]">
                         
                                <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Taken</span>
                             

                              <div className="flex flex-col gap-[5px] ">
                                 <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">14</span>
                                 <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of 15 tests</span>
                              </div>
                           </div>
                           
                        </div>


                        <div className="w-[235px] py-[15px] pl-[15px] pr-[81px] rounded-[10px] bg-[#F5F7FA]">
                           <div className="flex items-start flex-col gap-[27px]">
                         
                                <span className="text-[#535359] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Tests Taken</span>
                             

                              <div className="flex flex-col gap-[5px] ">
                                 <span  className="text-[#252525] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">14</span>
                                 <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">out of 15 tests</span>
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


