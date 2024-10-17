import React from "react";

export default function LongImageBar({ imageLink }: { imageLink: string }) {
  return (
    <div
      className={`bg-cover bg-center flex items-center justify-around md:justify-center px-4 md:px-0 gap-4 md:gap-16 min-h-[240px] bg-green1  overflow-x-scroll md:overflow-x-hidden scrollbar-h-2 scrollbar scrollbar-thumb-green4`}
      style={{
        backgroundImage: `url(${imageLink})`, // Direct URL
      }}
    >
      {/* {imageLinks.map((link) => (
        <Image
          key={link}
          src={link}
          alt=""
          width={200}
          height={200}
          className="h-[200px] w-[200px] shadow-main"
        />
      ))} */}
    </div>
  );
}
