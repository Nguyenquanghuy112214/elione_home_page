"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteSocial = async ({ id }: { id: string }) => {

  await db.socialNetwork.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/socialnetwork");
  revalidatePath("/program");

  return { success: "Delete Success!" };
};

