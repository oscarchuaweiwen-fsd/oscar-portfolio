import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Image } from "@chakra-ui/react";
function BackgroundImage() {
  return (
    <div>
      <Image
        src="./wallpaper.png"
        className="sm:h-screen sm:hidden"
        alt="oscar background image"
      />

      <ParallaxBanner
        layers={[{ image: "./wallpaper.png", speed: -20 }]}
        className="sm:h-screen -z-10"
      />
    </div>
  );
}

export default BackgroundImage;
