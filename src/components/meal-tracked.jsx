"use client";

import { useState } from "react";

import Image from "next/image";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function MealTracked() {

  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
          <div className="flex items-start justify-between gap-3">
            {/* Left: icon + count */}
            <div className="flex items-center">
              <Image
                src="/icons/hugeicons_bubble-tea-02.svg"
                alt="Drink"
                width={24}
                height={24}
              />
              <div className="py-[3px] px-[9px]">
                {/* leading fixed to percentage */}
                <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
                  1
                </span>
              </div>
            </div>


            <div className="flex flex-1 justify-between ">
              {/* Middle: title + meta */}
              <div className=" flex flex-col gap-1">
                <div>
                  {/* leading fixed to percentage */}
                  <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                    Carrot + beetroot + fresh turmeric &amp; zinger [ little ] <br />  with lemon drops
                  </p>
                </div>

                <div className="flex items-center gap-[5px]">
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    220kcal
                  </span>
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    1 cup (250 ml)
                  </span>
                  <Image
                    src="/icons/hugeicons_information-circle.svg"
                    alt="Info"
                    width={12}
                    height={12}
                  />
                </div>
              </div>

              {/* Right: score card */}
              <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
                <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
                  Metabolic <br /> Compatibility Score
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      40
                    </span>

                    {/* visible thin divider */}
                    <div className="w-px h-4 bg-[#D9D9D9]" />

                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      Moderate
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="6"
                      viewBox="0 0 117 6"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                      <path d="M3 3H59" stroke="#FFC412" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex items-center w-full">

            <div className="flex-1 h-px bg-[#D9D9D9]" />


            <div
              className="flex items-center gap-[5px] ml-2"
              onClick={() => setOpen1((prev) => !prev)}

            >
              <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">

                {open1 ? "View Less" : "View More"}
              </span>
              {open1 ? (
                <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
              ) : (<IoIosArrowDown className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />)}
            </div>
          </div>


          {open1 && (
            <>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
                  <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110% tracking-[-0.2px]">Good Impacts</p>

                  <div className="flex gap-5">
                    <div className="">
                      <span className="p-2 bg-[#E1F6E6] rounded-[5px] text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                    </div>
                    <div className="">
                      <span className="p-2 bg-[#E1F6E6] rounded-[5px] text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                    </div>
                    <div className="">
                      <span className="p-2 bg-[#E1F6E6] rounded-[5px] text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                    </div>

                  </div>
                </div>


                <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
                  <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110% tracking-[-0.2px]">Bad Impacts</p>

                  <div className="flex gap-5">
                    <div className="">
                      <span className="p-2 bg-[#FFECEA] rounded-[5px] text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                    </div>
                    <div className="">
                      <span className="p-2 bg-[#FFECEA] rounded-[5px] text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                    </div>
                    <div className="">
                      <span className="p-2 bg-[#FFECEA] rounded-[5px] text-[#DA5747] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                    </div>

                  </div>
                </div>

              </div>




              <div className="flex gap-8 items-start pl-2.5 pr-4 pt-4 pb-[18px] bg-[#F0F5FD] rounded-[10px]">
                {/* Left: Icon + Title */}
                <div className="flex gap-[5px] items-center max-w-[118px]">
                  <Image
                    src="/icons/hugeicons_award-01.svg"
                    alt="Award"
                    width={15}
                    height={15}
                  />
                  <span className="bg-gradient-to-r from-[#308BF9] to-[#1C5293] bg-clip-text text-transparent font-bold text-[12px] tracking-[-0.24px]">
                    Goal Alignment
                  </span>
                </div>

                {/* Right: Description */}
                <div className="flex-1">
                  <p className="text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
                    Oats are high in carbohydrates, which can hinder fat loss by maintaining
                    glucose reliance. The fiber content, while generally healthy, may contribute
                    to the high fermentation observed.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>


        <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
          <div className="flex items-start justify-between gap-3">
            {/* Left: icon + count */}
            <div className="flex items-center">
              <Image
                src="/icons/hugeicons_plant-04.svg"
                alt="hugeicons_plant-04"
                width={24}
                height={24}
              />
              <div className="py-[3px] px-[9px]">
                {/* leading fixed to percentage */}
                <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
                  2
                </span>
              </div>
            </div>


            <div className="flex flex-1 justify-between ">
              {/* Middle: title + meta */}
              <div className=" flex flex-col gap-1">
                <div>
                  {/* leading fixed to percentage */}
                  <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                    Almonds [soaked + de skinned]
                  </p>
                </div>

                <div className="flex items-center gap-[5px]">
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    220kcal
                  </span>
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    1 cup (250 ml)
                  </span>
                  <Image
                    src="/icons/hugeicons_information-circle.svg"
                    alt="Info"
                    width={12}
                    height={12}
                  />
                </div>
              </div>

              {/* Right: score card */}
              <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
                <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
                  Metabolic <br /> Compatibility Score
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      80
                    </span>

                    {/* visible thin divider */}
                    <div className="w-px h-4 bg-[#D9D9D9]" />

                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      High
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="6"
                      viewBox="0 0 117 6"
                      fill="none"
                    >
                      <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                      <path d="M3 3H99" stroke="#3FAF58" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex items-center w-full">

            <div className="flex-1 h-px bg-[#D9D9D9]" />
 


            <div className="flex items-center gap-[5px] ml-2"
            onClick={() => setOpen2((prev) => !prev)}
            >
              <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
               
                {open2 ? "View More" : "View less"}
              </span>
              {open2 ? (
              <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />) 
            :
            (<IoIosArrowDown  className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />) 
            }
            </div>
          </div>


   {open2 && (
            <>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
              <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110% tracking-[-0.2px]">Good Impacts</p>

              <div className="grid grid-cols-4 gap-5">
                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>
                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>
                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>

                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>

                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>

                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>

                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>


              </div>
            </div>

          </div>

          <div className="flex gap-8 items-start pl-2.5 pr-4 pt-4 pb-[18px] bg-[#F0F5FD] rounded-[10px]">
            {/* Left: Icon + Title */}
            <div className="flex gap-[5px] items-center max-w-[118px]">
              <Image
                src="/icons/hugeicons_award-01.svg"
                alt="Award"
                width={15}
                height={15}
              />
              <span className="bg-gradient-to-r from-[#308BF9] to-[#1C5293] bg-clip-text text-transparent font-bold text-[12px] tracking-[-0.24px]">
                Goal Alignment
              </span>
            </div>

            {/* Right: Description */}
            <div className="flex-1">
              <p className="text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
                Oats are high in carbohydrates, which can hinder fat loss by maintaining
                glucose reliance. The fiber content, while generally healthy, may contribute
                to the high fermentation observed.
              </p>
            </div>
          </div>
 </>
          )}
        </div>



        <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
          <div className="flex items-start justify-between gap-3">
            {/* Left: icon + count */}
            <div className="flex items-center">
              <Image
                src="/icons/hugeicons_plant-04.svg"
                alt="hugeicons_plant-04"
                width={24}
                height={24}
              />
              <div className="py-[3px] px-[9px]">
                {/* leading fixed to percentage */}
                <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
                  3
                </span>
              </div>
            </div>


            <div className="flex flex-1 justify-between ">
              {/* Middle: title + meta */}
              <div className=" flex flex-col gap-1">
                <div>
                  {/* leading fixed to percentage */}
                  <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                    Almonds [soaked + de skinned]
                  </p>
                </div>

                <div className="flex items-center gap-[5px]">
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    220kcal
                  </span>
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    1 cup (250 ml)
                  </span>
                  <Image
                    src="/icons/hugeicons_information-circle.svg"
                    alt="Info"
                    width={12}
                    height={12}
                  />
                </div>
              </div>

              {/* Right: score card */}
              <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
                <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
                  Metabolic <br /> Compatibility Score
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      20
                    </span>

                    {/* visible thin divider */}
                    <div className="w-px h-4 bg-[#D9D9D9]" />

                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      Low
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="6"
                      viewBox="0 0 117 6"
                      fill="none"
                    >
                      <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                      <path d="M3 3H33" stroke="#DA5747" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex items-center w-full">

            <div className="flex-1 h-px bg-[#D9D9D9]" />


            <div className="flex items-center gap-[5px] ml-2">
              <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                View less
              </span>
              <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
            </div>
          </div>


          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center ml-[25px] mr-[67px]">
              <p className="w-[118px] text-[#535359] text-[10px] font-semibold leading-[110% tracking-[-0.2px]">Good Impacts</p>

              <div className="grid grid-cols-4 gap-5">
                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>
                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>
                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>

                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>

                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>

                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>

                <div className="">
                  <span className="p-2 bg-[#E1F6E6] rounded-[5px] whitespace-nowrap text-[#3FAF58] text-[10px] font-semibold leading-[110%] tracking-[-0.2px]">Fermentative Metabolism Score</span>
                </div>


              </div>
            </div>

          </div>

          <div className="flex gap-8 items-start pl-2.5 pr-4 pt-4 pb-[18px] bg-[#F0F5FD] rounded-[10px]">
            {/* Left: Icon + Title */}
            <div className="flex gap-[5px] items-center max-w-[118px]">
              <Image
                src="/icons/hugeicons_award-01.svg"
                alt="Award"
                width={15}
                height={15}
              />
              <span className="bg-gradient-to-r from-[#308BF9] to-[#1C5293] bg-clip-text text-transparent font-bold text-[12px] tracking-[-0.24px]">
                Goal Alignment
              </span>
            </div>

            {/* Right: Description */}
            <div className="flex-1">
              <p className="text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
                Oats are high in carbohydrates, which can hinder fat loss by maintaining
                glucose reliance. The fiber content, while generally healthy, may contribute
                to the high fermentation observed.
              </p>
            </div>
          </div>

        </div>



        <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
          <div className="flex items-start justify-between gap-3">
            {/* Left: icon + count */}
            <div className="flex items-center">
              <Image
                src="/icons/hugeicons_plant-04.svg"
                alt="hugeicons_plant-04"
                width={24}
                height={24}
              />
              <div className="py-[3px] px-[9px]">
                {/* leading fixed to percentage */}
                <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
                  4
                </span>
              </div>
            </div>


            <div className="flex flex-1 justify-between ">
              {/* Middle: title + meta */}
              <div className=" flex flex-col gap-1">
                <div>
                  {/* leading fixed to percentage */}
                  <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                    Almonds [soaked + de skinned]
                  </p>
                </div>

                <div className="flex items-center gap-[5px]">
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    220kcal
                  </span>
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    1 cup (250 ml)
                  </span>
                  <Image
                    src="/icons/hugeicons_information-circle.svg"
                    alt="Info"
                    width={12}
                    height={12}
                  />
                </div>
              </div>

              {/* Right: score card */}
              <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
                <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
                  Metabolic <br /> Compatibility Score
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      20
                    </span>

                    {/* visible thin divider */}
                    <div className="w-px h-4 bg-[#D9D9D9]" />

                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      Low
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="6"
                      viewBox="0 0 117 6"
                      fill="none"
                    >
                      <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                      <path d="M3 3H33" stroke="#DA5747" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex items-center w-full">

            <div className="flex-1 h-px bg-[#D9D9D9]" />


            <div className="flex items-center gap-[5px] ml-2">
              <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                View less
              </span>
              <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
            </div>
          </div>



        </div>




        <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#E1E6ED]">
          <div className="flex items-start justify-between gap-3">
            {/* Left: icon + count */}
            <div className="flex items-center">

              <div className="flex flex-col gap-1 py-[3px] px-[9px]">
                {/* leading fixed to percentage */}
                <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                  Other
                </span>

                <div className="h-[15px]">

                </div>
              </div>
            </div>


            <div className="flex flex-1 justify-between ">
              {/* Middle: title + meta */}
              <div className=" flex flex-col gap-1">
                <div>
                  {/* leading fixed to percentage */}
                  <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">

                  </p>
                </div>

                <div className="flex items-center gap-[5px]">
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">

                  </span>
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">

                  </span>

                </div>
              </div>

              {/* Right: score card */}
              <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
                <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
                  Metabolic <br /> Compatibility Score
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      -
                    </span>

                    {/* visible thin divider */}
                    <div className="w-px h-4 bg-[#D9D9D9]" />

                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      -
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="6"
                      viewBox="0 0 117 6"
                      fill="none"
                    >
                      <path
                        d="M3 3H114"
                        stroke="#D9D9D9"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex gap-3 w-full">

            <div className="flex items-start py-2 w-[118px] px-[9px]">
              <span className="text-[#535359] text-[10px] font-semibold tracking-[-0.2px] leading-[110%]">Description</span>
            </div>


            <div className="flex ">
              <span className="text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
                Oats are high in carbohydrates, which can hinder fat loss by maintaining glucose reliance. The fiber content, while generally <br></br> healthy, may contribute to the high fermentation observed.
              </span>

            </div>
          </div>



        </div>


        <div className="flex justify-center bg-[#F5F7FA] border-[4px] rounded-[15px] border-[#E1E6ED] px-[308px] py-[48px]">
          <span className="text-[#000000] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">Not tracked</span>

        </div>

        <div className="flex justify-center bg-[#F5F7FA] border-[4px] rounded-[15px] border-[#E1E6ED] px-[308px] py-[48px]">
          <span className="text-[#000000] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">Not tracked</span>

        </div>



        <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
          <div className="flex items-start justify-between gap-3">
            {/* Left: icon + count */}
            <div className="flex items-center">
              <Image
                src="/icons/hugeicons_plant-04.svg"
                alt="hugeicons_plant-04"
                width={24}
                height={24}
              />
              <div className="py-[3px] px-[9px]">
                {/* leading fixed to percentage */}
                <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
                  5
                </span>
              </div>
            </div>


            <div className="flex flex-1 justify-between ">
              {/* Middle: title + meta */}
              <div className=" flex flex-col gap-1">
                <div>
                  {/* leading fixed to percentage */}
                  <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                    Almonds [soaked + de skinned]
                  </p>
                </div>

                <div className="flex items-center gap-[5px]">
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    220kcal
                  </span>
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    1 cup (250 ml)
                  </span>
                  <Image
                    src="/icons/hugeicons_information-circle.svg"
                    alt="Info"
                    width={12}
                    height={12}
                  />
                </div>
              </div>

              {/* Right: score card */}
              <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
                <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
                  Metabolic <br /> Compatibility Score
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      100
                    </span>

                    {/* visible thin divider */}
                    <div className="w-px h-4 bg-[#D9D9D9]" />

                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      High
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="6"
                      viewBox="0 0 117 6"
                      fill="none"
                    >
                      <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                      <path d="M3 3H99" stroke="#3FAF58" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex items-center w-full">

            <div className="flex-1 h-px bg-[#D9D9D9]" />


            <div className="flex items-center gap-[5px] ml-2">
              <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                View less
              </span>
              <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
            </div>
          </div>



        </div>


        <div className="flex flex-col gap-5 p-[15px] rounded-[15px] bg-[#FFFFFF]">
          <div className="flex items-start justify-between gap-3">
            {/* Left: icon + count */}
            <div className="flex items-center">
              <Image
                src="/icons/hugeicons_plant-04.svg"
                alt="hugeicons_plant-04"
                width={24}
                height={24}
              />
              <div className="py-[3px] px-[9px]">
                {/* leading fixed to percentage */}
                <span className="text-[#252525] text-[15px] font-bold tracking-[-0.3px] leading-[126%]">
                  5
                </span>
              </div>
            </div>


            <div className="flex flex-1 justify-between ">
              {/* Middle: title + meta */}
              <div className=" flex flex-col gap-1">
                <div>
                  {/* leading fixed to percentage */}
                  <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                    Almonds [soaked + de skinned]
                  </p>
                </div>

                <div className="flex items-center gap-[5px]">
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    220kcal
                  </span>
                  <span className="text-[#252525] text-[10px] not-italic font-normal leading-normal tracking-[-0.2px]">
                    1 cup (250 ml)
                  </span>
                  <Image
                    src="/icons/hugeicons_information-circle.svg"
                    alt="Info"
                    width={12}
                    height={12}
                  />
                </div>
              </div>

              {/* Right: score card */}
              <div className="flex gap-3 items-center px-5 py-[15px] rounded-[8px] bg-[#F5F7FA]">
                <span className="text-[#535359] text-[10px] not-italic font-semibold leading-[110%] tracking-[-0.2px] capitalize">
                  Metabolic <br /> Compatibility Score
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      100
                    </span>

                    {/* visible thin divider */}
                    <div className="w-px h-4 bg-[#D9D9D9]" />

                    <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.24px] leading-[126%]">
                      High
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="6"
                      viewBox="0 0 117 6"
                      fill="none"
                    >
                      <path d="M3 3H114" stroke="#D9D9D9" strokeWidth="5" strokeLinecap="round" />
                      <path d="M3 3H99" stroke="#3FAF58" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex items-center w-full">

            <div className="flex-1 h-px bg-[#D9D9D9]" />


            <div className="flex items-center gap-[5px] ml-2">
              <span className="cursor-pointer text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                View less
              </span>
              <IoIosArrowUp className="cursor-pointer text-[#308BF9] w-[15px] h-[15px]" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

