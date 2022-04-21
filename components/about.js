import { Image, SimpleGrid,Code } from "@chakra-ui/react";
import React from "react";

function About() {
  const skills = [
    {
      data: "TypeScript",
      class: "list-disc ml-4",
    },
    {
      data: "Javascript (ES6+)",
      class: "list-disc ml-4",
    },
    {
      data: "NodeJs",
      class: "list-disc ml-4",
    },
    {
      data: "Python",
      class: "list-disc ml-4",
    },
    {
      data: "TypeGraphQL",
      class: "list-disc ml-4",
    },
    {
      data: "React",
      class: "list-disc ml-4",
    },
    {
      data: "SQL",
      class: "list-disc ml-4",
    },
    {
      data: "TypeORM",
      class: "list-disc ml-4",
    },
  ];

  return (
    <div
      className="sm:mx-36 mx-5 z-50 sm:w-3/4 flex flex-col justify-center content-center mb-10"
      id="about"
    >
      <div className="sm:text-3xl text-xl font-bold underline underline-offset-4 mx-5 sm:mt-10 mt-5">
        About Me
      </div>

      <div className="sm:mt-5 mt-3 sm:justify-between mx-5 flex flex-col sm:flex-row items-center sm:items-start">
        <div className="text-justify leading-relaxed order-3 sm:order-none">
          Hello! my name is Oscar, and currently, I&apos;m working as a Product
          Engineer (Intern) at Hatio Sea Sdn Bhd. I&apos;m a final year student
          (BSc Software Engineering with Honours) at University Malaysia Pahang.
          I will go jogging to keep my life healthier and more productive during
          my free time.&nbsp;
          {/* <br/><br/> */}
          <br />
          <div className="mt-3 mb-3">
            Here are the few technologies I&apos;ve been working with recently:
          </div>
          <div className="order-3 sm:order-none">
            <SimpleGrid columns={3} spacing={2}>
              {skills.map((res) => {
                return (
                  <ul key={res.data} className={res.class}>
                    <li>{res.data}</li>
                  </ul>
                );
              })}
            </SimpleGrid>
          </div>
         <Code className="mt-3 animate-pulse "><span className="text-js">&quot;Practice makes Perfect&quot;</span></Code>
        </div>

        <div className="order-1 mb-3 sm:mb-0 sm:order-none">
          <Image
            className="sm:w-72 w-44 mt-5 sm:ml-5"
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
