"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from 'next/navigation'
import CreateDietPlan from './create-diet-plan';

export default function Preview() {
  const pathname = (usePathname() || '').toLowerCase();

 const isDietPlan = pathname.includes('/diet-plan') || pathname.endsWith('/diet-plan');


  const hideActions = pathname.includes('/testlog-info');


  const hideTestLogOnPlanSummary =
    pathname.includes('/plan-summary') || pathname.endsWith('/plansummary');



  const [approachInput, setApproachInput] = useState('');
  const [approachTags, setApproachTags] = useState([]);

  const addTag = () => {
    const t = approachInput.trim();
    if (!t) return;
    const exists = approachTags.some(a => a.toLowerCase() === t.toLowerCase());
    if (!exists) setApproachTags(prev => [...prev, t]);
    setApproachInput('');
  };

  const removeTag = (i) => {
    setApproachTags(prev => prev.filter((_, idx) => idx !== i));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };




  return (
    <div className='w-full bg-white rounded-[15px]  p-[15px] '>
      <div className='flex justify-between'>
        <p className='text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]'>Preview1</p>
        <div className='flex gap-[25px] items-center pb-2.5'>
          <span className='text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px]'>Sagar Hosur_diet.pdf</span>
          <div className='flex gap-1.5 px-5 py-[15px] border border-[#D9D9D9] rounded-[10px] '>
            <Image
              src="/icons/hugeicons_rotate-01.svg"
              alt='hugeicons_rotate-01'
              width={20}
              height={20}
            />
            <span className='text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]'>Re-upload</span>
          </div>
        </div>
      </div>


      <div className="w-full border-b border-[#E1E6ED]"></div>


{/* === Diet Plan switch === */}
<div  className="mt-4">
      {isDietPlan ? (
        <div className="relative z-0">
        <CreateDietPlan />
      </div>
      ) : (
        <>
      {!hideActions && (
        <div className='flex gap-5'>
          <div className='mt-4 bg-[#F5F7FA] rounded-[15px] px-[7px] pt-[9px]'>
            <div className='flex gap-[52px] justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center bg-white'>
              <div className='flex gap-2.5 items-center'>
                <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Plan summary</span>
                <div className='flex gap-[5px] items-center rounded-[20px] bg-[#DA5747] px-3 py-1.5'>

                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>2</span>
                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>Pending</span>
                </div>
              </div>
              <div>
                <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525] cursor-pointer' />

              </div>
            </div>

            <div className='flex justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center'>
              <div className='flex gap-2.5 items-center'>
                <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Tests log info</span>
                <div className='flex gap-[5px] items-center rounded-[20px] bg-[#3FAF58] px-3 py-1.5'>

                  <Image
                    src="/icons/verified.svg"
                    alt='verified.svg'
                    width={18}
                    height={18}
                    className='w-[18px] h-[18px]'
                  />
                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>ready</span>
                </div>
              </div>
              <div>
                <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525] cursor-pointer' />

              </div>
            </div>

            <div className='flex justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center'>
              <div className='flex gap-2.5 items-center'>
                <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Diet plan</span>
                <div className='flex gap-[5px] items-center rounded-[20px] bg-[#3FAF58] px-3 py-1.5'>

                  <Image
                    src="/icons/verified.svg"
                    alt='verified.svg'
                    width={18}
                    height={18}
                    className='w-[18px] h-[18px]'
                  />
                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>ready</span>
                </div>
              </div>
              <div>
                <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525] cursor-pointer' />

              </div>
            </div>

          </div>

          <div className='w-full'>

            <div className='pt-[23px]'>
              <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Plan Summary</p>

              <div className="w-full  border-b border-[#E1E6ED]"></div>


              <div className='mt-[15px]'>

                <div className="flex gap-5 items-end">
                  {/* Name of the plan */}
                  {/* <div className="relative flex-1">
                  <div className="relative pt-5">
                    <input
                      type="text"
                      value={planName}
                      onChange={(e) => setPlanName(e.target.value)}
                      className="w-full py-[15px] pl-[19px] pr-4 border border-[#E1E6ED] rounded-[8px] bg-white outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] peer"
                      placeholder=" "
                    />
                    <label className={`absolute left-[19px] transition-all duration-200 pointer-events-none peer-placeholder-shown:text-[#9CA3AF] text-[#535359] peer-focus:text-[#535359] ${planName ? 'top-1 text-[12px] font-medium' : 'top-6 text-[14px] font-normal peer-focus:top-1 peer-focus:text-[12px] peer-focus:font-medium'
                      }`}>
                      Name of the plan
                    </label>
                  </div>
                </div> */}


                  {/* <div className="relative flex-1">
      <input 
        type="text"
        className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0 focus:border-[#535359] peer"
        placeholder=" "
      />
      <label className="absolute text-[14px] text-[#9CA3AF] duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#535359] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 left-[19px]">
        From
      </label>
    </div> */}






                  <div className="relative flex-1">
                    <input type="text" id="floating_outlined"
                      className="block  py-[15px] pl-[19px] pr-[13px] w-full  text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF]  dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name of the plan</label>
                  </div>




                  {/* Duration */}
                  <div className="flex-1">
                    <span className="px-[9px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]">
                      Duration
                    </span>

                    <div className="flex gap-2 mt-2">
                      {/* From */}
                      <div className="relative flex-1">
                        <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
                          From
                        </span>
                        <div className="flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white">
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
                          />
                          <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
                        </div>
                      </div>

                      {/* To */}
                      <div className="relative flex-1">
                        <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
                          To
                        </span>
                        <div className="flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white">
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
                          />
                          <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className='px-[9px] py-[5px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]'>Goal 1</div>

                <div className='flex gap-[7px]'>

                  {/* <div className="relative">
                  <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
                    Goal title
                  </span>


                  <div className='flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white'>
                    <input
                      type="text"
                      placeholder='Weight loss'
                      className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
                    />



                  </div>
                </div> */}


                  <div className="relative flex-1">
                    <input
                      id="goalTitle"
                      type="text"
                      placeholder=" "
                      className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                    />
                    <label
                      htmlFor="goalTitle"
                      className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF]
               transition-all duration-200 ease-out
               top-1/2 -translate-y-1/2
               peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600
               peer-[&:not(:placeholder-shown)]:top-2
               peer-[&:not(:placeholder-shown)]:-translate-y-4
               peer-[&:not(:placeholder-shown)]:scale-75
               peer-[&:not(:placeholder-shown)]:text-[#535359]"
                    >
                      Goal Title
                    </label>
                  </div>



                  <div className="flex gap-10">
                    {/* Current Stat with error */}
                    <div className="flex flex-col">
                      <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white">
                        <input
                          type="text"
                          placeholder="Current Stat"
                          className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                        />

                        <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>

                        <div className="flex items-center gap-2 cursor-pointer">
                          <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                            Unit
                          </span>
                          <IoIosArrowDown className="text-[#A1A1A1] w-[15px] h-[15px]" />
                        </div>
                      </div>

                      {/* Error text below */}
                      <div className="flex gap-[5px] items-center mt-1">
                        <Image
                          src="/icons/hugeicons_information-circle-redd.png"
                          alt="info"
                          width={15}
                          height={15}
                        />
                        <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                          Enter current stat
                        </span>
                      </div>
                    </div>

                    {/* Target Stat with error */}
                    <div className="flex flex-col">
                      <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white">
                        <input
                          type="text"
                          placeholder="Target Stat"
                          className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                        />

                        <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>

                        <div className="flex items-center gap-2 cursor-pointer">
                          <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                            Unit
                          </span>
                          <IoIosArrowDown className="text-[#A1A1A1] w-[15px] h-[15px]" />
                        </div>
                      </div>

                      {/* Error text below */}
                      <div className="flex gap-[5px] items-center mt-1">
                        <Image
                          src="/icons/hugeicons_information-circle-redd.png"
                          alt="info"
                          width={15}
                          height={15}
                        />
                        <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                          Enter target stat
                        </span>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>



            <div className='flex flex-col gap-[15px]'>
              <div className='px-5 py-[15px]'>
                <span className='text-[#308BF9] font-semibold text-[12px] leading-normal tracking-[-0.24px] cursor-pointer'>Add Another Goal</span>
              </div>
              {/* 
            <div className='flex flex-col gap-3.5'>
              <div className='flex justify-between pr-[15px] items-center py-[15px] pl-5 border border-[#E1E6ED] rounded-[8px]'>
                <input
                  placeholder='Enter approach (Ex. Low GI, High Proteins, Calories Deficit)'
                  className="flex-1 outline-none text-[#252525] text-[14px] font-normal placeholder:text-[#9CA3AF] leading-[110%] tracking-[-0.24px]"
                />

                <IoIosArrowDown className="text-[#A1A1A1] w-[15px] h-[15px] cursor-pointer" />
              </div>

              <div className='max-w-[103px] flex gap-2.5 px-5 py-2.5 rounded-[20px] border border-[#E48326] bg-[#FFF7F0]'>
                <span className='text-[#E48326] text-[12px] whitespace-nowrap font-semibold leading-[110%] tracking-[-0.24px]'>Low GI</span>
                <RxCross2 className='text-[#252525] w-[15px] h-[15px] cursor-pointer' />
              </div>

            </div> */}


              <div className='flex flex-col gap-3.5'>
                {/* Input with arrow */}
                <div className='flex justify-between pr-[15px] items-center py-[15px] pl-5 border border-[#E1E6ED] rounded-[8px]'>
                  <input
                    value={approachInput}
                    onChange={(e) => setApproachInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={addTag} // optional: add chip on blur
                    placeholder='Enter approach (Ex. Low GI, High Proteins, Calories Deficit)'
                    className="flex-1 outline-none text-[#252525] text-[14px] font-normal placeholder:text-[#9CA3AF] leading-[110%] tracking-[-0.24px]"
                  />
                  <IoIosArrowDown
                    className="text-[#A1A1A1] w-[15px] h-[15px] cursor-pointer"
                    onClick={addTag} // optional: click arrow to add current text
                    title="Add"
                  />
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {approachTags.map((tag, idx) => (
                    <div
                      key={`${tag}-${idx}`}
                      className='flex items-center gap-2.5 px-5 py-2.5 rounded-[20px] border border-[#E48326] bg-[#FFF7F0] max-w-full'
                    >
                      <span className='text-[#E48326] text-[12px] whitespace-nowrap font-semibold leading-[110%] tracking-[-0.24px]'>
                        {tag}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeTag(idx)}
                        aria-label={`Remove ${tag}`}
                      >
                        <RxCross2 className='text-[#252525] w-[15px] h-[15px] cursor-pointer' />
                      </button>
                    </div>
                  ))}
                </div>
              </div>



            </div>



            <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>


            <div className='py-[23px]'>
              <div className='flex gap-5 justify-end'>
                <div className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px]'>
                  <span className='text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>Save as draft</span>
                </div>


                <div className='px-5 py-[15px] bg-[#308BF9] rounded-[10px]'>
                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>Confirm & Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {!hideTestLogOnPlanSummary && (
        <div className='flex gap-5 '>
          <div className='mt-4 bg-[#F5F7FA] rounded-[15px] px-[7px] pt-[9px]'>
            <div className='flex gap-[52px] justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center bg-white'>
              <div className='flex gap-2.5 items-center'>
                <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Plan summary</span>
                <div className='flex gap-[5px] items-center rounded-[20px] bg-[#DA5747] px-3 py-1.5'>

                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>2</span>
                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>Pending</span>
                </div>
              </div>
              <div>
                <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525] cursor-pointer' />

              </div>
            </div>

            <div className='flex justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center'>
              <div className='flex gap-2.5 items-center'>
                <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Tests log info</span>
                <div className='flex gap-[5px] items-center rounded-[20px] bg-[#3FAF58] px-3 py-1.5'>

                  <Image
                    src="/icons/verified.svg"
                    alt='verified.svg'
                    width={18}
                    height={18}
                    className='w-[18px] h-[18px]'
                  />
                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>ready</span>
                </div>
              </div>
              <div>
                <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525] cursor-pointer' />

              </div>
            </div>

            <div className='flex justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center'>
              <div className='flex gap-2.5 items-center'>
                <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Diet plan</span>
                <div className='flex gap-[5px] items-center rounded-[20px] bg-[#3FAF58] px-3 py-1.5'>

                  <Image
                    src="/icons/verified.svg"
                    alt='verified.svg'
                    width={18}
                    height={18}
                    className='w-[18px] h-[18px]'
                  />
                  <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>ready</span>
                </div>
              </div>
              <div>
                <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525] cursor-pointer' />

              </div>
            </div>

          </div>




          <div className='w-full flex flex-col gap-[310px]'>

            <div className='pt-[23px] pb-[18px] '>
              <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Test log info</p>

              <div className="w-full  border-b border-[#E1E6ED]"></div>


              <div className='mt-[15px]'>

                <div className="flex gap-5 items-end">
                  <div className="relative flex-1">
                    <input type="text" id="floating_outlined"
                      className="block  py-[15px] pl-[19px] pr-[13px] w-full  text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF]  dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Tests allotted</label>
                  </div>



                  <div className="relative flex-1">
                    <input type="text" id="floating_outlined"
                      className="block  py-[15px] pl-[19px] pr-[13px] w-full  text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF]  dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Test remaining</label>
                  </div>

                </div>

              </div>
            </div>


            <div>
              <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>


              <div className='py-[23px]'>
                <div className='flex gap-5 justify-end'>
                  <div className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px]'>
                    <span className='text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>Save as draft</span>
                  </div>


                  <div className='px-5 py-[15px] bg-[#308BF9] rounded-[10px]'>
                    <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>Confirm & Next</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}
     
</>
      )}
       </div>
    </div>
  )
}
