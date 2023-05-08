import datas from "../../data/content.json";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

interface ContentProps {
  title: string;
  descriptions: { id: number; value: string }[];
}

const AboutContent = () => {
  const { title, descriptions } = datas.about.content as ContentProps;

  return (
    <div className="container mx-auto px-6 py-16 flex justify-center">
      <div className="max-w-[908px] grid gap-12 sm:w-4/5 md:grid-cols-2 md:w-full">
        <Heading type={HeadingType.H1} value={title} />
        <div className="space-y-4 md:basis-full">
          {descriptions.map((description) => (
            <Paragraph
              key={description.id}
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value={description.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
