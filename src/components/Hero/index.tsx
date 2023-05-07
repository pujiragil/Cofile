import datas from "../../data/content.json";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

interface HeroContentProps {
  title: string;
  description: string;
  stores: { id: number; img: string }[];
  mainImg: string;
}

const Hero = () => {
  const { title, description, stores, mainImg } = datas.home
    .hero as HeroContentProps;

  return (
    <section className="flex justify-center py-4 px-6">
      <div className="max-w-[908px] flex flex-col items-center gap-10 sm:w-4/5 md:w-full md:flex-row">
        <div className="flex flex-col sm:text-center md:text-left">
          <div className="pt-12 space-y-2">
            <Heading type={HeadingType.H1} value={title} />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value={description}
            />
          </div>
          <div className="py-5 flex flex-col gap-2 sm:flex-row sm:justify-center md:justify-normal md:flex-col lg:flex-row">
            {stores.map((store) => (
              <img
                key={store.id}
                className="w-[170px] h-auto object-contain lg:w-40"
                src={store.img}
                alt="app-store"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full lg:justify-end">
          <img
            className="w-full h-auto object-cover sm:w-full md:object-contain lg:w-10/12 lg:object-cover"
            src={mainImg}
            alt="main"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
