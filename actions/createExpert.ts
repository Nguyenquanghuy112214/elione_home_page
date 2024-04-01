"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createProcessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createExpert = async (
  values: z.infer<typeof createProcessSchema>
) => {
  const validatedFields = createProcessSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { img, title } = validatedFields.data;

  await db.expert.create({
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/expert");
  revalidatePath("/");
  return { success: "Create Success!" };
};