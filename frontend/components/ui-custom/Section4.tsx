import React from "react";

interface CeremonyInfo {
    title: string;            // Ví dụ: "LỄ THÀNH HÔN"
    time: string;             // Ví dụ: "Vào Chủ Nhật - 11:45"
    month: string;            // Ví dụ: "Tháng 4"
    day: string;              // Ví dụ: "06"
    year: string;             // Ví dụ: "2026"
    lunarDate: string;        // Ví dụ: "(Tức ngày 08 Tháng 03 Năm Bính Ngọ)"
}

interface Section4Props {
    firstCeremony: CeremonyInfo;
    secondCeremony: CeremonyInfo;
}

export const Section4: React.FC<Section4Props> = ({ firstCeremony, secondCeremony }) => {
    return (
        <section className="bg-white text-center text-[#054658] py-5">
            <div className="max-w-[90%] mx-auto flex flex-col gap-10">
                {/* Buổi lễ 1 */}
                <div>
                    <div className="w-[150px] h-[2px] bg-black mx-auto mb-5"></div>
                    <h2 className="text-[19px] font-semibold tracking-wide mb-2 font-philosopher-noshadow">
                        {firstCeremony.title}
                    </h2>
                    <p className="mb-6 text-sm font-philosopher-noshadow">{firstCeremony.time}</p>

                    <div className="flex justify-center items-center font-philosopher-noshadow">
                        <span className="text-base mr-4 w-[80px]">{firstCeremony.month}</span>
                        <span className="text-4xl font-bold border-x-2 border-primary px-6 text-primary font-rajdhani">
                            {firstCeremony.day}
                        </span>
                        <span className="text-base ml-4 font-philosopher-noshadow w-[80px]">
                            {firstCeremony.year}
                        </span>
                    </div>

                    <p className="mt-5 text-sm italic">{firstCeremony.lunarDate}</p>
                </div>

                {/* Buổi lễ 2 */}
                <div>
                    <div className="w-[150px] h-[2px] bg-black rounded mx-auto mb-5"></div>
                    <h2 className="text-[19px] font-semibold tracking-wide mb-2 font-philosopher-noshadow">
                        {secondCeremony.title}
                    </h2>
                    <p className="mb-6 text-sm font-philosopher-noshadow">{secondCeremony.time}</p>

                    <div className="flex justify-center items-center font-philosopher-noshadow">
                        <span className="text-base mr-4 w-[80px]">{secondCeremony.month}</span>
                        <span className="text-4xl font-bold border-x-2 border-primary px-6 text-primary font-rajdhani">
                            {secondCeremony.day}
                        </span>
                        <span className="text-base ml-4 font-philosopher-noshadow w-[80px]">
                            {secondCeremony.year}
                        </span>
                    </div>

                    <p className="mt-5 text-sm italic">{secondCeremony.lunarDate}</p>
                </div>
            </div>
        </section>
    );
};

export default Section4;
