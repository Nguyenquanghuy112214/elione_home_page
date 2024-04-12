"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteInformationThumb = async ({ id }: { id: string }) => {

  await db.informationThumbnail.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/informationprogram");
   revalidatePath("/program");

  return { success: "Delete Success!" };
};

export const deleteInformationProgram = async ({ id }: { id: string }) => {

  await db.informationProgram.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/informationprogram");
   revalidatePath("/program");

  return { success: "Delete Success!" };
};

