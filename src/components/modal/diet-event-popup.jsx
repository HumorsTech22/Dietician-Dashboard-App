// "use client";
// import { useState, useEffect } from "react";
// import { Modal } from "react-responsive-modal";
// import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import Image from "next/image";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// // Split "1.0 bowl" → { quantityValue: "1.0", quantityUnit: "bowl" }
// const parseQuantityDetail = (detail) => {
//   if (!detail) return { quantityValue: "", quantityUnit: "" };

//   const parts = detail.trim().split(" ");
//   const quantityValue = parts[0] || "";
//   const quantityUnit = parts.slice(1).join(" ") || "";

//   return { quantityValue, quantityUnit };
// };

// // Split "80kcal" / "3g" / "10 g" → { value: "80", unit: "kcal" }
// const parseValueUnit = (str) => {
//   if (!str) return { value: "", unit: "" };

//   const trimmed = str.trim();
//   const match = trimmed.match(/^([\d.]+)\s*(.*)$/); // number + optional unit
//   if (!match) {
//     return { value: trimmed, unit: "" };
//   }
//   return { value: match[1] || "", unit: match[2] || "" };
// };

// // default empty item
// const emptyFoodItem = {
//   name: "",
//   quantityValue: "",
//   quantityUnit: "",
//   caloriesValue: "",
//   caloriesUnit: "kcal",
//   proteinValue: "",
//   proteinUnit: "g",
//   carbsValue: "",
//   carbsUnit: "g",
//   fatValue: "",
//   fatUnit: "g",
// };

// export default function DietEvent({ open, onClose, selectedMeal, onSave }) {
//   const section = selectedMeal?.section;
//   const day = selectedMeal?.day;
//   const dayTotals = selectedMeal?.dayTotals;

//   const getDayName = (date) => {
//     const days = [
//       "sunday",
//       "monday",
//       "tuesday",
//       "wednesday",
//       "thursday",
//       "friday",
//       "saturday",
//     ];
//     return days[date.getDay()];
//   };

//   const dayName = day?.fullDate ? getDayName(day.fullDate).toLowerCase() : "";

//   const [eventTitle, setEventTitle] = useState(section?.time || "Event1");
//   const [planName, setPlanName] = useState(
//     section?.time ? `${section.time} Plan` : ""
//   );

//   // foodItems supports ALL meals in this section (Breakfast can have 2+ meals)
//   const [foodItems, setFoodItems] = useState([emptyFoodItem]);

//   // Create a variable to hold the updated data
//   const [updatedExtractedData, setUpdatedExtractedData] = useState(null);

//   // When section changes, rebuild foodItems from *all* section.meals
//   useEffect(() => {
//     if (!section?.meals || section.meals.length === 0) {
//       setFoodItems([emptyFoodItem]);
//       setEventTitle(section?.time || "Event1");
//       setPlanName(section?.time ? `${section.time} Plan` : "");
//       return;
//     }

//     const items = [];

//     section.meals.forEach((meal) => {
//       // each "meal" in section.meals has foodItems[]
//       (meal.foodItems || []).forEach((foodItem) => {
//         const { quantityValue, quantityUnit } = parseQuantityDetail(
//           foodItem.details?.[0]
//         );

//         const { value: caloriesValue, unit: caloriesUnit } = parseValueUnit(
//           foodItem.details?.[1]
//         );

//         const proteinStr =
//           foodItem.details?.[2]?.split(":")[1]?.trim() || ""; // "3g"
//         const { value: proteinValue, unit: proteinUnit } =
//           parseValueUnit(proteinStr);

//         const carbsStr =
//           foodItem.details?.[3]?.split(":")[1]?.trim() || ""; // "10g"
//         const { value: carbsValue, unit: carbsUnit } =
//           parseValueUnit(carbsStr);

//         const fatStr =
//           foodItem.details?.[4]?.split(":")[1]?.trim() || ""; // "5g"
//         const { value: fatValue, unit: fatUnit } = parseValueUnit(fatStr);

//         items.push({
//           name: foodItem.name || "",
//           quantityValue,
//           quantityUnit,
//           caloriesValue,
//           caloriesUnit,
//           proteinValue,
//           proteinUnit,
//           carbsValue,
//           carbsUnit,
//           fatValue,
//           fatUnit,
//         });
//       });
//     });

//     setFoodItems(items.length ? items : [emptyFoodItem]);
//     setEventTitle(section?.time || "Event1");
//     setPlanName(section?.time ? `${section.time} Plan` : "");
//   }, [section]);

//   const handleAddItem = () => {
//     setFoodItems((prev) => [...prev, { ...emptyFoodItem }]);
//   };

//   const updateFoodItem = (index, field, value) => {
//     const updatedItems = [...foodItems];
//     updatedItems[index] = {
//       ...updatedItems[index],
//       [field]: value,
//     };
//     setFoodItems(updatedItems);
//   };

//   const sanitizeUnitInput = (value) => {
//     // Remove all digits 0–9
//     return value.replace(/[0-9]/g, "");
//   };

//   const handleSave = () => {
//     if (!dayName) {
//       console.error("Day name is missing, cannot save data.");
//       return;
//     }

//     let updatedData = { result: {} };

//     if (!updatedData.result[dayName]) {
//       updatedData.result[dayName] = { meals: [], totals: dayTotals || {} };
//     }

//     const mealTime = section?.time;
//     let mealIndex = -1;

//     if (updatedData.result[dayName].meals && mealTime) {
//       mealIndex = updatedData.result[dayName].meals.findIndex(
//         (meal) => meal.time === mealTime
//       );
//     }

//     // Build a single meal for this time, with ALL items from the popup
//     const updatedMealData = {
//       time: mealTime || section?.time || "",
//       timeRange: section?.timeRange || "",
//       items: foodItems.map((item) => {
//         const portionStr = `${item.quantityValue} ${item.quantityUnit}`.trim();
//         const caloriesStr =
//           item.caloriesValue || item.caloriesUnit
//             ? `${item.caloriesValue}${item.caloriesUnit || ""}`.trim()
//             : "";
//         const proteinStr =
//           item.proteinValue || item.proteinUnit
//             ? `Protein: ${item.proteinValue}${item.proteinUnit || ""}`.trim()
//             : "";
//         const carbsStr =
//           item.carbsValue || item.carbsUnit
//             ? `Carbs: ${item.carbsValue}${item.carbsUnit || ""}`.trim()
//             : "";
//         const fatStr =
//           item.fatValue || item.fatUnit
//             ? `Fat: ${item.fatValue}${item.fatUnit || ""}`.trim()
//             : "";

//         return {
//           name: item.name,
//           portion: portionStr, // "1.0 bowl"
//           calories_kcal: parseFloat(item.caloriesValue) || 0,
//           protein: parseFloat(item.proteinValue) || 0,
//           carbs: parseFloat(item.carbsValue) || 0,
//           fat: parseFloat(item.fatValue) || 0,
//           details: [portionStr, caloriesStr, proteinStr, carbsStr, fatStr],
//         };
//       }),
//     };

