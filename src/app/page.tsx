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
import { db } from "@/db";

export default async function Home() {
  let settings;

  try {
    const data = await db.settings.findMany({
      where: {
        OR: [
          { field: "header1" },
          { field: "subHeader1" },
          { field: "header2" },
          { field: "subHeader2" },
          { field: "sessionLength" },
          { field: "price" },
          { field: "telegram" },
          { field: "phone" },
        ],
      },
    });

    if (data) {
      settings = {
        header1: data.find((el) => el.field === "header1")?.value || "", // set either value from db or empty string
        subHeader1: data.find((el) => el.field === "subHeader1")?.value || "",
        header2: data.find((el) => el.field === "header2")?.value || "",
        subHeader2: data.find((el) => el.field === "subHeader2")?.value || "",
        sessionLength:
          data.find((el) => el.field === "sessionLength")?.value || "",
        price: data.find((el) => el.field === "price")?.value || "",
        telegram:
          data.find((element) => element.field === "telegram")?.value || "",
        phone: data.find((element) => element.field === "phone")?.value || "",
      };
    } else {
      return <div className="text-red-800">Данные не найдены.</div>;
    }
  } catch (err) {
    console.log(err);
    return <div className="text-red-800">Ошибка при загрузке данных.</div>;
  }

  return (
    <>
      <Header />
      <HeroSection header={settings.header1} subHeader={settings.subHeader1} />
      <Video header={settings.header2} subHeader={settings.subHeader2} />
      <LongImageBar imageLink={"/img/bar/long6.jpg"} />
      <About />

      <LongImageBar imageLink={"/img/bar/long3.jpg"} />
      <HelpServer />

      <LongImageBar imageLink={"/img/bar/long8.jpg"} />
      <Prices sessionLength={settings.sessionLength} price={settings.price} />

      <LongImageBar imageLink={"/img/bar/long5.jpg"} />
      <Contacts telegram={settings.telegram} phone={settings.phone} />

      <LongImageBar imageLink={"/img/bar/long10.jpg"} />

      <Links />
      <Footer />
    </>
  );
}
