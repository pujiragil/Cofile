import {
  CardMain,
  CardFeatures,
  CardTestimonials,
  Hero,
  Navbar,
  SponsorShip,
  Accordions,
  CardPromote,
  Footer,
} from "@/components";
import Head from "next/head";

export default function App() {
  return (
      <div className="container mx-auto pb-10">
        <Head>
          <title>Cofile - Check Currency Exchange Rate in Real Time</title>
        </Head>
        <div className="space-y-24">
          <Hero />
          <SponsorShip />
          <CardMain />
          <CardFeatures />
          <CardTestimonials />
          <Accordions />
          <CardPromote />
        </div>
      </div>
  );
}
