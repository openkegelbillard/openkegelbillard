import { useEffect, useState } from 'react'

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

function useGame() {
  const [game, setGame] = useState({
    isRunning: true,
    count: 0,
    numbers: [],
    sum: 0,
    startTime: new Date(),
  })

  useEffect(() => {
    if (!global.document || !game.isRunning) {
      return
    }

    function onKeyPress(e) {
      if (/[0-7]/.exec(e.key)) {
        const number = parseInt(e.key)
        setGame((current) => ({
          ...current,
          count: current.count + 1,
          currentNumber: number,
          numbers: [...current.numbers, current.sum + number],
          sum: current.sum + number,
        }))
      }
    }

    document.addEventListener('keypress', onKeyPress)

    return () => document.removeEventListener('keypress', onKeyPress)
  }, [game.isRunning])

  useEffect(() => {
    if (game.numbers.length === 100) {
      // Stop the game
      setGame((current) => ({
        ...current,
        isRunning: false,
        endTime: new Date(),
      }))
    }
  }, [game.numbers])

  useEffect(() => {
    if (game.endTime) {
      const time = timeDiff(game.startTime, game.endTime)
      setGame((current) => ({
        ...current,
        time,
      }))
      return
    }

    const timer = setInterval(() => {
      const now = new Date()
      const time = timeDiff(game.startTime, now)
      setGame((current) => ({
        ...current,
        time,
      }))
    }, 500)

    return () => clearInterval(timer)
  }, [game.startTime, game.endTime])

  return game
}

export default useGame
