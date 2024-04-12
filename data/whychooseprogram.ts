"use sever"
import { db } from "@/lib/db";

export const getWhyChooseProgram = async () => {
  try {
    const whychooseProgram = await db.whyChooseProgram.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return whychooseProgram;
  } catch {
    return null;
  }
};
