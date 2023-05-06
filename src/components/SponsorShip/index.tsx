import datas from "../../data/content.json";

interface SponsorShipContentProps {
  title: string;
  brands: { id: number; img: string }[];
}

const SponsorShip = () => {
  const { title, brands } = datas.home.sponsorship as SponsorShipContentProps;

  return (
    <div className="px-6 flex justify-center">
      <div className="max-w-[908px] w-full space-y-8 md:space-y-1">
        <h2 className="text-2xl font-semibold text-primary-100 text-center md:text-left">
          {title}
        </h2>
        <div className="py-5 flex flex-col items-center gap-12 md:flex-row md:gap-6 lg:gap-12">
          {brands.map((brand) => (
            <img
              key={brand.id}
              className="w-48 h-auto object-cover sm:w-2/5 md:w-full"
              src={brand.img}
              alt="paple"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorShip;
