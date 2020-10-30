import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import React from 'react'
import useGame from '../game'

import Board from './gameLayout/Board'
import Footer from './gameLayout/Footer'
import Header from './gameLayout/Header'
import Number from './gameLayout/Number'

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr 3fr auto',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateAreas: `
        "header header header"
        "x x stats"
        "board board stats"
        "footer footer footer"
      `,
      height: '100vh',
      width: '100vw',
    },
    header: {
      gridArea: 'header',
    },
    board: {
      gridArea: 'board',
    },
    footer: {
      gridArea: 'footer',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'stretch',

      '&>*': {
        flex: 1,
      },
    },
    stats: {
      gridArea: 'stats',
    },
  }),
  { name: 'GameLayout' },
)

function GameLayout(props) {
  const { className: classNameProp } = props

  const classes = useStyles()
  const game = useGame()

  return (
    <div className={classNames(classes.root, classNameProp)}>
      <Header className={classes.header} />
      <Number number={game.count} label="Stoß-Anzahl" large />
      <Number number={game.sum} label="Punktestand" large />
      <Board className={classes.board} numbers={game.numbers} />
      <div className={classes.stats}>
        <div className={classes.row}>
          <Number number={206} label="Prognose" />
          <Number number={82} label="Halbzeit" />
        </div>

        <Number number={game.currentNumber} label="Aktueller Stoß" large />
        <Number number={12} label="Minus" />
        <Number number={game.time} label="Spieldauer" />
      </div>
      <Footer className={classes.footer} />
    </div>
  )
}

export default GameLayout
