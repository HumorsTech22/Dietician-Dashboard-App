"use client";
import React, { useState } from "react";

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
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: "/icons/hugeicons_home-05.svg" },
    { name: "Client", icon: "/icons/hugeicons_user-group.png" },
    { name: "Messages", icon: "/icons/hugeicons_message-02.svg" },
    { name: "Settings", icon: "/icons/hugeicons_settings-03.svg" },
  ];

  return (
    <div className="flex justify-between bg-[#F5F7FA]">
      <div className="flex">
        {/* keep your logo <Image /> here */}
        <img src="/icons/logorespyr.png" alt="logo" width={50} height={50} />
      </div>

      <div className="flex gap-[15px]">
        {menu.map((m) => {
          const isActive = active === m.name;
          const color = isActive ? "#308BF9" : "#A1A1A1";
          return (
            <button
              key={m.name}
              onClick={() => setActive(m.name)}
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
          );
        })}
      </div>

      <div className="flex items-center gap-5">
        <MonoIcon src="/icons/hugeicons_notification-01.svg" color="#A1A1A1" alt="notification" />
        <MonoIcon src="/icons/hugeicons_user.svg" color="#A1A1A1" alt="user" />
      </div>
    </div>
  );
}
