import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

const AboutMilestones = () => {
  return (
    <div className="container mx-auto px-6 pt-20 pb-16 flex justify-center">
      <div className="max-w-[908px] grid gap-12 sm:w-4/5 md:w-full md:grid-cols-3">
        <Heading type={HeadingType.H1} value="Our Milestones" />
        <div className="space-y-4">
          <img
            className="w-9 h-9 object-cover"
            src="/star.png"
            alt="about-icon"
          />
          <div className="space-y-2">
            <Heading type={HeadingType.H1} value="4.85 / 5.0" />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value="Rating on Google Play & App Store"
            />
          </div>
        </div>
        <div className="space-y-4">
          <img
            className="w-9 h-9 object-cover"
            src="/download.png"
            alt="about-icon"
          />
          <div className="space-y-2">
            <Heading type={HeadingType.H1} value="8.5k ++" />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value="Downloads on Google Play & App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMilestones;
