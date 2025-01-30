"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarItems = [
  {
    label: "صفحه اصلی",
    href: "/",
  },
  {
    label: "اخبار و مقالات",
    href: "/blog",
  },
  {
    label: "درباره ما",
    href: "/about",
  },
  {
    label: "تماس با ما",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-4">
      <ul className="flex items-center gap-4">
        {navbarItems.map((item, index) => (
          <li
            key={index}
            className={`${
              pathname === item.href ? "text-white" : "text-[#B7ADA4]"
            }`}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
