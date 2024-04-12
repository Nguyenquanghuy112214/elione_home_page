"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editTimeSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editTime = async (values: z.infer<typeof editTimeSchema>) => {
  const validatedFields = editTimeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { img, timeend, timestart, location, id } = validatedFields.data;

  await db.time.update({
    where: {
      id,
    },
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
