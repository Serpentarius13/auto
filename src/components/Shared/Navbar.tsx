"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type TLink = { href: string; text: string };

const links: TLink[] = [
  { href: "/", text: "Аренда авто" },
  { href: "/tariff", text: "Тарифы" },
  { href: "/services", text: "Услуги" },
  { href: "/about", text: "Условия" },
  { href: "/faq", text: "Частые вопросы" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="min-h-[4.7rem] w-full bg-brown py-[1rem] ">
      <ul className="max-w-[90rem] flex justify-between items-center mx-auto text-[1.8rem] font-bold  ">
        {links.map((link) => {
          let isActive: boolean = false;

          if (link.href == "/" && pathname == window.location.origin)
            isActive = true;
          else if (pathname.includes(link.href)) isActive = true;
          return (
            <li key={link.text}>
              <Link
                href={link.href}
                className={`${isActive ? "text-red" : "text-white"}`}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
