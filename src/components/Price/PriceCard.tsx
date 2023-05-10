import datas from "../../data/content.json";
import { FC } from "react";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";
import Image from "next/image";

interface CardItemContentProps {
  id: number;
  iconImg: string;
  title: string;
  description: string;
  subtitle: string;
  lists: { id: number; value: string }[];
}

const CardItem: FC<CardItemContentProps> = (props) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <Image
          width={24}
          height={24}
          className="w-9 h-9 object-cover"
          src={props.iconImg}
          alt="beginner"
        />
        <div className="space-y-2 w-fit">
          <Heading type={HeadingType.H2} value={props.title} />
          <Paragraph
            size={ParagraphSize.BS}
            weight={ParagraphWeight.N}
            color={ParagraphColor.SECONDARY}
            value={props.description}
          />
        </div>
      </div>
      <Heading type={HeadingType.H3} value={props.subtitle} />
      <ul className="space-y-2 list-disc list-inside text-primary-100">
        {props.lists.map((list) => (
          <li key={list.id}>{list.value}</li>
        ))}
      </ul>
    </div>
  );
};

const PriceCard = () => {
  const prices = datas.price.plan as CardItemContentProps[];

  return (
    <div className="container mx-auto flex justify-center px-6 pt-16 pb-32">
      <div className="max-w-[908px] grid gap-12 w-full sm:w-4/5 md:w-full md:grid-cols-3">
        {prices.map((price) => (
          <CardItem key={price.id} {...price} />
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