//     if (mealIndex !== -1) {
//       updatedData.result[dayName].meals[mealIndex] = updatedMealData;
//     } else if (mealTime) {
//       if (!updatedData.result[dayName].meals) {
//         updatedData.result[dayName].meals = [];
//       }
//       updatedData.result[dayName].meals.push(updatedMealData);
//     }

//     // Recalculate totals for just this day block (parent will re-merge)
//     if (updatedData.result[dayName].meals) {
//       const totals = {
//         calories_kcal: 0,
//         protein: 0,
//         carbs: 0,
//         fat: 0,
//       };

//       updatedData.result[dayName].meals.forEach((meal) => {
//         meal.items.forEach((item) => {
//           totals.calories_kcal += parseFloat(item.calories_kcal) || 0;
//           totals.protein += parseFloat(item.protein) || 0;
//           totals.carbs += parseFloat(item.carbs) || 0;
//           totals.fat += parseFloat(item.fat) || 0;
//         });
//       });

//       updatedData.result[dayName].totals = totals;
//     }

//     setUpdatedExtractedData(updatedData);

//     try {
//       if (onSave) {
//         onSave(updatedData);
//       }
//       onClose();
//     } catch (error) {
//       console.error("Failed to save data:", error);
//     }
//   };

//   return (
//     <>
//       <Modal
//         open={open}
//         onClose={onClose}
//         center
//         focusTrapped
//         closeOnOverlayClick
//         showCloseIcon={false}
//       >
//         {/* OUTER WRAPPER: fixed height + column => header fixed */}
//         <div className="max-h-[80vh] flex flex-col">

//           {/* 🔹 FIXED HEADER */}
//           <div className="rounded-[10px] px-2">
//             <div className="flex justify-between">
//               <div className="flex flex-col gap-2.5 px-[9px] py-[5px]">
//                 <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                   {day?.day || "Day 1"}
//                 </span>
//                 <span className="text-[#252525] text-[25px] font-semibold leading-[110%] tracking-[-0.5px]">
//                   {eventTitle}
//                 </span>
//               </div>

//               <div className="flex gap-[13px] items-center pr-2">
//                 <button
//                   className="bg-[#308BF9] rounded-[10px] px-5 py-[15px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px]"
//                   onClick={handleSave}
//                 >
//                   Save
//                 </button>
//                 <PiDotsThreeOutlineVerticalFill />
//               </div>
//             </div>
//           </div>

//           {/* 🔹 SCROLLABLE BODY */}
//           <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 hide-scrollbar">
//             <div className="rounded-[10px]">
//               <div className="flex gap-5 items-end mt-2.5">
//                 {/* Name of the event */}
//                 <div className="relative flex-1">
//                   <input
//                     type="text"
//                     id="floating_outlined"
//                     className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                     placeholder=" "
//                     value={planName}
//                     onChange={(e) => setPlanName(e.target.value)}
//                   />
//                   <label
//                     htmlFor="floating_outlined"
//                     className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
//                   >
//                     Name of the event
//                   </label>
//                 </div>
//               </div>

//               {/* Food Items Section */}
//               <div className="flex flex-col gap-5 mt-4">
//                 <span className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">
//                   Food Items
//                 </span>
//                 <div className="w-full border-b border-[#E1E6ED]"></div>
//               </div>

//               {/* Dynamically render food items */}
//               {foodItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="pl-5 h-full border-l border-[#E1E6ED] mt-4"
//                 >
//                   <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
//                     Item {index + 1}
//                   </span>
//                   <div className="pl-[13px] h-full border-l border-[#E1E6ED]">
//                     <div className="flex flex-col gap-[20px]">
//                       {/* Goal Title */}
//                       <div className="relative flex-1">
//                         <input
//                           id={`goalTitle-${index}`}
//                           type="text"
//                           placeholder=" "
//                           className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//                           value={item.name}
//                           onChange={(e) =>
//                             updateFoodItem(index, "name", e.target.value)
//                           }
//                         />
//                         <label
//                           htmlFor={`goalTitle-${index}`}
//                           className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//                         >
//                           Goal Title
//                         </label>
//                       </div>

//                       {/* Quantity: value + unit */}
//                       <div className="flex gap-2 flex-1">
//                         {/* Quantity Value */}
//                         <div className="relative flex-1">
//                           <input
//                             id={`quantity-value-${index}`}
//                             type="text"
//                             placeholder=" "
//                             className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//                             value={item.quantityValue}
//                             onChange={(e) =>
//                               updateFoodItem(
//                                 index,
//                                 "quantityValue",
//                                 e.target.value
//                               )
//                             }
//                           />
//                           <label
//                             htmlFor={`quantity-value-${index}`}
//                             className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//                           >
//                             Quantity
//                           </label>
//                         </div>

//                         {/* Quantity Unit */}
//                         <div className="relative w-[120px]">
//                           <input
//                             id={`quantity-unit-${index}`}
//                             type="text"
//                             placeholder=" "
//                             className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//                             value={item.quantityUnit}
//                             onChange={(e) =>
//                               updateFoodItem(
//                                 index,
//                                 "quantityUnit",
//                                 sanitizeUnitInput(e.target.value)
//                               )
//                             }
//                           />
//                           <label
//                             htmlFor={`quantity-unit-${index}`}
//                             className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//                           >
//                             Unit
//                           </label>
//                         </div>
//                       </div>

//                       {/* Nutrition Info */}
//                       <div className="flex flex-col gap-3">
//                         {/* Calories (kcal) */}
//                         <div className="flex gap-[7px]">
//                           <div className="relative flex-1">
//                             <input
//                               id={`calories-${index}`}
//                               type="text"
//                               placeholder=" "
//                               className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//                               value={item.caloriesValue}
//                               onChange={(e) =>
//                                 updateFoodItem(
//                                   index,
//                                   "caloriesValue",
//                                   e.target.value
//                                 )
//                               }
//                             />
//                             <label
//                               htmlFor={`calories-${index}`}
//                               className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//                             >
//                               Calories
//                             </label>
//                           </div>

//                           <div className="relative w-[90px]">
//                             <input
//                               type="text"
//                               placeholder=" "
//                               className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border border-[#E1E6ED] rounded-[8px] placeholder-transparent focus:border-blue-600"
//                               value={item.caloriesUnit}
//                               onChange={(e) =>
//                                 updateFoodItem(
//                                   index,
//                                   "caloriesUnit",
//                                   sanitizeUnitInput(e.target.value)
//                                 )
//                               }
//                             />
//                             <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
//                               Unit
//                             </label>
//                           </div>
//                         </div>

