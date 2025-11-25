// "use client"
// import Image from "next/image"

// export default function TestEvaluation() {
//     return (
//         <>
//             <div className="flex justify-between">
//                 <div className="flex flex-col bg-[#F5F7FA] rounded-[15px]">
//                     <div className="flex flex-col gap-2.5 ml-[30px] mt-5">
//                         <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">Test Evaluation</span>
//                         <span className="text-[#535359] text-[10px] font-normal leading-[-0.2px] tracking-[-0.2px]">Tracked at 05 Jul, 12:30pm</span>
//                     </div>

//                     <div className="border boder-[#E1E6ED] mx-[15px] my-5"></div>

//                     <div className="flex rounded-[10px]">
//                         <div>
//                             <Image
//                                 src="/icons/Frame 427320804.svg"
//                                 alt="Frame 427320804"
//                                 width={235}
//                                 height={442}
//                             />
//                         </div>



//                         {/* <div className="flex flex-col gap-[50px]">
//                             <div className="flex flex-col gap-[15px] mr-[18px]">
//                                 <div className="flex gap-2.5 items-center">
//                                     <div className="p-2 rounded-[10px] bg-white">
//                                         <Image
//                                             src="/icons/hugeicons_digestion.svg"
//                                             alt="hugeicons_digestion"
//                                             width={24}
//                                             height={24}
//                                         />
//                                     </div>
//                                     <div>
//                                         <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
//                                             Gut Fermentation
//                                         </span>
//                                         <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
//                                             Metabolism
//                                         </span>

//                                     </div>
//                                 </div>



//                                 <div className="flex gap-5">
//                                     <div className="flex flex-col gap-[15px]">
//                                         <div className="flex flex-col">
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Absorptive</span>
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
//                                         </div>
//                                         <div className="flex gap-2.5">
//                                             <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">97%</span>
//                                             <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
//                                         </div>
//                                     </div>

//                                     <div className="border border-[#A1A1A1]"></div>

//                                     <div className="flex flex-col gap-[15px]">
//                                         <div className="flex flex-col">
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Fermentative </span>
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
//                                         </div>
//                                         <div className="flex gap-2.5">
//                                             <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">95%</span>
//                                             <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>





//                             <div className="flex flex-col gap-[15px] mr-[18px]">
//                                 <div className="flex gap-2.5 items-center">
//                                     <div className="p-2 rounded-[10px] bg-white">
//                                         <Image
//                                             src="/icons/healthicons_pancreas-outline.svg"
//                                             alt="healthicons_pancreas-outline"
//                                             width={24}
//                                             height={24}
//                                         />
//                                     </div>
//                                     <div>
//                                         <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
//                                             Glucose

//                                         </span>
//                                         <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
//                                             -Vs-
//                                         </span>
//                                         <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">

//                                             Fat Metabolism
//                                         </span>

//                                     </div>
//                                 </div>



//                                 <div className="flex gap-5">
//                                     <div className="flex flex-col gap-[15px]">
//                                         <div className="flex flex-col">
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Fat </span>
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
//                                         </div>
//                                         <div className="flex gap-2.5">
//                                             <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">91%</span>
//                                             <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
//                                         </div>
//                                     </div>

//                                     <div className="border border-[#A1A1A1]"></div>

//                                     <div className="flex flex-col gap-[15px]">
//                                         <div className="flex flex-col">
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Glucose </span>
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
//                                         </div>
//                                         <div className="flex gap-2.5">
//                                             <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">92%</span>
//                                             <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>







//                             <div className="flex flex-col gap-[15px] mr-[18px]">
//                                 <div className="flex gap-2.5 items-center">
//                                     <div className="p-2 rounded-[10px] bg-white">
//                                         <Image
//                                             src="/icons/hugeicons_liver.svg"
//                                             alt="hugeicons_liver.svg"
//                                             width={24}
//                                             height={24}
//                                         />
//                                     </div>
//                                     <div>
//                                         <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
//                                             Liver Hepatic
//                                         </span>
//                                         <span className="block text-[#252525] text-[12px] font-semibold leading-[110%]">
//                                             Metabolism
//                                         </span>

//                                     </div>
//                                 </div>



//                                 <div className="flex gap-5">
//                                     <div className="flex flex-col gap-[15px]">
//                                         <div className="flex flex-col">
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Hepatic Stress </span>
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
//                                         </div>
//                                         <div className="flex gap-2.5">
//                                             <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">85%</span>
//                                             <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
//                                         </div>
//                                     </div>

//                                     <div className="border border-[#A1A1A1]"></div>

//                                     <div className="flex flex-col gap-[15px]">
//                                         <div className="flex flex-col">
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Detoxification </span>
//                                             <span className="text-[#252525] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">Metabolism Score</span>
//                                         </div>
//                                         <div className="flex gap-2.5">
//                                             <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">89%</span>
//                                             <span className="text-[#3FAF58] text-[15px] font-semibold leading-[110%] tracking-[-0.3px]">Good</span>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div> */}
//                         <div>
//                             <div className="bg-white rounded-[10px] px-5 py-2.5 w-full">
//                                 <div className="flex gap-2.5 items-center">
//                                     <div className="p-2">
//                                         <Image
//                                             src="/icons/hugeicons_liver.svg"
//                                             alt="hugeicons_liver.svg"
//                                             width={24}
//                                             height={24}
//                                         />
//                                     </div>
//                                     <span className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Liver Hepatic Metabolism</span>
//                                 </div>

