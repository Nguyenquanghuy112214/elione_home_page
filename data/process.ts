"use sever"
import { db } from "@/lib/db";

export const getProcess = async () => {
  try {
    const process = await db.process.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return process;
  } catch {
    return null;
  }
};
