'use client';

import { useState } from 'react';
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
export default function ProfileSettings(){
   const [activeItem, setActiveItem] = useState('Account');

  const menuItems = [
    { id: 'Account', label: 'Account' },
    { id: 'Subscription', label: 'Subscription' },
    { id: 'Security', label: 'Security' },
    { id: 'Help Center', label: 'Help Center' },
    { id: 'About', label: 'About' }
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

    return(
        <>
        <div className="flex gap-[27px] pt-[25px] pl-[23px] pr-5 bg-white rounded-[15px] min-h-[calc(100vh-50px)] overflow-hidden">

  <div className="">
      {menuItems.map((item) => {
        const isActive = activeItem === item.id;
        const bgClass = isActive ? 'bg-[#E1E6ED]' : '';
        const textColor = isActive ? 'text-[#308BF9]' : 'text-[#252525]';
        const arrowColor = isActive ? 'text-[#308BF9]' : 'text-[#252525]';
        
        return (
          <div
  key={item.id}
  className={`w-[303px] pl-[23px] pr-[15px] py-[22px] rounded-[5px] flex items-center cursor-pointer ${bgClass}`}
  onClick={() => handleItemClick(item.id)}
>
  <span
    className={`flex-1 text-[15px] font-semibold leading-[110%] tracking-[-0.3px] ${textColor}`}
  >
    {item.label}
  </span>

  <IoIosArrowForward className={`${arrowColor} ml-auto`} />
</div>

        );
      })}
    </div>

        <div className="flex flex-col gap-6 w-full overflow-y-auto">
            <div className="pl-[15px] pb-[18px] pr-3.5 border-b border-[#E1E6ED] ">
            <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">Account</span>
        </div>
<div className="form-container">
       <div className="input-group">
    <input type="text" id="name" className="form-input" placeholder=" " />
    <label htmlFor="name" className="form-label">Name</label>
</div>

<div className="input-group" style={{ position: 'relative' }}>
    <input type="text" id="reference" className="form-input" placeholder=" " />
    <label htmlFor="reference" className="form-label">Reference Id</label>
     <div style={{ 
        position: 'absolute', 
        right: '10px', 
        top: '50%', 
        transform: 'translateY(-50%)',
        cursor: 'pointer'
    }}>
        <Image
            src="/icons/hugeicons_copy-02.svg"
            alt="Copy email"
            width={15}
            height={15}
        />
    </div>
</div>

<div className="input-group" style={{ position: 'relative' }}>
    <input type="text" id="mobile" className="form-input" placeholder=" " />
    <label htmlFor="mobile" className="form-label">Mobile Number</label>
    <div style={{ 
        position: 'absolute', 
        right: '10px', 
        top: '50%', 
        transform: 'translateY(-50%)',
        cursor: 'pointer'
    }}>
        <Image
            src="/icons/hugeicons_copy-02.svg"
            alt="Copy email"
            width={15}
            height={15}
        />
    </div>
</div>

<div className="input-group" style={{ position: 'relative' }}>
    <input type="text" id="email" className="form-input" placeholder=" " />
    <label htmlFor="email" className="form-label">Email Address</label>
    <div style={{ 
        position: 'absolute', 
        right: '10px', 
        top: '50%', 
        transform: 'translateY(-50%)',
        cursor: 'pointer'
    }}>
        <Image
            src="/icons/hugeicons_copy-02.svg"
            alt="Copy email"
            width={15}
            height={15}
        />
    </div>
</div>

    </div>
        </div>
        </div>
        </>
    )
}