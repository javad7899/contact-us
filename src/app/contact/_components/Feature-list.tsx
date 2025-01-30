import {
  FiPhoneCall as FiPhoneCallIcon,
  FiMail as FiMailIcon,
} from "react-icons/fi";
import { SlLocationPin as SlLocationPinIcon } from "react-icons/sl";
import FeatureItem from "./feature-item";

const featureItemsDetails = [
  {
    icon: <FiPhoneCallIcon size={32} />,
    title: "شماره تماس",
    subtitle: "021 - 154893274",
  },
  {
    icon: <FiMailIcon size={32} />,
    title: "ایمیل",
    subtitle: "cpbot@info.com",
  },
  {
    icon: <SlLocationPinIcon size={32} />,
    title: "آدرس",
    subtitle: "تهران خیابان فرشته جنب کوچه آپادانا",
  },
];

const FeatureList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 md:mt-20 px-4 w-full">
      {featureItemsDetails.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:items-start text-center md:text-right max-w-md"
        >
          <FeatureItem
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
