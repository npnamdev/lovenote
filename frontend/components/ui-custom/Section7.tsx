import React, { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";

interface ImageItem {
    src: string;
    height?: number; // người dùng có thể truyền, mặc định 200
}

interface Section7Props {
    title?: string;
    description?: string;
    column1: ImageItem[];
    column2: ImageItem[];
    borderRadius?: number;
}

const Section7: React.FC<Section7Props> = ({
    title = "Album Hình Cưới",
    description = "Khoảnh khắc yêu thương của chúng tôi.",
    column1 = [],
    column2 = [],
    borderRadius = 16,
}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const renderImage = (img: ImageItem) => (
        <div
            className="bg-center bg-cover cursor-pointer transition-transform hover:scale-105"
            style={{
                backgroundImage: `url(${img.src})`,
                height: `${img.height || 200}px`,
                borderRadius: `${borderRadius}px`,
            }}
            onClick={() => setSelectedImage(img.src)}
        ></div>
    );

    return (
        <section className="py-5 bg-white">
            <div className="w-[88%] mx-auto text-center">
                <h2 className="font-bold text-[28px] font-great-vibes">{title}</h2>
                <p className="text-[14px] mb-6 mt-2 font-philosopher-noshadow ">{description}</p>
            </div>

            <div className="w-[88%] mx-auto grid grid-cols-2 gap-2">
                {/* Cột trái */}
                <div className="flex flex-col gap-2">
                    {column1.map((img, idx) => (
                        <React.Fragment key={idx}>{renderImage(img)}</React.Fragment>
                    ))}
                </div>

                {/* Cột phải */}
                <div className="flex flex-col gap-2">
                    {column2.map((img, idx) => (
                        <React.Fragment key={idx}>{renderImage(img)}</React.Fragment>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="sm:max-w-[600px]  bg-transpacent  border-none">
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="max-h-[80vh] max-w-full object-contain rounded-md"
                        />
                    )}

                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Section7;
