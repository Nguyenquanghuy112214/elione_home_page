"use sever";
import { db } from "@/lib/db";

export const getReceive = async () => {
  try {
    const receive = await db.receive.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return receive;
  } catch {
    return null;
  }
};
