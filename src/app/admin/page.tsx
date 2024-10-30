import SettingsForm from "@/components/admin/help/settings/SettingsForm";
import Header from "@/components/admin/topMenu/topMenu";
import { db } from "@/db";

export default async function AdminPage() {
  let settings;

  try {
    const data = await db.settings.findMany({
      where: {
        OR: [
          { field: "header1" },
          { field: "subHeader1" },
          { field: "header2" },
          { field: "subHeader2" },
          { field: "videoId" },
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
        videoId: data.find((el) => el.field === "videoId")?.value || "",
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
      <Header page="main" />

      <div className="max-w-screen-lg mx-auto ">
        <div className="w-[90%] md:w-2/3 mx-auto">
          <h1 className="admin-form-header mt-10">Основные настройки</h1>
          <SettingsForm {...settings} />
        </div>
      </div>
    </>
  );
}
