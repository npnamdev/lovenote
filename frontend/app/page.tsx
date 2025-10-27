"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Snowfall from "@/components/ui-custom/Snowfall";
import { useState, useEffect } from "react";

import Section1 from "@/components/ui-custom/Section1";
import Section2 from "@/components/ui-custom/Section2";
import Section3 from "@/components/ui-custom/Section3";
import Section4 from "@/components/ui-custom/Section4";
import Section5 from "@/components/ui-custom/Section5";
import Section7 from "@/components/ui-custom/Section7";
import Section8 from "@/components/ui-custom/Section8";
import Section9 from "@/components/ui-custom/Section9";

import MusicFloatingButton from "@/components/ui-custom/MusicFloatingButton";
import GiftFloatingButtonWithBankQR from "@/components/ui-custom/GiftFloatingButtonWithBankQR";
import DoorOpenSimple from "@/components/ui-custom/DoorOpenSimple";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<"groom" | "bride">("groom");

  return (
    <div className="max-w-[450px] md:max-w-[400px] overflow-hidden select-none relative">
      <DoorOpenSimple />

      {/* Nút mở modal cố định góc phải */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50"
      >
        <Image src="/images/giftbox.png" alt="Gift" width={26} height={26} />
      </button>

      {/* Modal mừng cưới */}
      <GiftFloatingButtonWithBankQR
        open={open}
        setOpen={setOpen}
        initialTab={initialTab}
        groomInfo={{
          qrUrl: "https://img.vietqr.io/image/MB-9704222268-compact2.png",
          bankName: "MB Bank",
          accountName: "NGUYEN VAN NAM",
          accountNumber: "9704222268",
        }}
        brideInfo={{
          qrUrl: "https://img.vietqr.io/image/ACB-1234567890-compact2.png",
          bankName: "ACB Bank",
          accountName: "TRAN THI THAO",
          accountNumber: "1234567890",
        }}
      />

      <Snowfall />
      <MusicFloatingButton />

      <Section1
        slides={[
          { imageUrl: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/4225f5f8-932a-4c8a-99b5-d00d61308c8a.webp" },
          { imageUrl: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp" },
          { imageUrl: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/bf5d6cd3-b372-4de3-be9d-0aa50fc1d9f2.webp" },
        ]}
        title="Duy Khánh & Minh Châu"
        invitation={{
          weddingInviteText: "THƯ MỜI TIỆC CƯỚI",
          saturdayTime: "THỨ BẢY - 18:00",
          saturdayDate: "05 . 04 . 2026",
          sundayTime: "CHỦ NHẬT - 11:45",
          sundayDate: "06 . 04 . 2026",
          ceremonyText: "LỄ THÀNH HÔN",
        }}
        autoplay={3000}
      />

      <Section2
        title={
          <>
            Hôn nhân là chuyện cả đời,<br />
            Yêu người vừa ý, cưới người mình thương
          </>
        }
        galleryImages={[
          "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/77501014-78c3-4f0e-a2fc-25f01f7b6452.webp",
          "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/997031a1-7a3b-4e7b-aca0-2115c9917c7c.webp",
        ]}
        groom={{
          role: "Chú Rể",
          name: "Duy Khánh",
          address: "Số 10 Trần Nhân Tông, Quảng Cư, Sầm Sơn, Thanh Hoá",
        }}
        bride={{
          role: "Cô Dâu",
          name: "Minh Châu",
          address: "Đội 8, Rừng Thông, Xã Thiện Phiến, Thanh Hoá",
        }}
      />

      <Section3
        invitation={{
          title: "Thư Mời",
          subtitle: "Bạn và Người thương",
          mainText: "THAM DỰ LỄ CƯỚI DUY KHÁNH & MINH CHÂU",
          images: [
            "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/a619703f-e248-4258-a0e0-77a289ed73fa.webp",
            "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/4225f5f8-932a-4c8a-99b5-d00d61308c8a.webp",
            "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/dd4a782a-cb2a-4d6f-b194-bcf2815bb54c.webp",
          ],
        }}
        events={[
          {
            title: "LỄ THÀNH HÔN NHÀ GÁI",
            dayOfWeek: "Thứ Bảy",
            time: "08:30 AM",
            weddingDate: "23-11-2025",
            lunarDate: "Ngày 23 tháng 10 năm Ất Tỵ",
            locationName: "Tư Gia Nhà Gái",
            address: "123 Đường Hoa Hồng, Quận 1, TP. Hồ Chí Minh",
            mapCoords: { lat: 10.7769, lng: 106.7009 },
          },
          {
            title: "TIỆC CƯỚI NHÀ TRAI",
            dayOfWeek: "Chủ Nhật",
            time: "11:00 AM",
            weddingDate: "24-11-2025",
            lunarDate: "Ngày 23 tháng 10 năm Ất Tỵ",
            locationName: "Nhà Hàng Diamond Palace",
            address: "456 Lê Lợi, Quận 3, TP. Hồ Chí Minh",
            mapCoords: { lat: 10.7845, lng: 106.695 },
          },
        ]}
        textSettings={{
          giftButton: "Hộp quà mừng",
          giftTitle: "Gửi lời chúc & mừng cưới",
          giftDescription: "Xin cảm ơn bạn đã gửi lời chúc phúc trong ngày đặc biệt này ❤️",
          googleMapButton: "Xem vị trí trên bản đồ",
        }}
        open={open}
        setOpen={setOpen}
        setInitialTab={setInitialTab} // ✅ thêm dòng này
      />

      <Section4
        firstCeremony={{
          title: "LỄ THÀNH HÔN",
          time: "Vào Chủ Nhật - 11:45",
          month: "Tháng 4",
          day: "06",
          year: "2026",
          lunarDate: "(Tức ngày 08 Tháng 03 Năm Bính Ngọ)",
        }}
        secondCeremony={{
          title: "LỄ RƯỚC DÂU",
          time: "Vào Chủ Nhật - 11:00",
          month: "Tháng 4",
          day: "06",
          year: "2026",
          lunarDate: "(Tức ngày 08 Tháng 03 Năm Bính Ngọ)",
        }}
      />

      <Section5
        monthTitle="THÁNG 11 - 2025"
        primaryDate="2025-11-29"
        secondaryDate="2025-11-28"
        countdownTarget="2025-11-28T18:00:00"
        eventStart="2025-11-28T18:00:00"
        eventEnd="2025-11-29T12:00:00"
      />

      <Section7
        title="Kỷ Niệm Ngày Cưới"
        description="Khoảnh khắc yêu thương của chúng tôi."
        borderRadius={12}
        column1={[
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/4225f5f8-932a-4c8a-99b5-d00d61308c8a.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/e489a219-2df3-409e-bb23-304abd03318f.webp", height: 270 },
        ]}
        column2={[
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/a619703f-e248-4258-a0e0-77a289ed73fa.webp", height: 180 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/21895e2b-b3dd-4e4e-bab6-8980cbc6b131.webp", height: 180 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/27bfd4fa-46bf-4a84-8463-eb1f5e8f7563.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/6e884791-e1cb-4e43-b8b1-f1e37f423199.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/69bf4561-0e51-47ea-bb0f-061eeac87a42.webp", height: 170 },
        ]}
      />

      <Section8
        title="Sổ Lưu Bút Yêu Thương"
        description="Hãy gửi lời chúc tốt đẹp nhất cho đôi uyên ương nhé!"
        placeholders={{
          name: "Tên bạn là gì?",
          phone: "Nhập số điện thoại",
          message: "Lời chúc của bạn dành cho cặp đôi",
        }}
        buttonText="Gửi ngay"
        showMoreText="Xem thêm"
        loadingText="Đang gửi lời chúc..."
        successMessage="Cảm ơn bạn! Lời chúc của bạn đã được gửi thành công 🎉"
        errorMessage="Có lỗi xảy ra, vui lòng thử lại!"
      />


      <Section9
        backgroundImage="https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/dd4a782a-cb2a-4d6f-b194-bcf2815bb54c.webp"
        bottomText="Rất hân hạnh được đón tiếp!"
      />
    </div>
  );
}