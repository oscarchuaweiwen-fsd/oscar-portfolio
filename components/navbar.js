import React,{useEffect,useState} from "react";

import { Link } from 'react-scroll'

function Navbar() {
  
  const [height,setHeight] = useState(0); 
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      setHeight(()=>{return window.pageYOffset})
    })

    return ()=>{
      window.addEventListener("scroll",()=>{
      })
    }
  },[])

  const toggleFixedScroll = () => {
    if(height>100){
      return "fixed flex justify-between w-full px-5 py-5 backdrop-blur-md z-10"
    }else{
      return "absolute flex justify-between w-full mt-5 px-5"
    }
  }
  return (
    <div id="/">
      <div className={toggleFixedScroll()}>
      <Link activeClass="active" to="/" spy={true} smooth={true} offset={100} duration={2000}>
          Oscar Chua Wei Wen
        </Link>

        <div className="flex gap-5 pr-10 cursor-pointer">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={100} duration={2000}>
          Test 1
        </Link>
          <div>Experience</div>
          <div>Work</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
