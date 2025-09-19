"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { UserProfile } from "./user-profile";

export default function ClientTable() {
  const [search, setSearch] = useState("");

  const clients = [
    {
      name: "Sagar Hosur",
      age: "29 years, Male",
      dateCreated: "21 Jul 2025",
      referenceCode: "521685982",
      planStatus: "Active",
      planType: "1-month plan",
      lastLogged: "23 mins ago",
      metabolismStatus: "Attention Required",
      metabolismColor: "#DA5747",
      metabolismBg: "#FFEDED",
      dietGoal: "75% completed",
      dietGoalDate: "21 July",
      plansCompleted: 0,
    },
    {
      name: "Humors Tech",
      age: "29 years, Male",
      dateCreated: "21 Jul 2025",
      referenceCode: "521685982",
      planStatus: "Active",
      planType: "1-month plan",
      lastLogged: "23 mins ago",
      metabolismStatus: "Attention Required",
      metabolismColor: "#DA5747",
      metabolismBg: "#FFEDED",
      dietGoal: "75% completed",
      dietGoalDate: "21 July",
      plansCompleted: 0,
    },
    
  ];

  const filteredClients = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter(c => c.name.toLowerCase().includes(q));
  }, [search, clients]);

  return (
    <>
      {/* Show the same search bar header; on /clients path this renders the client search */}
      <div className="">
        <UserProfile searchQuery={search} onSearchChange={setSearch} />
      </div>

      <div>
        <div className="rounded-[10px] overflow-hidden">
          <table className="w-full bg-[#FFFFFF]">
            <thead className="bg-[#F0F0F0]">
              <tr>
                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Client Name</p></th>
                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Date Created</p></th>
                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Reference code</p></th>
                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Current Plan</p></th>
                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Last Logged</p></th>
                <th className="px-[15px] pt-5 pb-[5px] text-center">
                  <div className="flex flex-col items-center gap-[15px]">
                    <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Daily Status</p>
                    <div className="flex justify-center w-[333px] items-center py-0.5 gap-5 bg-[#D9D9D9] rounded-[7px]">
                      <p className="text-[#535359] text-center font-normal text-[12px] leading-[110%] tracking-[-0.24px]">Metabolism Status</p>
                      <p className="text-[#535359] text-center font-normal text-[12px] leading-[110%] tracking-[-0.24px]">Diet Goal</p>
                    </div>
                  </div>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left">
                  <p className="text-[#535359] text-center font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Plans completed</p>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left">
                  <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Actions</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredClients.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-[15px] py-8 text-center">
                    <p className="text-[#A1A1A1] text-sm">No clients match “{search}”.</p>
                  </td>
                </tr>
              ) : (
                filteredClients.map((client, idx) => (
                  <tr key={`${client.name}-${idx}`} className="align-top">
                    {/* Client Name */}
                    <td className="px-[15px] py-5">
                      <Link href="/profile" className="flex flex-col gap-1 cursor-pointer">
                        <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                          {client.name}
                        </span>
                        <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">
                          {client.age}
                        </span>
                      </Link>
                    </td>

                    {/* Date Created */}
                    <td className="px-[15px] py-5">
                      <span className="text-[#A1A1A1] text-[12px] font-normal leading-[126%] tracking-[-0.24px]">
                        {client.dateCreated}
                      </span>
                    </td>

                    {/* Reference code */}
                    <td className="px-[15px] py-5">
                      <div className="flex items-center gap-[5px]">
                        <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                          {client.referenceCode}
                        </span>
                        <Image src="/icons/hugeicons_copy-02.svg" alt="copy" width={15} height={15} className="cursor-pointer"/>
                      </div>
                    </td>

                    {/* Current Plan */}
                    <td className="px-[15px] py-5">
                      <div className="flex flex-col gap-1">
                        <span className="text-[#3FAF58] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                          {client.planStatus}
                        </span>
                        <span className="text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">{client.planType}</span>
                        <div className="flex gap-[5px]">
                          <p className="text-[#308BF9] cursor-pointer font-semibold text-[10px] leading-[110%] tracking-[-0.2px]">
                            View Plan
                          </p>
                          <Image src="/icons/right button.svg" width={10} height={10} alt="right button" className="cursor-pointer" />
                        </div>
                      </div>
                    </td>

                    {/* Last Logged */}
                    <td className="px-[15px] py-5">
                      <p className="text-[12px] text-[#252525] font-semibold tracking-[-0.24] leading-[126%]">
                        {client.lastLogged}
                      </p>
                    </td>

                    {/* Daily Status */}
                    <td className="px-[15px] py-5">
                      <div className="flex justify-center gap-5">
                        <div>
                          <div
                            className="w-[179px] flex justify-center items-center rounded-[20px] px-2 py-2.5"
                            style={{ backgroundColor: client.metabolismBg }}
                          >
                            <p
                              className="text-[12px] font-semibold tracking-[-0.24px] leading-[126%]"
                              style={{ color: client.metabolismColor }}
                            >
                              {client.metabolismStatus}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                            {client.dietGoal}
                          </span>
                          <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">
                            {client.dietGoalDate}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Plans completed */}
                    <td className="text-center px-[15px] py-5">
                      <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">
                        {client.plansCompleted}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-[15px] py-5">
                      <div className="py-2.5 flex gap-5">
                        <Image src="/icons/hugeicons_message-02.svg" alt="message" width={20} height={20} className="cursor-pointer"/>
                        <Image src="/icons/hugeicons_view.svg" alt="view" width={20} height={20} className="cursor-pointer"/>
                      </div>
                      <div />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
