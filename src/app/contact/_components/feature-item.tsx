interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="w-[320px] flex items-center flex-col text-center bg-[#29292D40] backdrop-blur-md py-6  rounded-2xl">
      <div className="text-2xl relative flex items-center">
        <span className="z-20 text-[#EF9841]">{icon}</span>
        <span className="bg-[#FFE6CF] opacity-40 w-6 h-6 rounded-full absolute -left-2"></span>
      </div>
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default FeatureItem;
