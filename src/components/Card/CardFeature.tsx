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

interface CardItemProps {
  title: string;
  description: string;
  imageLink: string;
}

const CardItem: FC<CardItemProps> = ({ title, description, imageLink }) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        className="w-12 h-12 object-cover"
        src={imageLink}
        alt="features-1"
      />
      <div className="space-y-2 w-fit">
        <Heading type={HeadingType.H3} value={title} />
        <Paragraph
          size={ParagraphSize.BS}
          weight={ParagraphWeight.N}
          color={ParagraphColor.SECONDARY}
          value={description}
        />
      </div>
    </div>
  );
};

interface CardFeaturesContentProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const CardFeatures = () => {
  const features = datas.home.features as CardFeaturesContentProps[];

  return (
    <section className="flex justify-center px-6 py-16">
      <div className="max-w-[908px] flex flex-col gap-12 sm:justify-center sm:items-center sm:w-4/5 md:w-full md:items-start md:flex-row">
        {features.map((feature) => (
          <CardItem
            key={feature.id}
            title={feature.title}
            description={feature.description}
            imageLink={feature.img}
          />
        ))}
      </div>
    </section>
  );
};

export default CardFeatures;
