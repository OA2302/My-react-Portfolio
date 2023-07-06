import React from 'react'
import './Index.scss'

const AnimatedLetter = ({letterClass, strArray, idx }) => {
  return (
    <span>
      {
       strArray.map((char, i) =>(
            <span key={char + 1} className={`${letterClass}_${i + idx}`}>
              {char}
            </span>
       ))
      }
      </span>
  )
};

export default AnimatedLetter