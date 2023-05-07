import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

const AboutContent = () => {
  return (
    <div className="container mx-auto px-6 py-16 flex justify-center">
      <div className="max-w-[908px] flex flex-col gap-12 sm:w-4/5 md:w-full md:flex-row md:justify-start">
        <Heading
          type={HeadingType.H1}
          value="We are a Group of Individuals With a Big Mission"
        />
        <div className="space-y-4 md:basis-full">
          <Paragraph
            size={ParagraphSize.BS}
            weight={ParagraphWeight.N}
            color={ParagraphColor.SECONDARY}
            value="We are a group of individuals with a big mission to help many businesses all over the world reach their biggest potential."
          />
          <Paragraph
            size={ParagraphSize.BS}
            weight={ParagraphWeight.N}
            color={ParagraphColor.SECONDARY}
            value="We provide them with our stable mobile apps to help them maintain their business. And obviously, we will continuously improve our products and services."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
