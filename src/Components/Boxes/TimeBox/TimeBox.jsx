import React, {useState, useEffect} from 'react';
import './TimeBox.css'
import dayjs from 'dayjs';

function getRemainingTimeUntilMsTimestamp(timestampMs){
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    if(timestampDayjs.isBefore(nowDayjs)) {
        return defaultRemainingTime
    }
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs),
      }
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}
function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}
function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}
function getRemainingDays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
}
function padWithZeros(number, minLength) {
  const numberString = number.toString();
  if(numberString.length >= minLength) return numberString;
  return "0".repeat(minLength-numberString.length) + numberString
}

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
}

function TimeBox(){
  const countdownTimestampsMs = 1661619600000
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampsMs);
    }, 1000);
    return () => clearTimeout(intervalId)
  },[countdownTimestampsMs])
  
  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return(
    <div className="time-box">
      {/*<h1>Faltam</h1>*/}
      <div className="countdown">
          <div className="time-section">
              <h1>{remainingTime.days}</h1>
              <p>Dias</p>
          </div>
          <div className="time-section">
              <h1 className='two-numbers'>{remainingTime.hours}</h1>
              <p>Horas</p>
          </div>
          <div className="time-section">
              <h1 className='two-numbers'>{remainingTime.minutes}</h1>
              <p>Minutos</p>
          </div>
          <div className="time-section">
              <h1 className='two-numbers'>{remainingTime.seconds}</h1>
              <p>Segundos</p>
          </div>
      </div>
    </div>
  )
}

export default TimeBox;