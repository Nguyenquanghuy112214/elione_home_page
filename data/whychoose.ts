"use sever"
import { db } from "@/lib/db";

export const getWhyChoose = async () => {
  try {
    const whychoose = await db.whyChoose.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return whychoose;
  } catch {
    return null;
  }
};