//                                 <div className="flex gap-5">
//                                     <div className="flex flex-col gap-[15px] py-[19px] pl-5 pr-[155px] border border-[#E1E6ED] rounded-[10px]">
//                                         <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">Hepatic Stress Metabolism Score</span>
//                                         <div className="flex items-center">
//                                             <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px]">80%</p>
//                                             <div className="mx-[15px] h-4 w-px bg-[#252525]"></div>
//                                             <p className=" text-[#3FAF58] text-[25px] font-semibold leading-normal tracking-[-0.5px]">Good</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-col gap-[15px] py-[19px] pl-5 pr-[155px] border border-[#E1E6ED] rounded-[10px]">
//                                         <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">Detoxification Metabolism Score</span>
//                                         <div className="flex items-center">
//                                             <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px]">80%</p>
//                                             <div className="mx-[15px] h-4 w-px bg-[#252525]"></div>
//                                             <p className=" text-[#3FAF58] text-[25px] font-semibold leading-normal tracking-[-0.5px]">Good</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>

//                 </div>

//                 {/* <div className="flex flex-col bg-[#F5F7FA] rounded-[15px]">
//                     <div className="flex flex-col gap-2.5 ml-[30px] mt-5 mb-[15px]">
//                         <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">Test Evaluation</span>
//                         <span className="text-[#535359] text-[10px] font-normal leading-[-0.2px] tracking-[-0.2px]">Tracked at 05 Jul, 12:30pm</span>
//                     </div>

//                     <div className="border boder-[#E1E6ED]"></div>

//                     <div>
//                         <div>
//                             <Image
//                                 src="/icons/Frame 427320804.svg"
//                                 alt="Frame 427320804"
//                                 width={235}
//                                 height={442}
//                             />
//                         </div>
//                     </div>

//                 </div> */}
//             </div>

//         </>
//     )
// };










"use client"
import Image from "next/image"
import { useSelector } from "react-redux"

