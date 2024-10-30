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
  let about;

  try {
    const [settingsData, aboutData] = await Promise.all([
      db.settings.findMany({
        where: {
          field: {
            in: [
              "header1",
              "subHeader1",
              "header2",
              "subHeader2",
              "videoId",
              "sessionLength",
              "price",
              "telegram",
              "phone",
            ],
          },
        },
      }),
      db.about.findMany({
        where: {
          squareNumber: {
            in: [1, 2, 3, 4],
          },
        },
      }),
    ]);

    if (!settingsData || !aboutData) {
      return <div className="text-red-800">Данные не найдены.</div>;
    }

    settings = {
      header1: settingsData.find((el) => el.field === "header1")?.value || "", // set either value from db or empty string
      subHeader1:
        settingsData.find((el) => el.field === "subHeader1")?.value || "",
      header2: settingsData.find((el) => el.field === "header2")?.value || "",
      subHeader2:
        settingsData.find((el) => el.field === "subHeader2")?.value || "",
      videoId: settingsData.find((el) => el.field === "videoId")?.value || "",
      sessionLength:
        settingsData.find((el) => el.field === "sessionLength")?.value || "",
      price: settingsData.find((el) => el.field === "price")?.value || "",
      telegram:
        settingsData.find((element) => element.field === "telegram")?.value ||
        "",
      phone:
        settingsData.find((element) => element.field === "phone")?.value || "",
    };

    about = {
      square1text: aboutData.find((el) => el.squareNumber === 1)?.text || "",
      square2text: aboutData.find((el) => el.squareNumber === 2)?.text || "",
      square3text: aboutData.find((el) => el.squareNumber === 3)?.text || "",
      square4text: aboutData.find((el) => el.squareNumber === 4)?.text || "",
    };
  } catch (err) {
    console.log(err);
    return <div className="text-red-800">Ошибка при загрузке данных.</div>;
  }

  return (
    <>
      <Header />
      <HeroSection header={settings.header1} subHeader={settings.subHeader1} />
      <Video
        header={settings.header2}
        subHeader={settings.subHeader2}
        videoId={settings.videoId}
      />
      <LongImageBar imageLink={"/img/bar/long6.jpg"} />
      <About aboutData={about} />

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
