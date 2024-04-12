"use sever"
import { db } from "@/lib/db";

export const getTime = async () => {
  try {
    const time = await db.time.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return time;
  } catch {
    return null;
  }
};
