// "use client"
// import { useState } from "react";
// import { Modal } from "react-responsive-modal";
// import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import Image from "next/image";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// export default function DietEvent({ open, onClose, selectedMeal, onSave  }) {
//   // Extract data from selectedMeal
//   const section = selectedMeal?.section;
//   const day = selectedMeal?.day;
//   const dayTotals = selectedMeal?.dayTotals;
//   const dayName = selectedMeal?.dayName;

//   // Use the data to pre-fill the form
//   const eventTitle = section?.time || "Event1";
//   const planName = section?.time ? `${section.time} Plan` : "";

//     const [currentStatItem1, setCurrentStatItem1] = useState(
//     section?.meals?.[0]?.foodItems?.[0]?.details?.[0] || ""
//   );
//   console.log("currentStatItem122:-", currentStatItem1);



//   const [items, setItems] = useState([1]);
//    const handleAddItem = () => {
//     setItems([...items, items.length + 1]);
//   };

//   // Save function to update localStorage
// const handleSave = () => {
//   // Ensure dayName is obtained from selectedMeal or allDays
//   const dayName = selectedMeal?.dayName || ''; // Use selectedMeal.dayName or provide a fallback if undefined

//   if (!dayName) {
//     console.error("Day name is missing, cannot save data.");
//     return;
//   }

//   // Save the modified data to localStorage
//   const updatedMealData = { 
//     ...selectedMeal, 
//     section: {
//       ...selectedMeal.section,
//       meals: selectedMeal.section.meals.map(meal => {
//         return {
//           ...meal,
//           items: (meal.items || []).map(item => {
//             return {
//               ...item,
//               name: currentStatItem1 // Here the updated value is saved
//             };
//           })
//         };
//       })
//     }
//   };

//   // Get the current extracted data from localStorage
//   const storedData = JSON.parse(localStorage.getItem('extractedData')) || {};

//   // Update the extractedData with the updatedMealData for the specific day
//   storedData.result[dayName] = {
//     ...storedData.result[dayName],
//     meals: updatedMealData.section.meals,
//     totals: updatedMealData.section.totals // Ensure totals are updated
//   };

//   // Save the updated data back to localStorage
//   localStorage.setItem('extractedData', JSON.stringify(storedData));

//   // Trigger parent state update to reflect changes
//   setExtractedData(storedData); // Update the extractedData state to reflect the new data

//   console.log("Updated extractedData saved to localStorage:", storedData);

//   onSave(); // Call the onSave function passed as a prop (if any)

//   onClose(); // Close the modal after saving
// };



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
//               <button 
//                 className="bg-[#308BF9] rounded-[10px] px-5 py-[15px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px]"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
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
//                 onChange={(e) => setCurrentStatItem1(e.target.value)} // Update state when input changes
//               />
//               <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">Name of the event</label>
//             </div>

//             {/* Duration */} 
//           </div>

//           {/* Food Items Section */}
//           <div className="flex flex-col gap-5">
//             <span className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">Food Items</span>
//             <div className="w-full border-b border-[#E1E6ED]"></div>
//           </div>

//           {/* Dynamically render items */}
//           {items.map((item, index) => (
//             <div key={index} className="pl-5 h-full border-l border-[#E1E6ED]">
//               <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Item1</span>
//               <div className="pl-[13px] h-full border-l border-[#E1E6ED]">
//                 <div className="flex flex-col gap-[37px]">
//                   {/* Goal Title */}
//                   <div className="relative flex-1">
//                     <input
//                       id="goalTitle"
//                       type="text"
//                       placeholder=" "
//                       className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
//                       defaultValue={section?.meals[0]?.foodItems[0]?.name || ""}
//                     />
//                     <label
//                       htmlFor="goalTitle"
//                       className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
//                     >
//                       Goal Title
//                     </label>
//                   </div>
                
//                   <div className="relative flex-1">
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


//  <div className="flex gap-[7px]">
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
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="mt-2.5  py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px] cursor-pointer"
//              onClick={handleAddItem}
//           >Add Alternative Item</div>
//         </div>
//       </Modal>
//     </>
//   );
// }





