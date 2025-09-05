import React from 'react'
import Image from 'next/image';

export const UserProfile = () => {
    return (
        <>
        <div className='flex justify-between mt-[130px] mb-[102px]'>
            <div className='flex flex-col gap-[15px]'>
                <p className='text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]'>
                    Monday, 21 July
                </p>

                <p className='text-[#252525] text-[34px] font-normal leading-none tracking-[-2.04px]'>
                    Hello, Dt. Manoranjan
                </p>

            </div>

            <div className='flex gap-[15px]'>
                <div className='flex gap-1.5 px-5 py-[15px] items-center bg-[#308BF9] rounded-[15px] cursor-pointer'>
                    <Image
                        src="/icons/hugeicons_user-add-01.svg"
                        alt='add-icons'
                        width={20}
                        height={20}
                    />
                    <p className='text-[12px] font-semibold text-white space-x-0'>Add Client</p>
                </div>

                <div className='flex gap-1.5 px-5 py-[15px] items-center bg-[white] rounded-[15px] cursor-alias'>
                    <Image
                        src="/icons/hugeicons_file-export.svg"
                        alt='add-icons'
                        width={20}
                        height={20}
                    />
                    <p className='text-[12px] font-semibold text-black space-x-0'>Export Data</p>
                </div>
            </div>
            </div>
        </>
    )
};
