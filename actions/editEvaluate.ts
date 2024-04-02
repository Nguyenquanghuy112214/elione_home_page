"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import {  editEvaluateSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editEvaluate = async (
  values: z.infer<typeof editEvaluateSchema>
) => {
  const validatedFields = editEvaluateSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { id, img, video, title, star, parentstudent, achievements, class_g } =
    validatedFields.data;

  await db.evaluate.update({
    where: {
      id,
    },
    data: {
      img,
      video,
      title,
      star,
      parentstudent,
      achievements,
      class:class_g,
    },
  });

  revalidatePath("/dashboard/evaluate");
  revalidatePath("/");
  return { success: "Update Success!" };
};
