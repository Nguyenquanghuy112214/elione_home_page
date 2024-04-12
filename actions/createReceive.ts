"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createReceiveSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createReceive = async (
  values: z.infer<typeof createReceiveSchema>
) => {
  const validatedFields = createReceiveSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title } = validatedFields.data;

  await db.receive.create({
    data: {
      title,
    },
  });

  revalidatePath("/dashboard/receive");
  revalidatePath("/program");

  return { success: "Create Success!" };
};
