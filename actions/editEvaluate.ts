"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editContactSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editContact = async (
  values: z.infer<typeof editContactSchema>
) => {
  const validatedFields = editContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    id,
    logo,
    sublogo,
    slogan,
    namecompany,
    addresscompany,
    namecenter,
    addresscenter,
    mail,
    phone,
  } = validatedFields.data;

  await db.contact.update({
    where: {
      id,
    },
    data: {
      logo,
      sublogo,
      slogan,
      namecompany,
      addresscompany,
      namecenter,
      addresscenter,
      mail,
      phone,
    },
  });

  revalidatePath("/dashboard/contact");
  revalidatePath("/");
  return { success: "Update Success!" };
};
