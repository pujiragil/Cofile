import Link from "next/link";
import datas from "../../data/content.json";

interface FooterContentProps {
  mainImg: string;
  socials: { id: number; img: string; link: string }[];
  menus: { id: number; name: string; path: string }[];
}

const Footer = () => {
  const { mainImg, socials, menus } = datas.home.footer as FooterContentProps;

  return (
    <footer className="bg-primary-400">
      <div className="container mx-auto flex flex-col justify-center gap-10 px-6 pt-14 pb-6 md:pb-14">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <Link href="/">
            <img
              className="w-[110px] h-auto object-cover"
              src={mainImg}
              alt="cofile"
            />
          </Link>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a key={social.id} href={social.link} target="_blank">
                <img
                  className="w-6 h-6 object-cover"
                  src={social.img}
                  alt="social-icon"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-lg">
          {menus.map((menu) => (
            <Link key={menu.id} href={menu.path}>
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