//                         {/* Protein, Fat, Carbs */}
//                         <div className="flex gap-2">
//                           {/* Protein (g) */}
//                           <div className="flex flex-col">
//                             <div className="flex gap-2">
//                               <div className="relative flex-1 max-w-[90px]">
//                                 <input
//                                   type="text"
//                                   placeholder=" "
//                                   className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border  rounded-[8px] placeholder-transparent"
//                                   value={item.proteinValue}
//                                   onChange={(e) =>
//                                     updateFoodItem(
//                                       index,
//                                       "proteinValue",
//                                       e.target.value
//                                     )
//                                   }
//                                 />
//                                 <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#252525] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
//                                   Protein
//                                 </label>
//                               </div>
//                               <div className="relative max-w-[70px]">
//                                 <input
//                                   type="text"
//                                   placeholder=" "
//                                   className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border  rounded-[8px] placeholder-transparent"
//                                   value={item.proteinUnit}
//                                   onChange={(e) =>
//                                     updateFoodItem(
//                                       index,
//                                       "proteinUnit",
//                                       sanitizeUnitInput(e.target.value)
//                                     )
//                                   }
//                                 />
//                                 <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
//                                   Unit
//                                 </label>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Fat (g) */}
//                           <div className="flex flex-col">
//                             <div className="flex gap-2">
//                               <div className="relative flex-1 max-w-[90px]">
//                                 <input
//                                   type="text"
//                                   placeholder=" "
//                                   className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border rounded-[8px] placeholder-transparent"
//                                   value={item.fatValue}
//                                   onChange={(e) =>
//                                     updateFoodItem(
//                                       index,
//                                       "fatValue",
//                                       e.target.value
//                                     )
//                                   }
//                                 />
//                                 <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
//                                   Fat
//                                 </label>
//                               </div>
//                               <div className="relative max-w-[70px]">
//                                 <input
//                                   type="text"
//                                   placeholder=" "
//                                   className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border  rounded-[8px] placeholder-transparent"
//                                   value={item.fatUnit}
//                                   onChange={(e) =>
//                                     updateFoodItem(
//                                       index,
//                                       "fatUnit",
//                                       sanitizeUnitInput(e.target.value)
//                                     )
//                                   }
//                                 />
//                                 <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
//                                   Unit
//                                 </label>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Carbs (g) */}
//                           <div className="flex flex-col">
//                             <div className="flex gap-2">
//                               <div className="relative flex-1 max-w-[90px]">
//                                 <input
//                                   type="text"
//                                   placeholder=" "
//                                   className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border rounded-[8px] placeholder-transparent"
//                                   value={item.carbsValue}
//                                   onChange={(e) =>
//                                     updateFoodItem(
//                                       index,
//                                       "carbsValue",
//                                       e.target.value
//                                     )
//                                   }
//                                 />
//                                 <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
//                                   Carbs
//                                 </label>
//                               </div>
//                               <div className="relative max-w-[70px]">
//                                 <input
//                                   type="text"
//                                   placeholder=" "
//                                   className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border  rounded-[8px] placeholder-transparent"
//                                   value={item.carbsUnit}
//                                   onChange={(e) =>
//                                     updateFoodItem(
//                                       index,
//                                       "carbsUnit",
//                                       sanitizeUnitInput(e.target.value)
//                                     )
//                                   }
//                                 />
//                                 <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
//                                   Unit
//                                 </label>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={handleAddItem}
//                 className="mt-2.5 py-[15px] px-[7px] text-[#308BF9] font-semibold 
//                leading-normal tracking-[-0.24px] text-[12px] cursor-pointer
//                bg-transparent border-none outline-none"
//               >
//                 Add Alternative Item
//               </button>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

// Split "1.0 bowl" → { quantityValue: "1.0", quantityUnit: "bowl" }
const parseQuantityDetail = (detail) => {
  if (!detail) return { quantityValue: "", quantityUnit: "" };

  const parts = detail.trim().split(" ");
  const quantityValue = parts[0] || "";
  const quantityUnit = parts.slice(1).join(" ") || "";

  return { quantityValue, quantityUnit };
};

// Split "80kcal" / "3g" / "10 g" → { value: "80", unit: "kcal" }
const parseValueUnit = (str) => {
  if (!str) return { value: "", unit: "" };

  const trimmed = str.trim();
  const match = trimmed.match(/^([\d.]+)\s*(.*)$/); // number + optional unit
  if (!match) {
    return { value: trimmed, unit: "" };
  }
  return { value: match[1] || "", unit: match[2] || "" };
};

// default empty item
const emptyFoodItem = {
  name: "",
  quantityValue: "",
  quantityUnit: "",
  caloriesValue: "",
  caloriesUnit: "kcal",
  proteinValue: "",
  proteinUnit: "g",
  carbsValue: "",
  carbsUnit: "g",
  fatValue: "",
  fatUnit: "g",
};

