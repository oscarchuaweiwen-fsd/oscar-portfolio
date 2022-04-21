import { Image } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <div
      className="sm:mx-44 mx-5 z-50 sm:w-3/4 flex flex-col justify-center content-center"
      id="about"
    >
      <div className="sm:text-3xl text-xl font-bold underline underline-offset-4 mx-5 sm:mt-10 mt-5">
        About Me
      </div>

      <div className="sm:mt-5 mt-3 sm:justify-between mx-5 flex flex-col sm:flex-row items-center sm:items-start">
        <div className="text-justify leading-relaxed">
          Hello! my name is Oscar, and currently, I&apos;m working as a Product
          Engineer (Intern) at Hatio Sea Sdn Bhd. I&apos;m a final year student (BSc
          Software Engineering with Honours) at University Malaysia Pahang. I
          will go jogging to keep my life healthier and more productive during
          my free time.&nbsp; 
          {/* <br/><br/> */}

          {/* <q className="bg-footer p-2">Practices make Perfect</q> */}
        </div>

        <div className="">
          <Image
            className="sm:w-72 w-44 mt-5"
            objectFit="cover"
            borderRadius="full"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEW4C3MvQvumw/profile-displayphoto-shrink_800_800/0/1644288376619?e=1655942400&v=beta&t=R65YdMKepWLd6i4K0febJyveeTn9idUBbw7f7kyLjWY"
            alt="Dan Abramov"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
