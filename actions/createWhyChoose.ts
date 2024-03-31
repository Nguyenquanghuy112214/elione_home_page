"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createWhyChooseSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createWhyChoose = async (
  values: z.infer<typeof createWhyChooseSchema>
) => {
  const validatedFields = createWhyChooseSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, description, img } = validatedFields.data;

  await db.whyChoose.create({
    data: {
      title,
      description,
      img,
    },
  });

  revalidatePath("/dashboard/whychoose");
  revalidatePath("/");
  return { success: "Create Success!" };
};

