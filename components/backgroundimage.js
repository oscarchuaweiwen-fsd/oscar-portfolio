import React from 'react'
import { Image } from "@chakra-ui/react";

function BackgroundImage() {
  return (
    <div className="">
        <Image
          src="./wallpaper.png"
          className="sm:h-screen"
          alt="oscar background image"
        />
      </div>
  )
}

export default BackgroundImage