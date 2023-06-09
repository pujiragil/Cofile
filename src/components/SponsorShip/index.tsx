import Image from "next/image";
import datas from "../../data/content.json";
import { Heading, HeadingType } from "../globals";

interface SponsorShipContentProps {
  title: string;
  brands: { id: number; img: string }[];
}

const SponsorShip = () => {
  const { title, brands } = datas.home.sponsorship as SponsorShipContentProps;

  return (
    <div className="px-6 flex justify-center">
      <div className="max-w-[908px] w-full space-y-8 sm:w-4/5 md:w-full md:space-y-1">
        <Heading
          type={HeadingType.H3}
          styles="text-center md:text-left"
          value={title}
        />
        <div className="py-5 grid place-items-center gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-12">
          {brands.map((brand) => (
            <Image
              key={brand.id}
              width={381}
              height={132}
              src={brand.img}
              className="w-48 h-auto object-cover"
              alt="paple"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorShip;
