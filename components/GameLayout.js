import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import React from 'react'

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

  return (
    <div className={classNames(classes.root, classNameProp)}>
      <Header className={classes.header} />
      <Number number={75} label="Stoß-Anzahl" large />
      <Number number={112} label="Punktestand" large />
      <Board className={classes.board} numbers={[1, 2, 3]} />
      <div className={classes.stats}>
        <div className={classes.row}>
          <Number number={206} label="Prognose" />
          <Number number={82} label="Halbzeit" />
        </div>

        <Number number={6} label="Aktueller Stoß" large />
        <Number number={12} label="Minus" />
        <Number number={1} label="Spieldauer" />
      </div>
      <Footer className={classes.footer} />
    </div>
  )
}

export default GameLayout
