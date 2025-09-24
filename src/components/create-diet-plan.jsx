import Image from "next/image"

export default function CreateDietPlan(){
    return(
        <>
        <div className="w-full rounded-[15px] bg-white">
            <p className="text-black">lorem</p>
            <div className='flex justify-between'>
                   <p className='text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]'>Diet Plan</p>
                   <div className='flex gap-2.5 items-center pb-2.5'>
                     <span className='text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px]'>Expand</span>
                    
                       <Image
                         src="/icons/hugeicons_arrow-expand.svg"
                         alt='hugeicons_arrow-expand.svg'
                         width={20}
                         height={20}
                       />
                       
                   </div>
                 </div>
        </div>
        </>
    )
}