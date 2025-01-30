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
    small: "w-[100px]",
    medium: "w-[140px]",
    large: "w-[200px]",
  };

  return (
    <button
      onClick={() => href && router.push(href)}
      className={`bg-button ${sizeClasses[size]} py-2 px-4 rounded-full flex items-center justify-center gap-2}`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
