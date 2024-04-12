"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteTargetThumb = async ({ id }: { id: string }) => {

  await db.targetThumbnail.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/target");
  revalidatePath("/program");

  return { success: "Delete Success!" };
};

export const deleteTarget = async ({ id }: { id: string }) => {

  await db.target.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/target");
  revalidatePath("/program");

  return { success: "Delete Success!" };
};

