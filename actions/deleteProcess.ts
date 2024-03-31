"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteProcess = async ({ id }: { id: string }) => {

  await db.process.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/process");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

