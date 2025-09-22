"use client";

import { Modal } from "react-responsive-modal";

export default function CreatePlanModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      focusTrapped
      closeOnOverlayClick
      showCloseIcon={false}
      classNames={{
        modal: "rounded-[10px] p-0",        // you can style the inner container with Tailwind
        overlay: "bg-black/40",          // dim the background
      }}
      closeIcon={<span className="text-[#252525] text-xl px-2">✕</span>}
      styles={{
        modal: { padding: 0, maxWidth: 520, width: "90%" },
      }}
      aria-labelledby="create-plan-title"
    >
      <div className="pt-[50px] px-8">

        <div className="flex  gap-5">
       <div className="w-[236px] flex flex-col gap-5">
<span className="text-[#252525]  text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Create new plan</span>
<p className="text-[#252525]  text-[34px] font-normal leading-[110%] tracking-[-0.3px]">How are you creating?</p>
       </div>



       <div className="flex flex-col gap-[15px]">
<div className="flex gap-2.5 items-center py-[18px] pl-2.5 pr-3 bg-[#F5F7FA] rounded-[5px] border-[2px] border-[#308BF9]">
      <input
    type="radio"
    name="planType"   
    value="manual"
    className="w-4 h-4 text-[#308BF9] border-gray-300 focus:ring-[#308BF9]"
  />
    <span className="text-[#252525] text-[15px] font-normal leading-normal tracking-[-0.3px]">Manual fill</span>
</div>


<div className="flex gap-2.5 items-center py-[18px] pl-2.5 pr-3 bg-[#F5F7FA] rounded-[5px] border-[2px] border-[#308BF9]">
      <input
    type="radio"
    name="planType" 
    value="manual"
    className="w-4 h-4 text-[#308BF9] border-gray-300 focus:ring-[#308BF9]"
  />
    <span className="text-[#252525] text-[15px] font-normal leading-normal tracking-[-0.3px]">Copy previous plan</span>
</div>
       </div>
</div>

<div>

</div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-[#E1E6ED] text-[12px]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // submit logic here
              onClose();
            }}
            className="px-4 py-2 rounded-md bg-[#308BF9] text-white text-[12px]"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}
