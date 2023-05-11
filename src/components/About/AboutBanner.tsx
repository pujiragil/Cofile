import Image from "next/image";

const AboutBanner = () => {
  return (
    <Image
      width={1920}
      height={447}
      priority={true}
      src="/banner.webp"
      className="object-cover object-center w-full h-[260px] sm:h-[320px] md:h-[400px]"
      alt="about-banner"
    />
  );
};

export default AboutBanner;
