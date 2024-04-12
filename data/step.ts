"use sever";
import { db } from "@/lib/db";

export const getStep = async () => {
  try {
    const step = await db.step.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return step;
  } catch {
    return null;
  }
};
