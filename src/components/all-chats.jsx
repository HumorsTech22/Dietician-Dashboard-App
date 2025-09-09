import { UserProfile } from "./user-profile";
import Image from "next/image";

export default function AllChats() {
  const chats = [
    { name: "Sagar Hosur", message: "Lorem ipsum dolor sit amet consectetur sit amet consectetur..", badgeCount: 1 },
    { name: "Manoranjan", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
    { name: "lorem", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
    { name: "Manoranjan", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
    { name: "Manoranjan", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
    { name: "Manoranjan", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
    { name: "Manoranjan", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
    { name: "Manoranjan", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
    { name: "Manoranjan", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
    { name: "Manoranjan", message: "Another sample message that is too long and needs trimming...", badgeCount: 2 },
  ];

  return (
    <>
      <div className="bg-white h-screen flex flex-col">
        {/* Header */}
        <div>
          <p className="text-black">All Chats</p>
        </div>
        <div>
          <UserProfile />
        </div>

        {/* Chats list with scroll */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat, index) => (
            <div key={index} className="flex items-center gap-2 px-[15px] py-3.5">
              <div className="p-2 bg-[#F0F0F0] rounded-full shrink-0">
                <Image
                  src="/icons/hugeicons_user-circle-02.svg"
                  alt="hugeicons_user-circle"
                  width={24}
                  height={24}
                />
              </div>

              {/* text block grows but won't push badge */}
              <div className="flex-1 min-w-0">
                <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                  {chat.name}
                </p>
                <p className="text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px] truncate max-w-[calc(100%-20px)]">
                  {chat.message.length > 30 ? chat.message.slice(0, 30) + "..." : chat.message}
                </p>
              </div>

              <div className="ml-auto flex items-center justify-center w-5 h-5 bg-[#308BF9] rounded-full shrink-0">
                <p className="text-white text-center text-[10px] font-normal leading-normal tracking-[-0.2px]">
                  {chat.badgeCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