export default function TestEvaluation() {
  const scoresInsight = useSelector((state) => state.scoresInsight?.data);
  const formatDate = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).replace(',', '');
  };

  // Helper function to get color class based on zone
  const getZoneColor = (zone) => {
    if (!zone) return 'text-[#535359]'; // Default color for empty values

    const zoneLower = zone.toLowerCase();
    if (zoneLower === 'good') return 'text-[#3FAF58]';
    if (zoneLower === 'fair') return 'text-[#FFC412]';
    if (zoneLower === 'poor') return 'text-[#DA5747]';

    return 'text-[#535359]'; // Default color for unknown values
  };

  // Get scores from the nested structure
  const scores = scoresInsight?.latest_test?.scores;
  const testDate = scoresInsight?.latest_test?.date_time;
  const metabolismScores = scoresInsight?.latest_test?.test_json?.Metabolism_Score_Analysis;

  return (
    <>
      <div className="w-full bg-[#F5F7FA] rounded-[15px] p-5">
        <div className="flex flex-col mb-5">
          <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">
            Test Evaluation
          </span>
          <span className="text-[#535359] text-[10px] font-normal tracking-[-0.2px]">
            Tracked At {testDate ? formatDate(testDate) : '-'}
          </span>
        </div>

        <div className="border border-[#E1E6ED] mb-3"></div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-[26px] w-full">
            {/* Chart Section */}
            <div className="min-w-0 mt-[3px]">
              <Image
                src="/icons/Frame 427320804.svg"
                alt="Metabolism Chart"
                width={235}
                height={504}
                className="w-full h-[504px] max-w-full object-contain"
              />
            </div>

            {/* Metrics Section */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-5">
                {/* Liver Hepatic Metabolism */}
                <div className="bg-white rounded-[10px] py-2.5 px-5 w-full">
                  <div className="flex gap-2.5 items-center mb-[5px]">
                    <div className="p-2">
                      <Image
                        src="/icons/hugeicons_liver.svg"
                        alt="Liver Icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-[#252525] text-[12px] font-semibold leading-[110%]">
                      Liver Hepatic Metabolism
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 p-4 border border-[#E1E6ED] rounded-[10px]">
                      <span className="text-[#535359] text-[10px] font-normal block mb-[5px]">
                        Hepatic Stress Metabolism Score
                      </span>
                      <div className="flex items-center">
                        <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
                          {scores?.hepatic_stress ?? '-'}%
                        </p>
                        <div className="mx-3 h-4 w-px bg-[#252525]"></div>
                        <p className={`text-[20px] md:text-[25px] font-semibold ${getZoneColor(metabolismScores?.hepatic_stress?.zone)}`}>
                          {metabolismScores?.hepatic_stress?.zone ?? '-'}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 p-4 border border-[#E1E6ED] rounded-[10px]">
                      <span className="text-[#535359] text-[10px] font-normal block mb-2">
                        Detoxification Metabolism Score
                      </span>
                      <div className="flex items-center">
                        <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
                          {scores?.detoxification ?? '-'}%
                        </p>
                        <div className="mx-3 h-4 w-px bg-[#252525]"></div>
                        <p className={`text-[20px] md:text-[25px] font-semibold ${getZoneColor(metabolismScores?.detoxification?.zone)}`}>
                          {metabolismScores?.detoxification?.zone ?? '-'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glucose -Vs- Fat Metabolism */}
                <div className="bg-white rounded-[10px] py-2.5 px-5 w-full">
                  <div className="flex gap-2.5 items-center mb-[5px]">
                    <div className="p-2">
                      <Image
                        src="/icons/healthicons_pancreas-outline.svg"
                        alt="healthicons_pancreas-outline"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-[#252525] text-[12px] font-semibold leading-[110%]">
                      Glucose -Vs- Fat Metabolism
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 p-4 border border-[#E1E6ED] rounded-[10px]">
                      <span className="text-[#535359] text-[10px] font-normal block mb-2">
                        Fat Metabolism Score
                      </span>
                      <div className="flex items-center">
                        <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
                          {scores?.fat ?? '-'}%
                        </p>
                        <div className="mx-3 h-4 w-px bg-[#252525]"></div>
                        <p className={`text-[20px] md:text-[25px] font-semibold ${getZoneColor(metabolismScores?.fat_metabolism?.zone)}`}>
                          {metabolismScores?.fat_metabolism?.zone ?? '-'}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 p-4 border border-[#E1E6ED] rounded-[10px]">
                      <span className="text-[#535359] text-[10px] font-normal block mb-[5px]">
                        Glucose Metabolism Score
                      </span>
                      <div className="flex items-center">
                        <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
                          {scores?.glucose ?? '-'}%
                        </p>
                        <div className="mx-3 h-4 w-px bg-[#252525]"></div>
                        <p className={`text-[20px] md:text-[25px] font-semibold ${getZoneColor(metabolismScores?.glucose_metabolism?.zone)}`}>
                          {metabolismScores?.glucose_metabolism?.zone ?? '-'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gut Fermentation Metabolism */}
                <div className="bg-white rounded-[10px] py-2.5 px-5 w-full">
                  <div className="flex gap-2.5 items-center mb-[5px]">
                    <div className="p-2">
                      <Image
                        src="/icons/hugeicons_digestion.svg"
                        alt="hugeicons_digestion"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-[#252525] text-[12px] font-semibold leading-[110%]">
                      Gut Fermentation Metabolism
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 p-4 border border-[#E1E6ED] rounded-[10px]">
                      <span className="text-[#535359] text-[10px] font-normal block mb-[5px]">
                        Absorptive Metabolism Score
                      </span>
                      <div className="flex items-center">
                        <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
                          {scores?.absorptive ?? '-'}%
                        </p>
                        <div className="mx-3 h-4 w-px bg-[#252525]"></div>
                        <p className={`text-[20px] md:text-[25px] font-semibold ${getZoneColor(metabolismScores?.absorption?.zone)}`}>
                          {metabolismScores?.absorption?.zone ?? '-'}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 p-4 border border-[#E1E6ED] rounded-[10px]">
                      <span className="text-[#535359] text-[10px] font-normal block mb-2">
                        Fermentative Metabolism Score
                      </span>
                      <div className="flex items-center">
                        <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
                          {scores?.fermentative ?? '-'}%
                        </p>
                        <div className="mx-3 h-4 w-px bg-[#252525]"></div>
                        <p className={`text-[20px] md:text-[25px] font-semibold ${getZoneColor(metabolismScores?.fermentation?.zone)}`}>
                          {metabolismScores?.fermentation?.zone ?? '-'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>

          <div className="flex gap-[75px] pb-[15px] pl-[30px] pt-8 pr-[15px] rounded-[15px] bg-white">
            <div className="flex flex-col">
              <p className="text-[#252525] text-[12px] font-semibold leading-[110%] tracking-[-0.24px] whitespace-nowrap">Overall Metabolism Score</p>


              <div className="flex flex-col gap-5">
               <div className="flex justify-center items-center">
  <span className="text-[#252525] font-normal leading-normal tracking-[-2px] text-[100px]">88</span>
  <span className="flex items-end pb-[10px] text-[#252525] text-[20px] font-semibold leading-[126%] tracking-[-0.4px]">%</span>
</div>

                <span className="flex justify-center text-[#3FAF58] text-[25px] font-semibold leading-[126%] tracking-[-0.5px]">Good</span>
              </div>
</div>
              <div>
<p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas ipsam expedita, labore eum quidem quisquam culpa rerum necessitatibus accusantium corporis itaque harum tempora fuga distinctio exercitationem, ut perspiciatis. Culpa?</p>
              </div>

              



          </div>
        </div>
      </div>
    </>
  )
}