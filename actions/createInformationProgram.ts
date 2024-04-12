"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createProcessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createInformationThumb = async (
  values: z.infer<typeof createProcessSchema>
) => {
  const validatedFields = createProcessSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { img, title } = validatedFields.data;

  await db.informationThumbnail.create({
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/informationprogram");
  revalidatePath("/program");

  return { success: "Create Success!" };
};

export const createInformationProgram = async (
  values: z.infer<typeof createProcessSchema>
) => {
  const validatedFields = createProcessSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { img, title } = validatedFields.data;

  await db.informationProgram.create({
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/informationprogram");
  revalidatePath("/");
  return { success: "Create Success!" };
};
