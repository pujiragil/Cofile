import { Card, CardFeatures, Hero, Navbar, SponsorShip } from "@/components";
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

        <div className="flex justify-center px-6">
          <div className="max-w-[908px] space-y-24">
            <Card
              orderBy="content"
              title="Easy to Use"
              description="Our clean and intuitive design will help you operate the apps easily"
              imageLink="/card-1.png"
            />
            <Card
              orderBy="image"
              title="Upgrade When You Need"
              description="We committed to provide the free plan forever. Once you need an upgrade, we will be there for you"
              imageLink="/card-2.png"
            />
          </div>
        </div>

        <CardFeatures />
      </div>
    </main>
  );
}
