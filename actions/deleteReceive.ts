"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteReceive = async ({ id }: { id: string }) => {

  await db.receive.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/receive");
  revalidatePath("/program");

  return { success: "Delete Success!" };
};

