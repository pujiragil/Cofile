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

interface TeamMemberProps {
  id: number;
  profileImg: string;
  name: string;
  job: string;
}

const TeamMember: FC<TeamMemberProps> = ({ profileImg, name, job }) => {
  return (
    <div className="pt-5 space-y-4">
      <Image
        width={235}
        height={235}
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

interface AboutTeamContentProps {
  title: string;
  datas: TeamMemberProps[];
}

const AboutTeam = () => {
  const { title, datas: teams } = datas.about.teams as AboutTeamContentProps;

  return (
    <div className="container mx-auto px-6 py-16 flex justify-center">
      <div className="max-w-[908px] flex flex-col gap-1 w-full sm:w-4/5 md:w-full">
        <Heading type={HeadingType.H3} value={title} />
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {teams.map((team) => (
            <TeamMember key={team.id} {...team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
