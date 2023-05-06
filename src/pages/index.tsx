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
    <main>
      <div className="container mx-auto pb-10">
        <Head>
          <title>Cofile - Check Currency Exchange Rate in Real Time</title>
        </Head>
        <Navbar />
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
      <div className="bg-primary-400">
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
