"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { editWhyChooseProgramSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const editWhyChooseProgram = async (
  values: z.infer<typeof editWhyChooseProgramSchema>
) => {
  const validatedFields = editWhyChooseProgramSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title1, title2, title3, description,subimg, img, id } = validatedFields.data;

  await db.whyChooseProgram.update({
    where: {
      id,
    },
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
  return { success: "Update Success!" };
};
