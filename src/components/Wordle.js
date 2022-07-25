import React, { useEffect } from 'react'
import useWordle from '../hook/useWordle'

export default function Wordle({solution}) {
    const {currentGuess, handleKeyUp} = useWordle(solution);


    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);

        return () => window.removeEventListener("keyup", handleKeyUp);

    }, [handleKeyUp]);


  return (
    <div> press the keyboard: {currentGuess}</div>
  )
}
