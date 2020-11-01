import { useEffect, useState } from 'react'

function useGame() {
  const [game, setGame] = useState({
    isRunning: true,
    count: 0,
    numbers: [],
    sum: 0,
    startTime: new Date(),
    minus: 0,

    minusOpt: false,
  })

  useEffect(() => {
    if (!global.document || !game.isRunning) {
      return
    }

    function onKeyPress(e) {
      if (/[0-7]/.exec(e.key)) {
        let number = parseInt(e.key)

        setGame((current) => {
          if (current.minusOpt) {
            number = -number
          }

          const sum = current.sum + number
          const count = current.count + 1

          return {
            ...current,
            count,
            currentNumber: number,
            numbers: [
              ...current.numbers,
              {
                number,
                sum: current.sum + number,
                minus: current.minusOpt,
              },
            ],
            sum,
            minus: current.minusOpt ? current.minus - number : current.minus,
            minusOpt: false,
            halfTime: current.numbers[50]?.sum,
            prognose100: Math.round((sum / count) * 100),
          }
        })
      }

      if (e.key === '-') {
        setGame((current) => ({
          ...current,
          minusOpt: true,
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

  return game
}

export default useGame
