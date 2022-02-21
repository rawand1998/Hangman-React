import React,{useContext} from 'react'
import {ContextData} from '../context/ContextLetter'
function Word() {
    const {words}=useContext(ContextData)
    console.log(words)
   
  return (
 
    <div className="word" id="word"></div>
   
  )
}

export default Word