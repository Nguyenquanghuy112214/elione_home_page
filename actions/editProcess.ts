"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editProcessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editProcess = async (
  values: z.infer<typeof editProcessSchema>
) => {
  const validatedFields = editProcessSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, img, id } = validatedFields.data;

  await db.process.update({
    where: {
      id,
    },
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/process");
  revalidatePath("/");
  return { success: "Update Success!" };
};
