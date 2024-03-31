"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteWhyChoose = async ({ id }: { id: string }) => {

  await db.whyChoose.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/whychoose");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

