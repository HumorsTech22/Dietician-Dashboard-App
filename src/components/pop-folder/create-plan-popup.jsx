


// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { toast } from "sonner";

// export default function CreatePlanPopUp({ open, onClose }) {
//   const router = useRouter();
//   const fileInputRef = useRef(null);

//   const [selectedPlan, setSelectedPlan] = useState("");
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [uploadedFile, setLocalUploadedFile] = useState(null);
//   const [blobUrl, setBlobUrl] = useState(null);
//   const [urlParams, setUrlParams] = useState({
//     dietician_id: null,
//     profile_id: null,
//   });
//   const [isDragging, setIsDragging] = useState(false);
//   const [fileSizeError, setFileSizeError] = useState(false);

//   // Read params from URL
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const params = new URLSearchParams(window.location.search);
//       setUrlParams({
//         dietician_id: params.get("dietician_id"),
//         profile_id: params.get("profile_id"),
//       });
//     }
//   }, []);

//   // Cleanup blob URLs
//   useEffect(() => {
//     return () => {
//       if (blobUrl) URL.revokeObjectURL(blobUrl);
//     };
//   }, [blobUrl]);

//   const options = [
//     { value: "auto", label: "Upload Files" },
//   ];

//   const handleNext = () => {
//     if (!selectedPlan) return;

//     if (selectedPlan === "manual") {
//       onClose?.();

//       const queryParams = new URLSearchParams();
//       if (urlParams.dietician_id)
//         queryParams.append("dietician_id", urlParams.dietician_id);
//       if (urlParams.profile_id)
//         queryParams.append("profile_id", urlParams.profile_id);

//       router.push(`/plansummary?${queryParams.toString()}`);
//       return;
//     }

//     onClose?.();
//     setShowUploadModal(true);
//   };

//   // Upload processing
//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     processFile(file);
//   };

//   const processFile = (file) => {
//     setFileSizeError(false);

//     if (file.type !== "application/pdf") {
//       toast.error("Please upload a valid PDF file");
//       return;
//     }

//     if (file.size > 3 * 1024 * 1024) {
//       setFileSizeError(true);
//       setLocalUploadedFile(null);
//       return;
//     }

//     setLocalUploadedFile(file);

//     const url = URL.createObjectURL(file);
//     setBlobUrl((prev) => {
//       if (prev) URL.revokeObjectURL(prev);
//       return url;
//     });
//   };

//   // Drag handlers
//   const handleDropZoneClick = () => fileInputRef.current?.click();

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);

//     const file = e.dataTransfer.files[0];
//     if (file) processFile(file);
//   };

//   const storeFileInLocalStorage = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = function (event) {
//         try {
//           const fileData = {
//             name: file.name,
//             type: file.type,
//             size: file.size,
//             lastModified: file.lastModified,
//             data: event.target.result,
//             blobUrl,
//           };
//           localStorage.setItem("uploadedPdfFile", JSON.stringify(fileData));
//           resolve(true);
//         } catch (err) {
//           reject(err);
//         }
//       };
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleUploadAndRoute = async () => {
//     if (!uploadedFile) {
//       toast.warning("Please select a PDF file before uploading");
//       return;
//     }

//     try {
//       await storeFileInLocalStorage(uploadedFile);

//       const queryParams = new URLSearchParams();
//       if (urlParams.dietician_id)
//         queryParams.append("dietician_id", urlParams.dietician_id);
//       if (urlParams.profile_id)
//         queryParams.append("profile_id", urlParams.profile_id);

//       setShowUploadModal(false);
//       router.push(`/plansummary?${queryParams.toString()}`);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to upload file");
//     }
//   };

//   // Helper component to render the modal structure with the external button
//   const ModalWrapper = ({ children, isUpload = false }) => {
//     const isVisible = isUpload ? showUploadModal : open;
//     const closeModal = isUpload ? () => setShowUploadModal(false) : onClose;

//     if (!isVisible) return null;

//     return (
//       // Background overlay
//       <div
//         className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
//         onClick={closeModal}
//       >
//         {/* Container for the Popup + External Close Button */}
//         {/* We use items-start to align the button with the top of the modal */}
//         <div className="relative flex items-start gap-2" onClick={(e) => e.stopPropagation()}>

//           {/* Main Popup Content */}
//           <div className="bg-white w-[90%] max-w-[620px] rounded-[10px] p-0">
//             {children}
//           </div>

//           {/* External Close Button - Original Styling Applied Here */}
//           <button
//             // Restored original styles: bg-white text-black px-3 py-1 rounded-md shadow translate-x-3 cursor-pointer
//             className="bg-white text-black px-3 py-1 rounded-md shadow translate-x-3 cursor-pointer mt-0"
//             onClick={closeModal}
//             aria-label="Close"
//           >
//             x
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* The original incorrect close button block is permanently removed. */}

//       {/* STEP 1 — CUSTOM POPUP */}
//       <ModalWrapper>
//         <div className="flex flex-col gap-[107px] pt-[50px] px-8 pb-8">
//           <div className="flex gap-5">
//             <div className="flex flex-col gap-5">
//               <span className="text-[#252525] text-[15px] font-semibold">
//                 Create new plan
//               </span>
//               <p className="text-[#252525] text-[34px] leading-[110%]">
//                 How are you creating?
//               </p>
//             </div>

//             <div className="flex flex-col w-full gap-[15px]">
//               {options.map((opt) => (
//                 <label
//                   key={opt.value}
//                   className={`flex gap-2.5 items-center py-[18px] pl-2.5 pr-3 rounded-[5px]
//                     cursor-pointer transition-colors
//                     ${
//                       selectedPlan === opt.value
//                         ? "border-[2px] border-[#308BF9] bg-[#F5F7FA]"
//                         : "border-[2px] border-[#E1E6ED] bg-[#F5F7FA]"
//                     }
//                   `}
//                 >
//                   <input
//                     type="radio"
//                     name="planType"
//                     value={opt.value}
//                     checked={selectedPlan === opt.value}
//                     onChange={() => setSelectedPlan(opt.value)}
//                   />
//                   <span className="text-[#252525] text-[15px]">
//                     {opt.label}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <button
//               onClick={handleNext}
//               disabled={!selectedPlan}
//               className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] cursor-pointer
//                 ${
//                   selectedPlan
//                     ? "bg-[#308BF9]"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </ModalWrapper>

//       {/* STEP 2 — UPLOAD POPUP */}
//       <ModalWrapper isUpload={true}>
//         <div className="flex gap-6 pt-[50px] px-8 pb-8">
//           <div className="flex flex-col gap-3">
//             <span className="text-[#252525] text-[15px] font-semibold">
//               Create new plan
//             </span>
//             <p className="text-[#252525] text-[34px] leading-[110%]">
//               Upload plan file (.pdf)
//             </p>
//             <p className="text-[#535359] text-[12px] font-semibold">
//               File size max. 3MB
//             </p>
//           </div>

//           {/* UPLOAD BOX */}
//           {/* <div
//             className={`w-full border-2 border-dashed rounded-[10px] p-8 text-center cursor-pointer
//               ${
//                 fileSizeError
//                   ? "border-[#DA5747] bg-[#FFF5F5]"
//                   : "border-[#E1E6ED]"
//               }`}
//             onClick={handleDropZoneClick}
//             onDrop={handleDrop}
//             onDragOver={(e) => e.preventDefault()}
//           >
//             <div className="flex flex-col items-center gap-6">
//               <Image
//                 src="/icons/hugeicons_cursor-magic-selection-04.svg"
//                 alt="upload"
//                 width={48}
//                 height={48}
//               />

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="application/pdf,.pdf"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />

//               {!fileSizeError && (
//                 <p className="text-[#252525] text-[15px]">
//                   {uploadedFile
//                     ? uploadedFile.name
//                     : "Drag or browse from My Computer"}
//                 </p>
//               )}

//               {fileSizeError && (
//                 <p className="text-[#DA5747] text-[14px]">
//                   File must be less than 3MB
//                 </p>
//               )}
//             </div>
//           </div>


// <div className="flex gap-[120px] items-center py-[18px] pl-[15px] pr-6 border-2 border-[#308BF9] rounded-[5px] bg-[#F5F7FA]">
//   <div className="flex gap-5 items-center whitespace-nowrap">
// <Image
// src="/icons/hugeicons_pdf-01.svg"
// alt="hugeicons_pdf-01.svg"
// width={24}
// height={24}
// />
// <p className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] whitespace-nowrap">Sagar Hosur_diet.pdf </p>
//   </div>
//   <Image
//   src="/icons/hugeicons_delete-01.svg"
//   alt="hugeicons_delete-01.svg"
//   width={20}
//   height={20}

//   />
// </div> */}


// {/* UPLOAD AREA (show only when no file) */}
// {!uploadedFile ? (
//   <div
//     className={`w-full border-2 border-dashed rounded-[10px] p-8 text-center cursor-pointer
//       ${fileSizeError ? "border-[#DA5747] bg-[#FFF5F5]" : "border-[#E1E6ED]"}
//     `}
//     onClick={handleDropZoneClick}
//     onDrop={handleDrop}
//     onDragOver={(e) => e.preventDefault()}
//   >
//     <div className="flex flex-col items-center gap-6">
//       <Image
//         src="/icons/hugeicons_cursor-magic-selection-04.svg"
//         alt="upload"
//         width={48}
//         height={48}
//       />

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="application/pdf,.pdf"
//         onChange={handleFileChange}
//         className="hidden"
//       />

