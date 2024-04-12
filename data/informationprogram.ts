"use sever";
import { db } from "@/lib/db";

export const getInformationThumb = async () => {
  try {
    const informationThumb = await db.informationThumbnail.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return informationThumb;
  } catch {
    return null;
  }
};

export const getInformationProgram = async () => {
  try {
    const informationprogram = await db.informationProgram.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return informationprogram;
  } catch {
    return null;
  }
};
