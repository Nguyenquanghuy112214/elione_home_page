"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteExpert = async ({ id }: { id: string }) => {

  await db.expert.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/expert");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

