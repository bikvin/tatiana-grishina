"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const [isMobile, setIsMobile] = useState<boolean>(false); // Track if the view is mobile
  const [isMounted, setIsMounted] = useState(false);

  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setIsMounted(true);

    // Check the window size on the client-side only
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clickHandler = () => {
    if (ulRef.current) {
      // If the menu is closed, set max-height to the full scrollHeight
      if (maxHeight === "0px") {
        setMaxHeight(`${ulRef.current.scrollHeight}px`);
      } else {
        // Collapse the menu
        setMaxHeight("0px");
      }
    }
  };

  return (
    <header className="bg-green0  px-8">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-lg mx-auto">
        <h3 className="font-bitter md:text-lg font-bold tracking-widest my-4">
          Психолог Татьяна Гришина
        </h3>
        <RxHamburgerMenu
          onClick={clickHandler}
          className="absolute top-4 right-4 w-8 h-8 md:hidden"
        />
        <ul
          ref={ulRef}
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out md:flex flex-col md:flex-row justify-center md:justify-end items-center gap-2 tracking-wide max-h-0 md:max-h-full hover:text-slate-400`}
          style={{ maxHeight: isMobile && isMounted ? maxHeight : undefined }} // Only apply maxHeight on mobile
        >
          <li className="text-center pb-2 md:pb-0   hover:text-black transition-colors ease-in delay-200">
            <Link href="#about">Обо мне</Link>
          </li>
          <li className="text-center pb-2 md:pb-0  hover:text-black transition-colors ease-in delay-200">
            <Link href="#help">С чем помогаю</Link>
          </li>
          <li className="text-center pb-2 md:pb-0  hover:text-black transition-colors ease-in delay-200">
            <Link href="#prices">Цены</Link>
          </li>
          <li className="text-center pb-2 md:pb-0  hover:text-black transition-colors ease-in delay-200">
            <Link href="#contacts">Контакты</Link>
          </li>
          <li className="text-center pb-2 md:pb-0   hover:text-black transition-colors ease-in delay-200">
            <Link href="#articles">Статьи</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
