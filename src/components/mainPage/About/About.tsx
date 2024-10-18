"use client";
import React from "react";

import { MdOutlineCheck } from "react-icons/md";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="">
      <section
        id="about"
        className="py-16 md:py-20 px-8 md:px-10  overflow-x-hidden max-w-screen-lg mx-auto flex flex-col"
      >
        <h2 className="font-bitter font-bold text-slate-800 text-4xl mb-8">
          Обо мне:
        </h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-green4 font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[60%] flex flex-col items-center shadow-main -mb-4 z-[10]"
        >
          <ul>
            <li className="flex items-center mb-8">
              <div className="flex-shrink-0 w-10 h-10 mr-4">
                <MdOutlineCheck className="w-full h-full text-slate-500" />
              </div>
              <div>Дипломированный психолог</div>
            </li>

            <li className="flex items-center mb-8">
              <div className="flex-shrink-0  w-10 h-10 mr-4">
                <MdOutlineCheck className="w-full h-full  text-slate-500" />
              </div>
              <div>Регулярно повышаю уровень знаний</div>
            </li>

            <li className="flex items-center">
              <div className="flex-shrink-0  w-10 h-10  mr-4">
                <MdOutlineCheck className="w-full h-full  text-slate-500" />
              </div>
              <div>
                Провожу консультации онлайн
                <p className="text-sm text-slate-800 font-opensans">
                  / Google Meet / Яндекс-телемост / Skype / мессенджеры /
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-green6 font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-2/3 flex flex-col items-center shadow-main self-end  -mb-2 z-[8]"
        >
          <ul>
            <li className="flex items-center mb-8">
              <div className="flex-shrink-0  w-10 h-10  mr-4">
                <MdOutlineCheck className="w-full h-full  text-slate-500" />
              </div>
              <div>Работаю в когнитивно-поведенческом подходе (КПТ)</div>
            </li>

            <li className="flex items-center">
              <div className="flex-shrink-0  w-10 h-10 mr-4">
                <MdOutlineCheck className="w-full h-full  text-slate-500" />
              </div>
              <div>Дополнительно использую и другие методы</div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-green2 font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[80%] flex flex-col items-center shadow-main self-center -mb-6 z-[8]"
        >
          <ul>
            <li className="flex flex-col items-center justify-center mb-8  text-center">
              {/* <div className="flex-shrink-0 w-14 h-14 mr-4">
                <MdOutlineCheck className="w-full h-full" />
              </div> */}
              <div>
                В работе всегда создаю безопасное поддерживающее пространство и
                стремлюсь к теплому доверительному контакту
              </div>
            </li>

            <li className="flex flex-col items-center justify-center  text-center">
              {/* <div className="flex-shrink-0 w-14 h-14 mr-4">
                <MdOutlineCheck className="w-full h-full" />
              </div> */}
              <div>Гарантирую неразглашение личных данных.</div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-green6 font-bitter font-normal  text-lg  tracking-wide px-16 py-10 w-[90%] md:w-[55%] flex flex-col items-center shadow-main self-end mb-8 mr-10"
        >
          <h4 className="text-2xl mt-10 mb-8 font-bold">Профильные темы:</h4>
          <ul>
            <li className="flex items-center mb-8">
              <div className="flex-shrink-0  w-10 h-10  mr-4">
                <MdOutlineCheck className="w-full h-full  text-slate-500" />
              </div>
              <div>Повышение самооценки</div>
            </li>

            <li className="flex items-center">
              <div className="flex-shrink-0  w-10 h-10 mr-4">
                <MdOutlineCheck className="w-full h-full  text-slate-500" />
              </div>
              <div>Понижение тревоги</div>
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
