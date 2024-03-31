"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createProcessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createProcess = async (
  values: z.infer<typeof createProcessSchema>
) => {
  const validatedFields = createProcessSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { img, title } = validatedFields.data;

  await db.process.create({
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/process");
  revalidatePath("/");
  return { success: "Create Success!" };
};
