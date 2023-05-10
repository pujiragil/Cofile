import Image from "next/image";

const PriceBanner = () => {
  return (
    <Image
      width={1920}
      height={447}
      className="h-[260px] w-full object-cover sm:h-[320px] md:h-[400px]"
      src="/banner.webp"
      alt="pricing-banner"
    />
  );
};

export default PriceBanner;
