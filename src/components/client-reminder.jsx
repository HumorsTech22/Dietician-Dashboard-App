
import Image from "next/image"
export default function ClientReminder() {
    return (
        <>
            <div className=" bg-[#F5F7FA] pt-[29px] px-[229px] pb-[41px] rounded-[15px]">
                <div className="flex flex-col gap-5 items-center pt-[56px] px-[64px] pb-[31px]">
                    <p className="text-[#738298] text-[25px] font-semibold leading-[110%] tracking-[-1px]">Your client hasn’t taken the test yet!</p>

                    <div className="flex flex-col justify-center items-center gap-4 pb-[15px] pt-[22px] px-1.5 bg-white rounded-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <p className="text-[#252525] text-[12px] font-normal leading-normal tracking-[-0.24px]">Test timing ends in:</p>

                        <div className="flex gap-2.5 items-center justify-center">
                            <div className="bg-[#D9D9D9] rounded-[6px] py-[14px] px-3">
                                <p className=" text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px]">00</p>
                            </div>
                            <p className="text-[#252525] text-[20px] font-semibold leading-normal tracking-[-0.4px]">:</p>
                            <div className="bg-[#D9D9D9] rounded-[6px] ">
                                <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px] py-[14px] px-3">01</p>
                            </div>
                            <p className="text-[#252525] text-[20px] font-semibold leading-normal tracking-[-0.4px]">:</p>
                            <div className="bg-[#D9D9D9] rounded-[6px] ">
                                <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px] py-[14px] px-3">45</p>
                            </div>
                            <p className="text-[#252525] text-[20px] font-semibold leading-normal tracking-[-0.4px]">:</p>
                            <div className="bg-[#D9D9D9] rounded-[6px] ">
                                <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px] py-[14px] px-3">03</p>
                            </div>

                        </div>

                        <div className="flex px-[33px] justify-center gap-[30px]">
                            <div className="text-[#535359] text-[7px] font-semibold leading-normal tracking-[-0.14px] p-2.5">
                                Days
                            </div>
                            <div className="text-[#535359] text-[7px] font-semibold leading-normal tracking-[-0.14px] p-2.5">
                                HOURS
                            </div>
                            <div className="text-[#535359] text-[7px] font-semibold leading-normal tracking-[-0.14px] p-2.5">
                                MINUTES
                            </div>
                            <div className="text-[#535359] text-[7px] font-semibold leading-normal tracking-[-0.14px] p-2.5">
                                SECONDS
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2.5 bg-[#308BF9] rounded-[10px] px-[18px] pt-3 pb-[9px] cursor-pointer">
                        <Image
                            src="/icons/Group.svg"
                            alt="Group.svg"
                            width={15}
                            height={15}
                        />
                        <p className="text-white text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Send reminder</p>
                    </div>
                </div>
            </div>
        </>
    )
}