"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from 'next/navigation'
import CreateDietPlan from './create-diet-plan';
import Summary from './summary';
import TestLogInfo from './testloginfo';

export default function Preview() {
  const pathname = (usePathname() || '').toLowerCase();

  const isDietPlan = pathname.includes('/dietplan') || pathname.endsWith('/diet-plan');
  const hideActions = pathname.includes('/testlog-info');
  const hideTestLogOnPlanSummary =
    pathname.includes('/plan-summary') || pathname.endsWith('/plansummary');

  // now track summary | testlog | dietplan
  const [activePanel, setActivePanel] = useState('summary');

  return (
    <div className='overflow-hidden w-full bg-white rounded-[15px]  p-[15px] '>
      <div className='flex justify-between'>
        <p className='text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]'>Preview</p>
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
      <div className="mt-4">
        {isDietPlan ? (
          <CreateDietPlan />
        ) : (
          <>
            {!hideActions && (
              <div className='flex gap-5'>
                <div className='mt-4 bg-[#F5F7FA] rounded-[15px] px-[7px] pt-[9px]'>

                  {/* Plan summary tile */}
                  <div
                    className='flex gap-[52px] justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center bg-white cursor-pointer'
                    onClick={() => setActivePanel('summary')}
                  >
                    <div className='flex gap-2.5 items-center'>
                      <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Plan summary</span>
                      <div className='flex gap-[5px] items-center rounded-[20px] bg-[#DA5747] px-3 py-1.5'>
                        <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>2</span>
                        <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>Pending</span>
                      </div>
                    </div>
                    <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525]' />
                  </div>

                  {/* Tests log info tile */}
                  <div
                    className='flex justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center cursor-pointer'
                    onClick={() => setActivePanel('testlog')}
                  >
                    <div className='flex gap-2.5 items-center'>
                      <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Tests log info</span>
                      <div className='flex gap-[5px] items-center rounded-[20px] bg-[#3FAF58] px-3 py-1.5'>
                        <Image src="/icons/verified.svg" alt='verified.svg' width={18} height={18} />
                        <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>ready</span>
                      </div>
                    </div>
                    <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525]' />
                  </div>

                  {/* Diet plan tile */}
                  <div
                    className='flex justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center cursor-pointer'
                    onClick={() => setActivePanel('dietplan')}
                  >
                    <div className='flex gap-2.5 items-center'>
                      <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Diet plan</span>
                      <div className='flex gap-[5px] items-center rounded-[20px] bg-[#3FAF58] px-3 py-1.5'>
                        <Image src="/icons/verified.svg" alt='verified.svg' width={18} height={18} />
                        <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>ready</span>
                      </div>
                    </div>
                    <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525]' />
                  </div>
                </div>

                {/* Right side content based on activePanel */}
                {activePanel === 'summary' && <Summary />}
                {activePanel === 'testlog' && <TestLogInfo />}
                {activePanel === 'dietplan' && <CreateDietPlan />}
              </div>
            )}

            {!hideTestLogOnPlanSummary && (
              <div className='flex gap-5 '>
                <div className='mt-4 bg-[#F5F7FA] rounded-[15px] px-[7px] pt-[9px]'>

                  <div
                    className='flex gap-[52px] justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center bg-white cursor-pointer'
                    onClick={() => setActivePanel('summary')}
                  >
                    <div className='flex gap-2.5 items-center'>
                      <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Plan summary</span>
                      <div className='flex gap-[5px] items-center rounded-[20px] bg-[#DA5747] px-3 py-1.5'>
                        <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>2</span>
                        <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>Pending</span>
                      </div>
                    </div>
                    <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525]' />
                  </div>

                  <div
                    className='flex justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center cursor-pointer'
                    onClick={() => setActivePanel('testlog')}
                  >
                    <div className='flex gap-2.5 items-center'>
                      <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Tests log info</span>
                      <div className='flex gap-[5px] items-center rounded-[20px] bg-[#3FAF58] px-3 py-1.5'>
                        <Image src="/icons/verified.svg" alt='verified.svg' width={18} height={18} />
                        <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>ready</span>
                      </div>
                    </div>
                    <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525]' />
                  </div>

                  <div
                    className='flex justify-between py-5 pl-[23px] pr-[15px] rounded-[5px] items-center cursor-pointer'
                    onClick={() => setActivePanel('dietplan')}
                  >
                    <div className='flex gap-2.5 items-center'>
                      <span className='text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px] whitespace-nowrap'>Diet plan</span>
                      <div className='flex gap-[5px] items-center rounded-[20px] bg-[#3FAF58] px-3 py-1.5'>
                        <Image src="/icons/verified.svg" alt='verified.svg' width={18} height={18} />
                        <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.2px]'>ready</span>
                      </div>
                    </div>
                    <IoIosArrowForward className='w-[20px] h-[20px] text-[#252525]' />
                  </div>
                </div>

                {/* Right side content again */}
                {activePanel === 'summary' && <Summary />}
                {activePanel === 'testlog' && <TestLogInfo />}
                {activePanel === 'dietplan' && <CreateDietPlan />}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