//       {!fileSizeError && (
//         <p className="text-[#252525] text-[15px]">
//           Drag or browse from My Computer
//         </p>
//       )}

//       {fileSizeError && (
//         <p className="text-[#DA5747] text-[14px]">File must be less than 3MB</p>
//       )}
//     </div>
//   </div>
// ) : (
//   /* PDF ROW (show only when file is selected) */
//   <div className="flex justify-between items-center py-[18px] pl-[15px] pr-6 border-2 border-[#308BF9] rounded-[5px] bg-[#F5F7FA] w-full">
//     <div className="flex gap-5 items-center min-w-0">
//       <Image
//         src="/icons/hugeicons_pdf-01.svg"
//         alt="pdf"
//         width={24}
//         height={24}
//       />
//       <p className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] truncate">
//         {uploadedFile.name}
//       </p>
//     </div>

//     <button
//       type="button"
//       onClick={() => {
//         setLocalUploadedFile(null);
//         setFileSizeError(false);
//         setBlobUrl((prev) => {
//           if (prev) URL.revokeObjectURL(prev);
//           return null;
//         });
//         if (fileInputRef.current) fileInputRef.current.value = "";
//       }}
//       className="cursor-pointer"
//       aria-label="Remove file"
//     >
//       <Image
//         src="/icons/hugeicons_delete-01.svg"
//         alt="delete"
//         width={20}
//         height={20}
//       />
//     </button>
//   </div>
// )}



//         </div>

