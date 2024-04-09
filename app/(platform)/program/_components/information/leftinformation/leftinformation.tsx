import React from 'react'
import Time from '../time'
import DetailInformation from '../detailinformation'

function LeftInformation() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div>
        <Time targetDate={dateTimeAfterThreeDays}/>
        <DetailInformation/>
    </div>
  )
}

export default LeftInformation