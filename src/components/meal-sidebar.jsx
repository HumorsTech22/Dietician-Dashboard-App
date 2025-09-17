export default function MealSidebar() {
  return (
    <>
      <div className="p-[15px] bg-white rounded-[15px]">
        {/* ONE column container for the whole sidebar */}
        <div className="flex flex-col gap-[15px]">
          {/* Wake up */}
          <div className="flex flex-col gap-[558px]">
            <div className="flex flex-col gap-[30px] p-[15px]">
              <div className="flex flex-col gap-2.5">
                <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.48px] leading-[110%] whitespace-nowrap">
                  Wake up
                </span>
                <span className="text-[#252525] text-[10px] font-normal tracking-[-0.2px] leading-normal whitespace-nowrap">
                  06:00-06:30AM
                </span>
              </div>
              <div className="flex justify-center bg-[#FFEFED] rounded-[20px] px-2 py-1.5">
                <span className="text-[#DA5747] text-center text-[10px] not-italic font-normal leading-normal tracking-[-0.2px] whitespace-nowrap">
                  3 food missed
                </span>
              </div>
            </div>

            <div className="px-2 py-1.5" />
          </div>

          {/* Breakfast */}
          <div className="flex flex-col gap-[187px] pt-[15px] pl-[15px] pr-[10px] pb-[10px] border-t border-t-[#D9D9D9]">
            <div className="flex flex-col gap-2.5">
              <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.48px] leading-[110%] whitespace-nowrap">
                Breakfast
              </span>
              <span className="text-[#252525] text-[10px] font-normal tracking-[-0.2px] leading-normal whitespace-nowrap">
                08:00-09:00AM
              </span>
            </div>
            <div className="px-2 py-1.5" />
          </div>

          {/* Lunch */}
          <div className="flex flex-col gap-[198px] pt-[15px] pl-[15px] pr-[10px] pb-[10px] border-t border-t-[#D9D9D9]">
            <div className="flex flex-col gap-2.5">
              <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.48px] leading-[110%] whitespace-nowrap">
                Lunch
              </span>
              <span className="text-[#252525] text-[10px] font-normal tracking-[-0.2px] leading-normal whitespace-nowrap">
                12:00-01:00PM
              </span>
            </div>
            <div className="px-2 py-1.5" />
          </div>

          {/* Snacks */}
          <div className="pt-[15px] pl-[15px] pr-[10px] pb-[10px] border-t border-t-[#D9D9D9]">

            <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-2.5">
              <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.48px] leading-[110%] whitespace-nowrap">
                Snacks
              </span>
              <span className="text-[#252525] text-[10px] font-normal tracking-[-0.2px] leading-normal whitespace-nowrap">
                03:00-03:30PM
              </span>
            </div>
            <div className="flex justify-center bg-[#FFEFED] rounded-[20px] px-2 py-1.5">
              <span className="text-[#DA5747] text-center text-[10px] not-italic font-normal leading-normal tracking-[-0.2px] whitespace-nowrap">
                3 food missed
              </span>
            </div>

            </div>
          </div>

          {/* Dinner */}
          <div className="pt-[15px] pl-[15px] pr-[10px] pb-[10px] border-t border-t-[#D9D9D9]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-2.5">
                <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.48px] leading-[110%] whitespace-nowrap">
                  Dinner
                </span>
                <span className="text-[#252525] text-[10px] font-normal tracking-[-0.2px] leading-normal whitespace-nowrap">
                  03:30-04:30PM
                </span>
              </div>
              <div className="flex justify-center bg-[#FFEFED] rounded-[20px] px-2 py-1.5">
                <span className="text-[#DA5747] text-center text-[10px] not-italic font-normal leading-normal tracking-[-0.2px] whitespace-nowrap">
                  3 food missed
                </span>
              </div>
            </div>
          </div>

          {/* Sleep */}
          <div className="flex flex-col gap-[102px] pt-[15px] pl-[15px] pr-[10px] pb-[10px] border-t border-t-[#D9D9D9]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-2.5">
                <span className="text-[#252525] text-[12px] font-semibold tracking-[-0.48px] leading-[110%] whitespace-nowrap">
                  Sleep
                </span>
                <span className="text-[#252525] text-[10px] font-normal tracking-[-0.2px] leading-normal whitespace-nowrap">
                  04:30-05:00PM
                </span>
              </div>
              <div className="flex justify-center bg-[#FFEFED] rounded-[20px] px-2 py-1.5">
                <span className="text-[#DA5747] text-center text-[10px] not-italic font-normal leading-normal tracking-[-0.2px] whitespace-nowrap">
                  3 food missed
                </span>
              </div>
              <div className="px-2 py-1.5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
