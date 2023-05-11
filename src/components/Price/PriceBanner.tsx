import Image from "next/image";

const PriceBanner = () => {
  return (
    <Image
      width={1920}
      height={447}
      priority={true}
      src="/banner.webp"
      className="h-[260px] w-full object-cover sm:h-[320px] md:h-[400px]"
      alt="pricing-banner"
    />
  );
};

export default PriceBanner;
