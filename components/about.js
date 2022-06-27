import { Image, SimpleGrid, Code } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function About() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  const animationHook = useAnimation();
  const animationHook2 = useAnimation();
  const animationHook3 = useAnimation();

  useEffect(() => {
    console.log(inView);

    if (inView) {
      animationHook.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });

      animationHook2.start({
        opacity: [0, 1],
        transition: {
          duration: 3,
        },
      });

      animationHook3.start({
        opacity: [0, 1],
        transition: {
          duration: 3,
        },
      });
    }
    if (!inView) {
      animationHook.start({
        x: "-100vw",
      });
    }
  }, [inView, animationHook, animationHook2, animationHook3]);

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
    <div ref={ref}>
      <motion.div
        className="sm:mx-36 mx-5 z-50 sm:w-3/4 flex flex-col justify-center content-center mb-10"
        id="about"
        animate={animationHook}
      >
        <motion.div
          animate={animationHook2}
          className="sm:text-3xl text-xl font-bold underline underline-offset-4 mx-5 sm:mt-10 mt-5"
        >
          About Me
        </motion.div>

        <motion.div
          animate={animationHook3}
          className="sm:mt-5 mt-3 sm:justify-between mx-5 flex flex-col sm:flex-row items-center sm:items-start"
        >
          <div className="text-justify leading-relaxed order-3 sm:order-none">
            Hello! my name is Oscar, and currently, I&apos;m working as a
            Product Engineer (Intern) at Hatio Sea Sdn Bhd. I&apos;m a final
            year student (BSc Software Engineering with Honours) at University
            Malaysia Pahang. I will go jogging to keep my life healthier and
            more productive during my free time.&nbsp;
            {/* <br/><br/> */}
            <br />
            <div className="mt-3 mb-3">
              Here are the few technologies I&apos;ve been working with
              recently:
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
          </div>

          <div className="order-1 mb-3 sm:mb-0 sm:order-none">
            <Image
              className="sm:w-72 w-44 mt-5 sm:ml-5"
              objectFit="cover"
              borderRadius="full"
              src="/oscarpersonal.jpg"
              alt="Dan Abramov"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
