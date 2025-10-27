"use client";

import { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

// Kiểu dữ liệu cho lời chúc
interface Wish {
  _id: string;
  name: string;
  phone: string;
  message: string;
}

// Kiểu props cho component
interface Section8Props {
  title?: string;
  description?: string;
  placeholders?: {
    name?: string;
    phone?: string;
    message?: string;
  };
  buttonText?: string;
  apiUrl?: string; // Cho phép truyền endpoint API tuỳ ý
  showMoreText?: string;
  loadingText?: string;
  successMessage?: string;
  errorMessage?: string;
}

const Section8: React.FC<Section8Props> = ({
  title = "Sổ Lưu Bút",
  description = "Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!",
  placeholders = {
    name: "Nhập tên của bạn",
    phone: "Nhập số điện thoại của bạn",
    message: "Nhập lời chúc của bạn",
  },
  buttonText = "Gửi lời chúc",
  apiUrl = `${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/wishes`,
  showMoreText = "Xem thêm",
  loadingText = "Đang gửi...",
  successMessage = "Chúng tôi vô cùng trân trọng và biết ơn lời chúc phúc của bạn!",
  errorMessage = "Gửi lời chúc thất bại! Vui lòng thử lại sau.",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWishes();
  }, []);

  // Gửi lời chúc
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (!response.ok) throw new Error("Gửi thất bại");

      toast.success(<div>{successMessage}</div>);

      setName("");
      setPhone("");
      setMessage("");
      fetchWishes();
    } catch (error) {
      console.error(error);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Lấy danh sách lời chúc
  const fetchWishes = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Không thể tải lời chúc!");
      const data = await response.json();
      setWishes(data.reverse());
    } catch (error) {
      console.error("Lỗi khi tải lời chúc:", error);
    }
  };

  const visibleWishes = showAll ? wishes : wishes.slice(0, 3);

  return (
    <section className="pt-5 pb-10 px-7">
      <div>
        <h2 className="text-center font-bold text-[28px] font-great-vibes">{title}</h2>
        <p className="text-center text-[15px] mt-2 mb-6">{description}</p>
      </div>

      {/* Form gửi lời chúc */}
      <div className="p-6 bg-primary shadow-md rounded-md">
        <form onSubmit={handleSubmit} className="grid gap-3">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={placeholders.name}
            className="bg-white py-5 text-[15px]"
            required
          />
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={placeholders.phone}
            className="bg-white py-5 text-[15px]"
            required
          />
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholders.message}
            className="bg-white py-2.5 h-[120px] text-[15px]"
            required
          />

          <Button
            variant="outline"
            type="submit"
            className="py-6 bg-white text-black font-semibold uppercase rounded-xl w-full mt-1 text-[14px]"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                {loadingText}
              </>
            ) : (
              buttonText
            )}
          </Button>
        </form>
      </div>

      {/* Danh sách lời chúc */}
      <div className="p-6 bg-primary shadow-md mt-2 rounded-md">
        {wishes.length === 0 ? (
          <div className="px-4 py-3 border rounded-lg shadow-sm bg-gray-50 text-center">
            <h3 className="font-semibold text-sm text-gray-900 uppercase">Đang tải lời chúc...</h3>
          </div>
        ) : (
          <div className="space-y-2">
            {visibleWishes.map((wish) => (
              <div key={wish._id} className="px-4 py-3 border rounded-lg shadow-sm bg-gray-50">
                <h3 className="font-semibold text-sm text-gray-900 uppercase">{wish.name}</h3>
                <p className="text-gray-700 mt-1 text-sm">{wish.message}</p>
              </div>
            ))}
            {!showAll && wishes.length > 3 && (
              <div className="flex justify-center">
                <Button variant="outline" onClick={() => setShowAll(true)} className="px-6 mt-3">
                  {showMoreText} {wishes.length - visibleWishes.length} lời chúc
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Section8;
