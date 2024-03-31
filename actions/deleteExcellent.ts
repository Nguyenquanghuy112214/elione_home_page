"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteExcellent = async ({ id }: { id: string }) => {

  await db.excellent.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/excellent");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

