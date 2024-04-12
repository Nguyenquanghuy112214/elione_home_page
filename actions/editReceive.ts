"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editReceiveSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editReceive = async (
  values: z.infer<typeof editReceiveSchema>
) => {
  const validatedFields = editReceiveSchema.safeParse(values);
  console.log("validatedFields", validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, id } = validatedFields.data;

  await db.receive.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  revalidatePath("/dashboard/receive");
  revalidatePath("/program");
 
  return { success: "Update Success!" };
};