export default function DietEvent({ open, onClose, selectedMeal, onSave }) {
  console.log("selectedMeal:-", selectedMeal);

  // selectedMeal shape:
  // {
  //   dayName: "tuesday",
  //   dayLabel: "Day 1",
  //   fullDate: "2025-12-02T00:00:00.000Z",
  //   time: "Lunch",
  //   timeRange: "02:00 PM",
  //   foodsCount: "1 food added",
  //   meals: [...]
  // }

  const dayName = (selectedMeal?.dayName || "").toLowerCase();
  const dayLabel = selectedMeal?.dayLabel || "Day 1";

  const [eventTitle, setEventTitle] = useState("Event1");
  const [planName, setPlanName] = useState("");
  const [foodItems, setFoodItems] = useState([emptyFoodItem]);
  const [updatedExtractedData, setUpdatedExtractedData] = useState(null);

  // When selectedMeal changes, rebuild foodItems from selectedMeal.meals
  useEffect(() => {
    if (!selectedMeal) {
      setFoodItems([emptyFoodItem]);
      setEventTitle("Event1");
      setPlanName("");
      return;
    }

    const mealsArray = selectedMeal.meals || [];
    if (!mealsArray.length) {
      setFoodItems([emptyFoodItem]);
      setEventTitle(selectedMeal.time || "Event1");
      setPlanName(selectedMeal.time ? `${selectedMeal.time} Plan` : "");
      return;
    }

    const items = [];

    mealsArray.forEach((meal) => {
      (meal.foodItems || []).forEach((foodItem) => {
        const { quantityValue, quantityUnit } = parseQuantityDetail(
          foodItem.details?.[0]
        );

        const { value: caloriesValue, unit: caloriesUnit } = parseValueUnit(
          foodItem.details?.[1]
        );

        const proteinStr =
          foodItem.details?.[2]?.split(":")[1]?.trim() || ""; // "20g"
        const { value: proteinValue, unit: proteinUnit } =
          parseValueUnit(proteinStr);

        const carbsStr =
          foodItem.details?.[3]?.split(":")[1]?.trim() || ""; // "50g"
        const { value: carbsValue, unit: carbsUnit } =
          parseValueUnit(carbsStr);

        const fatStr =
          foodItem.details?.[4]?.split(":")[1]?.trim() || ""; // "15g"
        const { value: fatValue, unit: fatUnit } = parseValueUnit(fatStr);

        items.push({
          name: foodItem.name || "",
          quantityValue,
          quantityUnit,
          caloriesValue,
          caloriesUnit,
          proteinValue,
          proteinUnit,
          carbsValue,
          carbsUnit,
          fatValue,
          fatUnit,
        });
      });
    });

    setFoodItems(items.length ? items : [emptyFoodItem]);
    setEventTitle(selectedMeal.time || "Event1");
    setPlanName(selectedMeal.time ? `${selectedMeal.time} Plan` : "");
  }, [selectedMeal]);

  const handleAddItem = () => {
    setFoodItems((prev) => [...prev, { ...emptyFoodItem }]);
  };

  const updateFoodItem = (index, field, value) => {
    const updatedItems = [...foodItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };
    setFoodItems(updatedItems);
  };

  const sanitizeUnitInput = (value) => {
    // Remove all digits 0–9
    return value.replace(/[0-9]/g, "");
  };

  // Build RAW STRUCTURED DATA like extractedData
  const handleSave = () => {
    if (!dayName) {
      console.error("Day name is missing, cannot save data.");
      return;
    }

    // 1️⃣ Build items array in RAW format
    const items = foodItems.map((item) => {
      const portionStr = `${item.quantityValue} ${item.quantityUnit}`.trim();

      return {
        name: item.name || "",
        portion: portionStr, // "1.0 bowl"
        calories_kcal: parseFloat(item.caloriesValue) || 0,
        protein: parseFloat(item.proteinValue) || 0,
        carbs: parseFloat(item.carbsValue) || 0,
        fat: parseFloat(item.fatValue) || 0,
      };
    });

    // 2️⃣ Build meal time label like: "Lunch at 02:00 PM"
    const mealLabel =
      selectedMeal?.time && selectedMeal?.timeRange
        ? `${selectedMeal.time} at ${selectedMeal.timeRange}`
        : selectedMeal?.time || "";

    // 3️⃣ Calculate totals for this meal
    const totals = items.reduce(
      (acc, cur) => {
        acc.calories_kcal += cur.calories_kcal || 0;
        acc.protein += cur.protein || 0;
        acc.carbs += cur.carbs || 0;
        acc.fat += cur.fat || 0;
        return acc;
      },
      { calories_kcal: 0, protein: 0, carbs: 0, fat: 0 }
    );

    // 4️⃣ Build RAW day block
    const dayBlock = {
      meals: [
        {
          time: mealLabel, // e.g. "Lunch at 02:00 PM"
          items,
          totals, // meal totals
        },
      ],
      totals,
    };

    // 5️⃣ Final RAW payload with .result (for parent to merge)
    const rawPayload = {
      _notes: {
        illegible: [],
        omissions: [],
        warnings: [],
      },
      result: {
        [dayName]: dayBlock,
      },
    };

    setUpdatedExtractedData(rawPayload);

    try {
      if (onSave) {
        onSave(rawPayload);
      }
      onClose();
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

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
        {/* OUTER WRAPPER: fixed height + column => header fixed */}
        <div className="max-h-[80vh] flex flex-col">
          {/* 🔹 FIXED HEADER */}
          <div className="rounded-[10px] px-2">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2.5 px-[9px] py-[5px]">
                <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                  {dayLabel}
                </span>
                <span className="text-[#252525] text-[25px] font-semibold leading-[110%] tracking-[-0.5px]">
                  {eventTitle}
                </span>
              </div>

              <div className="flex gap-[13px] items-center pr-2">
                <button
                  className="bg-[#308BF9] rounded-[10px] px-5 py-[15px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px]"
                  onClick={handleSave}
                >
                  Save
                </button>
                <PiDotsThreeOutlineVerticalFill />
              </div>
            </div>
          </div>

          {/* 🔹 SCROLLABLE BODY */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 hide-scrollbar">
            <div className="rounded-[10px]">
              <div className="flex gap-5 items-end mt-2.5">
                {/* Name of the event */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                  >
                    Name of the event
                  </label>
                </div>
              </div>

              {/* Food Items Section */}
              <div className="flex flex-col gap-5 mt-4">
                <span className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">
                  Food Items
                </span>
                <div className="w-full border-b border-[#E1E6ED]"></div>
              </div>

              {/* Dynamically render food items */}
              {foodItems.map((item, index) => (
                <div
                  key={index}
                  className="pl-5 h-full border-l border-[#E1E6ED] mt-4"
                >
                  <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
                    Item {index + 1}
                  </span>
                  <div className="pl-[13px] h-full border-l border-[#E1E6ED]">
                    <div className="flex flex-col gap-[20px]">
                      {/* Goal Title */}
                      <div className="relative flex-1">
                        <input
                          id={`goalTitle-${index}`}
                          type="text"
                          placeholder=" "
                          className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                          value={item.name}
                          onChange={(e) =>
                            updateFoodItem(index, "name", e.target.value)
                          }
                        />
                        <label
                          htmlFor={`goalTitle-${index}`}
                          className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                        >
                          Goal Title
                        </label>
                      </div>

                      {/* Quantity: value + unit */}
                      <div className="flex gap-2 flex-1">
                        {/* Quantity Value */}
                        <div className="relative flex-1">
                          <input
                            id={`quantity-value-${index}`}
                            type="text"
                            placeholder=" "
                            className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                            value={item.quantityValue}
                            onChange={(e) =>
                              updateFoodItem(
                                index,
                                "quantityValue",
                                e.target.value
                              )
                            }
                          />
                          <label
                            htmlFor={`quantity-value-${index}`}
                            className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                          >
                            Quantity
                          </label>
                        </div>

                        {/* Quantity Unit */}
                        <div className="relative w-[120px]">
                          <input
                            id={`quantity-unit-${index}`}
                            type="text"
                            placeholder=" "
                            className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                            value={item.quantityUnit}
                            onChange={(e) =>
                              updateFoodItem(
                                index,
                                "quantityUnit",
                                sanitizeUnitInput(e.target.value)
                              )
                            }
                          />
                          <label
                            htmlFor={`quantity-unit-${index}`}
                            className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                          >
                            Unit
                          </label>
                        </div>
                      </div>

                      {/* Nutrition Info */}
                      <div className="flex flex-col gap-3">
                        {/* Calories (kcal) */}
                        <div className="flex gap-[7px]">
                          <div className="relative flex-1">
                            <input
                              id={`calories-${index}`}
                              type="text"
                              placeholder=" "
                              className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                              value={item.caloriesValue}
                              onChange={(e) =>
                                updateFoodItem(
                                  index,
                                  "caloriesValue",
                                  e.target.value
                                )
                              }
                            />
                            <label
                              htmlFor={`calories-${index}`}
                              className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                            >
                              Calories
                            </label>
                          </div>

                          <div className="relative w-[90px]">
                            <input
                              type="text"
                              placeholder=" "
                              className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border border-[#E1E6ED] rounded-[8px] placeholder-transparent focus:border-blue-600"
                              value={item.caloriesUnit}
                              onChange={(e) =>
                                updateFoodItem(
                                  index,
                                  "caloriesUnit",
                                  sanitizeUnitInput(e.target.value)
                                )
                              }
                            />
                            <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                              Unit
                            </label>
                          </div>
                        </div>

                        {/* Protein, Fat, Carbs */}
                        <div className="flex gap-2">
                          {/* Protein (g) */}
                          <div className="flex flex-col">
                            <div className="flex gap-2">
                              <div className="relative flex-1 max-w-[90px]">
                                <input
                                  type="text"
                                  placeholder=" "
                                  className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border  rounded-[8px] placeholder-transparent"
                                  value={item.proteinValue}
                                  onChange={(e) =>
                                    updateFoodItem(
                                      index,
                                      "proteinValue",
                                      e.target.value
                                    )
                                  }
                                />
                                <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#252525] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                                  Protein
                                </label>
                              </div>
                              <div className="relative max-w-[70px]">
                                <input
                                  type="text"
                                  placeholder=" "
                                  className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border  rounded-[8px] placeholder-transparent"
                                  value={item.proteinUnit}
                                  onChange={(e) =>
                                    updateFoodItem(
                                      index,
                                      "proteinUnit",
                                      sanitizeUnitInput(e.target.value)
                                    )
                                  }
                                />
                                <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                                  Unit
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Fat (g) */}
                          <div className="flex flex-col">
                            <div className="flex gap-2">
                              <div className="relative flex-1 max-w-[90px]">
                                <input
                                  type="text"
                                  placeholder=" "
                                  className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border rounded-[8px] placeholder-transparent"
                                  value={item.fatValue}
                                  onChange={(e) =>
                                    updateFoodItem(
                                      index,
                                      "fatValue",
                                      e.target.value
                                    )
                                  }
                                />
                                <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                                  Fat
                                </label>
                              </div>
                              <div className="relative max-w-[70px]">
                                <input
                                  type="text"
                                  placeholder=" "
                                  className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border  rounded-[8px] placeholder-transparent"
                                  value={item.fatUnit}
                                  onChange={(e) =>
                                    updateFoodItem(
                                      index,
                                      "fatUnit",
                                      sanitizeUnitInput(e.target.value)
                                    )
                                  }
                                />
                                <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                                  Unit
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Carbs (g) */}
                          <div className="flex flex-col">
                            <div className="flex gap-2">
                              <div className="relative flex-1 max-w-[90px]">
                                <input
                                  type="text"
                                  placeholder=" "
                                  className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border rounded-[8px] placeholder-transparent"
                                  value={item.carbsValue}
                                  onChange={(e) =>
                                    updateFoodItem(
                                      index,
                                      "carbsValue",
                                      e.target.value
                                    )
                                  }
                                />
                                <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                                  Carbs
                                </label>
                              </div>
                              <div className="relative max-w-[70px]">
                                <input
                                  type="text"
                                  placeholder=" "
                                  className="peer block w-full py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border  rounded-[8px] placeholder-transparent"
                                  value={item.carbsUnit}
                                  onChange={(e) =>
                                    updateFoodItem(
                                      index,
                                      "carbsUnit",
                                      sanitizeUnitInput(e.target.value)
                                    )
                                  }
                                />
                                <label className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]">
                                  Unit
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddItem}
                className="mt-2.5 py-[15px] px-[7px] text-[#308BF9] font-semibold 
               leading-normal tracking-[-0.24px] text-[12px] cursor-pointer
               bg-transparent border-none outline-none"
              >
                Add Alternative Item
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}





// "use client"
// import { useState } from "react";
// import { Modal } from "react-responsive-modal";
// import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import Image from "next/image";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// export default function DietEvent({ open, onClose, selectedMeal }) {
//     console.log("selectedMeal806:-", selectedMeal);
//   // Extract data from selectedMeal
//   const section = selectedMeal?.section;
//   console.log("section808:-", section);
//   const day = selectedMeal?.day;
//   console.log("day809:-", day);
//   const dayTotals = selectedMeal?.dayTotals;
//   console.log("dayTotals811:-", dayTotals);
//   const dayName = selectedMeal?.dayName;
//   console.log("dayName813:-", dayName);

//   // Use the data to pre-fill the form
//   const eventTitle = section?.time || "Event1";
//   console.log("eventTitle818:-", eventTitle);
//   const planName = section?.time ? `${section.time} Plan` : "";
//   console.log("planName820:-", planName);

//     const [currentStatItem1, setCurrentStatItem1] = useState(
//     section?.meals?.[0]?.foodItems?.[0]?.details?.[0] || ""
//   );

//   const [items, setItems] = useState([1]);
// console.log("items829:-", items);
//    const handleAddItem = () => {
//     setItems([...items, items.length + 1]);
//   };

//   return (
//     <>
//       <Modal
//         open={open}
//         onClose={onClose}
//         center
//         focusTrapped
//         closeOnOverlayClick
//         showCloseIcon={false}
//       >
//         <div className="rounded-[10px]">
//           <div className="flex justify-between">
//             <div className="flex flex-col gap-2.5 px-[9px] py-[5px]">
//               <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//                 {day?.day || 'Day 1'}
//               </span>
//               <span className="text-[#252525] text-[25px] font-semibold leading-[110%] tracking-[-0.5px]">
//                 {eventTitle}
//               </span>
//             </div>

//             <div className="flex gap-[13px] items-center">
//               <button className="bg-[#308BF9] rounded-[10px] px-5 py-[15px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px]"

//               >Save</button>
//               <PiDotsThreeOutlineVerticalFill />
//             </div>
//           </div>

//           <div className="flex gap-5 items-end">
//             {/* Name of the event */}
//             <div className="relative flex-1">
//               <input 
//                 type="text" 
//                 id="floating_outlined"
//                 className="block py-[15px] pl-[19px] pr-[13px] w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//                 placeholder=" " 
//                 defaultValue={planName}
//               />
//               <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">Name of the event</label>
//             </div>

//             {/* Duration */}
//             {/* <div className="flex-1">
//               <div className="flex gap-2 mt-2">

//                 <div className="relative flex-1">
//                   <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
//                     From
//                   </span>
//                   <div className="flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white">
//                     <input
//                       type="text"
//                       placeholder="DD/MM/YYYY"
//                       className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
//                     />
//                     <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
//                   </div>
//                 </div>


//                 <div className="relative flex-1">
//                   <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
//                     To
//                   </span>
//                   <div className="flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white">
//                     <input
//                       type="text"
//                       placeholder="DD/MM/YYYY"
//                       className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
//                     />
//                     <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>

//           <div className="flex flex-col gap-5">
//             <span className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">Food Items</span>
//             <div className="w-full border-b border-[#E1E6ED]"></div>
//           </div>

//           <div className="">
//             <span className="flex justify-start text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">Option 1</span>
//               {items.map((item, index) => (
//             <div key={index} className="pl-5 h-full border-l border-[#E1E6ED]">
//               <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Item1</span>
//               <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

//                 <div className="flex flex-col gap-[37px]">
//                   <div className="flex gap-[7px]">
//                     {/* Goal Title */}
//                     <div className="relative flex-1">
//                       <input
//                         id="goalTitle"
//                         type="text"
//                         placeholder=" "
//                         className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//                         defaultValue={section?.meals[0]?.foodItems[0]?.name || ""}
//                       />
//                       <label
//                         htmlFor="goalTitle"
//                         className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//                       >
//                         Goal Title
//                       </label>
//                     </div>

//                     <div className="flex gap-10">
//                       {/* Current Stat (static) */}
//                       {/* <div className="flex flex-col">
//                         <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                           <input
//                             type="text"
//                             placeholder="Current Stat"
//                             className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                             defaultValue={section?.meals[0]?.foodItems[0]?.details[0] || ""}
//                           />
//                           <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>

//                           <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
//                             kg
//                           </div>
//                         </div>


//                         <div className="flex gap-[5px] items-center mt-1">
//                           <Image
//                             src="/icons/hugeicons_information-circle-redd.png"
//                             alt="info"
//                             width={15}
//                             height={15}
//                           />
//                           <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                             Enter current stat
//                           </span>
//                         </div>
//                       </div> */}


// <div className="relative flex-1">
//   <input
//     id="quantity"
//     type="text"
//     placeholder=" "
//     className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//     defaultValue={section?.meals[0]?.foodItems[0]?.details[0] || ""}  
//   />
//   <label
//     htmlFor="quantity"
//     className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//   >
//     Quantity
//   </label>
// </div>




// {/* <div className="flex gap-3">


//   <div className="relative flex-1">
//     <input
//       id="quantity"
//       type="number"
//       placeholder=" "
//       className="peer block w-full py-[15px] px-[19px] text-[14px] text-[#252525] 
//                  bg-white border border-[#E1E6ED] rounded-[8px] outline-none 
//                  placeholder-transparent focus:border-blue-600"
//        defaultValue={section?.meals[0]?.totals?.calories_kcal ? `${section.meals[0].totals.calories_kcal}kcal` : ""}
//     />

//     <label
//       htmlFor="quantity"
//       className="pointer-events-none absolute left-[19px] bg-white px-1 text-[14px] 
//                  text-[#9CA3AF] transition-all duration-200 ease-out
//                  top-1/2 -translate-y-1/2
//                  peer-placeholder-shown:top-1/2
//                  peer-placeholder-shown:-translate-y-1/2
//                  peer-placeholder-shown:scale-100
//                  peer-focus:top-2
//                  peer-focus:-translate-y-4
//                  peer-focus:scale-75
//                  peer-focus:text-blue-600
//                  peer-[&:not(:placeholder-shown)]:top-2
//                  peer-[&:not(:placeholder-shown)]:-translate-y-4
//                  peer-[&:not(:placeholder-shown)]:scale-75
//                  peer-[&:not(:placeholder-shown)]:text-[#535359]"
//     >
// {section?.meals[0]?.totals?.calories_kcal ? `${section.meals[0].totals.calories_kcal}kcal` : ""}
//     </label>
//   </div>


//   <div className="relative flex-1">
//     <input
//       id="gram"
//       type="number"
//       placeholder=" "
//       className="peer block w-full py-[15px] px-[19px] text-[14px] text-[#252525] 
//                  bg-white border border-[#E1E6ED] rounded-[8px] outline-none 
//                  placeholder-transparent focus:border-blue-600"
//       defaultValue=""
//     />

//     <label
//       htmlFor="gram"
//       className="pointer-events-none absolute left-[19px] bg-white px-1 text-[14px] 
//                  text-[#9CA3AF] transition-all duration-200 ease-out
//                  top-1/2 -translate-y-1/2
//                  peer-placeholder-shown:top-1/2
//                  peer-placeholder-shown:-translate-y-1/2
//                  peer-placeholder-shown:scale-100
//                  peer-focus:top-2
//                  peer-focus:-translate-y-4
//                  peer-focus:scale-75
//                  peer-focus:text-blue-600
//                  peer-[&:not(:placeholder-shown)]:top-2
//                  peer-[&:not(:placeholder-shown)]:-translate-y-4
//                  peer-[&:not(:placeholder-shown)]:scale-75
//                  peer-[&:not(:placeholder-shown)]:text-[#535359]"
//     >
//       Gram
//     </label>
//   </div>

// </div> */}




//                       {/* Target Stat (static) */}
//                       {/* <div className="flex flex-col">
//                         <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                           <input
//                             type="text"
//                             placeholder="Target Stat"
//                             className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                             defaultValue={section?.meals[0]?.foodItems[0]?.details[1] || ""}
//                           />
//                           <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>

//                           <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
//                             kg
//                           </div>
//                         </div>


//                         <div className="flex gap-[5px] items-center mt-1">
//                           <Image
//                             src="/icons/hugeicons_information-circle-redd.png"
//                             alt="info"
//                             width={15}
//                             height={15}
//                           />
//                           <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                             Enter target stat
//                           </span>
//                         </div>
//                       </div> */}
//                     </div>
//                   </div>

//                   <div className="flex gap-[7px]">
//                     {/* Goal Title */}
//                     <div className="relative flex-1">
//                       <input
//                         id="goalTitle"
//                         type="text"
//                         placeholder=" "
//                         className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//                          defaultValue={section?.meals[0]?.foodItems[0]?.details[1] || ""}
//                       />
//                       <label
//                         htmlFor="goalTitle"
//                         className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//                       >
//                         Calories
//                       </label>
//                     </div>

//                     <div className="flex gap-5">
//                       {/* Protein (g) */}
//                      <div className="flex flex-col">
//   <div className="relative flex-1">
//     <input
//       type="text"
//       placeholder=" " 
//       className="peer block w-full max-w-[90px] py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border border-[#DA5747] rounded-[8px] placeholder-transparent"
//       defaultValue={section?.meals[0]?.foodItems[0]?.details[2]?.split(":")[1]?.trim() || ""}
//     />
//     <label
//       className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//     >
//       Protein (g)
//     </label>
//   </div>
// </div>





//                                     <div className="flex flex-col">
//   <div className="relative flex-1">
//     <input
//       type="text"
//       placeholder=" " // Empty space is important!
//       className="peer block w-full max-w-[90px] py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border border-[#DA5747] rounded-[8px] placeholder-transparent"
//        defaultValue={section?.meals[0]?.foodItems[0]?.details[4]?.split(":")[1]?.trim() || ""}
//     />
//     <label
//       className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//     >
//       Fat (g)
//     </label>
//   </div>
// </div>


//                       {/* <div className="flex flex-col">
//                         <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                           <input
//                             type="text"
//                             placeholder="Fiber (g)"
//                             className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                           />
//                         </div>


//                         <div className="flex gap-[5px] items-center mt-1">
//                           <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                             Enter amount
//                           </span>
//                         </div>
//                       </div> */}







//                                     <div className="flex flex-col">
//   <div className="relative flex-1">
//     <input
//       type="text"
//       placeholder=" " // Empty space is important!
//       className="peer block w-full max-w-[90px] py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border border-[#DA5747] rounded-[8px] placeholder-transparent"
//        defaultValue={section?.meals[0]?.foodItems[0]?.details[3]?.split(":")[1]?.trim() || ""}
//     />
//     <label
//       className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//     >
//      Carbs (g)
//     </label>
//   </div>
// </div>

//                     </div>
//                   </div>

//                   {/* <div className="border border-[#E1E6ED] rounded-[8px]">
//                     <input type="text" id="floating_outlined"
//                       className="block pt-2.5 pb-11 pl-[19px]  w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0  peer" placeholder="Type description" />
//                   </div> */}
//                 </div>
//                 <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px] cursor-pointer"
//                    onClick={handleAddItem}
//                 >Add Alternative Item</div>
//               </div>
//             </div>
//    ))}


//           </div>
//         </div>
//       </Modal>
//     </>
//   )
// }












{/* <div className="pl-5 h-full border-l border-[#E1E6ED]">
              <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Item2</span>
              <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

                <div className="flex flex-col gap-[37px]">
                  <div className="flex gap-[7px]">
                   
                    <div className="relative flex-1">
                      <input
                        id="goalTitle"
                        type="text"
                        placeholder=" "
                        className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                      />
                      <label
                        htmlFor="goalTitle"
                        className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                      >
                        Goal Title
                      </label>
                    </div>

                    <div className="flex gap-10">
                     
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Current Stat"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                          <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                       
                          <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                            kg
                          </div>
                        </div>

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

                     
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Target Stat"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                          <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                          
                          <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                            kg
                          </div>
                        </div>

                       
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
                 
                    <div className="relative flex-1">
                      <input
                        id="goalTitle"
                        type="text"
                        placeholder=" "
                        className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                      />
                      <label
                        htmlFor="goalTitle"
                        className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                      >
                        Calories
                      </label>
                    </div>

                    <div className="flex gap-5">
                     
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Protein (g)"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                        </div>

                      
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

                     
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Fat (g)"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                        </div>

                    
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

                    
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Fiber (g)"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                        </div>

                       
                        <div className="flex gap-[5px] items-center mt-1">
                          <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                            Enter amount
                          </span>
                        </div>
                      </div>

                    
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Carbs (g)"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                        </div>

                     
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
                <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px] cursor-pointer"
             
                >Add Alternative Item</div>
              </div>

              <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">(Item 2) Alternative 1</span>
              <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

                <div className="flex flex-col gap-[37px]">
                  <div className="flex gap-[7px]">
                  
                    <div className="relative flex-1">
                      <input
                        id="goalTitle"
                        type="text"
                        placeholder=" "
                        className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                      />
                      <label
                        htmlFor="goalTitle"
                        className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                      >
                        Goal Title
                      </label>
                    </div>

                    <div className="flex gap-10">
                    
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Current Stat"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                          <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                       
                          <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                            kg
                          </div>
                        </div>

               
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

              
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Target Stat"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                          <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
                    
                          <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
                            kg
                          </div>
                        </div>

                      
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
                
                    <div className="relative flex-1">
                      <input
                        id="goalTitle"
                        type="text"
                        placeholder=" "
                        className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                      />
                      <label
                        htmlFor="goalTitle"
                        className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                      >
                        Calories
                      </label>
                    </div>

                    <div className="flex gap-5">
                
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Protein (g)"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                        </div>

                  
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

                   
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Fat (g)"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                        </div>

                   
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

                 
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Fiber (g)"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                        </div>

                   
                        <div className="flex gap-[5px] items-center mt-1">
                          <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                            Enter amount
                          </span>
                        </div>
                      </div>

                    
                      <div className="flex flex-col">
                        <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
                          <input
                            type="text"
                            placeholder="Carbs (g)"
                            className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
                          />
                        </div>

                   
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
            </div> */}











// "use client"

// import { Modal } from "react-responsive-modal";
// import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import Image from "next/image";


// export default function DietEvent({ open, onClose, selectedMeal  }) {

//     return (
//         <>

//             <Modal
//                 open={open}
//                 onClose={onClose}
//                 center
//                 focusTrapped
//                 closeOnOverlayClick
//                 showCloseIcon={false}
//             >
//                 <div className="rounded-[10px]">
//                     <div className="flex justify-between">
//                         <div className="flex flex-col gap-2.5 px-[9px] py-[5px]">
//                             <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">Day 1</span>
//                             <span className="text-[#252525] text-[25px] font-semibold leading-[110%] tracking-[-0.5px]">Event1</span>
//                         </div>

//                         <div className="flex gap-[13px] items-center">
//                             <button className="bg-[#308BF9] rounded-[10px] px-5 py-[15px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px]">Save</button>
//                             <PiDotsThreeOutlineVerticalFill />
//                         </div>
//                     </div>

//                     <div className="flex gap-5 items-end">
//                         {/* Name of the plan */}
//                         <div className="relative flex-1 floating-input-container">
//                             <input type="text" id="floating_outlined"
//                                 className="floating-input" placeholder=" " />
//                             <label htmlFor="floating_outlined" className="floating-label">Name of the plan</label>
//                         </div>

//                         {/* Duration */}
//                         <div className="flex-1">

//                             <div className="flex gap-2 mt-2">
//                                 {/* From */}
//                                 <div className="relative flex-1">
//                                     <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
//                                         From
//                                     </span>
//                                     <div className="flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white">
//                                         <input
//                                             type="text"
//                                             placeholder="DD/MM/YYYY"
//                                             className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
//                                         />
//                                         <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
//                                     </div>
//                                 </div>

//                                 {/* To */}
//                                 <div className="relative flex-1">
//                                     <span className="absolute -top-2 left-4 bg-white px-[9px] text-[12px] font-medium text-[#535359]">
//                                         To
//                                     </span>
//                                     <div className="flex py-[15px] pl-[19px] pr-[13px] border border-[#E1E6ED] rounded-[8px] bg-white">
//                                         <input
//                                             type="text"
//                                             placeholder="DD/MM/YYYY"
//                                             className="w-full outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF]"
//                                         />
//                                         <Image src="/icons/hugeicons_calendar-03.svg" alt="calendar" width={20} height={20} />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex flex-col gap-5">
//                         <span className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">Food Items</span>
//                         <div className="w-full border-b border-[#E1E6ED]"></div>
//                     </div>


//                     <div className="">
//                         <span className="flex justify-start text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">Option 1</span>
//                         <div className="pl-5 h-full border-l border-[#E1E6ED]">
//                             <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Item1</span>
//                             <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

//                                 <div className="flex flex-col gap-[37px]">
//                                     <div className="flex gap-[7px]">
//                                         {/* Goal Title */}
//                                         <div className="relative flex-1 floating-input-container">
//                                             <input
//                                                 id="goalTitle"
//                                                 type="text"
//                                                 placeholder=" "
//                                                 className="floating-input"
//                                             />
//                                             <label
//                                                 htmlFor="goalTitle"
//                                                 className="floating-label"
//                                             >
//                                                 Goal Title
//                                             </label>
//                                         </div>

//                                         <div className="flex gap-10">
//                                             {/* Current Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Current Stat"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />
//                                                     <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
//                                                     {/* Fixed unit label (no dropdown) */}
//                                                     <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
//                                                         kg
//                                                     </div>
//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter current stat
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Target Stat"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />
//                                                     <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
//                                                     {/* Fixed unit label (no dropdown) */}
//                                                     <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
//                                                         kg
//                                                     </div>
//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter target stat
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="flex gap-[7px]">
//                                         {/* Goal Title */}
//                                         <div className="relative flex-1 floating-input-container">
//                                             <input
//                                                 id="calories"
//                                                 type="text"
//                                                 placeholder=" "
//                                                 className="floating-input"
//                                             />
//                                             <label
//                                                 htmlFor="calories"
//                                                 className="floating-label"
//                                             >
//                                                 Calories
//                                             </label>
//                                         </div>

//                                         <div className="flex gap-5">
//                                             {/* Current Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Protein (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Fat (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>


//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Fiber (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">

//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>



//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Carbs (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="border border-[#E1E6ED] rounded-[8px]">
//                                         <input type="text" id="description"
//                                             className="block pt-2.5 pb-11 pl-[19px]  w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0" placeholder="Type description" />
//                                     </div>
//                                 </div>
//                                 <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px]">Add Alternative Item</div>
//                             </div>


//                         </div>

//                         <div className="pl-5 h-full border-l border-[#E1E6ED]">
//                             <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Item2</span>
//                             <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

//                                 <div className="flex flex-col gap-[37px]">
//                                     <div className="flex gap-[7px]">
//                                         {/* Goal Title */}
//                                         <div className="relative flex-1 floating-input-container">
//                                             <input
//                                                 id="goalTitle2"
//                                                 type="text"
//                                                 placeholder=" "
//                                                 className="floating-input"
//                                             />
//                                             <label
//                                                 htmlFor="goalTitle2"
//                                                 className="floating-label"
//                                             >
//                                                 Goal Title
//                                             </label>
//                                         </div>

//                                         <div className="flex gap-10">
//                                             {/* Current Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Current Stat"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />
//                                                     <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
//                                                     {/* Fixed unit label (no dropdown) */}
//                                                     <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
//                                                         kg
//                                                     </div>
//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter current stat
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Target Stat"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />
//                                                     <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
//                                                     {/* Fixed unit label (no dropdown) */}
//                                                     <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
//                                                         kg
//                                                     </div>
//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter target stat
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="flex gap-[7px]">
//                                         {/* Goal Title */}
//                                         <div className="relative flex-1 floating-input-container">
//                                             <input
//                                                 id="calories2"
//                                                 type="text"
//                                                 placeholder=" "
//                                                 className="floating-input"
//                                             />
//                                             <label
//                                                 htmlFor="calories2"
//                                                 className="floating-label"
//                                             >
//                                                 Calories
//                                             </label>
//                                         </div>

//                                         <div className="flex gap-5">
//                                             {/* Current Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Protein (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Fat (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>


//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Fiber (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">

//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>



//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Carbs (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="border border-[#E1E6ED] rounded-[8px]">
//                                         <input type="text" id="description2"
//                                             className="block pt-2.5 pb-11 pl-[19px]  w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0" placeholder="Type description" />
//                                     </div>
//                                 </div>
//                                 <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px]">Add Alternative Item</div>
//                             </div>



//                             <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">(Item 2) Alternative 1</span>
//                             <div className="pl-[13px] h-full border-l border-[#E1E6ED]">

//                                 <div className="flex flex-col gap-[37px]">
//                                     <div className="flex gap-[7px]">
//                                         {/* Goal Title */}
//                                         <div className="relative flex-1 floating-input-container">
//                                             <input
//                                                 id="goalTitle3"
//                                                 type="text"
//                                                 placeholder=" "
//                                                 className="floating-input"
//                                             />
//                                             <label
//                                                 htmlFor="goalTitle3"
//                                                 className="floating-label"
//                                             >
//                                                 Goal Title
//                                             </label>
//                                         </div>

//                                         <div className="flex gap-10">
//                                             {/* Current Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Current Stat"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />
//                                                     <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
//                                                     {/* Fixed unit label (no dropdown) */}
//                                                     <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
//                                                         kg
//                                                     </div>
//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter current stat
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Target Stat"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />
//                                                     <div className="h-[20px] border-l border-[#E1E6ED] mx-3"></div>
//                                                     {/* Fixed unit label (no dropdown) */}
//                                                     <div className="text-[#252525] text-[12px] leading-[110%] tracking-[-0.24px]">
//                                                         kg
//                                                     </div>
//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter target stat
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="flex gap-[7px]">
//                                         {/* Goal Title */}
//                                         <div className="relative flex-1 floating-input-container">
//                                             <input
//                                                 id="calories3"
//                                                 type="text"
//                                                 placeholder=" "
//                                                 className="floating-input"
//                                             />
//                                             <label
//                                                 htmlFor="calories3"
//                                                 className="floating-label"
//                                             >
//                                                 Calories
//                                             </label>
//                                         </div>

//                                         <div className="flex gap-5">
//                                             {/* Current Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Protein (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Fat (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>


//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Fiber (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">

//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>



//                                             {/* Target Stat (static) */}
//                                             <div className="flex flex-col">
//                                                 <div className="flex items-center py-[15px] pl-[19px] pr-[15px] border border-[#DA5747] rounded-[8px] bg-white relative">
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Carbs (g)"
//                                                         className="w-full max-w-[90px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#A1A1A1]"
//                                                     />

//                                                 </div>

//                                                 {/* Error text */}
//                                                 <div className="flex gap-[5px] items-center mt-1">
//                                                     <Image
//                                                         src="/icons/hugeicons_information-circle-redd.png"
//                                                         alt="info"
//                                                         width={15}
//                                                         height={15}
//                                                     />
//                                                     <span className="text-[#DA5747] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
//                                                         Enter amount
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="border border-[#E1E6ED] rounded-[8px]">
//                                         <input type="text" id="description3"
//                                             className="block pt-2.5 pb-11 pl-[19px]  w-full text-[14px] text-[#252525] bg-white rounded-[8px] border border-[#E1E6ED] appearance-none focus:outline-none focus:ring-0" placeholder="Type description" />
//                                     </div>
//                                 </div>
//                                 <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px]">Add Alternative Item</div>
//                             </div>
//                         </div>
//                     </div>



//                 </div>
//             </Modal>
//         </>
//     )
// }