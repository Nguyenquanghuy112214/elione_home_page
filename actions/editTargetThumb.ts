"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editProcessSchema, editScheduleSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editTargetThumb = async (
  values: z.infer<typeof editProcessSchema>
) => {
  const validatedFields = editProcessSchema.safeParse(values);
  console.log("validatedFields", validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, img, id } = validatedFields.data;

  await db.targetThumbnail.update({
    where: {
      id,
    },
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/target");
  revalidatePath("/program");

  return { success: "Update Success!" };
};

export const editTarget = async (
  values: z.infer<typeof editScheduleSchema>
) => {
  const validatedFields = editScheduleSchema.safeParse(values);
  console.log("validatedFields", validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, id } = validatedFields.data;

  await db.target.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  revalidatePath("/dashboard/target");
  revalidatePath("/program");

  return { success: "Update Success!" };
};
