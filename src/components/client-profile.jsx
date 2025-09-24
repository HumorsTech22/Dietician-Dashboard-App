"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "sonner";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import CreatePlanModal from './modal/create-plan';



export const ClientProfile = ({ showPlanDetails = true, showOverview = true, }) => {
    const pathname = usePathname();

    const hideClientBits = (pathname || '').toLowerCase().includes('testlog-info')
        || (pathname || '').toLowerCase().includes('plan-summary')
        || (pathname || '').toLowerCase().endsWith('/plansummary');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [showUploadModal, setShowUploadModal] = useState(false);

    const options = [
        { value: "auto", label: "Automatically fill" },
        { value: "manual", label: "Manual fill" },
        { value: "copy", label: "Copy previous plan" },
    ];



    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => toast.success("Copied to clipboard!"))
            .catch(() => toast.error("Failed to copy"));
    };



    return (
        <>


            <div className='flex flex-col gap-[5px]'>


                <div className='flex gap-2.5 pl-[15px]  py-[14px] bg-white rounded-[15px]'>
                    <div className='flex gap-[15px] items-center'>
                        {/* <MdOutlineKeyboardBackspace className='w-7 h-7 cursor-pointer' /> */}
                        <Image
                            src="/icons/Frame 383.svg"
                            alt='Frame 383'
                            width={32}
                            height={32}
                            className='cursor-pointer'
                            onClick={() => window.history.back()}
                        />
                        <span className='text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]'>Clients</span>
                    </div>

                    <div className='flex gap-[5px] items-center'>
                        <IoChevronBackSharp className='w-[20px] h-[20px] cursor-pointer' />

                        <span className='text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]'>Sagar Hosur</span>
                    </div>
                </div>



                {!hideClientBits && (
                    <div className='w-[336px] flex flex-col gap-[30px]'>
                        {showOverview && (
                            <div className='flex flex-col pb-[48px] gap-5 bg-[#FFFFFF] rounded-[15px] overflow-y-auto max-h-[calc(16.75*64px)] hide-scrollbar'>
                                <div className="flex flex-col items-center gap-5 mt-[55px]">
                                    {/* Avatar */}
                                    <div className="bg-[#F0F0F0] rounded-full p-2.5 flex items-center justify-center">
                                        <Image
                                            src="/icons/hugeicons_user-circle-02.svg"
                                            alt="hugeicons_user-circle-02"
                                            height={80}
                                            width={80}
                                        />
                                    </div>

                                    {/* Text section */}
                                    <div className="flex flex-col items-center gap-5">
                                        <span className="text-[#252525] text-[25px] font-semibold leading-[110%] tracking-[-1px]">
                                            Sagar Hosur
                                        </span>

                                        <div className="flex items-center gap-5">
                                            <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                                                25 years
                                            </span>
                                            <div className="w-1 h-1 rounded-full bg-[#252525]"></div>
                                            <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                                                Male
                                            </span>
                                        </div>
                                    </div>
                                </div>



                                <div className='flex justify-center gap-[44px] px-5 py-[17px] mx-[13px] bg-[#F5F7FA] rounded-[15px]'>
                                    <div className='flex flex-col gap-3 '>
                                        <span className="text-[#252525] text-center text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Height</span>
                                        <span className="text-[#535359] text-center text-[12px] font-normal leading-[110%] tracking-[-0.24px]">180 cm</span>
                                    </div>
                                    <div className=' border-[#D9D9D9] border-[1px]'></div>
                                    <div className='flex flex-col gap-3 items-center'>
                                        <span className="text-[#252525] text-center text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Weight</span>
                                        <span className="text-[#535359] text-center text-[12px] font-normal leading-[110%] tracking-[-0.24px]">65kg</span>
                                    </div>

                                </div>

                                {/* {showPlanDetails && ( */}
                                <div className='mx-2.5 pt-5  rounded-[15px] mt-[17px] bg-[#F5F7FA]'>
                                    <div className='flex items-center justify-between ml-[30px] mr-[17px] '>
                                        <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Active</span>
                                        <Image
                                            src="/icons/hugeicons_pencil-edit-02.svg"
                                            alt='hugeicons_pencil'
                                            height={24}
                                            width={24}
                                            className='cursor-pointer'
                                        />

                                    </div>



                                    <div className='my-5 mx-[5px] border border-[#E1E6ED]'></div>

                                    <div className='flex justify-between mx-6 my-5'>
                                        <div className='flex flex-col gap-2.5 cursor-pointer'>
                                            <p className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]'>1-Month Plan</p>
                                            <p className='text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]'>Updated 05 Jul, 12:30pm</p>
                                        </div>

                                        <div className='flex items-start'>
                                            <p className='text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]'>05 July-05 Aug</p>
                                        </div>
                                    </div>


                                    <div className='my-5 mx-[5px] border border-[#E1E6ED]'></div>




                                    <div className='flex items-center gap-[5px] mt-5 mb-[25px] ml-[10px]'>
                                        <div className='p-0.5'>
                                            <Image
                                                src="/icons/hugeicons_award-01.svg"
                                                alt='hugeicons_award'
                                                width={15}
                                                height={15}
                                            />
                                        </div>
                                        <span className='text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]'>Goal</span>
                                    </div>


                                    <div className='flex flex-col gap-5 mx-5'>
                                        <div>
                                            <span className='text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px] capitalize'>Weight Loss</span>
                                        </div>

                                        <div className='flex  gap-5'>
                                            <div className='flex flex-col items-start gap-2.5'>
                                                <span className='text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]'>75Kg</span>
                                                <span className='text-[#252525] text-center text-[10px] font-normal leading-normal tracking-[-0.2px] whitespace-nowrap'>Current sat</span>
                                            </div>


                                            <div className="mt-[7px] w-[122px] h-px border border-[#A1A1A1]"></div>

                                            <div className='flex flex-col items-start gap-2.5'>
                                                <span className='text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]'>70Kg</span>
                                                <span className='text-[#252525] text-center text-[10px] font-normal leading-normal tracking-[-0.2px]  whitespace-nowrap'>Target sat</span>
                                            </div>
                                        </div>



                                        <div>
                                            <span className='text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px] capitalize'>PCOS Management</span>
                                        </div>


                                        <div className='flex  gap-5'>
                                            <div className='flex flex-col items-start gap-2.5'>
                                                <span className='text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]'>100</span>
                                                <span className='text-[#252525] text-center text-[10px] font-normal leading-normal tracking-[-0.2px]  whitespace-nowrap'>Current sat</span>
                                            </div>

                                            <div className="mt-[7px] w-[122px] h-px border border-[#A1A1A1]"></div>
                                            <div className='flex flex-col items-start gap-2.5'>
                                                <span className='text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]'>50</span>
                                                <span className='text-[#252525] text-center text-[10px] font-normal leading-normal tracking-[-0.2px]  whitespace-nowrap'>Target sat</span>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='flex flex-col gap-5 mt-10'>
                                        <div className='flex items-center gap-[5px] ml-[10px]'>
                                            <div className='p-0.5'>
                                                <Image
                                                    src="/icons/hugeicons_sparkles.svg"
                                                    alt='hugeicons_sparkles'
                                                    width={15}
                                                    height={15}
                                                />
                                            </div>

                                            <span className='text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]'>Approach</span>
                                        </div>



                                        <div className='flex flex-col gap-[5px] mx-5 mb-[30px]'>
                                            <div className='flex gap-[5px]'>
                                                <div className='bg-[#FFFFFF] px-[20px] p-[5px] rounded-[20px]'>
                                                    <span className='text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>Low GI</span>
                                                </div>
                                                <div className='bg-[#FFFFFF] px-[20px] p-[5px] rounded-[20px]'>
                                                    <span className='text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>High Protein</span>
                                                </div>

                                            </div>

                                            <div className='flex gap-[5px]'>
                                                <div className='bg-[#FFFFFF] px-[20px] p-[5px] rounded-[20px]'>
                                                    <span className='text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>Balanced Fiber</span>
                                                </div>
                                                <div className='bg-[#FFFFFF] px-[20px] p-[5px] rounded-[20px]'>
                                                    <span className='text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>Calorie Deficit</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* //  )} */}


                                <div className='flex mx-2.5 bg-[#F5F7FA] rounded-[15px] whitespace-nowrap py-[13px] pl-[30px] pr-[15px] gap-[80px] items-center'>
                                    <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">No plan</span>
                                    <button className='flex gap-[15px] px-[18px] py-[9px] bg-[#308BF9] rounded-[5px]'
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        <GoPlus className='text-white w-[15px] h-[15px] cursor-pointer' />
                                        <span className='text-white text-[12px] font-semibold leading-[110%] tracking-[-0.24px] cursor-pointer'>Create Plan</span>
                                    </button>
                                </div>


                                <div className='flex flex-col gap-10 mt-[30px]'>
                                    <div className='flex mx-8  justify-between  items-center'>
                                        <div className='flex flex-col gap-2.5'>
                                            <span className='text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>
                                                Mobile number
                                            </span>
                                            <span className='text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]'>+91 3872173120</span>
                                        </div>


                                        <Image
                                            src="/icons/hugeicons_copy-02.svg"
                                            alt='hugeicons_copy-02'
                                            width={15}
                                            height={15}
                                            className='cursor-pointer'
                                            onClick={() => copyToClipboard("+91 3872173120")}
                                        />

                                    </div>


                                    <div className='flex mx-8  justify-between  items-center'>
                                        <div className='flex flex-col gap-2.5'>
                                            <span className='text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>
                                                Email
                                            </span>
                                            <span className='text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]'>sparsh@gmail.com</span>
                                        </div>

                                        <Image
                                            src="/icons/hugeicons_copy-02.svg"
                                            alt='hugeicons_copy-02'
                                            width={15}
                                            height={15}
                                            className='cursor-pointer'
                                            onClick={() => copyToClipboard("sparsh@gmail.com")}
                                        />

                                    </div>



                                    <div className='flex mx-8  justify-between  items-center'>
                                        <div className='flex flex-col gap-2.5'>
                                            <span className='text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>
                                                Reference ID
                                            </span>
                                            <span className='text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]'>58128376790</span>
                                        </div>

                                        <Image
                                            src="/icons/hugeicons_copy-02.svg"
                                            alt='hugeicons_copy-02'
                                            width={15}
                                            height={15}
                                            className='cursor-pointer'


                                            onClick={() => copyToClipboard("58128376790")}
                                        />

                                    </div>


                                </div>



                            </div>
                        )}


                        {showPlanDetails && (
                            <div className={`bg-white rounded-[15px] px-[22px] py-10 whitespace-nowrap ${showOverview ? "" : "mt-[30px]"
                                }`}>
                                <div className='flex justify-between items-center'>
                                    <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]'>Plan History(2)</span>


                                    {pathname !== "/planhistory" && (
                                        <Link href="/planhistory" className='flex gap-2.5'>
                                            <span className='text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px] cursor-pointer'>View all plans</span>
                                            <IoIosArrowForward className='text-[#308BF9] cursor-pointer' />
                                        </Link>
                                    )}
                                </div>

                                <div className='my-[22px] border boder-[#E1E6ED]'></div>



                                <div className='flex flex-col gap-[30px]'>
                                    <div className='flex flex-col '>
                                        <div className='flex gap-[25px] justify-between '>
                                            <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] cursor-pointer'>1-Month Plan</span>
                                            <span className='text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px] cursor-pointer'>05 July-05 Aug</span>
                                        </div>

                                        <div className='flex justify-between'>
                                            <div>
                                                <span className='text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px] capitalize'>Updated 05 Jul, 12:30pm</span>
                                            </div>
                                            <div className='flex gap-[3px] items-center'>
                                                <Image
                                                    src="/icons/verified.svg"
                                                    alt='verified'
                                                    width={12}
                                                    height={12}
                                                />
                                                <span className='text-[#3FAF58] text-[12px] font-normal leading-normal tracking-[-0.24px]'>Finished</span>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='flex flex-col '>
                                        <div className='flex gap-[25px] justify-between'>
                                            <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]'>1-Month Plan</span>
                                            <span className='text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]'>05 July-05 Aug</span>
                                        </div>

                                        <div className='flex justify-between'>
                                            <div>
                                                <span className='text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px] capitalize'>Updated 05 Jul, 12:30pm</span>
                                            </div>
                                            <div className='flex gap-[3px] items-center'>
                                                <Image
                                                    src="/icons/close icon.svg"
                                                    alt='close icon'
                                                    width={12}
                                                    height={12}
                                                />
                                                <span className='text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]'>Cancelled</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )}

                    </div>
                )}



                <div className='w-[333px] flex flex-col gap-5 bg-white rounded-[15px] px-[15px] pb-[15px]'>
                    <div className='pt-[30px] pl-[30px]'>
                        <span className='text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]'>Select one to continue</span>
                    </div>

                    <div className="flex flex-col w-full gap-[15px]">
                        {options.map((opt) => (
                            <label
                                key={opt.value}
                                className={`flex gap-2.5 items-center py-[18px] pl-2.5 pr-3 rounded-[5px] cursor-pointer transition-colors
                    ${selectedPlan === opt.value
                                        ? "border-[2px] border-[#308BF9] bg-[#F5F7FA]"
                                        : ""
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="planType"
                                    value={opt.value}
                                    checked={selectedPlan === opt.value}
                                    onChange={() => setSelectedPlan(opt.value)}
                                    className="w-4 h-4 text-[#308BF9] border-gray-300 focus:ring-[#308BF9]"
                                />
                                <span className="text-[#252525] text-[15px] font-normal leading-normal tracking-[-0.3px] whitespace-nowrap">
                                    {opt.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

            </div>



            <CreatePlanModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </>
    )
}
