"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editStepSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editStep = async (
  values: z.infer<typeof editStepSchema>
) => {
  const validatedFields = editStepSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, description, img, subtitle, id } = validatedFields.data;

  await db.step.update({
    where: {
      id,
    },
    data: {
      title,
      subtitle,
      description,
      img,
    },
  });

  revalidatePath("/dashboard/time");
  revalidatePath("/program");

  return { success: "Update Success!" };
};
