import React, { useEffect, useState } from 'react'

/**
 * Get a diff in seconds between two dates
 * @param {Date} date1
 * @param {Date} date2
 * @returns {string}
 */
function timeDiff(date1, date2) {
  let diff = date2.getTime() - date1.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff -= days * (1000 * 60 * 60 * 24)

  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff -= hours * (1000 * 60 * 60)

  const mins = Math.floor(diff / (1000 * 60))
  diff -= mins * (1000 * 60)

  const seconds = Math.floor(diff / 1000)
  diff -= seconds * 1000

  return `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${
    seconds < 10 ? '0' : ''
  }${seconds}`
}

/**
 *
 * @param {Date} startTime
 * @param {Date} [endTime]
 * @returns {string}
 */
function useTimer(startTime, endTime) {
  const [time, setTime] = useState('')

  useEffect(() => {
    if (endTime) {
      setTime(timeDiff(startTime, endTime))
      return
    }

    const timer = setInterval(() => {
      setTime(timeDiff(startTime, new Date()))
    }, 500)

    return () => clearInterval(timer)
  }, [startTime, endTime])

  return time
}

/**
 *
 * @param {object} props
 * @param {Date} props.start
 * @param {Date} [props.end]
 * @returns {JSX.Element}
 * @constructor
 */
function Timer({ start, end }) {
  const time = useTimer(start, end)

  return <span>{time}</span>
}

export default Timer
