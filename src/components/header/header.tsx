import Button from "../ui/button";
import { FiUser } from "react-icons/fi";
import Navbar from "./navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-[724px] bg-header py-3 px-4 flex items-center justify-between my-9 rounded-full">
      <div className="flex gap-5 items-center">
        <Image src="/images/logo.png" alt="logo" width={32} height={32} />
        <Navbar />
      </div>
      <Button label="حساب کاربری" icon={<FiUser size={20} />} />
    </header>
  );
};

export default Header;
