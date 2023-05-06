import {
  CardMain,
  CardFeatures,
  CardTestimonials,
  Hero,
  Navbar,
  SponsorShip,
} from "@/components";
import Head from "next/head";

export default function App() {
  return (
    <main className="container mx-auto">
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
      </div>
    </main>
  );
}
