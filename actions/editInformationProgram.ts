"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editProcessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editInformationThumb = async (
  values: z.infer<typeof editProcessSchema>
) => {
  const validatedFields = editProcessSchema.safeParse(values);
  console.log("validatedFields", validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, img, id } = validatedFields.data;

  await db.informationThumbnail.update({
    where: {
      id,
    },
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/informationprogram");
  revalidatePath("/program");

  return { success: "Update Success!" };
};

export const editInformationProgram = async (values: z.infer<typeof editProcessSchema>) => {
  const validatedFields = editProcessSchema.safeParse(values);
  console.log("validatedFields", validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, img, id } = validatedFields.data;

  await db.informationProgram.update({
    where: {
      id,
    },
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/informationprogram");
  revalidatePath("/program");

  return { success: "Update Success!" };
};
