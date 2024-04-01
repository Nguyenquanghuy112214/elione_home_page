"use server";


import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteCourse = async ({ id }: { id: string }) => {

  await db.course.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/course");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

