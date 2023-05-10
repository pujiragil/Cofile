import Image from "next/image";

const AboutBanner = () => {
  return (
    <Image
      width={1920}
      height={447}
      className="object-cover object-center w-full h-[260px] sm:h-[320px] md:h-[400px]"
      src="/banner.webp"
      alt="about-banner"
    />
  );
};

export default AboutBanner;
