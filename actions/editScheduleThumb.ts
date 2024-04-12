"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editProcessSchema, editScheduleSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editScheduleThumb = async (
  values: z.infer<typeof editProcessSchema>
) => {
  const validatedFields = editProcessSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, img, id } = validatedFields.data;

  await db.scheduleThumbnail.update({
    where: {
      id,
    },
    data: {
      img,
      title,
    },
  });

  revalidatePath("/dashboard/schedule");
    revalidatePath("/program");

  return { success: "Update Success!" };
};

export const editSchedule = async (
  values: z.infer<typeof editScheduleSchema>
) => {
  const validatedFields = editScheduleSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, id } = validatedFields.data;

  await db.schedule.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  revalidatePath("/dashboard/schedule");
    revalidatePath("/program");

  return { success: "Update Success!" };
};
