"use sever";
import { db } from "@/lib/db";

export const getSchedule = async () => {
  try {
    const schedule = await db.schedule.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return schedule;
  } catch {
    return null;
  }
};

export const getScheduleThumb = async () => {
  try {
    const scheduleThumb = await db.scheduleThumbnail.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return scheduleThumb;
  } catch {
    return null;
  }
};
