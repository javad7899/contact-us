import Button from "@/components/ui/button";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import ContactFrom from "./contact-from";

const ContactContainer = () => {
  return (
    <div className="relative w-full ">
      <Image
        src="/images/circle.png"
        alt="circle"
        width={800}
        height={800}
        className="absolute hidden md:block z-0 -top-[250px]  left-1/2 -translate-x-1/2 w-[50px] h-[50px] md:w-[500px] md:h-[500px]"
      />
      <div className="w-full bg-white min-h-80 rounded-t-3xl mt-12 flex flex-col items-center py-8 md:py-12 relative z-10 px-4 md:px-20">
        <div className="bg-white rounded-full text-black absolute left-1/2 -top-5 w-12 h-12 flex items-center justify-center transform -translate-x-1/2">
          <GoArrowDown size={24} />
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <Button label="تماس با ما" />
          <h3 className="text-lg md:text-xl font-bold text-[#0F0F0F]">
            ارتباط با مجموعه سی پی بات
          </h3>
          <p className="text-sm md:text-base text-[#838383] max-w-[600px]">
            از اینکه با ما در ارتباط هستید سپاسگزاریم. برای ارسال پیام، لطفاً از
            فرم زیر استفاده کنید.
          </p>
        </div>
        <ContactFrom />
      </div>
    </div>
  );
};

export default ContactContainer;
