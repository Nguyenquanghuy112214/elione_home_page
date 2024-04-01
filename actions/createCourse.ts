"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createCourseSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createCourse = async (
  values: z.infer<typeof createCourseSchema>
) => {
  const validatedFields = createCourseSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    img,
    video,
    title,
    timestart,
    countclass,
    countstudent,
    timelearn,
    calendar,
  } = validatedFields.data;

  await db.course.create({
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
  return { success: "Create Success!" };
};
