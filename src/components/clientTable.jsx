"use client"
import Image from "next/image";

export default function ClientTable() {
  return (
    <>
      <div >
        <div className="rounded-[10px] overflow-hidden ">
          <table className="w-full bg-[#FFFFFF]">
            <thead className="bg-[#F0F0F0]">
              <tr>
                <th className="px-[15px] pt-5 pb-[5px] text-left" scope="col">
                  <p className="text-[#535359] not-italic font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins'] [leading-trim:both] [text-edge:cap]">
                    Client Name
                  </p>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left" scope="col">
                  <p className="text-[#535359] not-italic font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins'] [leading-trim:both] [text-edge:cap]">
                    Date Created
                  </p>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left" scope="col">
                  <p className="text-[#535359] not-italic font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins'] [leading-trim:both] [text-edge:cap]">
                    Reference code
                  </p>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left" scope="col">
                  <p className="text-[#535359] not-italic font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins'] [leading-trim:both] [text-edge:cap]">
                    Current Plan
                  </p>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left" scope="col">
                  <p className="text-[#535359] not-italic font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins'] [leading-trim:both] [text-edge:cap]">
                    Last Logged
                  </p>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-center" scope="col">
                  <div className="flex flex-col items-center gap-[15px]">
                    <p className="text-[#535359] not-italic font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins'] [leading-trim:both] [text-edge:cap]">
                      Daily Status
                    </p>
                    <div className="flex justify-center  w-[333px] items-center py-0.5 gap-5 bg-[#D9D9D9] rounded-[7px]">
                      <div className=" ">
                        <p className="text-[#535359] text-center font-normal text-[12px] leading-[110%] tracking-[-0.24px]">
                          Metabolism Status
                        </p>
                      </div>
                      <div className="">
                        
                        <p className="text-[#535359] text-center font-normal text-[12px] leading-[110%] tracking-[-0.24px]">
                          Diet Goal
                        </p>

                      
                      </div>
                    </div>
                  </div>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left" scope="col">
                  <p className="text-[#535359] text-center not-italic font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins'] [leading-trim:both] [text-edge:cap]">
                    Plans completed
                  </p>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left" scope="col">
                  <p className="text-[#535359] not-italic font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins'] [leading-trim:both] [text-edge:cap]">
                    Actions
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="align-top">
                {/* Client Name */}
                <td className="px-[15px] py-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Sagar Hosur</span>
                    <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">29 years, Male</span>
                  </div>
                </td>

                {/* Date Created */}
                <td className="px-[15px] py-5">
                  <div>
                    <span className="text-[#A1A1A1] text-[12px] font-normal leading-[126%] tracking-[-0.24px]">21 Jul 2025</span>
                  </div>
                </td>

                {/* Reference code */}
                <td className="px-[15px] py-5">
                  <div className="flex items-center gap-[5px]">
                    <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">521685982</span>
                    <Image
                      src="/icons/hugeicons_copy-02.svg"
                      alt="hugeicons_copy"
                      width={15}
                      height={15}
                    />
                  </div>
                </td>

                {/* Current Plan */}
                <td className="px-[15px] py-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#3FAF58] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">Active</span>
                    <span>1-month plan</span>
                    <div className="flex gap-[5px]">
                      <p className="text-[#308BF9] cursor-pointer font-semibold text-[10px] leading-[110%] tracking-[-0.2px]">View Plan</p>
                      <Image
                        src="/icons/right button.svg"
                        width={10}
                        height={10}
                        alt="right button"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </td>

                {/* Last Logged */}
                <td className="px-[15px] py-5">
                  <div>
                    <p className="text-[12px] text-[#252525] font-semibold tracking-[-0.24] leading-[126%]">23 mins ago</p>
                  </div>
                </td>

                {/* Daily Status */}
                <td className="px-[15px] py-5">
                  <div className="flex justify-center gap-5">
                    <div>
                      <div className="w-[179px] flex justify-center items-center bg-[#FFEDED] rounded-[20px] px-2 py-2.5">
                        <p className="text-[12px] font-semibold tracking-[-0.24px] leading-[126%] text-[#DA5747]">Attention Required</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">75% completed</span>
                      <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">21 July</span>
                    </div>
                  </div>
                </td>

                {/* Plans completed */}
                <td className="text-center px-[15px] py-5 ">
                  
                    <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">0</span>
               
                </td>

                {/* Actions */}
                <td className="px-[15px] py-5">
                  <div className="py-2.5 flex gap-5">
                    <Image
                      src="/icons/hugeicons_message-02.svg"
                      alt="hugeicons_message"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/icons/hugeicons_view.svg"
                      alt="hugeicons_view"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>{/* kept your empty div */}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
