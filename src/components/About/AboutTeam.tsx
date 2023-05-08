import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

const TeamItem = () => {
  return (
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
  );
};

const AboutTeam = () => {
  return (
    <div className="container mx-auto px-6 py-16 flex justify-center">
      <div className="max-w-[908px] flex flex-col gap-1 w-full sm:w-4/5 md:w-full">
        <Heading type={HeadingType.H3} value="Our Super Team" />
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <TeamItem/>
          <TeamItem/>
          <TeamItem/>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
