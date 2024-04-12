"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteWhyChooseProgram = async ({ id }: { id: string }) => {

  await db.whyChooseProgram.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/whychooseprogram");
  revalidatePath("/program");

  return { success: "Delete Success!" };
};

