"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createTimeSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createTime = async (values: z.infer<typeof createTimeSchema>) => {
  const validatedFields = createTimeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { img, timeend, timestart, location } = validatedFields.data;

  await db.time.create({
    data: {
      img,
      timeend,
      timestart,
      location,
    },
  });

  revalidatePath("/dashboard/time");
  revalidatePath("/program");

  return { success: "Create Success!" };
};
