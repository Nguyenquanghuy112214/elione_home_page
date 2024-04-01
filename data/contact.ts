"use sever"
import { db } from "@/lib/db";

export const getContact = async () => {
  try {
    const evaluate = await db.contact.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return evaluate;
  } catch {
    return null;
  }
};
