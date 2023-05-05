import { Hero, Navbar } from "@/components";
import Head from "next/head";

export default function App() {
  return (
    <main className="container mx-auto">
      <Head>
        <title>Cofile - Check Currency Exchange Rate in Real Time</title>
      </Head>
      <Navbar />
      <Hero/>
    </main>
  );
}
