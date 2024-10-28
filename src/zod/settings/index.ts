import { z } from "zod";

export const editSettingsSchema = z.object({
  header1: z.string().min(1, { message: "Значение не может быть пустым" }),
  subHeader1: z.string().min(1, { message: "Значение не может быть пустым" }),
  header2: z.string().min(1, { message: "Значение не может быть пустым" }),
  subHeader2: z.string().min(1, { message: "Значение не может быть пустым" }),
  sessionLength: z
    .string()
    .min(1, { message: "Значение не может быть пустым" }),
  price: z.string().min(1, { message: "Значение не может быть пустым" }),
  telegram: z.string().min(1, { message: "Значение не может быть пустым" }),
  phone: z.string().min(1, { message: "Значение не может быть пустым" }),
});
