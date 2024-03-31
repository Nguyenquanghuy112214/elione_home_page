"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createProcessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createPartner = async (
  values: z.infer<typeof createProcessSchema>
) => {
  const validatedFields = createProcessSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { img, title } = validatedFields.data;

  await db.partner.create({
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/partner");
  revalidatePath("/");
  return { success: "Create Success!" };
};
