import React from "react";
import Time from "../time";
import DetailInformation from "../detailinformation";
import { Time as TimeCl } from "@prisma/client";

function LeftInformation({ dataTime }: { dataTime: TimeCl[] }) {
  const NOW_IN_MS = new Date().getTime();
  const TIME_DIFFERENCE = dataTime[0]?.timeend.getTime()  - NOW_IN_MS
  const dateTimeAfterThreeDays = NOW_IN_MS + TIME_DIFFERENCE;
  return (
    <div>
      <Time targetDate={dateTimeAfterThreeDays} />
      <DetailInformation dataTime={dataTime} />
    </div>
  );
}

export default LeftInformation;
