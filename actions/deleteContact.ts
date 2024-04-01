"use server";


import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteContact = async ({ id }: { id: string }) => {

  await db.contact.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/contact");
  revalidatePath("/");
  return { success: "Delete Success!" };
};

