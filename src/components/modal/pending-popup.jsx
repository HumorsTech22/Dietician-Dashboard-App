

import Modal from "react-responsive-modal";
import Image from "next/image";

export default function PendingPopUp({
  open,
  onClose,
  todayRequests: todayRequestsProp = [],
  yesterdayRequests: yesterdayRequestsProp = [],
}) {
  // ✅ Default Today requests array
  const defaultTodayRequests = [
    {
      id: 1,
      name: "Sagar",
      age: 28,
      gender: "Male",
      weight: "78 kgs",
      height: "178 cms",
      location: "Bangalore",
      image: "/icons/Ellipse 668.svg",
    },
    {
      id: 2,
      name: "Rohit",
      age: 31,
      gender: "Male",
      weight: "82 kgs",
      height: "172 cms",
      location: "Mumbai",
      image: "/icons/Ellipse 668.svg",
    },
    {
      id: 3,
      name: "Ankita",
      age: 25,
      gender: "Female",
      weight: "55 kgs",
      height: "162 cms",
      location: "Delhi",
      image: "/icons/Ellipse 668.svg",
    },
  ];

  // ✅ Default Yesterday requests array
  const defaultYesterdayRequests = [
    {
      id: 4,
      name: "Vijay",
      age: 29,
      gender: "Male",
      weight: "70 kgs",
      height: "170 cms",
      location: "Hyderabad",
      image: "/icons/Ellipse 668.svg",
    },
    {
      id: 5,
      name: "Priya",
      age: 27,
      gender: "Female",
      weight: "60 kgs",
      height: "165 cms",
      location: "Pune",
      image: "/icons/Ellipse 668.svg",
    },
    {
      id: 6,
      name: "Karan",
      age: 30,
      gender: "Male",
      weight: "75 kgs",
      height: "176 cms",
      location: "Chennai",
      image: "/icons/Ellipse 668.svg",
    },
    {
      id: 8,
      name: "Reynolds",
      age: 30,
      gender: "Male",
      weight: "75 kgs",
      height: "176 cms",
      location: "Chennai",
      image: "/icons/Ellipse 668.svg",
    },
    {
      id: 7,
      name: "Poornesh",
      age: 50,
      gender: "Male",
      weight: "85 kgs",
      height: "176 cms",
      location: "Chennai",
      image: "/icons/Ellipse 668.svg",
    },
    {
      id: 9,
      name: "Ravi",
      age: 36,
      gender: "Male",
      weight: "75 kgs",
      height: "176 cms",
      location: "Chennai",
      image: "/icons/Ellipse 668.svg",
    },
  ];

  // 👉 Use props if provided & non-empty, otherwise use defaults
  const todayRequests =
    todayRequestsProp && todayRequestsProp.length > 0
      ? todayRequestsProp
      : defaultTodayRequests;

  const yesterdayRequests =
    yesterdayRequestsProp && yesterdayRequestsProp.length > 0
      ? yesterdayRequestsProp
      : defaultYesterdayRequests;

  const totalPending =
    (todayRequests?.length || 0) + (yesterdayRequests?.length || 0);

  const hasToday = todayRequests.length > 0;
  const hasYesterday = yesterdayRequests.length > 0;

  return (
    <>
   
      <Modal
        open={open}
        onClose={onClose}
        center
        focusTrapped
        closeOnOverlayClick
        showCloseIcon={true}
        styles={{
          modal: {
            borderRadius: "10px",
          },
        }}
      >
       
        {/* Main container with fixed max height so inner area can scroll */}
        <div className="flex flex-col gap-[11px] bg-white rounded-[10px] max-h-[80vh] w-full">
          {/* Header (fixed area, content below scrolls) */}
          <div className="pl-[17px] pb-[25px] border-b">
            <p className="text-[#252525] text-[22px] font-semibold leading-normal tracking-[-0.8px]">
              Pending Request({totalPending})
            </p>
          </div>

          {/* Scrollable Content Box */}
          <div className="flex-1 overflow-y-auto pb-5 hide-scrollbar">
            <div className="flex flex-col gap-3 bg-[#F5F7FA] rounded-[10px] px-2.5 py-3">
              {totalPending === 0 ? (
                // ✅ No data at all → show empty state only
                <div className="flex flex-col items-center gap-4 px-4 py-6 mx-[147px] mt-[148px] mb-[293px]">
                  <p className="text-[#738298] text-[18px] font-semibold leading-[110%] tracking-[-0.6px] pb-1">
                    No requests available right now.
                  </p>
                  <p className="text-[#A1A1A1] text-[14px] font-normal leading-[110%] tracking-[-0.4px] whitespace-nowrap">
                    Once someone sends a request, it will appear here
                    automatically.
                  </p>
                </div>
              ) : (
                <>
                  {/* ✅ Show Today only if there are todayRequests */}
                  {hasToday && (
                    <>
                      <p className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] mt-3 ml-[10px]">
                        Today
                      </p>

                      {todayRequests.map((item) => (
                        <RequestRow key={item.id} item={item} />
                      ))}
                    </>
                  )}

                  {/* ✅ Show Yesterday only if there are yesterdayRequests */}
                  {hasYesterday && (
                    <>
                      <p className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] mt-5 ml-[10px]">
                        Yesterday
                      </p>

                      {yesterdayRequests.map((item) => (
                        <RequestRow key={item.id} item={item} />
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="flex gap-2.5 justify-end mt-[5px]">
            <button
              disabled={totalPending === 0}
              className={`w-[120px] px-5 py-[15px] rounded-[10px] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer
    ${
      totalPending === 0
        ? "bg-[#D9D9D9] border border-[#308BF9] text-[#535359] cursor-not-allowed"
        : "bg-[#308BF9] text-white"
    }
  `}
            >
              Accept All
            </button>

            <button className="w-[120px] bg-[#F5F7FA] border border-[#D9D9D9] rounded-[10px] px-5 py-[15px] text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer">
              Deny All
            </button>
          </div>
        </div>

       
       
      </Modal>
       
        
    </>
  );
}

function RequestRow({ item }) {
  return (
    <div className="flex border-b border-[#E1E6ED] py-4">
      {/* Left: Image + Name + Age/Gender */}
      <div className="flex items-center gap-[15px]">
        <div className="py-2.5 pl/[13px] pr/[7px] rounded-full">
          <Image src={item.image} alt={item.name} width={40} height={40} />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
            {item.name}
          </p>
          <p className="text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
            {item.age} years, {item.gender}
          </p>
        </div>
      </div>

      {/* Right: Weight / Height / Location / Actions */}
      <div className="flex items-center gap-[54px] ml-auto mr-3.5">
        <div className="p-2.5">
          <p className="text-[#252525] text-[10px] font-normal leading-[135%] tracking-[-0.2px]">
            Weight : {item.weight}
          </p>
          <p className="text-[#252525] text-[10px] font-normal leading-[135%] tracking-[-0.2px]">
            Height : {item.height}
          </p>
        </div>

        <div className="p-2.5 text-[#252525] text-[10px] font-normal leading-[126%] tracking-[-0.2px]">
          {item.location}
        </div>

        {/* Row buttons */}
        <div className="flex gap-2.5">
          <button className="w-[120px] bg-[#308BF9] px-5 py-[15px] rounded-[10px] text-white text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer">
            Accept
          </button>
          <button className="w-[120px] bg-[#F5F7FA] border border-[#D9D9D9] rounded-[10px] px-5 py-[15px] text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px] cursor-pointer">
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
