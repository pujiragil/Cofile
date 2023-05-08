import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

const AboutCard = () => {
  return (
    <div className="container mx-auto px-6 pt-10 pb-16 flex justify-center">
      <div className="max-w-[908px] grid gap-12 place-items-center sm:w-4/5 md:w-full md:grid-cols-2">
        <div className="space-y-2">
          <Heading type={HeadingType.H1} value="Fully Remote Team" />
          <Paragraph
            size={ParagraphSize.BS}
            weight={ParagraphWeight.N}
            color={ParagraphColor.SECONDARY}
            value="With a professional approach, we successfully build this remote team"
          />
        </div>
        <img
          className="w-full h-auto object-cover"
          src="/fully-remote-team.png"
          alt="fully-remote-team"
        />
      </div>
    </div>
  );
};

export default AboutCard;
