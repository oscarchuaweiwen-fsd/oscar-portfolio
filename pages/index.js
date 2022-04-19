import { Image } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/navbar";
import About from "../components/about";

export default function Home() {
  return (
    <div className="w-full relative scroll-smooth" >
      <Head>
        <title>Oscar Chua Wei Wen | HomePage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="">
        <Image src="https://i.imgur.com/5iO8Mcl.png" className="sm:h-screen" />
      </div>

      <div className="absolute sm:top-48 sm:right-20 top-32 right-0 mx-5">
        <div className="sm:text-5xl font-bold text-2xl">
          Hello, I'm Oscar Chua Wei Wen
        </div>
        <div className="sm:text-2xl">
          Love to develop, explore, create new things...
        </div>
      </div>

      <About />
    </div>
  );
}
