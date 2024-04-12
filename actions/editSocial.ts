"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editSocialSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editSocial = async (
  values: z.infer<typeof editSocialSchema>
) => {
  const validatedFields = editSocialSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { zalo, youtube, tiktok, facebook, location, id } =
    validatedFields.data;

  await db.socialNetwork.update({
    where: {
      id,
    },
    data: {
      zalo,
      youtube,
      tiktok,
      facebook,
      location,
    },
  });

  revalidatePath("/dashboard/socialnetwork");
  revalidatePath("/program");

  return { success: "Create Success!" };
};
