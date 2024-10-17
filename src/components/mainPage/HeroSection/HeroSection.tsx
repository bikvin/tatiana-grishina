"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-0 md:py-20 px-8 md:px-10  overflow-x-hidden max-w-screen-lg mx-auto flex  md:flex-row flex-col-reverse mb-10">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        className="flex-1 font-thin  text-lg flex items-center justify-center tracking-wide"
      >
        <div className="p-8">
          <h2 className="font-bitter font-bold text-slate-800 text-4xl mb-4">
            Привет! <br />Я Татьяна Гришина, психолог.
          </h2>
          <p>Помогаю жить спокойно счастливо и гармонично.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        className="flex-1 min-h-[400px] flex justify-center items-center relative"
      >
        <Image
          src="/img/photo.jpg"
          height="270"
          width="270"
          alt="Психолог Татьяна Гришина"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-main"
        />
        <div className="bg-green1 h-[230px] w-[230px] absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[30%] -z-10"></div>
        <div className="bg-green8 h-[170px] w-[170px] absolute top-1/2 left-1/2 -translate-x-[90%] -translate-y-[50%] -z-20"></div>
      </motion.div>
    </section>
  );
}
