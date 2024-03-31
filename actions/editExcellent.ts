"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editProcessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editExcellent = async (
  values: z.infer<typeof editProcessSchema>
) => {
  const validatedFields = editProcessSchema.safeParse(values);
console.log("validatedFields",validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, img, id } = validatedFields.data;

  await db.excellent.update({
    where: {
      id,
    },
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/excellent");
  revalidatePath("/");
  return { success: "Update Success!" };
};
