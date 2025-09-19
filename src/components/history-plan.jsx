"use client"
import Image from "next/image"

export default function HistoryPlan() {
    return (
        <>

            <div className="w-full flex flex-col  bg-white">

                <div className=" flex justify-between pt-[30px] pl-[30px] pr-[25px]">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex  justify-between items-end ">
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

                    <div className="flex gap-1.5 px-5 py-[15px] items-center border border-[#D9D9D9] bg-white rounded-[10px] cursor-alias">
                        <Image
                            src="/icons/hugeicons_file-export.svg"
                            alt="add-icons"
                            width={20}
                            height={20}
                        />
                        <p className="text-[12px] font-semibold text-black space-x-0">
                            Export Data
                        </p>
                    </div>

                </div>

                <div className="my-[20px] border border-[#E1E6ED]"></div>



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
                    <div className="my-[20px]  border border-[#E1E6ED]"></div>


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

                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-2.5">
                                        <span className="text-[#252525] text-[20px] font-bold leading-[126%] tracking-[-0.4px]">75Kg</span>
                                        <span className="text-[#252525] text-[10px] font-normal leading-normal tracking-[-0.2px]">Past stat</span>
                                    </div>


                                    <div className="h-px my-[7px] w-[205px] border border-[#E1E6ED]"></div>



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


<div className="flex justify-end pr-10">
                        <div className="text-[#535359] text-[12px] font-semibold leading-normal tracking-[-0.24px] px-5 py-[15px] rounded-[10px] bg-[#D9D9D9]">
                           Update
                            </div>
                            </div>
                    </div>

                      <div className="my-[20px] border border-[#E1E6ED]"></div>


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


         
            </div>
        </>
    )
}


