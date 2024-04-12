"use sever";
import { db } from "@/lib/db";

export const getTargetThumb = async () => {
  try {
    const targetThumb = await db.targetThumbnail.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return targetThumb;
  } catch {
    return null;
  }
};

export const getTarget = async () => {
  try {
    const target = await db.target.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return target;
  } catch {
    return null;
  }
};
