import React from "react";
import { Image, Link } from "@chakra-ui/react";
import {BsFacebook,BsInstagram,BsGithub,BsLinkedin} from 'react-icons/bs'

function Footer() {
  const logoData = [
    {
      imageUrl: <BsGithub/>,
      url: "https://github.com/oscarchuaweiwen-fsd",
      size: "text-xl hover:animate-pulse hover:text-grey",
    },
    {
      imageUrl: <BsLinkedin/>,
      url: "https://www.linkedin.com/in/oscar-chua-wei-wen-489047216/",
      size: "text-xl hover:animate-pulse"
    },
    {
      imageUrl:<BsInstagram/>,
      url: "https://www.instagram.com/oscarchuaweiwen/",
      size: "text-xl hover:animate-pulse"
    },
    {
      imageUrl: <BsFacebook/>,
      url: "https://www.facebook.com/oscarSEgoogle/",
      size: "text-xl hover:animate-pulse"
    },
  ];
  return (
    <div className="bg-footer w-full h-48 sm:flex flex flex-col sm:flex-row sm:items-center sm:justify-around justify-center mt-5">
      <div className="flex justify-center">
        Designed By{" "}
        <span className="font-semibold">&nbsp;Oscar Chua Wei Wen&nbsp;</span>{" "}
        &copy; 2022
      </div>

      <div className="flex justify-center mt-5 gap-2">
        {logoData.map((res) => {
          return (
            <Link className={res.size} href={res.url} target="_blank" key={res.url}>
                {res.imageUrl}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
