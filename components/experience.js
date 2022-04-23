import React, { useState,useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import {motion,useAnimation} from 'framer-motion'
function Experience() {
  const [active, setActive] = useState(1);
  const animationHook = useAnimation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  useEffect(()=>{
    console.log(inView)
    

        if(inView){
            animationHook.start({
              x:0,
              transition:{
                type:'spring',duration:2,bounce:0.3
              }
            })

           
        }
        if(!inView){
          animationHook.start({
            x:'-100vw'
          })
        }

  },[inView,animationHook])

  const jobs = [
    {
      id: 1,
      role: "Product Engineer",
      duration: "March 2022 - Present",
      shortCompName: "Hatio",
      compName: "Hatio Sea Sdn Bhd",
      description: [
        "Architecture study of current product development framework",
        "Development of micro module if framework is understood, with guidance",
        "Participate in agile sprints with devops",
        "Participate in support activities when required",
      ],
    },
  ];

  return (
    <div ref={ref}>
<motion.div
      className="sm:w-full sm:flex sm:justify-center mx-5 sm:mx-0"
      id="experience"
animate={animationHook}
    >
      <div>
        <div className="sm:text-3xl text-xl font-bold underline underline-offset-4 mx-5 sm:mt-10 mt-5">
          Where I&apos;ve Worked
        </div>

        <div className="mx-5 mt-5 flex sm:flex-row flex-col">
          <div className="flex sm:flex-col overflow-auto ">
            {jobs.map((res) => {
              return (
                <div
                  key={res.id}
                  className={
                    active == res.id
                      ? "hover:bg-footer px-10 py-2 sm:border-l-js border-b-js sm:border-b-transparent border border-transparent text-js "
                      : "hover:bg-footer px-10 py-2"
                  }
                  onClick={() =>
                    setActive((prev) => {
                      return res.id;
                    })
                  }
                >
                  {res.shortCompName}
                </div>
              );
            })}
          </div>
          <div className="mt-2 sm:ml-5">
            {jobs
              .filter((res) => res.id == active)
              .map((res) => {
                return (
                  <div key={res.id}>
                    <div>
                      {res.role}{" "}
                      <span className="text-js font-bold">
                        @ {res.compName}
                      </span>
                    </div>

                    <div className="mt-2">{res.duration}</div>

                    <div>
                      <ul className="list-disc ml-3 mt-2">
                        {res.description.map((res) => {
                          return (
                            <li key={res} className="text-justify">
                              {res}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </motion.div>
    </div>
    
  );
}

export default Experience;
