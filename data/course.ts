"use sever"
import { db } from "@/lib/db";

export const getCourse = async () => {
  try {
    const course = await db.course.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return course;
  } catch {
    return null;
  }
};
