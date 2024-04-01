"use sever"
import { db } from "@/lib/db";

export const getEvaluate = async () => {
  try {
    const evaluate = await db.evaluate.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return evaluate;
  } catch {
    return null;
  }
};
