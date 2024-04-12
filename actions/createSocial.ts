"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createSocialSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createSocial = async (
  values: z.infer<typeof createSocialSchema>
) => {
  const validatedFields = createSocialSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { zalo, youtube, tiktok, facebook, location } = validatedFields.data;

  await db.socialNetwork.create({
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
