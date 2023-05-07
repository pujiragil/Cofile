import datas from "../../data/content.json";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

interface CardPromoteContentProps {
  title: string;
  description: string;
  stores: { id: number; img: string }[];
  mainImg: string;
}

const CardPromote = () => {
  const { title, description, stores, mainImg } = datas.home
    .promote as CardPromoteContentProps;

  return (
    <section className="flex justify-center py-8 px-6">
      <div className="max-w-[908px] flex flex-col gap-12 w-full sm:w-2/3 md:w-full md:flex-row">
        <div className="space-y-10 md:basis-1/2">
          <div className="space-y-4">
            <Heading type={HeadingType.H2} value={title} />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value={description}
            />
          </div>
          <div className="py-5 flex flex-col gap-4 sm:flex-row sm:justify-center md:flex-col">
            {stores.map((store) => (
              <img
                key={store.id}
                className="w-[170px] h-auto object-contain"
                src={store.img}
                alt="app-store"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center md:basis-1/2">
          <img
            className="w-full h-auto object-cover"
            src={mainImg}
            alt="promote"
          />
        </div>
      </div>
    </section>
  );
};

export default CardPromote;
