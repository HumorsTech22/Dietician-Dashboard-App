"use client"
import Image from "next/image";

export default function ClientRisk() {
    const clients = [
        {
            name: "Sagar Hosur",
            age: "29 years, Male",
            weight: "40Kg",
            weightChange: "0.5kg less",
            scoresAtRisk: {
                count: "6 scores",
                duration: "2 days in a row",
                icons: [
                    "/icons/hugeicons_digestionred.svg",
                    "/icons/healthicons_pancreas-outlinered.svg",
                    "/icons/hugeicons_liverred.svg"
                ]
            },
            metabolicScore: {
                score: "40",
                level: "Moderate",
                change: "5%",
                comparison: "than yesterday"
            },
            dietGoal: {
                completion: "75% completed",
                missed: "10 items missed"
            }
        },
        {
            name: "Humors Tech",
            age: "29 years, Male",
            weight: "65Kg",
            weightChange: "1.2kg more",
            scoresAtRisk: {
                count: "3 scores",
                duration: "1 day in a row",
                icons: [
                    "/icons/hugeicons_digestionred.svg",
                    "/icons/healthicons_pancreas-outlinered.svg"
                ]
            },
            metabolicScore: {
                score: "65",
                level: "Good",
                change: "2%",
                comparison: "than yesterday"
            },
            dietGoal: {
                completion: "90% completed",
                missed: "5 items missed"
            }
        }
    ];

    return (
        <>
            <div className="flex flex-col gap-[23px] pt-[27px] rounded-[15px] bg-white">
                <div className="flex justify-between ml-6 mr-8">
                    <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Clients At Risk (10)</span>
                    <div className="flex gap-[5px] items-center">
                        <div className="flex items-center">
                            <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">5%</span>
                            <Image
                                src="/icons/Frame 427319409red.svg"
                                alt="Frame 427319409red.svg"
                                width={20}
                                height={20}
                            />
                        </div>
                        <span className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]">than yesterday</span>
                    </div>
                </div>
                <div className="mx-[14px] rounded-[10px] overflow-hidden">
                    <table className="w-full bg-[#FFFFFF]">
                        <thead className="bg-[#F0F0F0]">
                            <tr>
                                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Client Name</p></th>
                                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Weight</p></th>
                                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Scores At Risk</p></th>
                                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Overall <br />
                                    Metabolic Compatibility Score</p></th>
                                <th className="px-[15px] pt-5 pb-[5px] text-left"><p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Diet Goal</p></th>
                            </tr>
                        </thead>

                        <tbody>
                            {clients.map((client, idx) => (
                                <tr
                                    key={`${client.name}-${idx}`}
                                    className="align-top"
                                >
                                    {/* Client Name */}
                                    <td className="px-[15px] py-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                                                {client.name}
                                            </span>
                                            <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">
                                                {client.age}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Weight */}
                                    <td className="px-[15px] py-5">
                                        <div className="flex flex-col gap-[5px]">
                                            <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                                                {client.weight}
                                            </span>
                                            <div className="flex items-center">
                                                <span className="font-normal text-[#252525] text-[10px] leading-normal tracking-[-0.2px]">
                                                    {client.weightChange}
                                                </span>
                                                <Image
                                                    src="/icons/Frame 4273194090.svg"
                                                    alt="Frame 4273194090.svg"
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                        </div>
                                    </td>

                                    {/* Scores At Risk */}
                                    <td className="px-[15px] py-5">
                                        <div className="flex flex-col gap-[5px]">
                                            <div className="flex gap-[7px]">
                                                <span className="text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
                                                    {client.scoresAtRisk.count}
                                                </span>
                                                <div className="w-[2px] border-l border-[#D9D9D9]"></div>
                                                <span className="text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
                                                    {client.scoresAtRisk.duration}
                                                </span>
                                            </div>
                                            <div className="flex gap-[5px]">
                                                {client.scoresAtRisk.icons.map((icon, iconIdx) => (
                                                    <Image
                                                        key={iconIdx}
                                                        src={icon}
                                                        alt={icon}
                                                        width={18}
                                                        height={18}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </td>

                                    {/* Metabolic Compatibility Score */}
                                    <td className="px-[15px] py-5">
                                        <div className="flex flex-col gap-[5px]">
                                            <div className="flex gap-[7px]">
                                                <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                                                    {client.metabolicScore.score}
                                                </span>
                                                <div className="w-[2px] border-l border-[#D9D9D9]"></div>
                                                <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                                                    {client.metabolicScore.level}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-normal text-[#252525] text-[10px] leading-normal tracking-[-0.2px]">
                                                    {client.metabolicScore.change}
                                                </span>
                                                <Image
                                                    src="/icons/Frame 4273194090.svg"
                                                    alt="Frame 4273194090.svg"
                                                    width={20}
                                                    height={20}
                                                />
                                                <span className="font-normal text-[#A1A1A1] text-[10px] leading-normal tracking-[-0.2px]">
                                                    {client.metabolicScore.comparison}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Diet Goal */}
                                    <td className="px-[15px] py-5">
                                        <div className="flex flex-col gap-[5px]">
                                            <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                                                {client.dietGoal.completion}
                                            </span>
                                            <span className="text-[#DA5747] text-[10px] font-normal leading-normal tracking-[-0.2px]">
                                                {client.dietGoal.missed}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}