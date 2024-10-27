import About from "@/components/mainPage/About/About";
import Contacts from "@/components/mainPage/Contacts/Contacts";
import Footer from "@/components/mainPage/Footer/Footer";
import Header from "@/components/mainPage/Header/Header";
import HelpServer from "@/components/mainPage/Help/HelpServer";
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

      <LongImageBar imageLink={"/img/bar/long3.jpg"} />
      <HelpServer />

      <LongImageBar imageLink={"/img/bar/long8.jpg"} />
      <Prices />

      <LongImageBar imageLink={"/img/bar/long5.jpg"} />
      <Contacts />

      <LongImageBar imageLink={"/img/bar/long10.jpg"} />

      <Links />
      <Footer />
    </>
  );
}
