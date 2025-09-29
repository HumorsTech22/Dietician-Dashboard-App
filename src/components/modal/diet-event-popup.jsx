"use client"

import { Modal } from "react-responsive-modal";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Image from "next/image";

export default function DietEvent({ open, onClose }) {

    return (
        <>

            <Modal
                open={open}
                onClose={onClose}
                center
                focusTrapped
                closeOnOverlayClick
                showCloseIcon={false}
            >
                <div className="rounded-[10px]">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2.5 px-[9px] py-[5px]">
                            <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">Day 1</span>
                            <span className="text-[#252525] text-[25px] font-semibold leading-[110%] tracking-[-0.5px]">Event1</span>
                        </div>

                        <div className="flex gap-[13px] items-center">
                            <button className="bg-[#308BF9] rounded-[10px] px-5 py-[15px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px]">Save</button>
                            <PiDotsThreeOutlineVerticalFill />
                        </div>
                    </div>

                    <div className="flex gap-5 items-end">
                        {/* Name of the plan */}
                        <div className="relative flex-1">
                            <input type="text" id="floating_outlined"
                                className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">Name of the plan</label>
                        </div>

                        {/* Duration */}
                        <div className="flex-1">

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

                    <div className="flex flex-col gap-5">
                        <span className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">Food Items</span>
                        <div className="w-full border-b border-[#E1E6ED]"></div>
                    </div>


                    <div className="">
                        <span className="flex justify-start text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">Option 1</span>
                        <div className="pl-5 h-full border-l border-[#E1E6ED]">
                            <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Item1</span>
                            <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

                                <div className="flex flex-col gap-[37px]">
                                    <div className="flex gap-[7px]">
                                        {/* Goal Title */}
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
                                            {/* Current Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Current Stat"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />
                                                    <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                                                    {/* Fixed unit label (no dropdown) */}
                                                    <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                                                        kg
                                                    </div>
                                                </div>

                                                {/* Error text */}
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

                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Target Stat"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />
                                                    <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                                                    {/* Fixed unit label (no dropdown) */}
                                                    <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                                                        kg
                                                    </div>
                                                </div>

                                                {/* Error text */}
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


                                    <div className="flex gap-[7px]">
                                        {/* Goal Title */}
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
                                                Calories
                                            </label>
                                        </div>

                                        <div className="flex gap-5">
                                            {/* Current Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Protein (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Fat (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>


                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Fiber (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">

                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>



                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Carbs (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="border border-[#E1E6ED] rounded-[8px]">
                                        <input type="text" id="floating_outlined"
                                            className="block pt-2.5 pb-11 pl-[19px]  w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0  peer" placeholder="Type description" />
                                    </div>
                                </div>
                                <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px]">Add Alternative Item</div>
                            </div>


                        </div>

                        <div className="pl-5 h-full border-l border-[#E1E6ED]">
                            <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Item2</span>
                            <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

                                <div className="flex flex-col gap-[37px]">
                                    <div className="flex gap-[7px]">
                                        {/* Goal Title */}
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
                                            {/* Current Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Current Stat"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />
                                                    <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                                                    {/* Fixed unit label (no dropdown) */}
                                                    <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                                                        kg
                                                    </div>
                                                </div>

                                                {/* Error text */}
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

                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Target Stat"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />
                                                    <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                                                    {/* Fixed unit label (no dropdown) */}
                                                    <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                                                        kg
                                                    </div>
                                                </div>

                                                {/* Error text */}
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


                                    <div className="flex gap-[7px]">
                                        {/* Goal Title */}
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
                                                Calories
                                            </label>
                                        </div>

                                        <div className="flex gap-5">
                                            {/* Current Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Protein (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Fat (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>


                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Fiber (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">

                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>



                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Carbs (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="border border-[#E1E6ED] rounded-[8px]">
                                        <input type="text" id="floating_outlined"
                                            className="block pt-2.5 pb-11 pl-[19px]  w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0  peer" placeholder="Type description" />
                                    </div>
                                </div>
                                <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px]">Add Alternative Item</div>
                            </div>



                            <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">(Item 2) Alternative 1</span>
                            <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

                                <div className="flex flex-col gap-[37px]">
                                    <div className="flex gap-[7px]">
                                        {/* Goal Title */}
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
                                            {/* Current Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Current Stat"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />
                                                    <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                                                    {/* Fixed unit label (no dropdown) */}
                                                    <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                                                        kg
                                                    </div>
                                                </div>

                                                {/* Error text */}
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

                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Target Stat"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />
                                                    <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                                                    {/* Fixed unit label (no dropdown) */}
                                                    <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                                                        kg
                                                    </div>
                                                </div>

                                                {/* Error text */}
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


                                    <div className="flex gap-[7px]">
                                        {/* Goal Title */}
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
                                                Calories
                                            </label>
                                        </div>

                                        <div className="flex gap-5">
                                            {/* Current Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Protein (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Fat (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>


                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Fiber (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">

                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>



                                            {/* Target Stat (static) */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Carbs (g)"
                                                        className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                                                    />

                                                </div>

                                                {/* Error text */}
                                                <div className="flex gap-[5px] items-center mt-1">
                                                    <Image
                                                        src="/icons/hugeicons_information-circle-redd.png"
                                                        alt="info"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                                                        Enter amount
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="border border-[#E1E6ED] rounded-[8px]">
                                        <input type="text" id="floating_outlined"
                                            className="block pt-2.5 pb-11 pl-[19px]  w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0  peer" placeholder="Type description" />
                                    </div>
                                </div>
                                <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px]">Add Alternative Item</div>
                            </div>
                        </div>
                    </div>



                </div>
            </Modal>
        </>
    )
}