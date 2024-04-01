"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editCourseSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editCourse = async (values: z.infer<typeof editCourseSchema>) => {
  const validatedFields = editCourseSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    id,
    img,
    video,
    title,
    timestart,
    countclass,
    countstudent,
    timelearn,
    calendar,
  } = validatedFields.data;

  await db.course.update({
    where: {
      id,
    },
    data: {
      img,
      video,
      title,
      timestart,
      countclass,
      countstudent,
      timelearn,
      calendar,
    },
  });

  revalidatePath("/dashboard/course");
  revalidatePath("/");
  return { success: "Update Success!" };
};
