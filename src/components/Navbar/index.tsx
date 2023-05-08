import Link from "next/link";
import datas from "../../data/content.json";
import { useRouter } from "next/router";

interface NavbarContentProps {
  iconImg: string;
  links: { id: number; path: string; name: string }[];
}

const Navbar = () => {
  const router = useRouter();
  const { iconImg, links } = datas.navbar as NavbarContentProps;

  return (
    <nav className="container mx-auto flex justify-between items-center py-2 px-6">
      <img className="h-10 w-auto object-cover" src={iconImg} alt="cofile" />
      <img
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
    </nav>
  );
};

export default Navbar;
