"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deletePartner = async ({ id }: { id: string }) => {

  await db.partner.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/partner");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

