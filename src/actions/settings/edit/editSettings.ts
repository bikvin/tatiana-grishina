"use server";

import { db } from "@/db";
import { editSettingsSchema } from "@/zod/settings";

import { revalidatePath } from "next/cache";

interface EditSettingsFormState {
  errors?: {
    header1?: string[];
    subHeader1?: string[];
    header2?: string[];
    subHeader2?: string[];
    videoId?: string[];
    sessionLength?: string[];
    price?: string[];
    telegram?: string[];
    phone?: string[];
    _form?: string[];
  };
  success?: {
    message?: string;
  };
}

export async function editSettings(
  formState: EditSettingsFormState,
  formData: FormData
): Promise<EditSettingsFormState> {
  const header1 = formData.get("header1");
  const subHeader1 = formData.get("subHeader1");
  const header2 = formData.get("header2");
  const subHeader2 = formData.get("subHeader2");
  const videoId = formData.get("videoId");
  const sessionLength = formData.get("sessionLength");
  const price = formData.get("price");
  const telegram = formData.get("telegram");
  const phone = formData.get("phone");

  const result = editSettingsSchema.safeParse({
    header1: header1,
    subHeader1: subHeader1,
    header2: header2,
    subHeader2: subHeader2,
    videoId: videoId,
    sessionLength: sessionLength,
    price: price,
    telegram: telegram,
    phone: phone,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await Promise.all([
      db.settings.upsert({
        where: { field: "header1" },
        update: { value: result.data.header1 },
        create: { field: "header1", value: result.data.header1 },
      }),
      db.settings.upsert({
        where: { field: "subHeader1" },
        update: { value: result.data.subHeader1 },
        create: {
          field: "subHeader1",
          value: result.data.subHeader1,
        },
      }),
      db.settings.upsert({
        where: { field: "header2" },
        update: { value: result.data.header2 },
        create: { field: "header2", value: result.data.header2 },
      }),
      db.settings.upsert({
        where: { field: "subHeader2" },
        update: { value: result.data.subHeader2 },
        create: {
          field: "subHeader2",
          value: result.data.subHeader2,
        },
      }),
      db.settings.upsert({
        where: { field: "videoId" },
        update: { value: result.data.videoId },
        create: {
          field: "videoId",
          value: result.data.videoId,
        },
      }),
      db.settings.upsert({
        where: { field: "sessionLength" },
        update: { value: result.data.sessionLength },
        create: {
          field: "sessionLength",
          value: result.data.sessionLength,
        },
      }),
      db.settings.upsert({
        where: { field: "price" },
        update: { value: result.data.price },
        create: {
          field: "price",
          value: result.data.price,
        },
      }),
      db.settings.upsert({
        where: { field: "telegram" },
        update: { value: result.data.telegram },
        create: {
          field: "telegram",
          value: result.data.telegram,
        },
      }),
      db.settings.upsert({
        where: { field: "phone" },
        update: { value: result.data.phone },
        create: {
          field: "phone",
          value: result.data.phone,
        },
      }),
      // Add more upserts as needed
    ]);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }
  revalidatePath("/");
  revalidatePath("/admin/settings");
  return {
    success: { message: "Сохранено" },
  };
}
