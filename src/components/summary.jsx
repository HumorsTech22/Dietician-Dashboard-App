// "use client"
// import { IoIosArrowDown } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
// import React, { useState, useRef, useEffect } from 'react'
// import Image from 'next/image'
// export default function Summary() {
//   const [approachInput, setApproachInput] = useState('');
//   const [approachTags, setApproachTags] = useState([]);

//   const [currentUnit, setCurrentUnit] = useState('Unit');
//   const [targetUnit, setTargetUnit] = useState('Unit');
//   const [showCurrentDropdown, setShowCurrentDropdown] = useState(false);
//   const [showTargetDropdown, setShowTargetDropdown] = useState(false);

//   // Ref for dropdown containers
//   const currentDropdownRef = useRef(null);
//   const targetDropdownRef = useRef(null);

//   // Common units for weight/measurement
//   const unitOptions = [
//     'kg', 'g', 'lb', 'oz', 'cm', 'm', 'inch', 'ft', '%', 'bpm', 'cal', 'kcal'
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (currentDropdownRef.current && !currentDropdownRef.current.contains(event.target)) {
//         setShowCurrentDropdown(false);
//       }
//       if (targetDropdownRef.current && !targetDropdownRef.current.contains(event.target)) {
//         setShowTargetDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const addTag = () => {
//     const t = approachInput.trim();
//     if (!t) return;
//     const exists = approachTags.some(a => a.toLowerCase() === t.toLowerCase());
//     if (!exists) setApproachTags(prev => [...prev, t]);
//     setApproachInput('');
//   };

//   const removeTag = (i) => {
//     setApproachTags(prev => prev.filter((_, idx) => idx !== i));
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' || e.key === ',') {
//       e.preventDefault();
//       addTag();
//     }
//   };


//   const handleUnitSelect = (unit, type) => {
//     if (type === 'current') {
//       setCurrentUnit(unit);
//       setShowCurrentDropdown(false);
//     } else {
//       setTargetUnit(unit);
//       setShowTargetDropdown(false);
//     }
//   };

//   const toggleCurrentDropdown = () => {
//     setShowCurrentDropdown(!showCurrentDropdown);
//     setShowTargetDropdown(false);
//   };

//   const toggleTargetDropdown = () => {
//     setShowTargetDropdown(!showTargetDropdown); 
//     setShowCurrentDropdown(false);
//   };

//   return (
//     <>
//       <div className='w-full'>
//         <div className='pt-[23px]'>
//           <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>Plan Summary1</p>

//           <div className="w-full border-b border-[#E1E6ED]"></div>

//           <div className='mt-[15px]'>
//             <div className="flex gap-5 items-end">
//               {/* Name of the plan */}
//               <div className="relative flex-1">
//                 <input type="text" id="floating_outlined"
//                   className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
//                 <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">Name of the plan</label>
//               </div>

//               {/* Duration */}
//               <div className="flex-1">
//                 <span className="px-[9px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]">
//                   Duration
//                 </span>

//                 <div className="flex gap-2 mt-2">
//                   {/* From */}
//                   <div className="relative flex-1">
//                     <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
//                       From
//                     </span>
//                     <div className="flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white">
//                       <input
//                         type="text"
//                         placeholder="DD/MM/YYYY"
//                         className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
//                       />
//                       <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
//                     </div>
//                   </div>

//                   {/* To */}
//                   <div className="relative flex-1">
//                     <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
//                       To
//                     </span>
//                     <div className="flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white">
//                       <input
//                         type="text"
//                         placeholder="DD/MM/YYYY"
//                         className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
//                       />
//                       <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className='px-[9px] py-[5px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]'>Goal 1</div>

//             <div className='flex gap-[7px]'>
//               <div className="relative flex-1">
//                 <input
//                   id="goalTitle"
//                   type="text"
//                   placeholder=" "
//                   className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//                 />
//                 <label
//                   htmlFor="goalTitle"
//                   className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF]
//                    transition-all duration-200 ease-out
//                    top-1/2 -translate-y-1/2
//                    peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600
//                    peer-[&:not(:placeholder-shown)]:top-2
//                    peer-[&:not(:placeholder-shown)]:-translate-y-4
//                    peer-[&:not(:placeholder-shown)]:scale-75
//                    peer-[&:not(:placeholder-shown)]:text-[#535359]"
//                 >
//                   Goal Title
//                 </label>
//               </div>

//               <div className="flex gap-10">
//                 {/* Current Stat with error and dropdown */}
//                 <div className="flex flex-col" ref={currentDropdownRef}>
//                   <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                     <input
//                       type="text"
//                       placeholder="Current Stat"
//                       className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                     />

//                     <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>

//                     <div
//                       className="flex items-center gap-2 cursor-pointer relative"
//                       onClick={toggleCurrentDropdown}
//                     >
//                       <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                         {currentUnit}
//                       </span>
//                       <IoIosArrowDown className={`text-[#A1A1A1] w-[15px] h-[15px] transition-transform ${showCurrentDropdown ? 'rotate-180' : ''}`} />

//                       {/* Dropdown Menu */}
//                       {showCurrentDropdown && (
//                         <div className="absolute top-full right-0 mt-1 bg-white border border-[#E1E6ED] rounded-[8px] shadow-lg z-10 min-w-[100px] max-h-[200px] overflow-y-auto">
//                           {unitOptions.map((unit) => (
//                             <div
//                               key={unit}
//                               className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[12px] text-[#252525]"
//                               onClick={() => handleUnitSelect(unit, 'current')}
//                             >
//                               {unit}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Error text below */}
//                   <div className="flex gap-[5px] items-center mt-1">
//                     <Image
//                       src="/icons/hugeicons_information-circle-redd.png"
//                       alt="info"
//                       width={15}
//                       height={15}
//                     />
//                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                       Enter current stat
//                     </span>
//                   </div>
//                 </div>

//                 {/* Target Stat with error and dropdown */}
//                 <div className="flex flex-col" ref={targetDropdownRef}>
//                   <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                     <input
//                       type="text"
//                       placeholder="Target Stat"
//                       className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                     />

//                     <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>

//                     <div
//                       className="flex items-center gap-2 cursor-pointer relative"
//                       onClick={toggleTargetDropdown}
//                     >
//                       <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                         {targetUnit}
//                       </span>
//                       <IoIosArrowDown className={`text-[#A1A1A1] w-[15px] h-[15px] transition-transform ${showTargetDropdown ? 'rotate-180' : ''}`} />

//                       {/* Dropdown Menu */}
//                       {showTargetDropdown && (
//                         <div className="absolute top-full right-0 mt-1 bg-white border border-[#E1E6ED] rounded-[8px] shadow-lg z-10 min-w-[100px] max-h-[200px] overflow-y-auto">
//                           {unitOptions.map((unit) => (
//                             <div
//                               key={unit}
//                               className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[12px] text-[#252525]"
//                               onClick={() => handleUnitSelect(unit, 'target')}
//                             >
//                               {unit}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Error text below */}
//                   <div className="flex gap-[5px] items-center mt-1">
//                     <Image
//                       src="/icons/hugeicons_information-circle-redd.png"
//                       alt="info"
//                       width={15}
//                       height={15}
//                     />
//                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                       Enter target stat
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='flex flex-col gap-[15px]'>
//           <div className='px-5 py-[15px]'>
//             <span className='text-[#308BF9] font-semibold text-[12px] leading-normal tracking-[-0.24px] cursor-pointer'>Add Another Goal</span>
//           </div>

//           <div className='flex flex-col gap-3.5'>
//             <div className='flex justify-between pr-[15px] items-center py-[15px] pl-5 border border-[#E1E6ED] rounded-[8px]'>
//               <input
//                 value={approachInput}
//                 onChange={(e) => setApproachInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 onBlur={addTag}
//                 placeholder='Enter approach (Ex. Low GI, High Proteins, Calories Deficit)'
//                 className="flex-1 outline-none text-[#252525] text-[14px] font-normal placeholder:text-[#9CA3AF] leading-[110%] tracking-[-0.24px]"
//               />
//               <IoIosArrowDown
//                 className="text-[#A1A1A1] w-[15px] h-[15px] cursor-pointer"
//                 onClick={addTag}
//                 title="Add"
//               />
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {approachTags.map((tag, idx) => (
//                 <div
//                   key={`${tag}-${idx}`}
//                   className='flex items-center gap-2.5 px-5 py-2.5 rounded-[20px] border border-[#E48326] bg-[#FFF7F0] max-w-full'
//                 >
//                   <span className='text-[#E48326] text-[12px] whitespace-nowrap font-semibold leading-[110%] tracking-[-0.24px]'>
//                     {tag}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() => removeTag(idx)}
//                     aria-label={`Remove ${tag}`}
//                   >
//                     <RxCross2 className='text-[#252525] w-[15px] h-[15px] cursor-pointer' />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>

//         <div className='py-[23px]'>
//           <div className='flex gap-5 justify-end'>
//             <div className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px]'>
//               <span className='text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>Save as draft</span>
//             </div>

//             <div className='px-5 py-[15px] bg-[#308BF9] rounded-[10px]'>
//               <span className='text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer'>Confirm & Next</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// };










"use client"
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { toast } from 'sonner'

export default function Summary({ onConfirmNext }) {
  const [planTitle, setPlanTitle] = useState('');
  const [approachInput, setApproachInput] = useState('');
  const [approachTags, setApproachTags] = useState([]);
  const [goals, setGoals] = useState([{ id: 1, title: '', current: '', target: '' }]);
  const [goalUnits, setGoalUnits] = useState([{ id: 1, currentUnit: 'Unit', targetUnit: 'Unit' }]);

  // errors: string = message; empty string = no error
  const [errors, setErrors] = useState({
    planTitle: '',
    fromDate: '',
    toDate: '',
    caloriesTarget: '',
    proteinTarget: '',
    fiberTarget: '',
    waterTarget: '',
    approach: '',
    goals: {} // { [goalId]: { title:'', current:'', target:'' } }
  });

  // Date states
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const fromPickerRef = useRef(null);
  const toPickerRef = useRef(null);

  // Unit states
  const [showCurrentDropdown, setShowCurrentDropdown] = useState(null);
  const [showTargetDropdown, setShowTargetDropdown] = useState(null);

  // Daily targets
  const [caloriesTarget, setCaloriesTarget] = useState('');
  const [proteinTarget, setProteinTarget] = useState('');
  const [fiberTarget, setFiberTarget] = useState('');
  const [waterTarget, setWaterTarget] = useState('');

  // Refs
  const currentDropdownRef = useRef(null);
  const targetDropdownRef = useRef(null);

  const unitOptions = ['kg','g','lb','oz','cm','m','inch','ft','%','bpm','cal','kcal'];

  // Click outside handler for dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currentDropdownRef.current && !currentDropdownRef.current.contains(event.target)) {
        setShowCurrentDropdown(null);
      }
      if (targetDropdownRef.current && !targetDropdownRef.current.contains(event.target)) {
        setShowTargetDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Approach tags
  const addTag = () => {
    const t = approachInput.trim();
    if (!t) return;
    const exists = approachTags.some(a => a.toLowerCase() === t.toLowerCase());
    if (!exists) {
      setApproachTags(prev => [...prev, t]);
      setErrors(prev => ({ ...prev, approach: '' }));
    }
    setApproachInput('');
  };
  const removeTag = (i) => setApproachTags(prev => prev.filter((_, idx) => idx !== i));
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(); }
  };

  // Unit selection
  const handleUnitSelect = (unit, type, goalId) => {
    setGoalUnits(prev => prev.map(goalUnit =>
      goalUnit.id === goalId
        ? { ...goalUnit, [type]: unit }
        : goalUnit
    ));
    if (type === 'currentUnit') setShowCurrentDropdown(null);
    else setShowTargetDropdown(null);
  };
  const toggleCurrentDropdown = (goalId) => { setShowCurrentDropdown(goalId); setShowTargetDropdown(null); };
  const toggleTargetDropdown = (goalId) => { setShowTargetDropdown(goalId); setShowCurrentDropdown(null); };

  // Date utils
  const ymdToDmy = (v) => {
    if (!v) return "";
    const [y, m, d] = v.split("-");
    return `${d}/${m}/${y}`;
  };
  const dmyToYmd = (v) => {
    if (!v) return "";
    const [d, m, y] = v.split("/");
    return `${y}-${m}-${d}`;
  };
  const openFromPicker = () => { fromPickerRef.current?.showPicker?.() || fromPickerRef.current?.click(); };
  const openToPicker = () => { toPickerRef.current?.showPicker?.() || toPickerRef.current?.click(); };

  // Goals
  const updateGoal = (goalId, field, value) => {
    setGoals(prev => prev.map(goal => goal.id === goalId ? { ...goal, [field]: value } : goal));
    // clear that field error
    setErrors(prev => ({
      ...prev,
      goals: {
        ...prev.goals,
        [goalId]: { ...(prev.goals[goalId] || {}), [field]: '' }
      }
    }));
  };

  const addNewGoal = () => {
    const newGoalId = goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1;
    setGoals(prev => [...prev, { id: newGoalId, title: '', current: '', target: '' }]);
    setGoalUnits(prev => [...prev, { id: newGoalId, currentUnit: 'Unit', targetUnit: 'Unit' }]);
  };

  const removeGoal = (goalId) => {
    if (goals.length > 1) {
      setGoals(prev => prev.filter(goal => goal.id !== goalId));
      setGoalUnits(prev => prev.filter(goalUnit => goalUnit.id !== goalId));
      setErrors(prev => {
        const g = { ...prev.goals };
        delete g[goalId];
        return { ...prev, goals: g };
      });
    }
  };

  // Field-level error helpers
  const markError = (key, message) => message ? message : '';
  const markGoalError = (curr, key, message) => ({ ...(curr || {}), [key]: message });

  // Validation -> sets errors and returns boolean
  const validateForm = () => {
    const nextErrors = {
      planTitle: '',
      fromDate: '',
      toDate: '',
      caloriesTarget: '',
      proteinTarget: '',
      fiberTarget: '',
      waterTarget: '',
      approach: '',
      goals: {}
    };

    if (!planTitle.trim()) nextErrors.planTitle = 'Enter plan title';
    if (!fromDate) nextErrors.fromDate = 'Select start date';
    if (!toDate) nextErrors.toDate = 'Select end date';

    if (!caloriesTarget) nextErrors.caloriesTarget = 'Enter calories target';
    if (!proteinTarget) nextErrors.proteinTarget = 'Enter protein target';
    if (!fiberTarget) nextErrors.fiberTarget = 'Enter fiber target';
    if (!waterTarget) nextErrors.waterTarget = 'Enter water target';

    if (approachTags.length === 0) nextErrors.approach = 'Add at least one approach';

    goals.forEach(g => {
      let ge = nextErrors.goals[g.id] || {};
      if (!g.title.trim()) ge = markGoalError(ge, 'title', 'Enter goal title');
      if (!g.current) ge = markGoalError(ge, 'current', 'Enter current stat');
      if (!g.target) ge = markGoalError(ge, 'target', 'Enter target stat');
      if (Object.keys(ge).length) nextErrors.goals[g.id] = ge;
    });

    setErrors(nextErrors);

    const hasTopLevel =
      nextErrors.planTitle || nextErrors.fromDate || nextErrors.toDate ||
      nextErrors.caloriesTarget || nextErrors.proteinTarget ||
      nextErrors.fiberTarget || nextErrors.waterTarget || nextErrors.approach;

    const hasGoalLevel = Object.keys(nextErrors.goals).length > 0;

    if (hasTopLevel || hasGoalLevel) {
      toast.error('Please fix the highlighted fields');
      return false;
    }
    return true;
  };

  // Prepare data for storage
  const prepareFormData = () => {
    return {
      plan_title: planTitle,
      plan_start_date: dmyToYmd(fromDate),
      plan_end_date: dmyToYmd(toDate),
      calories_target: caloriesTarget,
      protein_target: proteinTarget,
      fiber_target: fiberTarget,
      water_target: waterTarget,
      goal: goals.map(goal => {
        const goalUnit = goalUnits.find(gu => gu.id === goal.id) || { currentUnit: 'Unit', targetUnit: 'Unit' };
        return {
          name: goal.title,
          current_stat: `${goal.current}${goalUnit.currentUnit}`,
          target_stat: `${goal.target}${goalUnit.targetUnit}`
        };
      }),
      approach: approachTags.join(',')
    };
  };

  // Save
  const saveToLocalStorage = (isDraft = false) => {
    if (!isDraft && !validateForm()) return;
    const formData = prepareFormData();
    if (isDraft) formData.isDraft = true;
    localStorage.setItem('planSummary', JSON.stringify(formData));
    if (isDraft) toast.success('Plan saved as draft successfully!');
    else { toast.success('Plan saved successfully!'); onConfirmNext?.(); }
  };

  const handleSaveAsDraft = () => saveToLocalStorage(true);
  const handleConfirmNext = () => saveToLocalStorage(false);

  // Clear individual errors when user types/changes
  const onChangeAndClear = (setter, key) => (e) => {
    setter(e.target.value);
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  return (
    <div className='w-full'>
      <div className='pt-[23px]'>
        <p className='text-[#252525] pb-[18px] pt-[23px] text-[20px] font-semibold leading-[110%] tracking-[0.4px] whitespace-nowrap'>
          Plan Summary
        </p>

        <div className="w-full border-b border-[#E1E6ED]"></div>

        <div className='mt-[15px]'>
          <div className="flex gap-5 items-end">
            {/* Name of the plan */}
            <div className="relative flex-1">
              <input
                type="text"
                value={planTitle}
                onChange={(e) => { setPlanTitle(e.target.value); setErrors(prev => ({ ...prev, planTitle: '' })); }}
                className={`block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border appearance-none focus:outline-none focus:ring-0
                  ${errors.planTitle ? 'border-[#DA5747]' : 'border-[#E1E6ED]'} focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">
                Name of the plan
              </label>
              {errors.planTitle ? (
                <div className="flex gap-[5px] items-center mt-1">
                  <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                  <span className="text-[#DA5747] text-[10px]">{errors.planTitle}</span>
                </div>
              ) : null}
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
                  <div className={`flex py-[15px] pl-[19px] pr-[13px] rounded-[8px] bg-white
                    ${errors.fromDate ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'}`}>
                    <input
                      type="text"
                      readOnly
                      value={fromDate}
                      onClick={openFromPicker}
                      placeholder="DD/MM/YYYY"
                      className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF] cursor-pointer"
                    />
                    <button type="button" onClick={openFromPicker} className="cursor-pointer">
                      <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
                    </button>
                    <input
                      ref={fromPickerRef}
                      type="date"
                      className="sr-only"
                      onChange={(e) => { setFromDate(ymdToDmy(e.target.value)); setErrors(prev => ({ ...prev, fromDate: '' })); }}
                    />
                  </div>
                  {errors.fromDate ? (
                    <div className="flex gap-[5px] items-center mt-1">
                      <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                      <span className="text-[#DA5747] text-[10px]">{errors.fromDate}</span>
                    </div>
                  ) : null}
                </div>

                {/* To */}
                <div className="relative flex-1">
                  <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#53559]">
                    To
                  </span>
                  <div className={`flex py-[15px] pl-[19px] pr-[13px] rounded-[8px] bg-white
                    ${errors.toDate ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'}`}>
                    <input
                      type="text"
                      readOnly
                      value={toDate}
                      onClick={openToPicker}
                      placeholder="DD/MM/YYYY"
                      className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF] cursor-pointer"
                    />
                    <button type="button" onClick={openToPicker} className="cursor-pointer">
                      <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
                    </button>
                    <input
                      ref={toPickerRef}
                      type="date"
                      className="sr-only"
                      onChange={(e) => { setToDate(ymdToDmy(e.target.value)); setErrors(prev => ({ ...prev, toDate: '' })); }}
                    />
                  </div>
                  {errors.toDate ? (
                    <div className="flex gap-[5px] items-center mt-1">
                      <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                      <span className="text-[#DA5747] text-[10px]">{errors.toDate}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Daily Targets */}
          <div className="mt-[15px]">
            <div className='px-[9px] pt-[5px] pb-[12px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]'>
              Nutrition Target
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px]">
              {/* Calories */}
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  value={caloriesTarget}
                  onChange={onChangeAndClear(setCaloriesTarget, 'caloriesTarget')}
                  placeholder=" "
                  className={`peer block w-full py-[15px] pl-[19px] pr-[48px] text-[14px] text-[#252525] bg-white rounded-[8px] outline-none placeholder-transparent
                    ${errors.caloriesTarget ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'} focus:border-blue-600`}
                />
                <label className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                  Calories Target
                </label>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#535359]">kcal</span>
                {errors.caloriesTarget ? (
                  <div className="flex gap-[5px] items-center mt-1">
                    <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                    <span className="text-[#DA5747] text-[10px]">{errors.caloriesTarget}</span>
                  </div>
                ) : null}
              </div>

              {/* Protein */}
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={proteinTarget}
                  onChange={onChangeAndClear(setProteinTarget, 'proteinTarget')}
                  placeholder=" "
                  className={`peer block w-full py-[15px] pl-[19px] pr-[48px] text-[14px] text-[#252525] bg-white rounded-[8px] outline-none placeholder-transparent
                    ${errors.proteinTarget ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'} focus:border-blue-600`}
                />
                <label className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                  Protein Target
                </label>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#535359]">g</span>
                {errors.proteinTarget ? (
                  <div className="flex gap-[5px] items-center mt-1">
                    <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                    <span className="text-[#DA5747] text-[10px]">{errors.proteinTarget}</span>
                  </div>
                ) : null}
              </div>

              {/* Fiber */}
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={fiberTarget}
                  onChange={onChangeAndClear(setFiberTarget, 'fiberTarget')}
                  placeholder=" "
                  className={`peer block w-full py-[15px] pl-[19px] pr-[48px] text-[14px] text-[#252525] bg-white rounded-[8px] outline-none placeholder-transparent
                    ${errors.fiberTarget ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'} focus:border-blue-600`}
                />
                <label className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                  Fiber Target
                </label>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#535359]">g</span>
                {errors.fiberTarget ? (
                  <div className="flex gap-[5px] items-center mt-1">
                    <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                    <span className="text-[#DA5747] text-[10px]">{errors.fiberTarget}</span>
                  </div>
                ) : null}
              </div>

              {/* Water */}
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={waterTarget}
                  onChange={onChangeAndClear(setWaterTarget, 'waterTarget')}
                  placeholder=" "
                  className={`peer block w-full py-[15px] pl-[19px] pr-[48px] text-[14px] text-[#252525] bg-white rounded-[8px] outline-none placeholder-transparent
                    ${errors.waterTarget ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'} focus:border-blue-600`}
                />
                <label className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                  Water Target
                </label>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#535359]">ml</span>
                {errors.waterTarget ? (
                  <div className="flex gap-[5px] items-center mt-1">
                    <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                    <span className="text-[#DA5747] text-[10px]">{errors.waterTarget}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Goals */}
          {goals.map((goal, index) => {
            const goalUnit = goalUnits.find(gu => gu.id === goal.id) || { currentUnit: 'Unit', targetUnit: 'Unit' };
            const gErr = errors.goals[goal.id] || {};
            return (
              <div key={goal.id} className="mt-4">
                <div className='flex justify-between items-center'>
                  <div className='px-[9px] pt-[5px] pb-[12px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]'>
                    Goal {index + 1}
                  </div>
                  {goals.length > 1 && (
                    <button
                      onClick={() => removeGoal(goal.id)}
                      className="text-red-500 text-[10px] font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className='flex gap-[7px]'>
                  <div className="relative flex-1">
                    <input
                      value={goal.title}
                      onChange={(e) => updateGoal(goal.id, 'title', e.target.value)}
                      placeholder=" "
                      className={`peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white rounded-[8px] outline-none placeholder-transparent
                        ${gErr.title ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'} focus:border-blue-600`}
                    />
                    <label className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                      Goal Title
                    </label>
                    {gErr.title ? (
                      <div className="flex gap-[5px] items-center mt-1">
                        <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                        <span className="text-[#DA5747] text-[10px]">{gErr.title}</span>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex gap-10">
                    {/* Current Stat */}
                    <div className="flex flex-col" ref={currentDropdownRef}>
                      <div className={`flex items-center py-[15px] pl-[19px] pr-[15px] rounded-[8px] bg-white relative
                        ${gErr.current ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'}`}>
                        <input
                          type="number"
                          min="0"
                          step="0.1"
                          value={goal.current}
                          onChange={(e) => updateGoal(goal.id, 'current', e.target.value)}
                          placeholder="Current Stat"
                          className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                        />
                        <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleCurrentDropdown(goal.id)}>
                          <span className="text-[#252525] text-[12px]">{goalUnit.currentUnit}</span>
                          <IoIosArrowDown className={`text-[#A1A1A1] transition-transform ${showCurrentDropdown === goal.id ? 'rotate-180' : ''}`} />
                        </div>
                        {showCurrentDropdown === goal.id && (
                          <div className="absolute top-full right-0 mt-1 bg-white border border-[#E1E6ED] rounded-[8px] shadow-lg z-10 min-w-[100px]">
                            {unitOptions.map((unit) => (
                              <div
                                key={unit}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[12px]"
                                onClick={() => handleUnitSelect(unit, 'currentUnit', goal.id)}
                              >
                                {unit}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {gErr.current ? (
                        <div className="flex gap-[5px] items-center mt-1">
                          <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                          <span className="text-[#DA5747] text-[10px]">{gErr.current}</span>
                        </div>
                      ) : null}
                    </div>

                    {/* Target Stat */}
                    <div className="flex flex-col" ref={targetDropdownRef}>
                      <div className={`flex items-center py-[15px] pl-[19px] pr-[15px] rounded-[8px] bg-white relative
                        ${gErr.target ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'}`}>
                        <input
                          type="number"
                          min="0"
                          step="0.1"
                          value={goal.target}
                          onChange={(e) => updateGoal(goal.id, 'target', e.target.value)}
                          placeholder="Target Stat"
                          className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                        />
                        <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleTargetDropdown(goal.id)}>
                          <span className="text-[#252525] text-[12px]">{goalUnit.targetUnit}</span>
                          <IoIosArrowDown className={`text-[#A1A1A1] transition-transform ${showTargetDropdown === goal.id ? 'rotate-180' : ''}`} />
                        </div>
                        {showTargetDropdown === goal.id && (
                          <div className="absolute top-full right-0 mt-1 bg-white border border-[#E1E6ED] rounded-[8px] shadow-lg z-10 min-w-[100px]">
                            {unitOptions.map((unit) => (
                              <div
                                key={unit}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[12px]"
                                onClick={() => handleUnitSelect(unit, 'targetUnit', goal.id)}
                              >
                                {unit}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {gErr.target ? (
                        <div className="flex gap-[5px] items-center mt-1">
                          <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
                          <span className="text-[#DA5747] text-[10px]">{gErr.target}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Another Goal */}
      <div className='px-5 py-[15px]'>
        <span
          className='text-[#308BF9] font-semibold text-[12px] cursor-pointer'
          onClick={addNewGoal}
        >
          Add Another Goal
        </span>
      </div>

      {/* Approaches */}
      <div className='flex flex-col gap-3.5'>
        <div className={`flex justify-between pr-[15px] items-center py-[15px] pl-5 rounded-[8px]
          ${errors.approach ? 'border border-[#DA5747]' : 'border border-[#E1E6ED]'} bg-white`}>
          <input
            value={approachInput}
            onChange={(e) => { setApproachInput(e.target.value); if (approachTags.length) setErrors(prev => ({ ...prev, approach: '' })); }}
            onKeyDown={handleKeyDown}
            onBlur={addTag}
            placeholder='Enter approach (Ex. Low GI, High Proteins, Calories Deficit)'
            className="flex-1 outline-none text-[#252525] text-[14px] placeholder:text-[#9CA3AF]"
          />
          <IoIosArrowDown className="text-[#A1A1A1] cursor-pointer" onClick={addTag} />
        </div>
        {errors.approach ? (
          <div className="flex gap-[5px] items-center mt-1 pl-5">
            <Image src="/icons/hugeicons_information-circle-redd.png" alt="info" width={15} height={15} />
            <span className="text-[#DA5747] text-[10px]">{errors.approach}</span>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {approachTags.map((tag, idx) => (
            <div key={idx} className='flex items-center gap-2.5 px-5 py-2.5 rounded-[20px] border border-[#E48326] bg-[#FFF7F0]'>
              <span className='text-[#E48326] text-[12px] font-semibold'>{tag}</span>
              <button onClick={() => removeTag(idx)}>
                <RxCross2 className='text-[#252525] cursor-pointer' />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-b border-[#E1E6ED] mt-[30px]"></div>

      {/* Buttons */}
      <div className='py-[23px]'>
        <div className='flex gap-5 justify-end'>
          <div
            className='px-5 py-[15px] bg-white border border-[#D9D9D9] rounded-[10px] cursor-pointer'
            onClick={handleSaveAsDraft}
          >
            <span className='text-[#308BF9] text-[12px] font-semibold'>Save as draft</span>
          </div>
          <div
            className='px-5 py-[15px] bg-[#308BF9] rounded-[10px] cursor-pointer'
            onClick={handleConfirmNext}
          >
            <span className='text-white text-[12px] font-semibold'>Confirm & Next</span>
          </div>
        </div>
      </div>
    </div>
  )
}
