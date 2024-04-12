"use sever";
import { db } from "@/lib/db";

export const getSocialNetwork = async () => {
  try {
    const social = await db.socialNetwork.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return social;
  } catch {
    return null;
  }
};
