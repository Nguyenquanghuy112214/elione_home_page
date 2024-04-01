"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createContactSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createContact = async (
  values: z.infer<typeof createContactSchema>
) => {
  const validatedFields = createContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
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

  await db.contact.create({
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
  return { success: "Create Success!" };
};
