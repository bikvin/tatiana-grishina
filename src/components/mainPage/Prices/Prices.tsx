"use client";
import React from "react";

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

      {/* <div className="bg-green1 flex flex-col md:flex-row  shadow-main">
        <div>
          <div className="font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[30%] flex flex-col items-center z-[1] mb-4 md:mb-0">
            <h4 className="text-2xl mt-10 mb-8 font-bold  text-center">
              Длительность сессии:
            </h4>
          </div>
          <div>
            <h4 className="text-2xl mt-10 mb-8 font-bold  text-center">
              Стоимость:
            </h4>
          </div>
          <div>
            <h4 className="text-2xl mt-10 mb-8 font-bold  text-center">
              Сессии проходят онлайн
            </h4>
          </div>
        </div>
      </div> */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="bg-green1 flex flex-col md:flex-row  shadow-main"
      >
        <div className="font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[30%] flex flex-col items-center z-[1] mb-4 md:mb-0">
          {/* <div className="flex-shrink-0 w-14 h-14 mr-4">
            <SlClock className="w-full h-full" />
          </div> */}
          <div className="min-h-36">
            <h4 className="text-2xl mt-10 mb-8 font-bold  text-center">
              Длительность сессии:
            </h4>
          </div>
          <div>50 минут</div>
        </div>
        <div className="font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[40%] flex flex-col items-center  z-[10]  mb-4 md:mb-0">
          {/* <div className="flex-shrink-0 w-14 h-14 mr-4">
            <IoPricetagsOutline className="w-full h-full" />
          </div> */}
          <div className="min-h-36">
            <h4 className="text-2xl mt-10 mb-8 font-bold  text-center">
              Стоимость:
            </h4>
          </div>

          <div>3 000 руб.</div>
        </div>
        <div className="font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[45%] flex flex-col items-center  z-[1] ">
          {/* <div className="flex-shrink-0 w-14 h-14 mr-4">
            <BsCameraVideo className="w-full h-full" />
          </div> */}
          <div className="min-h-36">
            <h4 className="text-2xl mt-10 mb-8 font-bold text-center">
              Сессии проходят онлайн
            </h4>
          </div>

          <div className="text-center">
            google meet, яндекс телемост, skype, мессенджеры
          </div>
        </div>
      </motion.div>
    </section>
  );
}
