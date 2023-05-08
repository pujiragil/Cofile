import {
  CardPromote,
  PriceBanner,
  PriceCard,
  PriceContent,
  SponsorShip,
} from "@/components";

const Pricing = () => {
  return (
    <>
      <PriceContent />
      <PriceBanner />
      <PriceCard />
      <div className="space-y-36">
        <SponsorShip />
        <CardPromote />
      </div>
    </>
  );
};

export default Pricing;
