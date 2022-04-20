import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-scroll";
import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {motion} from 'framer-motion'

function Navbar() {
  const [height, setHeight] = useState(0);

  const desktopViewData = [
    {
      data:"About",
      duration:1.5
    },
    {
      data:"Experience",
      duration:1.8
    },
    {
      data:"Work",
      duration:2.1
    },
    {
      data:"Contact",
      duration:2.4
    }
  ]


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(() => {
        return window.pageYOffset;
      });
    });

    return () => {
      window.addEventListener("scroll", () => {});
    };
  }, []);

  

  const toggleFixedScroll = () => {
    if (height > 100) {
      return "fixed flex justify-between w-full px-5 py-5 backdrop-blur-md z-10";
    } else {
      return "absolute flex justify-between w-full mt-5 px-5";
    }
  };
  return (
    <div id="/">
      <div className={toggleFixedScroll()}>
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={100}
          duration={2000}
          className="mt-2 sm:mt-0"
        >
          Oscar Chua Wei Wen
        </Link>

        {/* Desktop View */}
        <div className="sm:flex gap-5 pr-10 cursor-pointer hidden ">
         
        

         {desktopViewData.map(res=>{
           return(
            <motion.div animate={{y:[-1000,0]}} transition={{ease: "easeOut",duration:res.duration}} key={res.data}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={100}
              delay={500}
              duration={2000}
              spyThrottle={500}
            >
              {res.data}
            </Link>
            </motion.div>
           )
         })}
          
          <div className="opacity-50">
            <a href="" target="_blank" rel="noreferrer" className="disabled pointer-events-none">
              Resume
            </a>
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={100}
                duration={2000}
                className="block p-2 hover:opacity-30"
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={100}
                duration={2000}
                className="block p-2 hover:opacity-30"
              >
                Experience
              </Link>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
