"use sever";
import { db } from "@/lib/db";

export const getExpert = async () => {
  try {
    const expert = await db.expert.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return expert;
  } catch {
    return null;
  }
};
