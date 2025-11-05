"use client";

import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CreatePlanModal({ open, onClose }) {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  const options = [
    // { value: "auto", label: "Automatically fill" },
       { value: "auto", label: "Upload Files" },
    { value: "manual", label: "Manual fill" },
    { value: "copy", label: "Copy previous plan" },
  ];

  const handleNext = () => {
    if (!selectedPlan) return;

    if (selectedPlan === "manual") {
      onClose?.();
      router.push("/plansummary"); // <-- redirect here
      return;
    }

    // For auto/copy -> open upload modal
    onClose?.();
    setShowUploadModal(true);
  };

  const handleCloseUploadModal = () => setShowUploadModal(false);

  return (
    <>
      {/* STEP 1: choose creation type */}
      <Modal
        open={open}
        onClose={onClose}
        center
        focusTrapped
        closeOnOverlayClick
        showCloseIcon={false}
        classNames={{ modal: "rounded-[10px] p-0", overlay: "bg-black/40" }}
        styles={{ modal: { padding: 0, maxWidth: 620, width: "90%" } }}
        aria-labelledby="create-plan-title"
      >
        <div className="flex flex-col gap-[107px] pt-[50px] px-8 pb-8">
          <div className="flex gap-5">
            <div className="max-w-[236px] flex flex-col gap-5">
              <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
                Create new plan
              </span>
              <p className="text-[#252525] text-[34px] font-normal leading-[110%] tracking-[-0.3px]">
                How are you creating?
              </p>
            </div>

            <div className="flex flex-col w-full gap-[15px]">
              {options.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex gap-2.5 items-center py-[18px] pl-2.5 pr-3 rounded-[5px] cursor-pointer transition-colors
                    ${selectedPlan === opt.value
                      ? "border-[2px] border-[#308BF9] bg-[#F5F7FA]"
                      : "border-[2px] border-[#E1E6ED] bg-[#F5F7FA] hover:border-[#BFD8FF]"
                    }`}
                >
                  <input
                    type="radio"
                    name="planType"
                    value={opt.value}
                    checked={selectedPlan === opt.value}
                    onChange={() => setSelectedPlan(opt.value)}
                    className="w-4 h-4 text-[#308BF9] border-gray-300 focus:ring-[#308BF9]"
                  />
                  <span className="text-[#252525] text-[15px] font-normal leading-normal tracking-[-0.3px]">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={handleNext}
              disabled={!selectedPlan}
              className={`w-[146px] px-4 py-2 rounded-[10px] text-white text-[12px] font-semibold tracking-[-0.24px] cursor-pointer
                ${selectedPlan ? "bg-[#308BF9]" : "bg-gray-400 cursor-not-allowed"}`}
            >
              Next
            </button>
          </div>
        </div>
      </Modal>

      {/* STEP 2: upload modal (for auto/copy) */}
      <Modal
        open={showUploadModal}
        onClose={handleCloseUploadModal}
        center
        focusTrapped
        closeOnOverlayClick
        showCloseIcon={false}
        classNames={{ modal: "rounded-[10px] p-0", overlay: "bg-black/40" }}
        styles={{ modal: { padding: 0, maxWidth: 620, width: "90%" } }}
        aria-labelledby="upload-file-title"
      >
        <div className="flex gap-6 pt-[50px] px-8 pb-8">
          <div className="max-w-[236px] flex flex-col gap-5">
            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">
              Create new plan
            </span>
            <p className="text-[#252525] text-[34px] font-normal leading-[110%] tracking-[-0.3px]">
              Upload plan file (.pdf)
            </p>
          </div>

          <div className="flex-1 border-2 border-dashed border-[#E1E6ED] rounded-[10px] p-8 text-center cursor-pointer hover:bg-[#F5F7FA] transition-colors">
            <div className="flex flex-col items-center gap-6">
              <Image
                src="/icons/hugeicons_cursor-magic-selection-04.svg"
                alt="upload"
                width={48}
                height={48}
              />

              <label htmlFor="file-upload" className="cursor-pointer">
                <input id="file-upload" type="file" className="hidden" />
                <p className="text-[#252525] text-[15px]">Drag or browse from My Computer</p>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 px-8 pb-8">
          <button
            onClick={handleCloseUploadModal}
            className="w-[146px] px-4 py-2 rounded-[10px] bg-gray-300 text-[#252525] text-[12px] font-semibold"
          >
            Previous
          </button>
          <button
            onClick={handleCloseUploadModal}
            className="w-[146px] px-4 py-2 rounded-[10px] bg-[#308BF9] text-white text-[12px] font-semibold"
          >
            Upload
          </button>
        </div>
      </Modal>
    </>
  );
}
