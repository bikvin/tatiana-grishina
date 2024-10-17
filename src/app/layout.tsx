import type { Metadata } from "next";
// import { bitter, openSans, alegreya } from "@/app/fonts";
import "./globals.css";

import { Bitter, Open_Sans } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-bitter",
  weight: ["300", "400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-open-sans",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Психолог Татьяна Гришина",
  description:
    "Дипломированный психолог. Регулярное повышаю уровень знаний. Провожу консультации онлайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${bitter.variable} ${openSans.variable} font-opensans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
