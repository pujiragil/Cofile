import { FC } from "react";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

interface TeamMemberProps {
  profileImg: string;
  name: string;
  job: string;
}

const TeamMember: FC<TeamMemberProps> = ({ profileImg, name, job }) => {
  return (
    <div className="pt-5 space-y-4">
      <img
        className="w-full h-auto object-cover"
        src={profileImg}
        alt="profile-image"
      />
      <Paragraph
        size={ParagraphSize.BS}
        weight={ParagraphWeight.SB}
        color={ParagraphColor.PRIMARY}
        value={name}
      />
      <Paragraph
        size={ParagraphSize.BS}
        weight={ParagraphWeight.N}
        color={ParagraphColor.SECONDARY}
        value={job}
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
          <TeamMember profileImg="/team-1.png" name="John Hughes" job="Sales & Marketing"/>
          <TeamMember profileImg="/team-2.png" name="Michael Armstrong" job="Full Stack Developer"/>
          <TeamMember profileImg="/team-3.png" name="Phil Schneider" job="Frontend Developer"/>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
