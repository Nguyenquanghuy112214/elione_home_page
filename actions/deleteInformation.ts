"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteInformation = async ({ id }: { id: string }) => {

  await db.information.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/information");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

