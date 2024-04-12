"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createStepSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createStep = async (
  values: z.infer<typeof createStepSchema>
) => {
  const validatedFields = createStepSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, description,subtitle, img } = validatedFields.data;

  await db.step.create({
    data: {
      title, description,subtitle, img
    },
  });

  revalidatePath("/dashboard/step");
  revalidatePath("/program");

  return { success: "Create Success!" };
};

