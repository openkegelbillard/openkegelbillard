import { Typography } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import React from 'react'

const useStyles = makeStyles(
  {
    root: {
      '--number-size': '3rem',
      margin: '1.5rem',
    },
    large: {
      '--number-size': '8rem',
    },
    numberContainer: {
      background: 'white',
      padding: '1rem',
    },
    number: {
      textAlign: 'center',
      fontSize: 'var(--number-size)',
      lineHeight: 1,
    },
    label: {
      textAlign: 'center',
      fontSize: '1.5rem',
    },
  },
  { name: 'Number' },
)

/**
 *
 * @param props
 * @param {string} props.label
 * @param {number} props.number
 * @returns {JSX.Element}
 * @constructor
 */
function Number(props) {
  const { className: classNameProp, label, number, large } = props

  const classes = useStyles()

  return (
    <div
      className={classNames(
        { [classes.root]: true, [classes.large]: large },
        classNameProp,
      )}
    >
      <div className={classes.numberContainer}>
        <Typography className={classes.number}>{number}</Typography>
      </div>
      <Typography className={classes.label}>{label}</Typography>
    </div>
  )
}

export default Number
