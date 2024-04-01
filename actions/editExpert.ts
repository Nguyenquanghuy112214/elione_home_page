"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editProcessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editExpert = async (
  values: z.infer<typeof editProcessSchema>
) => {
  const validatedFields = editProcessSchema.safeParse(values);
console.log("validatedFields",validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, img, id } = validatedFields.data;

  await db.expert.update({
    where: {
      id,
    },
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/expert");
  revalidatePath("/");
  return { success: "Update Success!" };
};
