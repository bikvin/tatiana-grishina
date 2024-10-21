import About from "@/components/mainPage/About/About";
import Contacts from "@/components/mainPage/Contacts/Contacts";
import Footer from "@/components/mainPage/Footer/Footer";
import Header from "@/components/mainPage/Header/Header";
import Help from "@/components/mainPage/Help/Help";
import HeroSection from "@/components/mainPage/HeroSection/HeroSection";
import Links from "@/components/mainPage/Links/Links";
import LongImageBar from "@/components/mainPage/LongImageBar/LongImageBar";
import Prices from "@/components/mainPage/Prices/Prices";
import Video from "@/components/mainPage/Video/Video";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Video />
      <LongImageBar imageLink={"/img/bar/long6.jpg"} />
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
      <LongImageBar imageLink={"/img/bar/long8.jpg"} />
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

      <LongImageBar imageLink={"/img/bar/long10.jpg"} />

      <Links />
      <Footer />
    </>
  );
}
