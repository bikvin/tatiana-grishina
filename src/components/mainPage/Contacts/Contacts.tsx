"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contacts({
  telegram,
  phone,
}: {
  telegram: string;
  phone: string;
}) {
  return (
    <section
      id="contacts"
      className="py-16 md:py-20 px-8 md:px-10  overflow-x-hidden max-w-screen-lg mx-auto flex flex-col"
    >
      <h2 className="font-bitter font-bold text-slate-800 text-4xl mb-8">
        Контакты:
      </h2>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h4 className="font-bitter text-2xl">
          Вы можете задать мне вопрос или записаться на консультацию тут:
        </h4>
        <div className="mt-4 mb-4">
          <a
            href="https://t.me/gritaty"
            className="flex text-lg items-center justify-start gap-2 hover:scale-110 origin-[0%_50%]"
          >
            <Image
              src="/img/icons/social-media/telegram.svg"
              width={30}
              height={30}
              alt=""
            />
            Telegram : <b>{telegram}</b>
          </a>
        </div>
        <div className="">
          <a
            href="https://wa.me/79165235546"
            className="flex  text-lg items-center justify-start gap-2 hover:scale-110 origin-[0%_50%]"
          >
            <Image
              src="/img/icons/social-media/whatsapp.svg"
              width={30}
              height={30}
              alt=""
              className=""
            />
            WhatsApp : <b>{phone}</b>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
