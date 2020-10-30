import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import React from 'react'

const useStyles = makeStyles(
  {
    root: {
      height: 32,
    },
  },
  { name: 'Footer' },
)

function Footer(props) {
  const { className: classNameProp } = props
  const classes = useStyles()

  return <div className={classNames(classes.root, classNameProp)}></div>
}

export default Footer
