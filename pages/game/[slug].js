import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import GameLayout from '../../components/GameLayout'

function Game() {
  const { slug } = useRouter().query

  return (
    <>
      <Head>
        <title>Game - {slug}</title>
      </Head>
      <CssBaseline />
      <GameLayout />
    </>
  )
}

export default Game
