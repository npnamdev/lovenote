'use client';

import * as React from 'react';
import Image from 'next/image';

interface Person {
    role: string; // "Chú Rể" hoặc "Cô Dâu"
    name: string;
    address?: string;
}

interface Section2Props {
    title: React.ReactNode;
    galleryImages: string[];
    groom: Person;
    bride: Person;
}

const Section2: React.FC<Section2Props> = ({ title, galleryImages, groom, bride }) => {
    return (
        <section className="text-center px-5">
            <h2 className="text-[24px] font-great-vibes mb-6 pt-6 text-[#054658]">{title}</h2>

            <div className="grid grid-cols-2 gap-0">
                {/* Ảnh đầu */}
                <div className="border-[4px] border-gray-50" data-aos="fade-right" data-aos-duration="1000">
                    <Image
                        className="w-full"
                        src={galleryImages[0]}
                        width={200}
                        height={400}
                        alt="Wedding"
                    />
                </div>

                {/* Nhà trai */}
                <div className="flex flex-col justify-center items-center gap-2 border-[4px] border-gray-50" data-aos="fade-left" data-aos-duration="1000">
                    <h2 className="font-extrabold font-oswald mb-2">NHÀ TRAI</h2>
                    {groom.address && <p className="text-[14px]">{groom.address}</p>}
                    <h5 className="mt-5 text-[17px] font-oswald">{groom.role}</h5>
                    <p className=" font-photograph-no-shadown text-[37px] mt-2 text-[#054658]">{groom.name}</p>
                </div>

                {/* Nhà gái */}
                <div className="flex flex-col justify-center items-center gap-2 border-[4px] border-gray-50" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="font-extrabold font-oswald mb-2">NHÀ GÁI</h2>
                    {bride.address && <p className="text-[14px]">{bride.address}</p>}
                    <h5 className="mt-5 text-[17px] font-oswald">{bride.role}</h5>
                    <p className="font-photograph-no-shadown text-[37px] mt-2 text-[#054658]">{bride.name}</p>
                </div>

                {/* Ảnh cuối */}
                <div className="border-[4px] border-gray-50" data-aos="fade-left" data-aos-duration="1000">
                    <Image
                        className="w-full"
                        src={galleryImages[1]}
                        width={200}
                        height={400}
                        alt="Wedding"
                    />
                </div>
            </div>
        </section>
    );
};

export default Section2;
