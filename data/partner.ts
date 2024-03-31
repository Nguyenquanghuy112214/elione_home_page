"use sever";
import { db } from "@/lib/db";

export const getPartner = async () => {
  try {
    const partner = await db.partner.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return partner;
  } catch {
    return null;
  }
};
