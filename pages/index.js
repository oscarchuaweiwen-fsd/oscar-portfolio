import { Image } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/navbar";
import About from "../components/about";
import { motion } from "framer-motion";
import React,{useEffect,useRef} from 'react'
import Typed from 'typed.js';
import Footer from '../components/footer'
export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(()=>{
    const options = {
    	strings: [
        'Oscar Chua Wei Wen.',
        'Product Engineer.',
        'Coder.'
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop:true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  },[])

  return (
    <div className="w-full relative">
      <Head>
        <title>Oscar Chua Wei Wen | Portfolio</title>
        <meta name="description" content="Oscar's portfolio" />
        <link rel="icon" href="/oscaricon2.png" />
      </Head>
      <Navbar />
      <div className="">
        <Image
          src="./wallpaper.png"
          className="sm:h-screen"
          alt="oscar background image"
        />
      </div>

      <div className="absolute sm:top-96 sm:left-20 hidden sm:block">
        <div className="sm:text-5xl font-bold text-2xl">
          Hello, I&apos;m <span style={{ whiteSpace: 'pre' }} className="text-js" ref={el} />
        </div>
        <motion.div
          className="sm:text-2xl w-5/12 text-justify"
          animate={{ opacity: [0,1] }}
          transition={{ duration: 2 }}
        >
          Building a successful product is a challenge. Currently, I am a Product Engineer (intern), who has a great passion for programming and loves to create things for the web.
        </motion.div>
      </div>

      <About />

      <Footer/>
    </div>
  );
}
