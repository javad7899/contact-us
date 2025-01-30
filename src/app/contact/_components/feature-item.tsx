import React from "react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="w-[280px] sm:w-[320px] md:w-[400px] flex flex-col items-center text-center bg-[#29292D] bg-opacity-30 backdrop-blur-md p-6 rounded-2xl">
      <div className="relative flex items-center justify-center text-2xl">
        <span className="z-20 text-[#EF9841]">{icon}</span>
        <span className="bg-[#FFE6CF] opacity-40 w-6 h-6 rounded-full absolute -left-2"></span>
      </div>
      <h2 className="text-lg font-semibold mt-3 text-white">{title}</h2>
      <h4 className="text-sm md:text-base text-gray-300 mt-1">{subtitle}</h4>
    </div>
  );
};

export default FeatureItem;
