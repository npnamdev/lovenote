"use client";

import { useEffect, useState } from "react";

interface Wish {
    _id: string;
    name: string;
    phone: string;
    message: string;
}

const WishList: React.FC = () => {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchWishes();
    }, []);

    const fetchWishes = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/wishes`);
            if (!response.ok) {
                throw new Error("Không thể tải danh sách lời chúc!");
            }

            const data = await response.json();
            setWishes(data.reverse()); // Đảo ngược để hiển thị lời chúc mới nhất trước
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa lời chúc này?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/wishes/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Không thể xóa lời chúc!");
            }

            // Xóa thành công -> Cập nhật danh sách lời chúc
            setWishes(wishes.filter((wish) => wish._id !== id));
            alert("Lời chúc đã được xóa!");
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Danh Sách Lời Chúc</h2>

            {loading && <p className="text-blue-500">Đang tải...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && wishes.length === 0 && (
                <p className="text-gray-500">Chưa có lời chúc nào!</p>
            )}

            {!loading && !error && wishes.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">Tên</th>
                                <th className="border p-2">Số điện thoại</th>
                                <th className="border p-2">Lời chúc</th>
                                <th className="border p-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishes.map((wish) => (
                                <tr key={wish._id} className="text-center">
                                    <td className="border p-2">{wish.name}</td>
                                    <td className="border p-2">{wish.phone}</td>
                                    <td className="border p-2">{wish.message}</td>
                                    <td className="border p-2">
                                        <button
                                            onClick={() => handleDelete(wish._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default WishList;