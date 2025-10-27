import React from "react";
import Image from "next/image";

interface Section9Props {
  backgroundImage: string;
  bottomText: string;
}

export const Section9: React.FC<Section9Props> = ({ backgroundImage, bottomText }) => {
  return (
    <section className="relative w-full">
      <img
        src={backgroundImage}
        alt="Background"
        className="w-full object-cover"
      />

      <div className="absolute bg-white bg-opacity-80 w-full top-[320px] py-3">
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
          <Image
            src="/images/thankyou.webp"
            alt="Divider Floral"
            width={282}
            height={86}
            className="mx-auto mb-0 object-cover w-[282px] h-[86px]"
          />
          <p className="text-[50px] font-perfect text-[#054658] font-medium tracking-wide">
            {bottomText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section9;
