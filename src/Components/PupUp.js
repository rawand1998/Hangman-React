import React,{useContext,useEffect} from 'react'
import {ContextData} from '../context/ContextLetter'
import {checkWin} from '../helper/helper'

function PupUp() {
  const {wrongWord,selectedWord,correctWord,setPalyable,setCorrectWord,setWrongWord,words}=useContext(ContextData)
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  if(checkWin(correctWord,wrongWord,selectedWord)=== 'win'){
    finalMessage='Congratulations! You won! 😃';
    playable = false;
  }else if(checkWin(correctWord,wrongWord,selectedWord)=== 'lose'){
    finalMessage='Unfortunately you lost. 😕';
    finalMessageRevealWord=`...the word is ${selectedWord}`
    playable = false;

  }
  useEffect(()=>{
    setPalyable(playable)
  })
  const palyAgain =()=>{
    setPalyable(true)
    setCorrectWord([])
    setWrongWord([])
    const random = Math.floor(Math.random()*words.length)
    setWrongWord = words[random]
  }
  return (
    <div className="popup-container" id="popup-container">
    <div className="popup">
      <h2 id="final-message">{finalMessage}</h2>
      <h3 id="final-message-reveal-word">{finalMessageRevealWord}</h3>
      <button id="play-button" onClick={palyAgain}>Play Again</button>
    </div>
  </div>
  )
}

export default PupUp