import { Typography } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import React from 'react'

const useStyles = makeStyles(
  {
    root: {
      background: 'white',
      display: 'grid',
      justifyItems: 'center',
      alignItems: 'center',
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      margin: '1.5rem',
    },
    number: {
      fontSize: '1.5rem',
    },
  },
  { name: 'Board' },
)

function Board(props) {
  const { className: classNameProp, numbers = [] } = props
  const classes = useStyles()

  return (
    <div className={classNames(classes.root, classNameProp)}>
      {numbers.map((n) => (
        <Typography className={classes.number}>{n}</Typography>
      ))}
    </div>
  )
}

export default Board
