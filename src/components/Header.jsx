"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MonoIcon = ({ src, size = 20, color = "#A1A1A1", alt = "" }) => (
  <span
    role="img"
    aria-label={alt}
    style={{
      width: size,
      height: size,
      display: "inline-block",
      backgroundColor: color,
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
    }}
  />
);

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  // Update active state when route changes
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const menu = [
    { name: "Dashboard", icon: "/icons/hugeicons_home-05.svg", path: "/dashboard" },
    { name: "Client", icon: "/icons/hugeicons_user-group.png", path: "/client" },
    { name: "Messages", icon: "/icons/hugeicons_message-02.svg", path: "/messages" },
    { name: "Settings", icon: "/icons/hugeicons_settings-03.svg", path: "/settings" },
  ];

  return (
    <div className="flex justify-between bg-[#F5F7FA] p-4">
      <div className="flex">
        <Link href="/dashboard">
          <img src="/icons/logorespyr.png" alt="logo" width={50} height={50} />
        </Link>
      </div>

      <div className="flex gap-[15px]">
        {menu.map((m) => {
          const isActive = active === m.path;
          const color = isActive ? "#308BF9" : "#A1A1A1";
          return (
            <Link href={m.path} key={m.name} onClick={() => setActive(m.path)}>
              <button
                className="flex items-center gap-1.5 cursor-pointer rounded-[15px] px-[20px] py-[15px] bg-white"
              >
                <MonoIcon src={m.icon} color={color} alt={m.name} />
                <span
                  className={`font-semibold text-[12px]`}
                  style={{ color }}
                >
                  {m.name}
                </span>
              </button>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-5">
       <div className="flex items-center cursor-pointer rounded-[15px] p-[13px] bg-white">
    <MonoIcon src="/icons/hugeicons_notification-01.svg" color="#A1A1A1" alt="notification" />
  </div>

   <Link
          href="/loginuser"
         className="flex items-center cursor-pointer rounded-[15px] p-[13px] bg-white"
          aria-label="User"
        >
          <MonoIcon src="/icons/hugeicons_user.svg" color="#A1A1A1" size={20} alt="user" />
        </Link>
      </div>
    </div>
  );
}

