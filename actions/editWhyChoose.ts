"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editWhyChooseSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editWhyChoose = async (
  values: z.infer<typeof editWhyChooseSchema>
) => {
  const validatedFields = editWhyChooseSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, description, img, id } = validatedFields.data;

  await db.whyChoose.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      img,
    },
  });

  revalidatePath("/dashboard/whychoose");
  revalidatePath("/");
  return { success: "Update Success!" };
};

