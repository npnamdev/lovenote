"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Section5Props {
    monthTitle: string; // 🆕 tiêu đề tháng do người dùng truyền vào
    primaryDate: string;
    secondaryDate?: string;
    countdownTarget: string;
    eventStart: string;
    eventEnd: string;
}

const Section5: React.FC<Section5Props> = ({
    monthTitle,
    primaryDate,
    secondaryDate,
    countdownTarget,
    eventStart,
    eventEnd,
}) => {
    const year = 2025;
    const month = 2; // Tháng 3 (chỉ số tháng bắt đầu từ 0)
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyCells = Array.from(
        { length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 },
        () => null
    );

    const primaryDay = new Date(primaryDate).getDate();
    const secondaryDay = secondaryDate ? new Date(secondaryDate).getDate() : null;

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const targetTime = new Date(countdownTarget).getTime();
        const difference = targetTime - now;
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [countdownTarget]);

    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

    const now = new Date();
    const eventStartDate = new Date(eventStart);
    const eventEndDate = new Date(eventEnd);

    let eventStatus = "";
    if (now < eventStartDate) {
        eventStatus = "Sự kiện sắp diễn ra";
    } else if (now >= eventStartDate && now <= eventEndDate) {
        eventStatus = "Sự kiện đang diễn ra";
    } else {
        eventStatus = "Sự kiện đã diễn ra";
    }

    return (
        <section className="text-center py-5">
            <div className="border-[5px] border-gray-200 pb-5 px-5 rounded-3xl max-w-[90%] mx-auto">
                <Image src="/images/save_date.webp" alt="Divider Floral" width={240} height={20} className="mx-auto mb-0" />
                <div className="w-[150px] h-[2px] bg-black rounded mx-auto mb-5"></div>
                <h2 className="text-[18px] font-philosopher-noshadow  mb-5 font-semibold">
                    {monthTitle}
                </h2>

                <div className="grid grid-cols-7 gap-2 text-[12px] items-center h-[38px] rounded-xl font-medium bg-primary text-white px-2">
                    {weekdays.map((day, index) => (
                        <div key={index} className="px-2">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2 gap-y-4 mt-2 px-2 text-[14px] font-semibold border-b mb-5 pb-4">
                    {emptyCells.map((_, index) => (
                        <div
                            key={"empty-" + index}
                            className="h-[28px] flex justify-center items-center"
                        ></div>
                    ))}
                    {days.map((day) => (
                        <div
                            key={day}
                            className={`h-[28px] flex justify-center font-medium text-[13px] items-center rounded-lg 
                ${day === primaryDay ? "bg-primary text-white rotate" : ""} 
                ${day === secondaryDay ? "bg-gray-200 rotate" : ""}`}
                        >
                            {day}
                        </div>
                    ))}
                </div>

                <div className="p-3 text-xl font-bold bg-gray-100 rounded-2xl justify-center">
                    {eventStatus === "Sự kiện sắp diễn ra" ? (
                        <div className="flex gap-2 w-full justify-center items-center">
                            <div className="flex flex-col items-center justify-center gap-1 w-[70px] bg-white  py-2 rounded-2xl shadow-md">
                                <span className="text-[19px] font-rajdhani text-primary font-bold">
                                    {formatNumber(timeLeft.days)}
                                </span>
                                <span className="font-sriracha text-sm">Ngày</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 w-[70px] bg-white px-2 py-2 rounded-2xl shadow-md">
                                <span className="text-[19px] font-rajdhani text-primary font-bold">
                                    {formatNumber(timeLeft.hours)}
                                </span>
                                <span className="font-sriracha text-sm">Giờ</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 w-[70px] bg-white px-2 py-2 rounded-2xl shadow-md">
                                <span className="text-[19px] font-rajdhani text-primary font-bold">
                                    {formatNumber(timeLeft.minutes)}
                                </span>
                                <span className="font-sriracha text-sm">Phút</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 w-[70px]  bg-white px-2 py-2 rounded-2xl shadow-md">
                                <span className="text-[19px] text-primary font-rajdhani font-bold">
                                    {formatNumber(timeLeft.seconds)}
                                </span>
                                <span className="font-sriracha text-sm">Giây</span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-[16px] text-primary font-sriracha font-bold">{eventStatus}</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Section5;
