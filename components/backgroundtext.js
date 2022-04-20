import React from 'react'
import {motion} from 'framer-motion'

function BackgroundText({el}) {
  return (
    <div className="absolute sm:top-96 sm:left-20 hidden sm:block">
        <div className="sm:text-5xl font-bold text-2xl">
          Hello, I&apos;m <span style={{ whiteSpace: 'pre' }} className="text-js" ref={el} />
        </div>
        <motion.div
          className="sm:text-2xl w-5/12 text-justify"
          animate={{ opacity: [0,1] }}
          transition={{ duration: 2 }}
        >
          Building a successful product is a challenge. Currently, I am a Product Engineer (intern), who has a great passion for programming and loves to create things for the web.
        </motion.div>
      </div>
  )
}

export default BackgroundText