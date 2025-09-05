
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className='flex justify-between mx-[25px] mt-[30px]  bg-[#F5F7FA]'>
        <div className='flex '>
<Image
src="/icons/logorespyr.png"
alt='logo'
width={50}
height={50}
/>
        </div>
        <div className='flex gap-[15px]'>
        <div className='flex gap-1.5 px-5 py-[15px] cursor-pointer  rounded-[15px]'>
    <Image
    src="/icons/hugeicons_home-05.svg"
    alt='icons'
    width={20}
    height={20}
    />
    <span className='font-semibold text-[12px] text-[#308BF9]'>Dashboard</span>
</div>

<div  className='flex gap-1.5 px-5 py-[15px] cursor-pointer'>
    <Image
    src="/icons/hugeicons_user-group.png"
    alt='icons'
    width={20}
    height={20}
    />
    <span className='font-semibold text-[12px] text-[#A1A1A1]'>Client</span>
</div>

<div  className='flex gap-1.5 px-5 py-[15px] cursor-pointer' >
    <Image
    src="/icons/hugeicons_message-02.svg"
    alt='icons'
    width={20}
    height={20}
    />
    <span className='font-semibold text-[12px] text-[#A1A1A1]'>Messages</span>
</div>

<div  className='flex gap-1.5 px-5 py-[15px] cursor-pointer'>
    <Image
    src="/icons/hugeicons_settings-03.svg"
    alt='icons'
    width={20}
    height={20}
    />
    <span className='font-semibold text-[12px] text-[#A1A1A1]'>Settings</span>
</div>

        </div>
        <div className="flex items-center gap-5">
  <Image
    src="/icons/hugeicons_notification-01.svg"
    alt="notification"
    width={20}
    height={20}
  />
  <Image
    src="/icons/hugeicons_user.svg"
    alt="user"
    width={20}
    height={20}
  />
</div>
      </div>
    </>
  )
}

export default Header
