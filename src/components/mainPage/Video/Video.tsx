"use client";
import React from "react";

export default function Video() {
  return (
    <section className="py-0 md:py-20 px-8 md:px-10  overflow-x-hidden max-w-screen-lg mx-auto flex  md:flex-row flex-col-reverse mb-10">
      <div className="flex-1 flex justify-center">
        <div className="w-full md:w-[60%]">
          <div className="relative w-full pb-[177.78%] bg-black">
            <iframe
              src={`https://player.vimeo.com/video/1021720259`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="hidden md:block p-8">
          <h2 className="font-bitter font-bold text-slate-800 text-4xl mb-4">
            &larr; Тут чуть подробнее. <br />
          </h2>
          <p>Про мои методы и подходы.</p>
        </div>
      </div>
    </section>
  );
}
