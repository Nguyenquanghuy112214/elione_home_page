"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createEvaluateSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createEvaluate = async (
  values: z.infer<typeof createEvaluateSchema>
) => {
  const validatedFields = createEvaluateSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { video, img, title, star, parentstudent, achievements, class_g } =
    validatedFields.data;

  await db.evaluate.create({
    data: {
      video,
      img,
      title,
      star,
      parentstudent,
      achievements,
      class: class_g,
    },
  });

  revalidatePath("/dashboard/evaluate");
  revalidatePath("/");
  return { success: "Create Success!" };
};
