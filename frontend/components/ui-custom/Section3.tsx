"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// 💍 Kiểu dữ liệu cho từng sự kiện cưới
interface WeddingEvent {
    title: string;
    dayOfWeek: string;
    time: string;
    weddingDate: string;
    lunarDate?: string;
    locationName: string;
    address: string;
    mapCoords: { lat: number; lng: number };
}

// 💌 Kiểu dữ liệu cho phần thư mời
interface InvitationProps {
    title: string;
    subtitle?: string;
    mainText: string;
    images: string[];
}

// 🎁 Kiểu dữ liệu text động
interface TextSettings {
    giftButton?: string;
    giftTitle?: string;
    giftDescription?: string;
    googleMapButton?: string;
}

// 📦 Props chính
interface Section3Props {
    invitation: InvitationProps;
    events: WeddingEvent[];
    textSettings?: TextSettings;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setInitialTab: React.Dispatch<React.SetStateAction<"groom" | "bride">>;
}

const Section3: React.FC<Section3Props> = ({
    invitation,
    events,
    textSettings,
    open,
    setOpen,
    setInitialTab,
}) => {
    const {
        giftButton = "Hộp mừng cưới",
        googleMapButton = "Google Maps",
    } = textSettings || {};

    // Mở Google Maps
    const handleOpenGoogleMaps = (latitude: number, longitude: number) => {
        const googleMapsWebUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const googleMapsAppUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = googleMapsAppUrl;
        } else {
            window.open(googleMapsWebUrl, "_blank");
        }
    };

    return (
        <section className="text-center my-5 py-5">
            {/* 🎀 Thư mời */}
            <div className="w-[88%] mx-auto">
                <div className="w-[150px] h-[2px] bg-black rounded mx-auto mb-4"></div>
                {invitation.title && (
                    <h2 className="font-bold text-[28px] text-black font-great-vibes">
                        {invitation.title}
                    </h2>
                )}
                {invitation.subtitle && (
                    <p className="mt-1 text-sm font-philosopher-noshadow">
                        {invitation.subtitle}
                    </p>
                )}
                {invitation.mainText && (
                    <p className="text-[16px] mb-5 font-philosopher-noshadow mt-3">
                        {invitation.mainText}
                    </p>
                )}

                {invitation.images?.length > 0 && (
                    <div className="grid grid-cols-[auto_36%_auto] items-center gap-2 px-1 rounded">
                        {invitation.images.map((url, idx) => (
                            <Image
                                key={idx}
                                data-aos={
                                    idx === 0
                                        ? "fade-right"
                                        : idx === 1
                                        ? "fade-down"
                                        : "fade-left"
                                }
                                data-aos-duration="1000"
                                className="shadow-2xl rounded-md"
                                src={url}
                                width={250}
                                height={300}
                                alt={`Invitation ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* 🕊️ Danh sách sự kiện */}
            {events?.map((event, idx) => (
                <div
                    key={idx}
                    className="w-[86%] mx-auto flex flex-col gap-1 justify-center items-center mt-6 py-6 px-5 bg-primary/15 rounded-2xl border-[5px] border-gray-200 shadow"
                >
                    <h3 className="font-semibold text-[19px] font-philosopher-noshadow">
                        {event.title}
                    </h3>
                    <h4 className="font-medium font-philosopher-noshadow mt-2 mb-1 text-md">
                        {event.dayOfWeek} | {event.time}
                    </h4>
                    <h3 className="font-rajdhani text-primary zoom-text font-bold text-xl my-[3px]">
                        {event.weddingDate.split("-").reverse().join(" . ")}
                    </h3>
                    {event.lunarDate && (
                        <p className="text-[13.5px] mt-2">{event.lunarDate}</p>
                    )}
                    <h3 className="text-[18px] font-semibold mt-3 font-philosopher-noshadow">
                        {event.locationName}
                    </h3>
                    <p className="text-[14px] mb-2.5 leading-6 mt-2">{event.address}</p>

                    {/* 🎁 Nút hộp mừng cưới */}
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 mt-2 rounded-xl px-3 text-[13px] font-medium"
                        onClick={() => {
                            // ✅ Nếu là sự kiện đầu tiên → tab chú rể, sự kiện thứ hai → tab cô dâu
                            setInitialTab(idx === 0 ? "groom" : "bride");
                            setOpen(true);
                        }}
                    >
                        <Image
                            src="/images/giftbox.png"
                            alt="Gift box"
                            width={20}
                            height={20}
                        />
                        {giftButton}
                    </Button>

                    {/* 🗺️ Nút mở Google Maps */}
                    <Button
                        variant="outline"
                        className="mt-1 text-[13px] px-3 py-4 flex items-center gap-1 rounded-xl font-medium"
                        onClick={() =>
                            handleOpenGoogleMaps(
                                event.mapCoords.lat,
                                event.mapCoords.lng
                            )
                        }
                    >
                        <Image
                            src="/images/map-icon.png"
                            alt="Google Maps"
                            width={24}
                            height={24}
                        />
                        {googleMapButton}
                    </Button>
                </div>
            ))}
        </section>
    );
};

export default Section3;