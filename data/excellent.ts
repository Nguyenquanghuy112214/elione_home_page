"use sever"
import { db } from "@/lib/db";

export const getExcellent = async () => {
  try {
    const excellent = await db.excellent.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return excellent;
  } catch {
    return null;
  }
};
