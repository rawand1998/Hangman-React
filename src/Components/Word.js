import React,{useContext} from 'react'
import {ContextData} from '../context/ContextLetter'
function Word() {
    const {selectedWord,correctWord}=useContext(ContextData)

   
  return (
    
    <div className="word" id="word">
         {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctWord.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
   
  )
}

export default Word