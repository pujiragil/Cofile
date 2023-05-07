import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

const AboutTeam = () => {
  return (
    <div className="container mx-auto px-6 py-16 flex justify-center">
      <div className="max-w-[908px] flex flex-col gap-1">
        <Heading type={HeadingType.H3} value="Our Super Team" />
        <div className="grid gap-12 md:grid-cols-3">
          <div className="pt-5 space-y-4">
            <img
              className="w-full h-auto object-cover"
              src="/team-1.png"
              alt="team"
            />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.SB}
              color={ParagraphColor.PRIMARY}
              value="John Hughes"
            />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value="Sales & Marketing"
            />
          </div>
          <div className="pt-5 space-y-4">
            <img
              className="w-full h-auto object-cover"
              src="/team-2.png"
              alt="team"
            />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.SB}
              color={ParagraphColor.PRIMARY}
              value="Michael Armstrong"
            />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value="Full Stack Developer"
            />
          </div>
          <div className="pt-5 space-y-4">
            <img
              className="w-full h-auto object-cover"
              src="/team-3.png"
              alt="team"
            />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.SB}
              color={ParagraphColor.PRIMARY}
              value="Phil Schneider"
            />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value="Product Designer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
