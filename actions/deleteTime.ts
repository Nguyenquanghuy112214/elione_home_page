"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteTime = async ({ id }: { id: string }) => {

  await db.time.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/time");
  revalidatePath("/program");

  return { success: "Delete Success!" };
};

