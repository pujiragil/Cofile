import { Navbar } from "@/components";
import Head from "next/head";

export default function App() {
  return (
    <main className="container mx-auto px-6 py-2">
      <Head>
        <title>Cofile - Check Currency Exchange Rate in Real Time</title>
      </Head>
      <Navbar />
    </main>
  );
}
