import Image from "next/image";
import React from "react";
import FeatureList from "./Feature-list";

const ContactHero = () => {
  return (
    <div className="flex items-center flex-col bg-contact bg-cover bg-center bg-no-repeat relative py-20 w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4 w-full">
        با ما در ارتباط باشید تا بهترین تجربه را برای شما فراهم کنیم !
      </h1>
      <Image
        src="/images/triangle.png"
        alt="triangle-right"
        width={32}
        height={32}
        className="absolute right-4 md:right-10 top-10 md:top-20"
      />
      <Image
        src="/images/triangle.png"
        alt="triangle-left"
        width={32}
        height={32}
        className="absolute left-4 md:left-10 top-6 md:top-10 rotate-[270deg]"
      />
      <FeatureList />
    </div>
  );
};

export default ContactHero;
