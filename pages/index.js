import Head from "next/head";
import React,{useEffect,useRef} from 'react'
import Navbar from "../components/navbar";
import About from "../components/about";
import Footer from '../components/footer'
import BackgroundImage from "../components/backgroundimage";
import BackgroundText from '../components/backgroundtext';
import Typed from 'typed.js';

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
      
      <BackgroundImage/>
    
      <BackgroundText el={el}/>

      <About />

      <Footer/>
    </div>
  );
}
