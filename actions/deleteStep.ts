"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteStep = async ({ id }: { id: string }) => {

  await db.step.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/step");
  revalidatePath("/program");

  return { success: "Delete Success!" };
};

