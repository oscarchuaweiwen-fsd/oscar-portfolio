import React from "react";
import { Image, Link } from "@chakra-ui/react";

function Footer() {
  const logoData = [{ imageUrl: "./github.svg",url:"https://github.com/oscarchuaweiwen-fsd" },{imageUrl:"./linkedin.svg",url:"https://www.linkedin.com/in/oscar-chua-wei-wen-489047216/"}];
  return (
    <div className="bg-footer w-full h-56 sm:flex flex flex-col sm:flex-row sm:items-center sm:justify-around justify-center mt-5">
      <div className="flex justify-center">
        Designed By <span className="font-semibold">&nbsp;Oscar Chua Wei Wen&nbsp;</span>{" "}
        &copy; 2022
      </div>

      <div className="flex justify-center mt-5 gap-2">
        {logoData.map((res) => {
          return (
            <Link
              className=""
              href={res.url}
              target="_blank"
              key={res.url}
            >
              <Image
                src={res.imageUrl}
                alt="oscar background image"
                width="24px"
                height="24px"
                className=""
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
