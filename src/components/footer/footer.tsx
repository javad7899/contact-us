import Image from "next/image";
import Navbar from "../header/navbar";
import {
  SlLocationPin as SlLocationPinIcon,
  SlClock as SlClockIcon,
  SlSocialYoutube as SlSocialYoutubeIcon,
  SlSocialFacebook as SlSocialFacebookIcon,
  SlSocialInstagram as SlSocialInstagramIcon,
  SlSocialTwitter as SlSocialTwitterIcon,
} from "react-icons/sl";

const footerIcons = [
  {
    label: "ایران ، تهران ، خیابان فرشته",
    icon: <SlLocationPinIcon size={20} />,
  },
  {
    label: "ساعت کاری 24 ساعته",
    icon: <SlClockIcon size={20} />,
  },
];

const socialIcons = [
  { id: "youtube", icon: <SlSocialYoutubeIcon size={18} /> },
  { id: "facebook", icon: <SlSocialFacebookIcon size={18} /> },
  { id: "instagram", icon: <SlSocialInstagramIcon size={18} /> },
  { id: "twitter", icon: <SlSocialTwitterIcon size={18} /> },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-white">
      <section className="relative w-full rounded-t-3xl pt-8 pb-4 flex flex-col items-center justify-center bg-[url(/images/footer.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-80 rounded-t-3xl"></div>
        <div className="relative z-10 flex flex-col items-center gap-3 w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <Image src="/images/logo.png" alt="logo" width={42} height={42} />
          <Navbar />
          <p className="text-white text-center text-sm md:text-base max-w-lg">
            با ما تجربه‌ای متفاوت از خرید سی پی کالاف دیوتی موبایل داشته باشید!
            واریز خودکار سی پی کمتر از ۳ دقیقه، سریع، ایمن و مطمئن.
          </p>
          <span className="w-full h-[0.5px] bg-white opacity-50" />
          <div className="flex flex-col md:flex-row items-center justify-between w-full text-white gap-4 md:gap-8">
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm md:text-base">
              {footerIcons.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Image
                src="/images/e-nemad.png"
                alt="e-nemad"
                width={50}
                height={50}
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <Image
                src="/images/zarinpal.png"
                alt="zarinpal"
                width={50}
                height={50}
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-[#EF9841] py-3 px-4 h-auto md:h-20 w-[90%] md:w-[80%] flex flex-col md:flex-row items-center justify-between rounded-2xl text-white text-center md:text-left text-sm md:text-base gap-2 md:gap-0">
          <p>کلیه حقوق این وبسایت متعلق به سی پی بات می باشد</p>
          <div className="flex items-center gap-2">
            {socialIcons.map((item) => (
              <span
                key={item.id}
                className="border border-white rounded-full p-2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10"
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
