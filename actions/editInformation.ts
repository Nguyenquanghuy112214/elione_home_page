"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editWhyChooseSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editInformation = async (
  values: z.infer<typeof editWhyChooseSchema>
) => {
  const validatedFields = editWhyChooseSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, description, img, id } = validatedFields.data;

  await db.information.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      img,
    },
  });

  revalidatePath("/dashboard/information");
  revalidatePath("/");
  return { success: "Update Success!" };
};

