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
import Image from "next/image";

interface ContentProps {
  id: number;
  iconImg: string;
  rating: string;
  description: string;
}

const Content: FC<ContentProps> = (props) => {
  return (
    <div className="space-y-4">
      <Image
        width={36}
        height={36}
        className="w-9 h-9 object-cover"
        src={props.iconImg}
        alt="about-icon"
      />
      <div className="space-y-2">
        <Heading type={HeadingType.H1} value={props.rating} />
        <Paragraph
          size={ParagraphSize.BS}
          weight={ParagraphWeight.N}
          color={ParagraphColor.SECONDARY}
          value={props.description}
        />
      </div>
    </div>
  );
};

interface AboutMilestonesContentProps {
  title: string;
  datas: ContentProps[];
}

const AboutMilestones = () => {
  const { title, datas: milestones } = datas.about
    .milestones as AboutMilestonesContentProps;

  return (
    <div className="container mx-auto px-6 pt-20 pb-16 flex justify-center">
      <div className="max-w-[908px] grid gap-12 w-full sm:w-4/5 md:w-full md:grid-cols-3">
        <Heading type={HeadingType.H1} value={title} />
        {milestones.map((milestone) => (
          <Content key={milestone.id} {...milestone} />
        ))}
      </div>
    </div>
  );
};

export default AboutMilestones;
