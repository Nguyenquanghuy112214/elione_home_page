"use sever"
import { db } from "@/lib/db";

export const getInformation = async () => {
  try {
    const whychoose = await db.information.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return whychoose;
  } catch {
    return null;
  }
};
