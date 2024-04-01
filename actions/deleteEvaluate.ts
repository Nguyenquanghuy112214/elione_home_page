"use server";


import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteEvaluate = async ({ id }: { id: string }) => {

  await db.evaluate.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/evaluate");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

