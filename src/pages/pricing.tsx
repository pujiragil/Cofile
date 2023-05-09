import {
  CardPromote,
  PriceBanner,
  PriceCard,
  PriceContent,
  SponsorShip,
} from "@/components";
import Head from "next/head";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Cofile - Pricing Plan</title>
      </Head>
      <PriceContent />
      <PriceBanner />
      <PriceCard />
      <div className="space-y-32">
        <SponsorShip />
        <CardPromote />
      </div>
    </>
  );
};

export default Pricing;