//         <div className="flex justify-end px-8 pb-8">
//           <button
//             onClick={handleUploadAndRoute}
//             disabled={!uploadedFile || fileSizeError}
//             className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] cursor-pointer
//               ${
//                 !uploadedFile || fileSizeError
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-[#308BF9]"
//               }`}
//           >
//             Next
//           </button>
//         </div>
//       </ModalWrapper>
//     </>
//   );
// }


// "use client";

// import { useState, useEffect, useRef, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { toast } from "sonner";

// export default function CreatePlanPopUp({ open, onClose }) {
//   const router = useRouter();
//   const fileInputRef = useRef(null);

//    const fromRef = useRef(null);
//       const toRef = useRef(null);

//       const [fromDate, setFromDate] = useState("");
//       const [toDate, setToDate] = useState("");

//   const [selectedPlan, setSelectedPlan] = useState("");
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [uploadedFile, setLocalUploadedFile] = useState(null);
//   const [blobUrl, setBlobUrl] = useState(null);
//   const [urlParams, setUrlParams] = useState({
//     dietician_id: null,
//     profile_id: null,
//   });
//   const [fileSizeError, setFileSizeError] = useState(false);

//   const [displayProgress, setDisplayProgress] = useState(0);


//  const formatDDMMYYYY = (yyyy_mm_dd) => {
//         if (!yyyy_mm_dd) return "";
//         const [y, m, d] = yyyy_mm_dd.split("-");
//         if (!y || !m || !d) return "";
//         return `${d}/${m}/${y}`;
//     };

//     // close on ESC
//     useEffect(() => {
//         if (!open) return;
//         const handleEsc = (e) => {
//             if (e.key === "Escape") onClose?.();
//         };
//         window.addEventListener("keydown", handleEsc);
//         return () => window.removeEventListener("keydown", handleEsc);
//     }, [open, onClose]);

//     if (!open) return null;


//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const params = new URLSearchParams(window.location.search);
//       setUrlParams({
//         dietician_id: params.get("dietician_id"),
//         profile_id: params.get("profile_id"),
//       });
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       if (blobUrl) URL.revokeObjectURL(blobUrl);
//     };
//   }, [blobUrl]);

//   const options = [{ value: "auto", label: "Upload Files" }];

//   const targetProgress = useMemo(() => {
//     if (!showUploadModal) return selectedPlan ? 33 : 0;
//     if (showUploadModal && !uploadedFile) return 66;
//     if (uploadedFile) return 100;
//     return 0;
//   }, [selectedPlan, showUploadModal, uploadedFile]);

//   // ⭐ SLOW, SMOOTH ANIMATION towards targetProgress
//   useEffect(() => {
//     const startValue = displayProgress;
//     const endValue = targetProgress;

//     if (startValue === endValue) return;

//     // make it feel "slow" + premium
//     const durationMs = 1400; // increase for slower (ex: 1800)
//     let startTime = null;
//     let rafId = null;

//     const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const elapsed = timestamp - startTime;
//       const t = Math.min(1, elapsed / durationMs);
//       const eased = easeOutCubic(t);

//       const next = startValue + (endValue - startValue) * eased;
//       setDisplayProgress(next);

//       if (t < 1) {
//         rafId = requestAnimationFrame(step);
//       } else {
//         setDisplayProgress(endValue);
//       }
//     };

//     rafId = requestAnimationFrame(step);

//     return () => {
//       if (rafId) cancelAnimationFrame(rafId);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [targetProgress]);

//   const handleNext = () => {
//     if (!selectedPlan) return;

//     if (selectedPlan === "manual") {
//       onClose?.();

//       const queryParams = new URLSearchParams();
//       if (urlParams.dietician_id)
//         queryParams.append("dietician_id", urlParams.dietician_id);
//       if (urlParams.profile_id)
//         queryParams.append("profile_id", urlParams.profile_id);

//       router.push(`/plansummary?${queryParams.toString()}`);
//       return;
//     }

//     onClose?.();
//     setShowUploadModal(true);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     processFile(file);
//   };

//   const processFile = (file) => {
//     setFileSizeError(false);

//     if (file.type !== "application/pdf") {
//       toast.error("Please upload a valid PDF file");
//       return;
//     }

//     if (file.size > 3 * 1024 * 1024) {
//       setFileSizeError(true);
//       setLocalUploadedFile(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//       return;
//     }

//     setLocalUploadedFile(file);

//     const url = URL.createObjectURL(file);
//     setBlobUrl((prev) => {
//       if (prev) URL.revokeObjectURL(prev);
//       return url;
//     });
//   };

//   const handleDropZoneClick = () => fileInputRef.current?.click();

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files?.[0];
//     if (file) processFile(file);
//   };

//   const storeFileInLocalStorage = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = function (event) {
//         try {
//           const fileData = {
//             name: file.name,
//             type: file.type,
//             size: file.size,
//             lastModified: file.lastModified,
//             data: event.target.result,
//             blobUrl,
//           };
//           localStorage.setItem("uploadedPdfFile", JSON.stringify(fileData));
//           resolve(true);
//         } catch (err) {
//           reject(err);
//         }
//       };
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleUploadAndRoute = async () => {
//     if (!uploadedFile) {
//       toast.warning("Please select a PDF file before uploading");
//       return;
//     }

//     try {
//       await storeFileInLocalStorage(uploadedFile);

//       const queryParams = new URLSearchParams();
//       if (urlParams.dietician_id)
//         queryParams.append("dietician_id", urlParams.dietician_id);
//       if (urlParams.profile_id)
//         queryParams.append("profile_id", urlParams.profile_id);

//       setShowUploadModal(false);
//       router.push(`/plansummary?${queryParams.toString()}`);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to upload file");
//     }
//   };

//   const removeUploadedFile = () => {
//     setLocalUploadedFile(null);
//     setFileSizeError(false);
//     setBlobUrl((prev) => {
//       if (prev) URL.revokeObjectURL(prev);
//       return null;
//     });
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const ModalWrapper = ({ children, isUpload = false }) => {
//     const isVisible = isUpload ? showUploadModal : open;
//     const closeModal = isUpload ? () => setShowUploadModal(false) : onClose;

//     if (!isVisible) return null;

//     return (
//       <div
//         className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
//         onClick={closeModal}
//       >
//         <div
//           className="relative flex items-start gap-2"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="bg-white w-[90%] max-w-[620px] rounded-[10px] p-0">
//             {children}
//           </div>

//           <button
//             className="bg-white text-black px-3 py-1 rounded-md shadow translate-x-3 cursor-pointer mt-0"
//             onClick={closeModal}
//             aria-label="Close"
//           >
//             x
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const ProgressFrame = ({ children }) => {
//     const showShimmer = displayProgress < 100 && Math.abs(displayProgress - targetProgress) > 0.2;

//     return (
//       <div
//         className="relative flex flex-col gap-[107px] pt-[50px] px-8 pb-8 
//         border border-[#E1E6ED] rounded-[8px] overflow-hidden"
//       >
//         <div className="absolute top-0 left-0 w-full h-[8px] bg-[#E1E6ED]">
//           <div
//             className="relative h-[8px] bg-[#308BF9] overflow-hidden"
//             style={{ width: `${displayProgress}%` }}
//           >
//             {showShimmer && (
//               <div
//                 className="absolute inset-0 animate-shimmer opacity-40"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.7) 50%, rgba(255,255,255,0) 100%)",
//                 }}
//               />
//             )}
//           </div>
//         </div>

//         {children}
//       </div>
//     );
//   };

//   return (
//     <>
//       <ModalWrapper>
//         <ProgressFrame>
//           <div className="flex gap-5 ">


//   <div className="mt-4">
//                     <div className="flex-1">
//                         <span className="px-[9px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]">
//                             Duration
//                         </span>

//                         <div className="flex gap-2 mt-2">
//                             {/* From */}
//                             <div
//                                 onClick={() => fromRef.current?.showPicker()}
//                                 className="cursor-pointer flex py-[15px] pl-[19px] pr-[13px] rounded-[8px] bg-white border border-[#E1E6ED]"
//                             >
//                                 <input
//                                     type="text"
//                                     value={formatDDMMYYYY(fromDate)}
//                                     placeholder="DD/MM/YYYY"
//                                     disabled
//                                     className="w-full outline-none bg-transparent text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF] cursor-pointer"
//                                 />
//                                 <Image
//                                     src="/icons/hugeicons_calendar-03.svg"
//                                     alt="calendar"
//                                     width={20}
//                                     height={20}
//                                 />
//                             </div>

//                             {/* Hidden native date input */}
//                             <input
//                                 ref={fromRef}
//                                 type="date"
//                                 className="absolute opacity-0 pointer-events-none"
//                                 onChange={(e) => setFromDate(e.target.value)}
//                             />

//                             {/* To */}
//                             <div
//                                 onClick={() => toRef.current?.showPicker()}
//                                 className="cursor-pointer flex py-[15px] pl-[19px] pr-[13px] rounded-[8px] bg-white border border-[#E1E6ED]"
//                             >
//                                 <input
//                                     type="text"
//                                     value={formatDDMMYYYY(toDate)}
//                                     placeholder="DD/MM/YYYY"
//                                     disabled
//                                     className="w-full outline-none bg-transparent text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF] cursor-pointer"
//                                 />
//                                 <Image
//                                     src="/icons/hugeicons_calendar-03.svg"
//                                     alt="calendar"
//                                     width={20}
//                                     height={20}
//                                 />
//                             </div>

//                             {/* Hidden native date input */}
//                             <input
//                                 ref={toRef}
//                                 type="date"
//                                 className="absolute opacity-0 pointer-events-none"
//                                 onChange={(e) => setToDate(e.target.value)}
//                             />

//                         </div>
//                     </div>
//                 </div>





//             <div className="flex flex-col gap-5">
//               <span className="text-[#252525] text-[15px] font-semibold">
//                 Create new plan
//               </span>
//               <p className="text-[#252525] text-[34px] leading-[110%]">
//                 How are you creating?
//               </p>
//             </div>

//             <div className="flex flex-col w-full gap-[15px]">
//               {options.map((opt) => (
//                 <label
//                   key={opt.value}
//                   className={`flex gap-2.5 items-center py-[18px] pl-2.5 pr-3 rounded-[5px]
//                     cursor-pointer transition-colors
//                     ${
//                       selectedPlan === opt.value
//                         ? "border-[2px] border-[#308BF9] bg-[#F5F7FA]"
//                         : "border-[2px] border-[#E1E6ED] bg-[#F5F7FA]"
//                     }
//                   `}
//                 >
//                   <input
//                     type="radio"
//                     name="planType"
//                     value={opt.value}
//                     checked={selectedPlan === opt.value}
//                     onChange={() => setSelectedPlan(opt.value)}
//                   />
//                   <span className="text-[#252525] text-[15px]">
//                     {opt.label}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <button
//               onClick={handleNext}
//               disabled={!selectedPlan}
//               className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] cursor-pointer
//                 ${
//                   selectedPlan
//                     ? "bg-[#308BF9]"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//             >
//               Next
//             </button>
//           </div>
//         </ProgressFrame>
//       </ModalWrapper>

//       <ModalWrapper isUpload={true}>
//         <div className="flex flex-col gap-0">
//           <ProgressFrame>
//             <div className="flex gap-6 pt-[0px]">
//               <div className="flex flex-col gap-3">
//                 <span className="text-[#252525] text-[15px] font-semibold">
//                   Create new plan
//                 </span>
//                 <p className="text-[#252525] text-[34px] leading-[110%]">
//                   Upload plan file (.pdf)
//                 </p>
//                 <p className="text-[#535359] text-[12px] font-semibold">
//                   File size max. 3MB
//                 </p>
//               </div>

//               <div className="flex flex-col w-full gap-4">
//                 {!uploadedFile && (
//                   <div
//                     className={`w-full border-2 border-dashed rounded-[10px] p-8 text-center cursor-pointer
//                       ${
//                         fileSizeError
//                           ? "border-[#DA5747] bg-[#FFF5F5]"
//                           : "border-[#E1E6ED]"
//                       }`}
//                     onClick={handleDropZoneClick}
//                     onDrop={handleDrop}
//                     onDragOver={(e) => e.preventDefault()}
//                   >
//                     <div className="flex flex-col items-center gap-6">
//                       <Image
//                         src="/icons/hugeicons_cursor-magic-selection-04.svg"
//                         alt="upload"
//                         width={48}
//                         height={48}
//                       />

//                       <input
//                         ref={fileInputRef}
//                         type="file"
//                         accept="application/pdf,.pdf"
//                         onChange={handleFileChange}
//                         className="hidden"
//                       />

//                       {!fileSizeError && (
//                         <p className="text-[#252525] text-[15px]">
//                           Drag or browse from My Computer
//                         </p>
//                       )}

//                       {fileSizeError && (
//                         <p className="text-[#DA5747] text-[14px]">
//                           File must be less than 3MB
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {uploadedFile && (
//                   <div className="flex gap-[120px] items-center py-[18px] pl-[15px] pr-6 border-2 border-[#308BF9] rounded-[5px] bg-[#F5F7FA]">
//                     <div className="flex gap-5 items-center whitespace-nowrap">
//                       <Image
//                         src="/icons/hugeicons_pdf-01.svg"
//                         alt="hugeicons_pdf-01.svg"
//                         width={24}
//                         height={24}
//                       />
//                       <p className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] whitespace-nowrap">
//                         {uploadedFile.name}
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={removeUploadedFile}
//                       className="cursor-pointer"
//                       aria-label="Remove file"
//                     >
//                       <Image
//                         src="/icons/hugeicons_delete-02.svg"
//                         alt="hugeicons_delete-01.svg"
//                         width={20}
//                         height={20}
//                       />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 onClick={handleUploadAndRoute}
//                 disabled={!uploadedFile || fileSizeError}
//                 className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] cursor-pointer
//                   ${
//                     !uploadedFile || fileSizeError
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-[#308BF9]"
//                   }`}
//               >
//                 Next
//               </button>
//             </div>
//           </ProgressFrame>
//         </div>
//       </ModalWrapper>

//       <style jsx global>{`
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         .animate-shimmer {
//           animation: shimmer 1.2s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }

















// "use client";

// import { useState, useEffect, useRef, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { toast } from "sonner";

// export default function CreatePlanPopUp({ open, onClose }) {
//   const router = useRouter();
//   const fileInputRef = useRef(null);

//   const fromRef = useRef(null);
//   const toRef = useRef(null);

//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");

//   const [selectedPlan, setSelectedPlan] = useState("");
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [uploadedFile, setLocalUploadedFile] = useState(null);
//   const [blobUrl, setBlobUrl] = useState(null);
//   const [urlParams, setUrlParams] = useState({
//     dietician_id: null,
//     profile_id: null,
//   });
//   const [fileSizeError, setFileSizeError] = useState(false);

//   const [displayProgress, setDisplayProgress] = useState(0);

//   const formatDDMMYYYY = (yyyy_mm_dd) => {
//     if (!yyyy_mm_dd) return "";
//     const [y, m, d] = yyyy_mm_dd.split("-");
//     if (!y || !m || !d) return "";
//     return `${d}/${m}/${y}`;
//   };

//   // ✅ treat popup as "visible" if ANY modal is open
//   const anyModalOpen = open || showUploadModal;

//   // close on ESC (works for both modals)
//   useEffect(() => {
//     if (!anyModalOpen) return;

//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         if (showUploadModal) setShowUploadModal(false);
//         else onClose?.();
//       }
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [anyModalOpen, showUploadModal, onClose]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const params = new URLSearchParams(window.location.search);
//       setUrlParams({
//         dietician_id: params.get("dietician_id"),
//         profile_id: params.get("profile_id"),
//       });
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       if (blobUrl) URL.revokeObjectURL(blobUrl);
//     };
//   }, [blobUrl]);

//   const options = [{ value: "auto", label: "Upload Files" }];

//   const targetProgress = useMemo(() => {
//     if (!showUploadModal) return selectedPlan ? 33 : 0;
//     if (showUploadModal && !uploadedFile) return 66;
//     if (uploadedFile) return 100;
//     return 0;
//   }, [selectedPlan, showUploadModal, uploadedFile]);

//   // ⭐ SLOW, SMOOTH ANIMATION towards targetProgress
//   useEffect(() => {
//     const startValue = displayProgress;
//     const endValue = targetProgress;

//     if (startValue === endValue) return;

//     const durationMs = 1400;
//     let startTime = null;
//     let rafId = null;

//     const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const elapsed = timestamp - startTime;
//       const t = Math.min(1, elapsed / durationMs);
//       const eased = easeOutCubic(t);

//       const next = startValue + (endValue - startValue) * eased;
//       setDisplayProgress(next);

//       if (t < 1) {
//         rafId = requestAnimationFrame(step);
//       } else {
//         setDisplayProgress(endValue);
//       }
//     };

//     rafId = requestAnimationFrame(step);

//     return () => {
//       if (rafId) cancelAnimationFrame(rafId);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [targetProgress]);

//   const handleNext = () => {
//     if (!selectedPlan) return;

//     if (selectedPlan === "manual") {
//       onClose?.();

//       const queryParams = new URLSearchParams();
//       if (urlParams.dietician_id)
//         queryParams.append("dietician_id", urlParams.dietician_id);
//       if (urlParams.profile_id)
//         queryParams.append("profile_id", urlParams.profile_id);

//       router.push(`/plansummary?${queryParams.toString()}`);
//       return;
//     }

//     onClose?.();
//     setShowUploadModal(true);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     processFile(file);
//   };

//   const processFile = (file) => {
//     setFileSizeError(false);

//     if (file.type !== "application/pdf") {
//       toast.error("Please upload a valid PDF file");
//       return;
//     }

//     if (file.size > 3 * 1024 * 1024) {
//       setFileSizeError(true);
//       setLocalUploadedFile(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//       return;
//     }

//     setLocalUploadedFile(file);

//     const url = URL.createObjectURL(file);
//     setBlobUrl((prev) => {
//       if (prev) URL.revokeObjectURL(prev);
//       return url;
//     });
//   };

//   const handleDropZoneClick = () => fileInputRef.current?.click();

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files?.[0];
//     if (file) processFile(file);
//   };

//   const storeFileInLocalStorage = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = function (event) {
//         try {
//           const fileData = {
//             name: file.name,
//             type: file.type,
//             size: file.size,
//             lastModified: file.lastModified,
//             data: event.target.result,
//             blobUrl,
//           };
//           localStorage.setItem("uploadedPdfFile", JSON.stringify(fileData));
//           resolve(true);
//         } catch (err) {
//           reject(err);
//         }
//       };
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleUploadAndRoute = async () => {
//     if (!uploadedFile) {
//       toast.warning("Please select a PDF file before uploading");
//       return;
//     }

//     try {
//       await storeFileInLocalStorage(uploadedFile);

//       const queryParams = new URLSearchParams();
//       if (urlParams.dietician_id)
//         queryParams.append("dietician_id", urlParams.dietician_id);
//       if (urlParams.profile_id)
//         queryParams.append("profile_id", urlParams.profile_id);

//       setShowUploadModal(false);
//       router.push(`/plansummary?${queryParams.toString()}`);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to upload file");
//     }
//   };

//   const removeUploadedFile = () => {
//     setLocalUploadedFile(null);
//     setFileSizeError(false);
//     setBlobUrl((prev) => {
//       if (prev) URL.revokeObjectURL(prev);
//       return null;
//     });
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const ModalWrapper = ({ children, isUpload = false }) => {
//     const isVisible = isUpload ? showUploadModal : open;
//     const closeModal = isUpload ? () => setShowUploadModal(false) : onClose;

//     if (!isVisible) return null;

//     return (
//       <div
//         className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
//         onClick={closeModal}
//       >
//         <div
//           className="relative flex items-start gap-2"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="bg-white w-[90%] max-w-[620px] rounded-[10px] p-0">
//             {children}
//           </div>

//           <button
//             className="bg-white text-black px-3 py-1 rounded-md shadow translate-x-3 cursor-pointer mt-0"
//             onClick={closeModal}
//             aria-label="Close"
//           >
//             x
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const ProgressFrame = ({ children }) => {
//     const showShimmer =
//       displayProgress < 100 && Math.abs(displayProgress - targetProgress) > 0.2;

//     return (
//       <div
//         className="relative flex flex-col gap-[107px] pt-[50px] px-8 pb-8 
//         border border-[#E1E6ED] rounded-[8px] overflow-hidden"
//       >
//         <div className="absolute top-0 left-0 w-full h-[8px] bg-[#E1E6ED]">
//           <div
//             className="relative h-[8px] bg-[#308BF9] overflow-hidden"
//             style={{ width: `${displayProgress}%` }}
//           >
//             {showShimmer && (
//               <div
//                 className="absolute inset-0 animate-shimmer opacity-40"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.7) 50%, rgba(255,255,255,0) 100%)",
//                 }}
//               />
//             )}
//           </div>
//         </div>

//         {children}
//       </div>
//     );
//   };

//   // ✅ IMPORTANT: return null ONLY AFTER all hooks are declared
//   if (!open && !showUploadModal) return null;

//   return (
//     <>
//       <ModalWrapper>
//         <ProgressFrame>

// <div className="flex flex-col items-center gap-4">
// <div className="flex-1">
//                 <span className="px-[9px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]">
//                   Duration
//                 </span>

//                 <div className="flex gap-2 mt-2">
//                   {/* From */}
//                   <div
//                     onClick={() => fromRef.current?.showPicker?.()}
//                     className="cursor-pointer flex py-[15px] pl-[19px] pr-[13px] rounded-[8px] bg-white border border-[#E1E6ED]"
//                   >
//                     <input
//                       type="text"
//                       value={formatDDMMYYYY(fromDate)}
//                       placeholder="DD/MM/YYYY"
//                       disabled
//                       className="w-full outline-none bg-transparent text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF] cursor-pointer"
//                     />
//                     <Image
//                       src="/icons/hugeicons_calendar-03.svg"
//                       alt="calendar"
//                       width={20}
//                       height={20}
//                     />
//                   </div>

//                   {/* Hidden native date input */}
//                   <input
//                     ref={fromRef}
//                     type="date"
//                     className="absolute opacity-0 pointer-events-none"
//                     onChange={(e) => setFromDate(e.target.value)}
//                   />

//                   {/* To */}
//                   <div
//                     onClick={() => toRef.current?.showPicker?.()}
//                     className="cursor-pointer flex py-[15px] pl-[19px] pr-[13px] rounded-[8px] bg-white border border-[#E1E6ED]"
//                   >
//                     <input
//                       type="text"
//                       value={formatDDMMYYYY(toDate)}
//                       placeholder="DD/MM/YYYY"
//                       disabled
//                       className="w-full outline-none bg-transparent text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF] cursor-pointer"
//                     />
//                     <Image
//                       src="/icons/hugeicons_calendar-03.svg"
//                       alt="calendar"
//                       width={20}
//                       height={20}
//                     />
//                   </div>

//                   {/* Hidden native date input */}
//                   <input
//                     ref={toRef}
//                     type="date"
//                     className="absolute opacity-0 pointer-events-none"
//                     onChange={(e) => setToDate(e.target.value)}
//                   />
//                 </div>
//               </div>

//           <div className="flex gap-5 ">
//             <div className="mt-4">

//             </div>




//             <div className="flex flex-col gap-5">
//               <span className="text-[#252525] text-[15px] font-semibold">
//                 Create new plan
//               </span>
//               <p className="text-[#252525] text-[34px] leading-[110%]">
//                 How are you creating?
//               </p>
//             </div>


//             <div className="flex flex-col w-full gap-[15px]">
//               {options.map((opt) => (
//                 <label
//                   key={opt.value}
//                   className={`flex gap-2.5 items-center py-[18px] pl-2.5 pr-3 rounded-[5px]
//                     cursor-pointer transition-colors
//                     ${
//                       selectedPlan === opt.value
//                         ? "border-[2px] border-[#308BF9] bg-[#F5F7FA]"
//                         : "border-[2px] border-[#E1E6ED] bg-[#F5F7FA]"
//                     }
//                   `}
//                 >
//                   <input
//                     type="radio"
//                     name="planType"
//                     value={opt.value}
//                     checked={selectedPlan === opt.value}
//                     onChange={() => setSelectedPlan(opt.value)}
//                   />
//                   <span className="text-[#252525] text-[15px]">
//                     {opt.label}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>
//           </div>

//           <div className="flex justify-end">
//             <button
//               onClick={handleNext}
//               disabled={!selectedPlan}
//               className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] cursor-pointer
//                 ${
//                   selectedPlan
//                     ? "bg-[#308BF9]"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//             >
//               Next
//             </button>
//           </div>
//         </ProgressFrame>
//       </ModalWrapper>

//       <ModalWrapper isUpload={true}>
//         <div className="flex flex-col gap-0">
//           <ProgressFrame>
//             <div className="flex gap-6 pt-[0px]">
//               <div className="flex flex-col gap-3">
//                 <span className="text-[#252525] text-[15px] font-semibold">
//                   Create new plan
//                 </span>
//                 <p className="text-[#252525] text-[34px] leading-[110%]">
//                   Upload plan file (.pdf)
//                 </p>
//                 <p className="text-[#535359] text-[12px] font-semibold">
//                   File size max. 3MB
//                 </p>
//               </div>

//               <div className="flex flex-col w-full gap-4">
//                 {!uploadedFile && (
//                   <div
//                     className={`w-full border-2 border-dashed rounded-[10px] p-8 text-center cursor-pointer
//                       ${
//                         fileSizeError
//                           ? "border-[#DA5747] bg-[#FFF5F5]"
//                           : "border-[#E1E6ED]"
//                       }`}
//                     onClick={handleDropZoneClick}
//                     onDrop={handleDrop}
//                     onDragOver={(e) => e.preventDefault()}
//                   >
//                     <div className="flex flex-col items-center gap-6">
//                       <Image
//                         src="/icons/hugeicons_cursor-magic-selection-04.svg"
//                         alt="upload"
//                         width={48}
//                         height={48}
//                       />

//                       <input
//                         ref={fileInputRef}
//                         type="file"
//                         accept="application/pdf,.pdf"
//                         onChange={handleFileChange}
//                         className="hidden"
//                       />

//                       {!fileSizeError && (
//                         <p className="text-[#252525] text-[15px]">
//                           Drag or browse from My Computer
//                         </p>
//                       )}

//                       {fileSizeError && (
//                         <p className="text-[#DA5747] text-[14px]">
//                           File must be less than 3MB
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {uploadedFile && (
//                   <div className="flex gap-[120px] items-center py-[18px] pl-[15px] pr-6 border-2 border-[#308BF9] rounded-[5px] bg-[#F5F7FA]">
//                     <div className="flex gap-5 items-center whitespace-nowrap">
//                       <Image
//                         src="/icons/hugeicons_pdf-01.svg"
//                         alt="hugeicons_pdf-01.svg"
//                         width={24}
//                         height={24}
//                       />
//                       <p className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] whitespace-nowrap">
//                         {uploadedFile.name}
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={removeUploadedFile}
//                       className="cursor-pointer"
//                       aria-label="Remove file"
//                     >
//                       <Image
//                         src="/icons/hugeicons_delete-02.svg"
//                         alt="hugeicons_delete-01.svg"
//                         width={20}
//                         height={20}
//                       />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 onClick={handleUploadAndRoute}
//                 disabled={!uploadedFile || fileSizeError}
//                 className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] cursor-pointer
//                   ${
//                     !uploadedFile || fileSizeError
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-[#308BF9]"
//                   }`}
//               >
//                 Next
//               </button>
//             </div>
//           </ProgressFrame>
//         </div>
//       </ModalWrapper>

//       <style jsx global>{`
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         .animate-shimmer {
//           animation: shimmer 1.2s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }


















// "use client";

// import { useState, useEffect, useRef, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { toast } from "sonner";

// export default function CreatePlanPopUp({ open, onClose }) {
//   const router = useRouter();
//   const fileInputRef = useRef(null);

//   const fromRef = useRef(null);
//   const toRef = useRef(null);

//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");

//   const [selectedPlan, setSelectedPlan] = useState("");
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [uploadedFile, setLocalUploadedFile] = useState(null);
//   const [blobUrl, setBlobUrl] = useState(null);
//   const [urlParams, setUrlParams] = useState({
//     dietician_id: null,
//     profile_id: null,
//   });
//   const [fileSizeError, setFileSizeError] = useState(false);

//   const [displayProgress, setDisplayProgress] = useState(0);

//   const formatDDMMYYYY = (yyyy_mm_dd) => {
//     if (!yyyy_mm_dd) return "";
//     const [y, m, d] = yyyy_mm_dd.split("-");
//     if (!y || !m || !d) return "";
//     return `${d}/${m}/${y}`;
//   };

//   // ✅ treat popup as "visible" if ANY modal is open
//   const anyModalOpen = open || showUploadModal;

//   // close on ESC (works for both modals)
//   useEffect(() => {
//     if (!anyModalOpen) return;

//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         if (showUploadModal) setShowUploadModal(false);
//         else onClose?.();
//       }
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [anyModalOpen, showUploadModal, onClose]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const params = new URLSearchParams(window.location.search);
//       setUrlParams({
//         dietician_id: params.get("dietician_id"),
//         profile_id: params.get("profile_id"),
//       });
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       if (blobUrl) URL.revokeObjectURL(blobUrl);
//     };
//   }, [blobUrl]);

//   const options = [{ value: "auto", label: "Upload Files" }];

//   const targetProgress = useMemo(() => {
//     if (!showUploadModal) return selectedPlan ? 33 : 0;
//     if (showUploadModal && !uploadedFile) return 66;
//     if (uploadedFile) return 100;
//     return 0;
//   }, [selectedPlan, showUploadModal, uploadedFile]);

//   // ⭐ SLOW, SMOOTH ANIMATION towards targetProgress
//   useEffect(() => {
//     const startValue = displayProgress;
//     const endValue = targetProgress;

//     if (startValue === endValue) return;

//     const durationMs = 1400;
//     let startTime = null;
//     let rafId = null;

//     const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const elapsed = timestamp - startTime;
//       const t = Math.min(1, elapsed / durationMs);
//       const eased = easeOutCubic(t);

//       const next = startValue + (endValue - startValue) * eased;
//       setDisplayProgress(next);

//       if (t < 1) {
//         rafId = requestAnimationFrame(step);
//       } else {
//         setDisplayProgress(endValue);
//       }
//     };

//     rafId = requestAnimationFrame(step);

//     return () => {
//       if (rafId) cancelAnimationFrame(rafId);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [targetProgress]);

//   const handleNext = () => {
//     if (!selectedPlan) return;

//     if (selectedPlan === "manual") {
//       onClose?.();

//       const queryParams = new URLSearchParams();
//       if (urlParams.dietician_id)
//         queryParams.append("dietician_id", urlParams.dietician_id);
//       if (urlParams.profile_id)
//         queryParams.append("profile_id", urlParams.profile_id);

//       router.push(`/plansummary?${queryParams.toString()}`);
//       return;
//     }

//     onClose?.();
//     setShowUploadModal(true);
//   };

//   const handlePrevious = () => {
//     setShowUploadModal(false);
//   };


//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     processFile(file);
//   };

//   const processFile = (file) => {
//     setFileSizeError(false);

//     if (file.type !== "application/pdf") {
//       toast.error("Please upload a valid PDF file");
//       return;
//     }

//     if (file.size > 3 * 1024 * 1024) {
//       setFileSizeError(true);
//       setLocalUploadedFile(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//       return;
//     }

//     setLocalUploadedFile(file);

//     const url = URL.createObjectURL(file);
//     setBlobUrl((prev) => {
//       if (prev) URL.revokeObjectURL(prev);
//       return url;
//     });
//   };

//   const handleDropZoneClick = () => fileInputRef.current?.click();

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files?.[0];
//     if (file) processFile(file);
//   };

//   const storeFileInLocalStorage = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = function (event) {
//         try {
//           const fileData = {
//             name: file.name,
//             type: file.type,
//             size: file.size,
//             lastModified: file.lastModified,
//             data: event.target.result,
//             blobUrl,
//           };
//           localStorage.setItem("uploadedPdfFile", JSON.stringify(fileData));
//           resolve(true);
//         } catch (err) {
//           reject(err);
//         }
//       };
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   // const handleUploadAndRoute = async () => {
//   //   if (!uploadedFile) {
//   //     toast.warning("Please select a PDF file before uploading");
//   //     return;
//   //   }

//   //   try {
//   //     await storeFileInLocalStorage(uploadedFile);

//   //     const queryParams = new URLSearchParams();
//   //     if (urlParams.dietician_id)
//   //       queryParams.append("dietician_id", urlParams.dietician_id);
//   //     if (urlParams.profile_id)
//   //       queryParams.append("profile_id", urlParams.profile_id);

//   //     setShowUploadModal(false);
//   //     router.push(`/plansummary?${queryParams.toString()}`);
//   //   } catch (err) {
//   //     console.error(err);
//   //     toast.error("Failed to upload file");
//   //   }
//   // };


//   const handleUploadAndRoute = async () => {
//     if (!uploadedFile) {
//       toast.warning("Please select a PDF file before uploading");
//       return;
//     }

//     try {
//       await storeFileInLocalStorage(uploadedFile);

//       // ✅ close upload modal
//       setShowUploadModal(false);

//       // ✅ clear uploaded pdf + reset input + revoke blob url
//       removeUploadedFile();

//       // ✅ optional: also reset step selection if you want fresh start next time
//       // setSelectedPlan("");
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to upload file");
//     }
//   };



//   const removeUploadedFile = () => {
//     setLocalUploadedFile(null);
//     setFileSizeError(false);
//     setBlobUrl((prev) => {
//       if (prev) URL.revokeObjectURL(prev);
//       return null;
//     });
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const ModalWrapper = ({ children, isUpload = false }) => {
//     const isVisible = isUpload ? showUploadModal : open;
//     const closeModal = isUpload ? () => setShowUploadModal(false) : onClose;

//     if (!isVisible) return null;

//     return (
//       <div
//         className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
//         onClick={closeModal}
//       >
//         <div
//           className="relative flex items-start gap-2"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="bg-white w-[90%] max-w-[620px] rounded-[10px] p-0">
//             {children}
//           </div>

//           <button
//             className="bg-white text-black px-3 py-1 rounded-md shadow translate-x-3 cursor-pointer mt-0"
//             onClick={closeModal}
//             aria-label="Close"
//           >
//             x
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const ProgressFrame = ({ children }) => {
//     const showShimmer =
//       displayProgress < 100 && Math.abs(displayProgress - targetProgress) > 0.2;

//     return (
//       <div
//         className="relative flex flex-col gap-[107px] pt-[50px] px-8 pb-8 
//         border border-[#E1E6ED] rounded-[8px] overflow-hidden"
//       >
//         <div className="absolute top-0 left-0 w-full h-[8px] bg-[#E1E6ED]">
//           <div
//             className="relative h-[8px] bg-[#308BF9] overflow-hidden"
//             style={{ width: `${displayProgress}%` }}
//           >
//             {showShimmer && (
//               <div
//                 className="absolute inset-0 animate-shimmer opacity-40"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.7) 50%, rgba(255,255,255,0) 100%)",
//                 }}
//               />
//             )}
//           </div>
//         </div>

//         {children}
//       </div>
//     );
//   };

//   // ✅ Duration block (reused in BOTH modals)
//   const DurationSection = () => {
//     return (
//       <div className="flex-1">
//         <span className="px-[9px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px]">
//           Duration
//         </span>

//         <div className="flex gap-2 mt-2">
//           {/* From */}
//           <div className="relative w-full">
//             <p className="px-[9px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px] mb-2">
//               Plan Start from
//             </p>

//             <div
//               onClick={() => fromRef.current?.showPicker?.()}
//               className="cursor-pointer flex py-[15px] pl-[19px] pr-[13px] rounded-[8px] bg-white border border-[#E1E6ED]"
//             >
//               <input
//                 type="text"
//                 value={formatDDMMYYYY(fromDate)}
//                 placeholder="DD/MM/YYYY"
//                 disabled
//                 className="w-full outline-none bg-transparent text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF] cursor-pointer"
//               />
//               <Image
//                 src="/icons/hugeicons_calendar-03.svg"
//                 alt="calendar"
//                 width={20}
//                 height={20}
//               />
//             </div>

//             <input
//               ref={fromRef}
//               type="date"
//               className="absolute opacity-0 pointer-events-none"
//               onChange={(e) => setFromDate(e.target.value)}
//             />
//           </div>


//           {/* To */}
//           <div className="relative w-full">
//             <p className="px-[9px] text-[#252525] text-[12px] leading-normal font-semibold tracking-[-0.24px] mb-2">
//               Plan End to
//             </p>

//             <div
//               onClick={() => toRef.current?.showPicker?.()}
//               className="cursor-pointer flex py-[15px] pl-[19px] pr-[13px] rounded-[8px] bg-white border border-[#E1E6ED]"
//             >
//               <input
//                 type="text"
//                 value={formatDDMMYYYY(toDate)}
//                 placeholder="DD/MM/YYYY"
//                 disabled
//                 className="w-full outline-none bg-transparent text-[#252525] text-[14px] font-normal leading-normal tracking-[-0.2px] placeholder:text-[#9CA3AF] cursor-pointer"
//               />
//               <Image
//                 src="/icons/hugeicons_calendar-03.svg"
//                 alt="calendar"
//                 width={20}
//                 height={20}
//               />
//             </div>

//             <input
//               ref={toRef}
//               type="date"
//               className="absolute opacity-0 pointer-events-none"
//               onChange={(e) => setToDate(e.target.value)}
//             />
//           </div>

//         </div>
//       </div>
//     );
//   };

//   // ✅ IMPORTANT: return null ONLY AFTER all hooks are declared
//   if (!open && !showUploadModal) return null;

//   return (
//     <>
//       {/* Modal 1 */}
//       <ModalWrapper>
//         <ProgressFrame>
//           <div className="flex flex-col items-center gap-4">
//             {/* ✅ Duration is shown here */}
//             <DurationSection />

//             {/* <div className="flex gap-5 ">
//               <div className="mt-4"></div>

//               <div className="flex flex-col gap-5">
//                 <span className="text-[#252525] text-[15px] font-semibold">
//                   Create new plan
//                 </span>
//                 <p className="text-[#252525] text-[34px] leading-[110%]">
//                   How are you creating?
//                 </p>
//               </div>

//               <div className="flex flex-col w-full gap-[15px]">
//                 {options.map((opt) => (
//                   <label
//                     key={opt.value}
//                     className={`flex gap-2.5 items-center py-[18px] pl-2.5 pr-3 rounded-[5px]
//                       cursor-pointer transition-colors
//                       ${selectedPlan === opt.value
//                         ? "border-[2px] border-[#308BF9] bg-[#F5F7FA]"
//                         : "border-[2px] border-[#E1E6ED] bg-[#F5F7FA]"
//                       }
//                     `}
//                   >
//                     <input
//                       type="radio"
//                       name="planType"
//                       value={opt.value}
//                       checked={selectedPlan === opt.value}
//                       onChange={() => setSelectedPlan(opt.value)}
//                     />
//                     <span className="text-[#252525] text-[15px]">
//                       {opt.label}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div> */}
//           </div>

//           {/* <div className="flex justify-end">
//             <button
//               onClick={handleNext}
//               disabled={!selectedPlan}
//               className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] cursor-pointer
//                 ${selectedPlan
//                   ? "bg-[#308BF9]"
//                   : "bg-gray-400 cursor-not-allowed"
//                 }`}
//             >
//               Next
//             </button>
//           </div> */}
//         </ProgressFrame>
//       </ModalWrapper>

//       {/* Modal 2 (Upload modal) */}
//       <ModalWrapper isUpload={true}>
//         <div className="flex flex-col gap-0">
//           <ProgressFrame>
//             {/* ✅ Duration is shown here ALSO (and stays even after PDF upload) */}
//             <DurationSection />

//             <div className="flex gap-6 pt-[0px]">
//               <div className="flex flex-col gap-3">
//                 <span className="text-[#252525] text-[15px] font-semibold">
//                   Create new plan
//                 </span>
//                 <p className="text-[#252525] text-[34px] leading-[110%]">
//                   Upload plan file (.pdf)
//                 </p>
//                 <p className="text-[#535359] text-[12px] font-semibold">
//                   File size max. 3MB
//                 </p>
//               </div>

//               <div className="flex flex-col w-full gap-4">
//                 {!uploadedFile && (
//                   <div
//                     className={`w-full border-2 border-dashed rounded-[10px] p-8 text-center cursor-pointer
//                       ${fileSizeError
//                         ? "border-[#DA5747] bg-[#FFF5F5]"
//                         : "border-[#E1E6ED]"
//                       }`}
//                     onClick={handleDropZoneClick}
//                     onDrop={handleDrop}
//                     onDragOver={(e) => e.preventDefault()}
//                   >
//                     <div className="flex flex-col items-center gap-6">
//                       <Image
//                         src="/icons/hugeicons_cursor-magic-selection-04.svg"
//                         alt="upload"
//                         width={48}
//                         height={48}
//                       />

//                       <input
//                         ref={fileInputRef}
//                         type="file"
//                         accept="application/pdf,.pdf"
//                         onChange={handleFileChange}
//                         className="hidden"
//                       />

//                       {!fileSizeError && (
//                         <p className="text-[#252525] text-[15px]">
//                           Drag or browse from My Computer
//                         </p>
//                       )}

//                       {fileSizeError && (
//                         <p className="text-[#DA5747] text-[14px]">
//                           File must be less than 3MB
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {uploadedFile && (
//                   <div className="flex gap-[120px] items-center py-[18px] pl-[15px] pr-6 border-2 border-[#308BF9] rounded-[5px] bg-[#F5F7FA]">
//                     <div className="flex gap-5 items-center whitespace-nowrap">
//                       <Image
//                         src="/icons/hugeicons_pdf-01.svg"
//                         alt="hugeicons_pdf-01.svg"
//                         width={24}
//                         height={24}
//                       />
//                       <p className="text-[#308BF9] text-[12px] font-semibold leading-normal tracking-[-0.24px] whitespace-nowrap">
//                         {uploadedFile.name}
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={removeUploadedFile}
//                       className="cursor-pointer"
//                       aria-label="Remove file"
//                     >
//                       <Image
//                         src="/icons/hugeicons_delete-02.svg"
//                         alt="hugeicons_delete-01.svg"
//                         width={20}
//                         height={20}
//                       />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="flex gap-[15px] justify-end">
//               <div className="px-5 py-[15px]">
//                 <button
//                   type="button"
//                   onClick={handlePrevious}
//                   className="text-[#535359] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Previous</button>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   onClick={handleUploadAndRoute}
//                   disabled={!uploadedFile || fileSizeError}
//                   className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] cursor-pointer
//                   ${!uploadedFile || fileSizeError
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-[#308BF9]"
//                     }`}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </ProgressFrame>
//         </div>
//       </ModalWrapper>

//       <style jsx global>{`
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         .animate-shimmer {
//           animation: shimmer 1.2s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }












// "use client";

// import { useState, useEffect, useRef, useMemo } from "react";
// import Image from "next/image";
// import { toast } from "sonner";

// export default function CreatePlanPopUp({ open, onClose }) {
//   const fileInputRef = useRef(null);
//   const fromRef = useRef(null);
//   const toRef = useRef(null);

//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");

//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [uploadedFile, setLocalUploadedFile] = useState(null);
//   const [blobUrl, setBlobUrl] = useState(null);
//   const [fileSizeError, setFileSizeError] = useState(false);
//   const [displayProgress, setDisplayProgress] = useState(0);

//   /* ✅ OPEN UPLOAD MODAL DIRECTLY */
//   useEffect(() => {
//     if (open) setShowUploadModal(true);
//     else setShowUploadModal(false);
//   }, [open]);

//   /* ESC close */
//   useEffect(() => {
//     if (!showUploadModal) return;
//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         setShowUploadModal(false);
//         onClose?.();
//       }
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [showUploadModal, onClose]);

//   useEffect(() => {
//     return () => {
//       if (blobUrl) URL.revokeObjectURL(blobUrl);
//     };
//   }, [blobUrl]);

//   const formatDDMMYYYY = (v) => {
//     if (!v) return "";
//     const [y, m, d] = v.split("-");
//     return `${d}/${m}/${y}`;
//   };

//   /* Progress logic */
//   const targetProgress = useMemo(() => {
//     if (!uploadedFile) return 66;
//     return 100;
//   }, [uploadedFile]);

//   useEffect(() => {
//     const start = displayProgress;
//     const end = targetProgress;
//     if (start === end) return;

//     const duration = 1200;
//     let startTime;

//     const ease = (t) => 1 - Math.pow(1 - t, 3);

//     const step = (ts) => {
//       if (!startTime) startTime = ts;
//       const p = Math.min(1, (ts - startTime) / duration);
//       setDisplayProgress(start + (end - start) * ease(p));
//       if (p < 1) requestAnimationFrame(step);
//     };

//     requestAnimationFrame(step);
//   }, [targetProgress]);

//   /* File handlers */
//  const processFile = (file) => {
//   setFileSizeError(false);

//   if (file.type !== "application/pdf") {
//     //toast.error("Please upload a valid PDF file");
//     return;
//   }

//   if (file.size > 3 * 1024 * 1024) {
//     setFileSizeError(true);
//     //toast.error("Please upload PDF less than 3 MB");
//     if (fileInputRef.current) fileInputRef.current.value = ""; // optional: reset chooser
//     return;
//   }

//   setLocalUploadedFile(file);
//   const url = URL.createObjectURL(file);
//   setBlobUrl(url);
// };


//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) processFile(file);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files?.[0];
//     if (file) processFile(file);
//   };

//   const removeUploadedFile = () => {
//     setLocalUploadedFile(null);
//     setFileSizeError(false);
//     if (blobUrl) URL.revokeObjectURL(blobUrl);
//     setBlobUrl(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//  const handleUploadAndRoute = () => {
//     if (!uploadedFile) {
//       toast.warning("Please upload a PDF");
//       return;
//     }

//     onUploaded?.(uploadedFile);

//     setShowUploadModal(false);
//     onClose?.();
//   };


//   if (!showUploadModal) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]"
//       onClick={onClose}
//     >
//       <div
//         className="relative bg-white w-[90%] max-w-[620px] rounded-[10px]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* ❌ CLOSE */}
//         <button
//           onClick={onClose}
//           className="absolute -right-10 top-0 bg-white px-3 py-1 rounded shadow"
//         >
//           x
//         </button>

//         {/* PROGRESS */}
//         <div className="relative border border-[#E1E6ED] rounded-[8px] pt-[50px] px-8 pb-8">
//           <div className="absolute top-0 left-0 w-full h-[8px] bg-[#E1E6ED]">
//             <div
//               className="h-[8px] bg-[#308BF9]"
//               style={{ width: `${displayProgress}%` }}
//             />
//           </div>

//           {/* DURATION */}
//           <div className="mb-10">
//             <span className="text-[12px] font-semibold">Duration</span>

//             <div className="flex gap-2 mt-3">
//               <div className="w-full">
//                 <p className="text-[12px] font-semibold mb-2">
//                   Plan Start from
//                 </p>
//                 <div
//                   onClick={() => fromRef.current?.showPicker()}
//                   className="flex items-center border rounded px-4 py-3 cursor-pointer"
//                 >
//                   <input
//                     disabled
//                     value={formatDDMMYYYY(fromDate)}
//                     placeholder="DD/MM/YYYY"
//                     className="w-full bg-transparent outline-none"
//                   />
//                   <Image
//                     src="/icons/hugeicons_calendar-03.svg"
//                     width={20}
//                     height={20}
//                     alt=""
//                   />
//                 </div>
//                 <input
//                   ref={fromRef}
//                   type="date"
//                   className="hidden"
//                   onChange={(e) => setFromDate(e.target.value)}
//                 />
//               </div>

//               <div className="w-full">
//                 <p className="text-[12px] font-semibold mb-2">
//                   Plan End to
//                 </p>
//                 <div
//                   onClick={() => toRef.current?.showPicker()}
//                   className="flex items-center border rounded px-4 py-3 cursor-pointer"
//                 >
//                   <input
//                     disabled
//                     value={formatDDMMYYYY(toDate)}
//                     placeholder="DD/MM/YYYY"
//                     className="w-full bg-transparent outline-none"
//                   />
//                   <Image
//                     src="/icons/hugeicons_calendar-03.svg"
//                     width={20}
//                     height={20}
//                     alt=""
//                   />
//                 </div>
//                 <input
//                   ref={toRef}
//                   type="date"
//                   className="hidden"
//                   onChange={(e) => setToDate(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* UPLOAD SECTION */}
//           <div className="flex gap-6">
//             <div className="flex flex-col gap-1">
//               <p className="text-[15px] font-semibold">Create new plan</p>
//               <p className="text-[28px] leading-[110%]">
//                 Upload diet  <br></br> plan file (.pdf)
//               </p>

//               <p className="text-[12px] font-semibold text-[#535359]">
//                 File size max. 3MB
//               </p>
//             </div>

//             <div className="flex-1">
//               {!uploadedFile && (
//                 <div
//                   onClick={() => fileInputRef.current?.click()}
//                   onDrop={handleDrop}
//                   onDragOver={(e) => e.preventDefault()}
//                   className={`flex border-2 border-dashed rounded p-8 text-center cursor-pointer ${
//                     fileSizeError
//                       ? "border-[#DA5747] bg-red-50"
//                       : "border-[#E1E6ED]"
//                   }`}
//                 >
//                   <Image
//                     src="/icons/hugeicons_cursor-magic-selection-04.svg"
//                     width={32}
//                     height={32}
//                     alt=""
//                   />
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept=".pdf"
//                     hidden
//                     onChange={handleFileChange}
//                   />
//                   <p
//   className={`mt-4 text-[15px] ${
//     fileSizeError ? "text-[#DA5747] font-semibold" : ""
//   }`}
// >
//   {fileSizeError
//     ? "Please upload PDF less than 3 MB"
//     : "Drag or browse from My Computer"}
// </p>

//                 </div>
//               )}

//               {uploadedFile && (
//                 <div className="flex justify-between items-center border-2 border-[#308BF9] bg-[#F5F7FA] p-4 rounded">
//                   <span className="text-[#308BF9] text-[12px] font-semibold">
//                     {uploadedFile.name}
//                   </span>
//                   <button onClick={removeUploadedFile}>
//                     <Image
//                       src="/icons/hugeicons_delete-02.svg"
//                       width={20}
//                       height={20}
//                       alt=""
//                     />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ACTIONS */}
//           <div className="flex justify-end gap-4 mt-8">
//             {/* <button
//               onClick={onClose}
//               className="text-[12px] font-semibold text-[#535359]"
//             >
//               Previous
//             </button> */}

//             <button
//               onClick={handleUploadAndRoute}
//               disabled={!uploadedFile}
//               className={`px-6 py-2 rounded text-white text-[12px] ${
//                 uploadedFile ? "bg-[#308BF9]" : "bg-gray-400"
//               }`}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// "use client";

// import { useState, useEffect, useRef, useMemo } from "react";
// import Image from "next/image";
// import { toast } from "sonner";

// export default function CreatePlanPopUp({ open, onClose, onUploaded }) {
//   const fileInputRef = useRef(null);
//   const fromRef = useRef(null);
//   const toRef = useRef(null);

//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");

//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [uploadedFile, setLocalUploadedFile] = useState(null);
//   const [blobUrl, setBlobUrl] = useState(null);
//   const [fileSizeError, setFileSizeError] = useState(false);
//   const [displayProgress, setDisplayProgress] = useState(0);

//   useEffect(() => {
//     if (open) setShowUploadModal(true);
//     else setShowUploadModal(false);
//   }, [open]);

//   useEffect(() => {
//     if (!showUploadModal) return;
//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         setShowUploadModal(false);
//         onClose?.();
//       }
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [showUploadModal, onClose]);

//   useEffect(() => {
//     return () => {
//       if (blobUrl) URL.revokeObjectURL(blobUrl);
//     };
//   }, [blobUrl]);

//   const formatDDMMYYYY = (v) => {
//     if (!v) return "";
//     const [y, m, d] = v.split("-");
//     return `${d}/${m}/${y}`;
//   };


//   const openFromPicker = () => {
//     if (!fromRef.current) return;
//     if (fromRef.current.showPicker) fromRef.current.showPicker();
//     else fromRef.current.click();
//     fromRef.current.focus();
//   };

//   const openToPicker = () => {
//     if (!toRef.current) return;
//     if (toRef.current.showPicker) toRef.current.showPicker();
//     else toRef.current.click();
//     toRef.current.focus();
//   };


//   const targetProgress = useMemo(() => {
//     if (!uploadedFile) return 66;
//     return 100;
//   }, [uploadedFile]);

//   useEffect(() => {
//     const start = displayProgress;
//     const end = targetProgress;
//     if (start === end) return;

//     const duration = 1200;
//     let startTime;

//     const ease = (t) => 1 - Math.pow(1 - t, 3);

//     const step = (ts) => {
//       if (!startTime) startTime = ts;
//       const p = Math.min(1, (ts - startTime) / duration);
//       setDisplayProgress(start + (end - start) * ease(p));
//       if (p < 1) requestAnimationFrame(step);
//     };

//     requestAnimationFrame(step);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [targetProgress]);

//   const processFile = (file) => {
//     setFileSizeError(false);

//     if (file.type !== "application/pdf") return;

//     if (file.size > 3 * 1024 * 1024) {
//       setFileSizeError(true);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//       return;
//     }

//     setLocalUploadedFile(file);
//     const url = URL.createObjectURL(file);
//     setBlobUrl(url);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) processFile(file);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files?.[0];
//     if (file) processFile(file);
//   };

//   const removeUploadedFile = () => {
//     setLocalUploadedFile(null);
//     setFileSizeError(false);
//     if (blobUrl) URL.revokeObjectURL(blobUrl);
//     setBlobUrl(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleUploadAndRoute = () => {
//     if (!uploadedFile) {
//       toast.warning("Please upload a PDF");
//       return;
//     }

//     // ✅ SEND FILE TO PARENT (MealLogged)
//     onUploaded?.(uploadedFile);

//     setShowUploadModal(false);
//     onClose?.();
//   };

//   if (!showUploadModal) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]"
//       onClick={onClose}
//     >
//       <div
//         className="relative bg-white w-[90%] max-w-[620px] rounded-[10px]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute -right-10 top-0 bg-white px-3 py-1 rounded shadow cursor-pointer"
//         >
//           x
//         </button>

//         <div className="relative border border-[#E1E6ED] rounded-[8px] pt-[50px] px-8 pb-8">
//           <div className="absolute top-0 left-0 w-full h-[8px] bg-[#E1E6ED]">
//             <div
//               className="h-[8px] bg-[#308BF9]"
//               style={{ width: `${displayProgress}%` }}
//             />
//           </div>

//           <div className="mb-10">
//             <span className="text-[12px] font-semibold">Duration</span>

//             <div className="flex gap-2 mt-3">
//            <div className="relative flex-1">
//                 <p className="text-[12px] font-semibold mb-2">Plan Start from</p>

//                 <div
//                   onClick={openFromPicker}
//                   className="flex items-center border rounded px-4 py-3 cursor-pointer"
//                 >
//                   <input
//                     type="text"
//                     readOnly
//                     value={formatDDMMYYYY(fromDate)}
//                     placeholder="DD/MM/YYYY"
//                     className="w-full bg-transparent outline-none cursor-pointer text-[14px] font-normal"
//                   />
//                   <Image
//                     src="/icons/hugeicons_calendar-03.svg"
//                     width={20}
//                     height={20}
//                     alt=""
//                   />
//                 </div>


//                 <input
//                   ref={fromRef}
//                   type="date"
//                   className="sr-only"
//                   value={fromDate}
//                   onChange={(e) => setFromDate(e.target.value)}
//                 />
//               </div>



//             <div className="relative flex-1">
//                 <p className="text-[12px] font-semibold mb-2">Plan End to</p>

//                 <div
//                   onClick={openToPicker}
//                   className="flex items-center border rounded px-4 py-3 cursor-pointer"
//                 >
//                   <input
//                     type="text"
//                     readOnly
//                     value={formatDDMMYYYY(toDate)}
//                     placeholder="DD/MM/YYYY"
//                     className="w-full bg-transparent outline-none cursor-pointer text-[14px] font-normal"
//                   />
//                   <Image
//                     src="/icons/hugeicons_calendar-03.svg"
//                     width={20}
//                     height={20}
//                     alt=""
//                   />
//                 </div>

//                 <input
//                   ref={toRef}
//                   type="date"
//                   className="sr-only"
//                   value={toDate}
//                   onChange={(e) => setToDate(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-6">
//             <div className="flex flex-col gap-1">
//               {/* <p className="text-[15px] font-semibold">Create new plan</p> */}
//               <p className="text-[28px] leading-[110%]">
//                 Upload diet <br /> plan file (.pdf)
//               </p>
//               <p className="text-[12px] font-semibold text-[#535359]">
//                 File size max. 3MB
//               </p>
//             </div>

//             <div className="flex-1">
//               {!uploadedFile && (
//                 <div
//                   onClick={() => fileInputRef.current?.click()}
//                   onDrop={handleDrop}
//                   onDragOver={(e) => e.preventDefault()}
//                   className={`flex border-2 border-dashed rounded p-8 text-center cursor-pointer ${fileSizeError ? "border-[#DA5747] bg-red-50" : "border-[#E1E6ED]"
//                     }`}
//                 >
//                   <Image
//                     src="/icons/hugeicons_cursor-magic-selection-04.svg"
//                     width={32}
//                     height={32}
//                     alt=""
//                   />
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept=".pdf"
//                     hidden
//                     onChange={handleFileChange}
//                   />
//                   <p
//                     className={`mt-4 text-[15px] ${fileSizeError ? "text-[#DA5747] font-semibold" : ""
//                       }`}
//                   >
//                     {fileSizeError
//                       ? "Please upload PDF less than 3 MB"
//                       : "Drag or browse from My Computer"}
//                   </p>
//                 </div>
//               )}

//               {uploadedFile && (
//                 <div className="flex justify-between items-center border-2 border-[#308BF9] bg-[#F5F7FA] p-4 rounded">
//                   <div className="flex gap-5">
//                   <Image
//                       src="/icons/hugeicons_pdf-01.svg"
//                       width={20}
//                       height={20}
//                       alt=""
//                     />

//                   <span className="text-[#308BF9] text-[12px] font-semibold">
//                     {uploadedFile.name}
//                   </span>
//                   </div>
//                   <button onClick={removeUploadedFile} 
//                   className="cursor-pointer"
//                   >
//                     <Image
//                       src="/icons/hugeicons_delete-02.svg"
//                       width={20}
//                       height={20}
//                       alt=""
//                     />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex justify-end gap-4 mt-8">
//             <button
//               onClick={handleUploadAndRoute}
//               disabled={!uploadedFile}
//               className={`px-6 py-2 rounded text-white text-[12px] ${uploadedFile ? "bg-[#308BF9]" : "bg-gray-400"
//                 }`}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "sonner";

export default function CreatePlanPopUp({ open, onClose, onUploaded }) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);

  // State to hold food items for each day: { 0: ["Idli", "Noodles"], 1: [] }
  const [dayFoods, setDayFoods] = useState({});
  // State for the current text being typed in the active input
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (open) setShowUploadModal(true);
    else {
      setShowUploadModal(false);
      setExpandedDay(null);
    }
  }, [open]);

  // Handle adding a new food item
  const handleAddFood = (dayIndex) => {
    if (!inputValue.trim()) return;

    setDayFoods((prev) => ({
      ...prev,
      [dayIndex]: [...(prev[dayIndex] || []), inputValue.trim()],
    }));

    setInputValue(""); // Clear input after adding
  };

  // Handle removing a food item
  const handleRemoveFood = (dayIndex, foodIndex) => {
    setDayFoods((prev) => ({
      ...prev,
      [dayIndex]: prev[dayIndex].filter((_, i) => i !== foodIndex),
    }));
  };

  // Calculate total items across all days
  const totalItems = Object.values(dayFoods).reduce(
    (sum, foodsArray) => sum + (foodsArray?.length || 0),
    0
  );

  if (!showUploadModal) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-[90%] max-w-[620px] rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-10 top-0 bg-white px-3 py-1 rounded shadow cursor-pointer text-black"
        >
          x
        </button>

        {/* Fixed Header */}
        <div className="px-5 pt-[31px]">
          <div className="px-[9px] py-[5px]">
            <p className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
              05 July - 12 July
            </p>
            <p className="text-[#252525] text-[25px] font-semibold leading-[110%] tracking-[-0.5px]">
              Add Food
            </p>
          </div>
          <div className="border-b border-[#E1E6ED]"></div>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[500px] overflow-y-auto scroll-hide px-5 pb-7">
          <div className="flex flex-col gap-3 border border-[#F5F7FA] bg-[#F5F7FA] rounded-[10px] px-[18px] py-7 mt-6">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-[15px] transition-all duration-300"
              >
                {/* Day Header */}
                <div
                  onClick={() => {
                    setExpandedDay(expandedDay === index ? null : index);
                    setInputValue(""); // Clear input when switching days
                  }}
                  className="flex justify-between items-center py-[18px] pl-[38px] pr-7 cursor-pointer"
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-[#252525] text-[15px] font-normal leading-[110%] tracking-[-0.3px]">
                      Day {index + 1}
                    </p>
                    <p className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                      {dayFoods[index]?.length || 0} Items added
                    </p>
                  </div>
                  <div
                    className={`transition-transform duration-200 ${
                      expandedDay === index ? "rotate-180" : ""
                    }`}
                  >
                    <Image
                      src="/icons/right-down button.svg"
                      alt="toggle"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedDay === index && (
                  <div className="px-[38px] pb-[18px] animate-in fade-in slide-in-from-top-1">
                    {/* Input Box */}
                    <div className="flex justify-between items-center bg-white border border-[#E1E6ED] rounded-[8px] py-[7px] pl-5 pr-2.5">
                      <input
                        type="text"
                        placeholder="Enter food"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleAddFood(index)
                        }
                        className="text-[#252525] text-[12px] font-normal outline-none w-full"
                      />
                      <div
                        onClick={() => handleAddFood(index)}
                        className="flex justify-center items-center bg-[#308BF9] rounded-[4px] p-1 cursor-pointer hover:bg-blue-600 transition-colors"
                      >
                        <Image
                          src="/icons/hugeicons_addplus-01.svg"
                          alt="add"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-[12px] mt-[13px]">
                      {(dayFoods[index] || []).map((food, foodIndex) => (
                        <div
                          key={foodIndex}
                          className="flex items-center gap-3 py-[5px] pl-3 pr-[7px] bg-[#CAE1FF99] rounded-[8px]"
                        >
                          <p className="text-[#252525] text-[15px] font-normal leading-[130%] tracking-[-0.3px]">
                            {food}
                          </p>
                          <Image
                            src="/icons/close cancel icon.svg"
                            alt="remove"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                            onClick={() => handleRemoveFood(index, foodIndex)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="flex gap-3.5 justify-end items-center px-5 pb-7">
          <div className="mt-[23px] p-2.5">
            <p className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
              {totalItems} Items added
            </p>
          </div>

          <div className="flex justify-end mt-[23px]">
            <button
              onClick={() => {
                onUploaded?.(dayFoods);
                toast.success("Plan submitted successfully!");
              }}
              className="rounded-[10px] cursor-pointer text-[#FFFFFF] text-[12px] font-semibold bg-[#308BF9] px-5 py-[15px] hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}