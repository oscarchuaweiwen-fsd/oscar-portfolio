import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
function Navbar() {
  const [height, setHeight] = useState(0);

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
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={100}
            duration={2000}
          >
            About
          </Link>
          <div>Experience</div>
          <div>Work</div>
          <div>Contact</div>
          <div className="">
            <a href="./tawaran.pdf" target="_blank" rel="noreferrer">
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
             
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
