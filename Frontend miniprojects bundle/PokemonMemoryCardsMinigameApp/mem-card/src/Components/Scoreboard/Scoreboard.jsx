import React from 'react'

export default function Scoreboard({ score, hs }) {
  return (
    <>
      <h1>Score: {score}</h1>
      <h1>HighScore: {hs}</h1>
    </>
  )
}
