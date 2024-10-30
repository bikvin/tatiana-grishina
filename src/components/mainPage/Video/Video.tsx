"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Video({
  header,
  subHeader,
  videoId,
}: {
  header: string;
  subHeader: string;
  videoId: string;
}) {
  return (
    <section className="py-0 md:py-20 px-8 md:px-10  overflow-x-hidden max-w-screen-lg mx-auto flex  md:flex-row flex-col-reverse mb-10">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex-1 flex justify-center   items-center  relative min-h-[calc(80vw*2)] md:min-h-[calc(25vw*2)]"
      >
        <div className="w-[80vw] md:w-[25vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full pb-[177.78%] bg-black">
            <iframe
              src={`https://player.vimeo.com/video/${videoId}`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          className="bg-green2 
        h-[calc(1.7778*80vw*0.7)] md:h-[calc(1.7778*25vw*0.7)] 
        w-[80vw] md:w-[25vw] 
        absolute 
        top-1/2 left-1/2 
        -translate-x-[calc(80vw*0.45)] md:-translate-x-[calc(25vw*0.45)] 
        -translate-y-[calc(80vw*0.95)] md:-translate-y-[calc(25vw*0.95)]
        -z-10"
        ></div>
        <div
          className="bg-green7 
        h-[calc(1.7778*80vw*0.6)] md:h-[calc(1.7778*25vw*0.6)] 
        w-[80vw] md:w-[25vw] 
        absolute 
        top-1/2 left-1/2 
        -translate-x-[calc(80vw*0.55)] md:-translate-x-[calc(25vw*0.55)] 
        -translate-y-[calc(80vw*0.3)] md:-translate-y-[calc(25vw*0.3)]
        -z-10"
        ></div>
        {/* <div className="bg-green7 h-[60%] w-[40%] absolute top-1/2 left-1/2 -translate-x-[90%] -translate-y-[30%] -z-20"></div> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex-1 flex items-center"
      >
        <div className="hidden md:block p-8">
          <h2
            className="font-bitter font-bold text-slate-800 text-4xl mb-4"
            dangerouslySetInnerHTML={{ __html: header }}
          ></h2>
          <p className="font-thin  text-lg tracking-wide">{subHeader}</p>
        </div>
      </motion.div>
    </section>
  );
}
