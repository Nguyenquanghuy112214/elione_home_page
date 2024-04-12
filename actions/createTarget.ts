"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createProcessSchema, createScheduleSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createTargetThumb = async (
  values: z.infer<typeof createProcessSchema>
) => {
  const validatedFields = createProcessSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { img, title } = validatedFields.data;

  await db.targetThumbnail.create({
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/target");
    revalidatePath("/program");

  return { success: "Create Success!" };
};

export const createTarget = async (
  values: z.infer<typeof createScheduleSchema>
) => {
  const validatedFields = createScheduleSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {  title } = validatedFields.data;

  await db.target.create({
    data: {
      title,
    },
  });

  revalidatePath("/dashboard/target");
    revalidatePath("/program");

  return { success: "Create Success!" };
};
