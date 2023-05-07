import { FC } from "react";
import datas from "../../data/content.json";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

interface CardProps {
  orderBy: "content" | "image";
  title: string;
  description: string;
  imageLink: string;
}

const Card: FC<CardProps> = ({ orderBy, title, description, imageLink }) => {
  return (
    <section className="flex flex-col gap-12 sm:items-center md:flex-row">
      <div
        className={`pt-20 space-y-4 basis-1/2 sm:w-3/5 md:w-full ${
          orderBy === "content" ? "order-1" : "order-2"
        }`}
      >
        <Heading type={HeadingType.H2} value={title} />
        <Paragraph
          size={ParagraphSize.BS}
          weight={ParagraphWeight.N}
          color={ParagraphColor.SECONDARY}
          value={description}
          styles="sm:w-4/5 lg:w-10/12"
        />
      </div>

      <div
        className={`flex justify-center basis-1/2 ${
          orderBy === "image" ? "order-1" : "order-2"
        }`}
      >
        <img
          className="w-full h-auto object-cover sm:w-full lg:w-10/12"
          src={imageLink}
          alt="card-image"
        />
      </div>
    </section>
  );
};

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  mainImg: string;
  orderBy: "content" | "image";
}

const CardMain = () => {
  const cards = datas.home.main as CardItemProps[];

  return (
    <div className="flex justify-center px-6">
      <div className="max-w-[908px] space-y-24">
        {cards.map((card) => (
          <Card
            key={card.id}
            orderBy={card.orderBy}
            title={card.title}
            description={card.description}
            imageLink={card.mainImg}
          />
        ))}
      </div>
    </div>
  );
};

export default CardMain;
