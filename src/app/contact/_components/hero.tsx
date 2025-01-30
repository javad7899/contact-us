import Image from "next/image";
import React from "react";
import FeatureList from "./Feature-list";

const ContactHero = () => {
  return (
    <div className="flex items-center flex-col bg-contact bg-cover bg-center bg-no-repeat relative">
      <h1 className="text-3xl font-bold text-center">
        با ما در ارتباط باشید تا بهترین تجربه را برای شما فراهم کنیم !
      </h1>
      <Image
        src="/images/triangle.png"
        alt="triangle-right"
        width={32}
        height={32}
        className="absolute right-10 top-20"
      />
      <Image
        src="/images/triangle.png"
        alt="triangle-left"
        width={32}
        height={32}
        className="absolute left-10 top-10 rotate-[270deg]"
      />
      <FeatureList />
    </div>
  );
};

export default ContactHero;