"use client"
import { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function DietEvent({ open, onClose, selectedMeal, onSave }) {
     const section = selectedMeal?.section;
  const day = selectedMeal?.day;
  const dayTotals = selectedMeal?.dayTotals;
  
  const getDayName = (date) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[date.getDay()];
  };
  
  const dayName = day?.fullDate ? getDayName(day.fullDate).toLowerCase() : "";

  const [eventTitle, setEventTitle] = useState(section?.time || "Event1");
  const [planName, setPlanName] = useState(section?.time ? `${section.time} Plan` : "");
  
  const [foodItems, setFoodItems] = useState(() => {
    if (section?.meals?.[0]?.foodItems?.[0]) {
      const foodItem = section.meals[0].foodItems[0];
      return [{
        name: foodItem.name || "",
        quantity: foodItem.details?.[0] || "",
        calories: foodItem.details?.[1] || "",
        protein: foodItem.details?.[2]?.split(":")[1]?.trim() || "",
        carbs: foodItem.details?.[3]?.split(":")[1]?.trim() || "",
        fat: foodItem.details?.[4]?.split(":")[1]?.trim() || ""
      }];
    }
    return [{
      name: "",
      quantity: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: ""
    }];
  });

  // Create a variable to hold the updated data
  const [updatedExtractedData, setUpdatedExtractedData] = useState(null);
  console.log("updatedExtractedData343:-", updatedExtractedData);

  useEffect(() => {
    if (section?.meals?.[0]?.foodItems?.[0]) {
      const foodItem = section.meals[0].foodItems[0];
      setFoodItems([{
        name: foodItem.name || "",
        quantity: foodItem.details?.[0] || "",
        calories: foodItem.details?.[1] || "",
        protein: foodItem.details?.[2]?.split(":")[1]?.trim() || "",
        carbs: foodItem.details?.[3]?.split(":")[1]?.trim() || "",
        fat: foodItem.details?.[4]?.split(":")[1]?.trim() || ""
      }]);
      setEventTitle(section?.time || "Event1");
      setPlanName(section?.time ? `${section.time} Plan` : "");
    }
  }, [section]);

  const handleAddItem = () => {
    setFoodItems([...foodItems, {
      name: "",
      quantity: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: ""
    }]);
  };

  const updateFoodItem = (index, field, value) => {
    const updatedItems = [...foodItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    setFoodItems(updatedItems);
  };

  const handleSave = () => {
    if (!dayName) {
        console.error("Day name is missing, cannot save data.");
        return;
    }

    let updatedData = { result: {} };

    if (!updatedData.result[dayName]) {
        updatedData.result[dayName] = { meals: [], totals: dayTotals || {} };
    }

    const mealTime = section?.time;
    let mealIndex = -1;
    
    if (updatedData.result[dayName].meals && mealTime) {
        mealIndex = updatedData.result[dayName].meals.findIndex(meal => 
            meal.time === mealTime
        );
    }

    const updatedMealData = {
        time: mealTime || section?.time || "",
        timeRange: section?.timeRange || "",
        items: foodItems.map(item => ({
            name: item.name,
            portion: item.quantity,
            calories_kcal: parseInt(item.calories) || 0,
            protein: parseFloat(item.protein) || 0,
            carbs: parseFloat(item.carbs) || 0,
            fat: parseFloat(item.fat) || 0
        }))
    };

    if (mealIndex !== -1) {
        updatedData.result[dayName].meals[mealIndex] = updatedMealData;
    } else if (mealTime) {
        if (!updatedData.result[dayName].meals) {
            updatedData.result[dayName].meals = [];
        }
        updatedData.result[dayName].meals.push(updatedMealData);
    }

    if (updatedData.result[dayName].meals) {
        const totals = {
            calories_kcal: 0,
            protein: 0,
            carbs: 0,
            fat: 0
        };

        updatedData.result[dayName].meals.forEach(meal => {
            meal.items.forEach(item => {
                totals.calories_kcal += parseInt(item.calories_kcal) || 0;
                totals.protein += parseFloat(item.protein) || 0;
                totals.carbs += parseFloat(item.carbs) || 0;
                totals.fat += parseFloat(item.fat) || 0;
            });
        });

        updatedData.result[dayName].totals = totals;
    }

    // Store the updated data in a variable (updatedExtractedData)
    setUpdatedExtractedData(updatedData);

    // Trigger parent callback if onSave is passed - let parent handle localStorage
    try {
      if (onSave) {
        onSave(updatedData);
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
        <div className="rounded-[10px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2.5 px-[9px] py-[5px]">
              <span className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                {day?.day || 'Day 1'}
              </span>
              <span className="text-[#252525] text-[25px] font-semibold leading-[110%] tracking-[-0.5px]">
                {eventTitle}
              </span>
            </div>

            <div className="flex gap-[13px] items-center">
              <button 
                className="bg-[#308BF9] rounded-[10px] px-5 py-[15px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px]"
                onClick={handleSave}
              >
                Save
              </button>
              <PiDotsThreeOutlineVerticalFill />
            </div>
          </div>

          <div className="flex gap-5 items-end">
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
              <label htmlFor="floating_outlined" className="absolute text-[14px] text-[#9CA3AF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">Name of the event</label>
            </div>
          </div>

          {/* Food Items Section */}
          <div className="flex flex-col gap-5 mt-4">
            <span className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">Food Items</span>
            <div className="w-full border-b border-[#E1E6ED]"></div>
          </div>

          {/* Dynamically render food items */}
          {foodItems.map((item, index) => (
            <div key={index} className="pl-5 h-full border-l border-[#E1E6ED] mt-4">
              <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Item {index + 1}</span>
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
                      onChange={(e) => updateFoodItem(index, 'name', e.target.value)}
                    />
                    <label
                      htmlFor={`goalTitle-${index}`}
                      className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                    >
                      Goal Title
                    </label>
                  </div>
                
                  {/* Quantity */}
                  <div className="relative flex-1">
                    <input
                      id={`quantity-${index}`}
                      type="text"
                      placeholder=" "
                      className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                      value={item.quantity}
                      onChange={(e) => updateFoodItem(index, 'quantity', e.target.value)}
                    />
                    <label
                      htmlFor={`quantity-${index}`}
                      className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                    >
                      Quantity
                    </label>
                  </div>

                  {/* Nutrition Info */}
                  <div className="flex gap-[7px]">
                    {/* Calories */}
                    <div className="relative flex-1">
                      <input
                        id={`calories-${index}`}
                        type="text"
                        placeholder=" "
                        className="peer block w-full py-[15px] pl-[19px] pr-[13px] text-[14px] text-[#252525] bg-white border border-[#E1E6ED] rounded-[8px] outline-none placeholder-transparent focus:border-blue-600"
                        value={item.calories}
                        onChange={(e) => updateFoodItem(index, 'calories', e.target.value)}
                      />
                      <label
                        htmlFor={`calories-${index}`}
                        className="pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#9CA3AF] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                      >
                        Calories (kcal)
                      </label>
                    </div>

                    <div className="flex gap-2">
                      {/* Protein (g) */}
                      <div className="flex flex-col">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            placeholder=" "
                            className="peer block w-full max-w-[90px] py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border border-[#DA5747] rounded-[8px] placeholder-transparent"
                            value={item.protein}
                            onChange={(e) => updateFoodItem(index, 'protein', e.target.value)}
                          />
                          <label
                            className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                          >
                            Protein (g)
                          </label>
                        </div>
                      </div>

                      {/* Fat (g) */}
                      <div className="flex flex-col">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            placeholder=" "
                            className="peer block w-full max-w-[90px] py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border border-[#DA5747] rounded-[8px] placeholder-transparent"
                            value={item.fat}
                            onChange={(e) => updateFoodItem(index, 'fat', e.target.value)}
                          />
                          <label
                            className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                          >
                            Fat (g)
                          </label>
                        </div>
                      </div>

                      {/* Carbs (g) */}
                      <div className="flex flex-col">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            placeholder=" "
                            className="peer block w-full max-w-[90px] py-[15px] pl-[19px] pr-[15px] outline-none text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] bg-white border border-[#DA5747] rounded-[8px] placeholder-transparent"
                            value={item.carbs}
                            onChange={(e) => updateFoodItem(index, 'carbs', e.target.value)}
                          />
                          <label
                            className="whitespace-nowrap pointer-events-none absolute left-[19px] bg-white px-2 text-[14px] text-[#A1A1A1] transition-all duration-200 ease-out top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#DA5747] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-[#535359]"
                          >
                            Carbs (g)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div 
            className="mt-2.5 py-[15px] px-[7px] text-[#308BF9] font-semibold leading-normal tracking-[-0.24px] text-[12px] cursor-pointer"
            onClick={handleAddItem}
          >
            Add Alternative Item
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