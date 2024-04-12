"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { createWhyChooseProgramSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createWhyChooseProgram = async (
  values: z.infer<typeof createWhyChooseProgramSchema>
) => {
  const validatedFields = createWhyChooseProgramSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title1, title2, title3, description,subimg, img } = validatedFields.data;

  await db.whyChooseProgram.create({
    data: {
      title1,
      title2,
      title3,
      description,
      img,
      subimg
    },
  });

  revalidatePath("/dashboard/whychooseprogram");
  revalidatePath("/program");

  return { success: "Create Success!" };
};
