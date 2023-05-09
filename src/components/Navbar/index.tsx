import Link from "next/link";
import datas from "../../data/content.json";
import { useRouter } from "next/router";
import { useState } from "react";

interface NavbarContentProps {
  iconImg: string;
  links: { id: number; path: string; name: string }[];
}

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { iconImg, links } = datas.navbar as NavbarContentProps;

  return (
    <nav className="relative">
      <div className="container mx-auto flex justify-between items-center py-2 px-6 pt-6">
        <Link href="/">
          <img
            className="h-10 w-auto object-cover"
            src={iconImg}
            alt="cofile"
          />
        </Link>
        <img
          onClick={() => setIsOpen(true)}
          className="w-8 h-8 object-cover cursor-pointer md:hidden"
          src="/hamburger.svg"
          alt="hamburger"
        />
        <ul className="hidden md:flex items-center gap-10 text-base font-medium text-black/70">
          {links.map((link) => (
            <li
              key={link.id}
              className={`navlink ${
                router.pathname === link.path ? "text-black" : ""
              }`}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`absolute top-0 left-0 bg-white w-full px-6 py-6 flex justify-between items-start drop-shadow-lg md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="grid gap-5 h-fit text-black/70 text-base font-semibold">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => setIsOpen(false)}
              className={`navlink ${
                router.pathname === link.path ? "text-black" : ""
              }`}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <img
          onClick={() => setIsOpen(false)}
          className="w-8 h-8 object-cover cursor-pointer"
          src="/hamburger-close.svg"
          alt="hamburger-close"
        />
      </div>
    </nav>
  );
};

export default Navbar;
