"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

function startOfDayLocal(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function pad2(n) {
  return n.toString().padStart(2, "0");
}

const TEST_START_HOUR = 6;  // 6 AM – timer visible from here
const TEST_END_HOUR = 11;   // 11 AM – deadline

export default function ClientReminder({ selectedDate }) {
  const [now, setNow] = useState(new Date());

  // ⏱ Update current time every second
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const today = startOfDayLocal(new Date());
  const selected = selectedDate ? startOfDayLocal(new Date(selectedDate)) : null;

  const isToday = selected && selected.getTime() === today.getTime();
  const isPastCalendarDate = selected && selected < today;

  // Base date for the timer (today if nothing is selected)
  const timerBaseDate = selected || today;

  const { startTime, endTime } = useMemo(() => {
    const start = new Date(timerBaseDate);
    start.setHours(TEST_START_HOUR, 0, 0, 0);

    const end = new Date(timerBaseDate);
    end.setHours(TEST_END_HOUR, 0, 0, 0);

    return { startTime: start, endTime: end };
  }, [timerBaseDate]);

  const isAfterWindowToday =
    (!selected || isToday) && now.getTime() >= endTime.getTime();

  const isBeforeWindowToday =
    (!selected || isToday) && now.getTime() < startTime.getTime();

  const inWindowToday =
    (!selected || isToday) &&
    now.getTime() >= startTime.getTime() &&
    now.getTime() < endTime.getTime();

  // Final states
  const showMissed = isPastCalendarDate || isAfterWindowToday;
  const showPreWindow = !showMissed && isBeforeWindowToday;
  const showCountdown = !showMissed && inWindowToday;

  // Countdown values (only used between 6–11 AM)
  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;

  if (showCountdown) {
    const diffMs = Math.max(endTime.getTime() - now.getTime(), 0);
    const totalSeconds = Math.floor(diffMs / 1000);

    days = Math.floor(totalSeconds / (24 * 60 * 60));
    const r1 = totalSeconds % (24 * 60 * 60);
    hours = Math.floor(r1 / (60 * 60));
    const r2 = r1 % (60 * 60);
    minutes = Math.floor(r2 / 60);
    seconds = r2 % 60;
  }

  return (
    <div className="bg-[#F5F7FA] pt-[29px] px-[229px] pb-[41px] rounded-[15px]">
      {/* 👉 MISSED STATE (past date OR today after 11 AM) */}
      {showMissed && (
        <div className="flex flex-col gap-5 items-center pt-[56px] px-[64px] pb-[31px]">
          <p className="text-[#738298] text-[25px] font-semibold leading-[110%] tracking-[-1px]">
            Client test has been missed
          </p>
        </div>
      )}

      {/* 👉 BEFORE 6 AM (today / no selected date) */}
      {showPreWindow && (
        <div className="flex flex-col gap-5 items-center pt-[56px] px-[64px] pb-[31px]">
          <p className="text-[#738298] text-[25px] font-semibold leading-[110%] tracking-[-1px]">
            Client needs to take test before 11 AM
          </p>

          <div className="flex gap-2.5 bg-[#308BF9] rounded-[10px] px-[18px] pt-3 pb-[9px] cursor-pointer">
            <Image
              src="/icons/Group.svg"
              alt="Group.svg"
              width={15}
              height={15}
            />
            <p className="text-white text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
              Send reminder
            </p>
          </div>
        </div>
      )}

      {/* 👉 COUNTDOWN STATE (today / no date AND between 6–11 AM) */}
      {showCountdown && (
        <div className="flex flex-col gap-5 items-center pt-[56px] px-[64px] pb-[31px]">
          <p className="text-[#738298] text-[25px] font-semibold leading-[110%] tracking-[-1px]">
            Your client hasn’t taken the test yet!
          </p>

          <div className="flex flex-col justify-center items-center gap-4 pb-[15px] pt-[22px] px-1.5 bg-white rounded-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <p className="text-[#252525] text-[12px] font-normal leading-normal tracking-[-0.24px]">
              Test timing ends in:
            </p>

            <div className="flex gap-2.5 items-center justify-center">
              {/* DAYS */}
              <div className="bg-[#D9D9D9] rounded-[6px] py-[14px] px-3">
                <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px]">
                  {pad2(days)}
                </p>
              </div>

              <p className="text-[#252525] text-[20px] font-semibold leading-normal tracking-[-0.4px]">
                :
              </p>

              {/* HOURS */}
              <div className="bg-[#D9D9D9] rounded-[6px] py-[14px] px-3">
                <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px]">
                  {pad2(hours)}
                </p>
              </div>

              <p className="text-[#252525] text-[20px] font-semibold leading-normal tracking-[-0.4px]">
                :
              </p>

              {/* MINUTES */}
              <div className="bg-[#D9D9D9] rounded-[6px] py-[14px] px-3">
                <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px]">
                  {pad2(minutes)}
                </p>
              </div>

              <p className="text-[#252525] text-[20px] font-semibold leading-normal tracking-[-0.4px]">
                :
              </p>

              {/* SECONDS */}
              <div className="bg-[#D9D9D9] rounded-[6px] py-[14px] px-3">
                <p className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-0.5px]">
                  {pad2(seconds)}
                </p>
              </div>
            </div>

            <div className="flex px-[33px] justify-center gap-[30px]">
              <div className="text-[#535359] text-[7px] font-semibold leading-normal tracking-[-0.14px] p-2.5">
                DAYS
              </div>
              <div className="text-[#535359] text-[7px] font-semibold leading-normal tracking-[-0.14px] p-2.5">
                HOURS
              </div>
              <div className="text-[#535359] text-[7px] font-semibold leading-normal tracking-[-0.14px] p-2.5">
                MINUTES
              </div>
              <div className="text-[#535359] text-[7px] font-semibold leading-normal tracking-[-0.14px] p-2.5">
                SECONDS
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 bg-[#308BF9] rounded-[10px] px-[18px] pt-3 pb-[9px] cursor-pointer">
            <Image
              src="/icons/Group.svg"
              alt="Group.svg"
              width={15}
              height={15}
            />
            <p className="text-white text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">
              Send reminder
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
