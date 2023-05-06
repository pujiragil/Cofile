import datas from "../../data/content.json";

interface FooterContentProps {
  mainImg: string;
  socials: { id: number; img: string }[];
  menus: { id: number; link: string }[];
}

const Footer = () => {
  const { mainImg, socials, menus } = datas.home.footer as FooterContentProps;

  return (
    <footer className="flex flex-col justify-center gap-10 px-6 pt-14 pb-6 md:pb-14">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <img
          className="w-[110px] h-auto object-cover"
          src={mainImg}
          alt="cofile"
        />
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <img
              key={social.id}
              className="w-6 h-6 object-cover"
              src={social.img}
              alt="instagram"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 text-lg">
        {menus.map((menu) => (
          <p key={menu.id}>{menu.link}</p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
