import datas from "../../data/content.json";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

const PriceContent = () => {
  const { title, description } = datas.price.content as {
    title: string;
    description: string;
  };

  return (
    <div className="container mx-auto px-6 py-16 flex justify-center">
      <div className="max-w-[908px] w-full space-y-4 sm:w-4/5 md:w-full">
        <Heading type={HeadingType.H1} value={title} />
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

export default PriceContent;
