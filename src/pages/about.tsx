import {
  AboutBanner,
  AboutCard,
  AboutContent,
  AboutMilestones,
  AboutTeam,
} from "@/components";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Cofile - About Us</title>
      </Head>
      <AboutContent />
      <AboutBanner />
      <AboutMilestones />
      <AboutTeam />
      <AboutCard />
    </>
  );
};

export default About;
