import {
  FiPhoneCall as FiPhoneCallIcon,
  FiMail as FiMailIcon,
} from "react-icons/fi";
import { SlLocationPin as SlLocationPinIcon } from "react-icons/sl";
import FeatureItem from "./feature-item";

const featureItemsDeatils = [
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
    <div className="flex items-center gap-10 mt-20">
      {featureItemsDeatils.map((item, index) => (
        <FeatureItem
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
};

export default FeatureList;
