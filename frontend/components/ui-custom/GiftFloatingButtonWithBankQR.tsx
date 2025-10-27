"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BankInfo {
    qrUrl: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
}

interface GiftFloatingButtonWithBankQRProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    groomInfo: BankInfo;
    brideInfo: BankInfo;
    title?: string;
    description?: string;
    initialTab?: "groom" | "bride"; // 💡 tab mặc định khi mở modal
}

const GiftFloatingButtonWithBankQR: React.FC<GiftFloatingButtonWithBankQRProps> = ({
    open,
    setOpen,
    groomInfo,
    brideInfo,
    title = "💝 Mừng cưới / Gửi quà",
    description = "Quét mã QR hoặc chuyển khoản trực tiếp",
    initialTab = "groom", // mặc định là tab chú rể
}) => {
    // 🎯 Quản lý tab đang chọn
    const [tab, setTab] = useState<"groom" | "bride">(initialTab);

    // Khi modal mở lại => reset về tab được truyền
    useEffect(() => {
        if (open) setTab(initialTab);
    }, [open, initialTab]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[400px] max-w-[90%] text-center rounded-2xl p-6 sm:rounded-2xl">
                <div>
                    <h3 className="text-md font-semibold uppercase">{title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>

                <Tabs value={tab} onValueChange={(v) => setTab(v as "groom" | "bride")} className="min-content">
                    <TabsList className="px-3 rounded-full h-[35px]  mb-4">
                        <TabsTrigger
                            value="groom"
                            className="px-4 h-[28px] pt-1 text-[13px] uppercase rounded-full data-[state=active]:bg-white data-[state=active]:shadow"
                        >
                            Chú rể
                        </TabsTrigger>
                        <TabsTrigger
                            value="bride"
                            className="px-4 h-[28px] pt-1 text-[13px] uppercase rounded-full data-[state=active]:bg-white data-[state=active]:shadow"
                        >
                            Cô dâu
                        </TabsTrigger>
                    </TabsList>

                    {/* === Chú rể === */}
                    <TabsContent value="groom">
                        <div className="flex flex-col items-center gap-4 mt-2">
                            <div className="relative w-[330px] h-[330px]">
                                <Image
                                    src={groomInfo.qrUrl}
                                    alt="QR Groom"
                                    fill
                                    className="object-contain rounded-xl border border-gray-200 shadow-sm"
                                />
                            </div>
                        </div>
                    </TabsContent>

                    {/* === Cô dâu === */}
                    <TabsContent value="bride">
                        <div className="flex flex-col items-center gap-4 mt-2">
                            <div className="relative w-[330px] h-[330px]">
                                <Image
                                    src={brideInfo.qrUrl}
                                    alt="QR Bride"
                                    fill
                                    className="object-contain rounded-xl border border-gray-200 shadow-sm"
                                />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog>
    );
};

export default GiftFloatingButtonWithBankQR;