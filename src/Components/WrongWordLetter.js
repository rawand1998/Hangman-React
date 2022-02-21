import React,{useContext,useEffect} from 'react'
import {ContextData} from '../context/ContextLetter'
import {showNotification as show} from '../helper/helper'
function WrongWordLetter() {
    const {wrongWord,selectedWord,correctWord,palyable,setWrongWord,setCorrectWord,setShowNotification}=useContext(ContextData)
    console.log(wrongWord)
    useEffect(() => {
        const handleKeydown = event => {
          const { key, keyCode } = event;
          if (palyable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.includes(letter)) {
              if (!correctWord.includes(letter)) {
                setCorrectWord(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            } else {
              if (!wrongWord.includes(letter)) {
                setWrongWord(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            }
          }
        }
        window.addEventListener('keydown', console.log('hi'));
    
        return () => window.removeEventListener('keydown', handleKeydown);
      }, [correctWord, wrongWord, palyable]);
  return (
    <div className="wrong-letters-container">
    <div id="wrong-letters">
        {wrongWord.length >0 && <p>Wrong</p>} 
        {wrongWord.map((letter,i) =>{
            <span key={i}>
                {letter}
            </span>
        }).reduce((curr,prev)=>prev===null ?[curr] : [curr,',',prev] ,null)
        }
    </div>
  </div>
  )
}

export default WrongWordLetter;