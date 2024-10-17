"use client";
import React from "react";
import { SlClock } from "react-icons/sl";
import { IoPricetagsOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Prices() {
  return (
    <section
      id="prices"
      className="py-16 md:py-20 px-8 md:px-10  overflow-x-hidden max-w-screen-lg mx-auto flex flex-col"
    >
      <h2 className="font-bitter font-bold text-slate-800 text-4xl mb-8">
        Цены:
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-green4 font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[30%] flex flex-col items-center shadow-main z-[1] mb-4 md:mb-0"
        >
          <div className="flex-shrink-0 w-14 h-14 mr-4">
            <SlClock className="w-full h-full" />
          </div>

          <h4 className="text-2xl mt-10 mb-8 font-bold  text-center">
            Длительность сессии:
          </h4>
          <div>50 минут</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-green2 font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[40%] flex flex-col items-center shadow-main z-[10]  md:translate-y-6 mb-4 md:mb-0"
        >
          <div className="flex-shrink-0 w-14 h-14 mr-4">
            <IoPricetagsOutline className="w-full h-full" />
          </div>
          <h4 className="text-2xl mt-10 mb-8 font-bold  text-center">
            Стоимость:
          </h4>
          <div>3000 руб.</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-green6 font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[45%] flex flex-col items-center shadow-main z-[1] md:translate-y-4"
        >
          <div className="flex-shrink-0 w-14 h-14 mr-4">
            <BsCameraVideo className="w-full h-full" />
          </div>
          <h4 className="text-2xl mt-10 mb-8 font-bold text-center">
            Сессии проходят онлайн
          </h4>
          <div className="text-center">
            google meet, яндекс телемост, skype, мессенджеры
          </div>
        </motion.div>
      </div>
    </section>
  );
}
