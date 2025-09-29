"use client"
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
export default function Summary() {
  const [approachInput, setApproachInput] = useState('');
  const [approachTags, setApproachTags] = useState([]);

  const [currentUnit, setCurrentUnit] = useState('Unit');
  const [targetUnit, setTargetUnit] = useState('Unit');
  const [showCurrentDropdown, setShowCurrentDropdown] = useState(false);
  const [showTargetDropdown, setShowTargetDropdown] = useState(false);

  // Ref for dropdown containers
  const currentDropdownRef = useRef(null);
  const targetDropdownRef = useRef(null);

  // Common units for weight/measurement
  const unitOptions = [
    'kg', 'g', 'lb', 'oz', 'cm', 'm', 'inch', 'ft', '%', 'bpm', 'cal', 'kcal'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currentDropdownRef.current && !currentDropdownRef.current.contains(event.target)) {
        setShowCurrentDropdown(false);
      }
      if (targetDropdownRef.current && !targetDropdownRef.current.contains(event.target)) {
        setShowTargetDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addTag = () => {
    const t = approachInput.trim();
    if (!t) return;
    const exists = approachTags.some(a => a.toLowerCase() === t.toLowerCase());
    if (!exists) setApproachTags(prev => [...prev, t]);
    setApproachInput('');
  };

  const removeTag = (i) => {
    setApproachTags(prev => prev.filter((_, idx) => idx !== i));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };


  const handleUnitSelect = (unit, type) => {
    if (type === 'current') {
      setCurrentUnit(unit);
      setShowCurrentDropdown(false);
    } else {
      setTargetUnit(unit);
      setShowTargetDropdown(false);
    }
  };

  const toggleCurrentDropdown = () => {
    setShowCurrentDropdown(!showCurrentDropdown);
    setShowTargetDropdown(false);
  };

  const toggleTargetDropdown = () => {
    setShowTargetDropdown(!showTargetDropdown);
    setShowCurrentDropdown(false);
  };

  return (
    <>
      <div className='w-full'>
        <div className='pt-[23px]'>
          <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Plan Summary</p>

          <div className="w-full border-b border-[#E1E6ED]"></div>

          <div className='mt-[15px]'>
            <div className="flex gap-5 items-end">
              {/* Name of the plan */}
              <div className="relative flex-1">
                <input type="text" id="floating_outlined"
                  className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">Name of the plan</label>
              </div>

              {/* Duration */}
              <div className="flex-1">
                <span className="px-[9px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]">
                  Duration
                </span>

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

            <div className='px-[9px] py-[5px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]'>Goal 1</div>

            <div className='flex gap-[7px]'>
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
                {/* Current Stat with error and dropdown */}
                <div className="flex flex-col" ref={currentDropdownRef}>
                  <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                    <input
                      type="text"
                      placeholder="Current Stat"
                      className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                    />

                    <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>

                    <div
                      className="flex items-center gap-2 cursor-pointer relative"
                      onClick={toggleCurrentDropdown}
                    >
                      <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                        {currentUnit}
                      </span>
                      <IoIosArrowDown className={`text-[#A1A1A1] w-[15px] h-[15px] transition-transform ${showCurrentDropdown ? 'rotate-180' : ''}`} />

                      {/* Dropdown Menu */}
                      {showCurrentDropdown && (
                        <div className="absolute top-full right-0 mt-1 bg-white border border-[#E1E6ED] rounded-[8px] shadow-lg z-10 min-w-[100px] max-h-[200px] overflow-y-auto">
                          {unitOptions.map((unit) => (
                            <div
                              key={unit}
                              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[12px] text-[#252525]"
                              onClick={() => handleUnitSelect(unit, 'current')}
                            >
                              {unit}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Error text below */}
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

                {/* Target Stat with error and dropdown */}
                <div className="flex flex-col" ref={targetDropdownRef}>
                  <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                    <input
                      type="text"
                      placeholder="Target Stat"
                      className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                    />

                    <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>

                    <div
                      className="flex items-center gap-2 cursor-pointer relative"
                      onClick={toggleTargetDropdown}
                    >
                      <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                        {targetUnit}
                      </span>
                      <IoIosArrowDown className={`text-[#A1A1A1] w-[15px] h-[15px] transition-transform ${showTargetDropdown ? 'rotate-180' : ''}`} />

                      {/* Dropdown Menu */}
                      {showTargetDropdown && (
                        <div className="absolute top-full right-0 mt-1 bg-white border border-[#E1E6ED] rounded-[8px] shadow-lg z-10 min-w-[100px] max-h-[200px] overflow-y-auto">
                          {unitOptions.map((unit) => (
                            <div
                              key={unit}
                              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[12px] text-[#252525]"
                              onClick={() => handleUnitSelect(unit, 'target')}
                            >
                              {unit}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Error text below */}
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
          </div>
        </div>

        <div className='flex flex-col gap-[15px]'>
          <div className='px-5 py-[15px]'>
            <span className='text-[#308BF9] font-semibold text-[12px] leading-normal tracking-[-0.24px] cursor-pointer'>Add Another Goal</span>
          </div>

          <div className='flex flex-col gap-3.5'>
            <div className='flex justify-between pr-[15px] items-center py-[15px] pl-5 border border-[#E1E6ED] rounded-[8px]'>
              <input
                value={approachInput}
                onChange={(e) => setApproachInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={addTag}
                placeholder='Enter approach (Ex. Low GI, High Proteins, Calories Deficit)'
                className="flex-1 outline-none text-[#252525] text-[14px] font-normal placeholder:text-[#9CA3AF] leading-[110%] tracking-[-0.24px]"
              />
              <IoIosArrowDown
                className="text-[#A1A1A1] w-[15px] h-[15px] cursor-pointer"
                onClick={addTag}
                title="Add"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {approachTags.map((tag, idx) => (
                <div
                  key={`${tag}-${idx}`}
                  className='flex items-center gap-2.5 px-5 py-2.5 rounded-[20px] border border-[#E48326] bg-[#FFF7F0] max-w-full'
                >
                  <span className='text-[#E48326] text-[12px] whitespace-nowrap font-semibold leading-[110%] tracking-[-0.24px]'>
                    {tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeTag(idx)}
                    aria-label={`Remove ${tag}`}
                  >
                    <RxCross2 className='text-[#252525] w-[15px] h-[15px] cursor-pointer' />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>

        <div className='py-[23px]'>
          <div className='flex gap-5 justify-end'>
            <div className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px]'>
              <span className='text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>Save as draft</span>
            </div>

            <div className='px-5 py-[15px] bg-[#308BF9] rounded-[10px]'>
              <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>Confirm & Next</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};