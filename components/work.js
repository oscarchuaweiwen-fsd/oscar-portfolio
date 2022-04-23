import React,{useEffect} from "react";
import { SimpleGrid, Image, Tag, Link } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';
import {motion,useAnimation} from 'framer-motion'

function Work() {
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
  const works = [
    {
      category: "Featured Project",
      title: "UMP Supply Chain Management System",
      description:
        "UMPSCMS is a management system that works between UMP Students, UMP Cafeteria and Suppliers, and the UMP Cafeteria will be going thru the ordering page to manage their stock of raw materials and ordering from the supplier.",
      techStack: ["Angular", "Firebase", "NodeJs"],
      pictureURL: "./project1.png",
      githubLink:
        "https://github.com/oscarchuaweiwen-fsd/-Angular-UMPCafeSupplyChainManagementSystem",
      websiteLink: "https://ump-cafe-supply-chain.web.app/",
    },
  ];

  return (
    <div ref={ref}>
       <motion.div
      className="sm:mx-36 mx-5 z-50 sm:w-3/4 flex flex-col justify-center content-center mb-10"
      id="work"
      animate={animationHook}
     
    >
      <div className="sm:text-3xl text-xl font-bold underline underline-offset-4 mx-5 sm:mt-10 mt-5">
        Works
      </div>
      {works.map((res) => {
        return (
          <SimpleGrid
            columns={[1, null, 2]}
            className="mx-5 mt-5 flex "
            key={res.title}
          >
            <motion.div
              className="hover:z-50 backdrop-grayscale hover:backdrop-grayscale-0 "
              whileHover={{ scale: 1.2 }}
              translate={{ duration: 2000 }}
            >
              <Image src={res.pictureURL} alt="" className="rounded-md mt-5" />
            </motion.div>
            <div className="relative">
              <div className="text-right text-js mt-3 font-semibold">
                {res.category}
              </div>

              <div className="text-right font-bold mt-1">{res.title}</div>

              <div className="sm:text-right text-justify mt-1 bg-footer sm:p-5 p-3 sm:-ml-10 rounded-md drop-shadow-2xl">
                {res.description}
              </div>

              <div className="mt-3 flex justify-end gap-3">
                {res.techStack.map((res) => {
                  return <Tag key={res}>{res}</Tag>;
                })}
              </div>
              <div className="flex justify-end mt-3 gap-2">
                <Link
                  className="text-xl hover:animate-pulse hover:text-grey"
                  href={res.githubLink}
                  target="_blank"
                  key={res.githubLink}
                >
                  <BsGithub />
                </Link>
                <Link
                  className="text-xl hover:animate-pulse hover:text-grey"
                  href={res.websiteLink}
                  target="_blank"
                  key={res.websiteLink}
                >
                  <BiLinkExternal />
                </Link>
              </div>
            </div>
          </SimpleGrid>
        );
      })}
    </motion.div>
    </div>
   
  );
}


export default Work;
