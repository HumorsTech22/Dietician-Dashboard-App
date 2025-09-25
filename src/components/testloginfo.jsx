"use client"
export default function TestLogInfo(){
    return(
        <>
         <div className='flex-1 flex-col gap-[310px]'>

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
        </>
    )
};