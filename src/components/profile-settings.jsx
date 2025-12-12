"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Cookies from "js-cookie";

export default function ProfileSettings() {
  const [activeItem, setActiveItem] = useState("Account");

  // ✅ form state
  const [form, setForm] = useState({
    name: "",
    reference: "",
    mobile: "",
    email: "",
  });

  console.log("form19:-", form);

  const menuItems = [
    { id: "Account", label: "Account" },
    { id: "Subscription", label: "Subscription" },
    { id: "Security", label: "Security" },
    { id: "Help Center", label: "Help Center" },
    { id: "About", label: "About" },
  ];


const inputBg = (value) =>
  value ? "bg-[#F5F7FA]" : "bg-white";


  const handleItemClick = (itemId) => setActiveItem(itemId);

  // ✅ read dietician cookie and fill inputs
  useEffect(() => {
    const DIETICIAN_COOKIE_KEY = "dietician"; // <- change if your cookie name is different

    const raw = Cookies.get(DIETICIAN_COOKIE_KEY);
    if (!raw) return;

    let dietician = null;

    // cookie may be JSON string or plain string
    try {
      dietician = JSON.parse(raw);
    } catch (e) {
      // if cookie is not JSON, keep as raw
      dietician = raw;
    }

    // ✅ map cookie fields to your form fields
    // adjust keys based on what you store in cookie
    setForm((prev) => ({
      ...prev,
      name: dietician?.name || dietician?.dietician_name || "",
      reference: dietician?.dietician_id || dietician?.id || "",
      mobile: dietician?.mobile || dietician?.phone || dietician?.phone_no || "",
      email: dietician?.email || "",
    }));
  }, []);

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((p) => ({ ...p, [id]: value }));
  };

  const copyText = async (text) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      // if you want toast, add it here
    } catch (e) {}
  };

  return (
    <>
      <div className="flex gap-[27px] pt-[25px] pl-[23px] pr-5 bg-white rounded-[15px] min-h-[calc(100vh-50px)] overflow-hidden">
        <div className="">
          {menuItems.map((item) => {
            const isActive = activeItem === item.id;
            const bgClass = isActive ? "bg-[#E1E6ED]" : "";
            const textColor = isActive ? "text-[#308BF9]" : "text-[#252525]";
            const arrowColor = isActive ? "text-[#308BF9]" : "text-[#252525]";

            return (
              <div
                key={item.id}
                className={`w-[303px] pl-[23px] pr-[15px] py-[22px] rounded-[5px] flex items-center cursor-pointer ${bgClass}`}
                onClick={() => handleItemClick(item.id)}
              >
                <span
                  className={`flex-1 text-[15px] font-semibold leading-[110%] tracking-[-0.3px] ${textColor}`}
                >
                  {item.label}
                </span>

                <IoIosArrowForward className={`${arrowColor} ml-auto`} />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-6 w-full overflow-y-auto">
          <div className="pl-[15px] pb-[18px] pr-3.5 border-b border-[#E1E6ED] ">
            <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">
              Account
            </span>
          </div>

          <div className="form-container">
            <div className="input-group">
              <input
                type="text"
                id="name"
                className={`form-input ${inputBg(form.name)}`}
                placeholder=" "
                value={form.name}
                onChange={onChange}
                
              />
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>

            <div className="input-group" style={{ position: "relative" }}>
              <input
                type="text"
                id="reference"
                className={`form-input ${inputBg(form.name)}`}
                placeholder=" "
                value={form.reference}
                onChange={onChange}
                readOnly
              />
              <label htmlFor="reference" className="form-label">
                Reference Id
              </label>

              <div
                onClick={() => copyText(form.reference)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/icons/hugeicons_copy-02.svg"
                  alt="Copy reference"
                  width={15}
                  height={15}
                />
              </div>
            </div>

            <div className="input-group" style={{ position: "relative" }}>
              <input
                type="text"
                id="mobile"
                className={`form-input ${inputBg(form.name)}`}
                placeholder=" "
                value={form.mobile}
                onChange={onChange}
              />
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>

              <div
                onClick={() => copyText(form.mobile)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/icons/hugeicons_copy-02.svg"
                  alt="Copy mobile"
                  width={15}
                  height={15}
                />
              </div>
            </div>

            <div className="input-group" style={{ position: "relative" }}>
              <input
                type="text"
                id="email"
                className={`form-input ${inputBg(form.name)}`}
                placeholder=" "
                value={form.email}
                onChange={onChange}
                readOnly
              />
              <label htmlFor="email" className="form-label">
                Email Address
              </label>

              <div
                onClick={() => copyText(form.email)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/icons/hugeicons_copy-02.svg"
                  alt="Copy email"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
