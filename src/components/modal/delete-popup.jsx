import Image from "next/image"
import Modal from "react-responsive-modal"
export default function DeletePopUp({ open, onClose }) {
    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                center
                classNames={{
                    // overlay: "center-modal",
                    modal: "!p-0 !rounded-[15px]",
                }}
            >

                <div className="flex flex-col gap-8 items-center justify-center px-[136px] pt-11 pb-7 rounded-[15px]">
                    <Image
                        src="/icons/hugeicons_delete-02.svg"
                        alt="hugeicons_delete-02.svg"
                        width={94}
                        height={94}
                    />
                    <div className="flex flex-col gap-[46px]">
                        <div className="flex flex-col gap-[35px]">
                            <div className="flex flex-col gap-4">
                                <p className="flex items-center justify-center text-[#DA5747] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">Are you sure you want to delete this diet plan?</p>
                                <p className="flex items-center justify-center px-2.5 text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] text-center">
                                    Once deleted, all meal schedules for this plan will be <br /> permanently deleted
                                </p>

                            </div>
                            <div className="flex flex-col gap-[29px] items-center">
                                <p className="text-[#252525] text-[20px] font-normal leading-[110%] tracking-[-0.4px]">Or</p>
                                <p className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">Edit the existing diet plan</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-[37px]">
                            <button className="w-[146px] bg-[#D9D9D9] hover:bg-[#c4c4c4] px-5 py-[15px] rounded-[10px] text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer transition-colors duration-200"
                              onClick={onClose}
                            >Edit</button>
                            <button className="w-[146px] bg-[#DA5747] hover:bg-[#c94a3b] 
             px-5 py-[15px] rounded-[10px] 
             text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] 
             cursor-pointer transition-colors duration-200">Delete</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}