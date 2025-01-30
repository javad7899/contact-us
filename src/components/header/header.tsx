import Button from "../ui/button";
import { FiUser as FiUserIcon } from "react-icons/fi";
import Navbar from "./navbar";
import Image from "next/image";
import { RiMenu3Fill as RiMenu3FillIcon } from "react-icons/ri";

const Header = () => {
  return (
    <header className="w-full max-w-4xl mx-auto bg-header py-3 px-4 flex items-center justify-between my-9 rounded-full">
      <div className="flex flex-row-reverse flex-wrap-reverse md:flex-row gap-5 items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={32}
          height={32}
          priority
        />
        <nav className="hidden md:block">
          <Navbar />
        </nav>
        <div className="block md:hidden">
          <RiMenu3FillIcon size={24} />
        </div>
      </div>
      <div className="hidden md:block">
        <Button label="حساب کاربری" icon={<FiUserIcon size={20} />} />
      </div>
      <button className="block md:hidden bg-[#444444] text-white p-2 rounded-full">
        <FiUserIcon size={20} />
      </button>
    </header>
  );
};

export default Header;
