"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  label: string;
  href?: string;
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href = "",
  size = "medium",
  icon,
}) => {
  const router = useRouter();

  const sizeClasses = {
    small: "w-[90px] sm:w-[100px] md:w-[120px]",
    medium: "w-[120px] sm:w-[140px] md:w-[160px]",
    large: "w-[160px] sm:w-[200px] md:w-[240px]",
  };

  return (
    <button
      onClick={() => href && router.push(href)}
      className={`bg-button ${sizeClasses[size]} py-2 px-4 rounded-full flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:bg-opacity-80 active:scale-95`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
