import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
function BackgroundImage() {
  return (
    // <div className="">
    //     <Image
    //       src="./wallpaper.png"
    //       className="sm:h-screen"
    //       alt="oscar background image"
    //     />
    //   </div>
    <ParallaxBanner
    layers={[{ image: './wallpaper.png', speed: -20 }]}
    className=" sm:h-screen -z-10"
  />
  )
}

export default BackgroundImage