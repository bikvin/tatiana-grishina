"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import { editSettings } from "@/actions/settings/edit/editSettings";
import FormInput from "@/components/common/formInput";

export default function SettingsForm({
  header1 = "",
  subHeader1 = "",
  header2 = "",
  subHeader2 = "",
  videoId = "",
  sessionLength = "",
  price = "",
  telegram = "",
  phone = "",
}: {
  header1: string;
  subHeader1: string;
  header2: string;
  subHeader2: string;
  videoId: string;
  sessionLength: string;
  price: string;
  telegram: string;
  phone: string;
}) {
  const [formState, action] = useFormState(editSettings, {
    errors: {},
  });

  let successMessage = null;
  if (formState.success) {
    successMessage = formState.success.message;
  }

  return (
    <form className={`admin-form`} action={action}>
      <FormInput name="header1" formState={formState} defaultValue={header1}>
        Заголовок 1
      </FormInput>

      <FormInput
        name="subHeader1"
        formState={formState}
        defaultValue={subHeader1}
      >
        Подзаголовок 1
      </FormInput>
      <div className="admin-horizontal-line"></div>
      <FormInput name="videoId" formState={formState} defaultValue={videoId}>
        ID видео с Vimeo (например 1010207140)
      </FormInput>
      <FormInput name="header2" formState={formState} defaultValue={header2}>
        Заголовок 2
      </FormInput>
      <FormInput
        name="subHeader2"
        formState={formState}
        defaultValue={subHeader2}
      >
        Подзаголовок 2
      </FormInput>
      <div className="admin-horizontal-line"></div>
      <FormInput
        name="sessionLength"
        formState={formState}
        defaultValue={sessionLength}
      >
        Длительность сессии
      </FormInput>
      <FormInput name="price" formState={formState} defaultValue={price}>
        Цена
      </FormInput>
      <div className="admin-horizontal-line"></div>
      <FormInput name="telegram" formState={formState} defaultValue={telegram}>
        Telegram
      </FormInput>

      <FormInput name="phone" formState={formState} defaultValue={phone}>
        Телефон
      </FormInput>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <div className="flex justify-center mt-10 mb-10">
        <FormButton successMessage={successMessage}>Сохранить</FormButton>
      </div>
    </form>
  );
}
