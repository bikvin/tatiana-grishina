import About from "@/components/mainPage/About/About";
import Contacts from "@/components/mainPage/Contacts/Contacts";
import Footer from "@/components/mainPage/Footer/Footer";
import Header from "@/components/mainPage/Header/Header";
import Help from "@/components/mainPage/Help/Help";
import HeroSection from "@/components/mainPage/HeroSection/HeroSection";
import ImageBar from "@/components/mainPage/ImageBar/ImageBar";
import Links from "@/components/mainPage/Links/Links";
import LongImageBar from "@/components/mainPage/LongImageBar/LongImageBar";
import Prices from "@/components/mainPage/Prices/Prices";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <ImageBar
        imageLinks={[
          "/img/bar/1.jpg",
          "/img/bar/6.jpg",
          "/img/bar/5.jpg",
          "/img/bar/2.jpg",
        ]}
      /> */}
      <LongImageBar imageLink={"/img/bar/long1.jpg"} />
      <About />

      {/* <ImageBar
        imageLinks={[
          "/img/bar/8.jpg",
          "/img/bar/9.jpg",
          "/img/bar/10.jpg",
          "/img/bar/11.jpg",
        ]}
      /> */}
      <LongImageBar imageLink={"/img/bar/long3.jpg"} />
      <Help />
      {/* <ImageBar
        imageLinks={[
          "/img/bar/12.jpg",
          "/img/bar/15.jpg",
          "/img/bar/14.jpg",
          "/img/bar/13.jpg",
        ]}
      /> */}
      <LongImageBar imageLink={"/img/bar/long4.jpg"} />
      <Prices />
      {/* <ImageBar
        imageLinks={[
          "/img/bar/16.jpg",
          "/img/bar/17.jpg",
          "/img/bar/18.jpg",
          "/img/bar/19.jpg",
        ]}
      /> */}
      <LongImageBar imageLink={"/img/bar/long5.jpg"} />
      <Contacts />
      {/* <ImageBar
        imageLinks={[
          "/img/bar/20.jpg",
          "/img/bar/24.jpg",
          "/img/bar/22.jpg",
          "/img/bar/21.jpg",
        ]}
      /> */}
      <LongImageBar imageLink={"/img/bar/long6.jpg"} />
      <Links />
      <Footer />
    </>
  );
}
