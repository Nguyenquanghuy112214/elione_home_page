"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteScheduleThumb = async ({ id }: { id: string }) => {

  await db.scheduleThumbnail.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/schedule");
    revalidatePath("/program");

  return { success: "Delete Success!" };
};

export const deleteSchedule = async ({ id }: { id: string }) => {

  await db.schedule.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/schedule");
    revalidatePath("/program");

  return { success: "Delete Success!" };
};

