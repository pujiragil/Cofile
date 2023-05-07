import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={epilogue.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
