import React,{useState,useEffect,createContext} from 'react'
export const ContextData=createContext();
export const  ContextLetter =({children})=>{
    const words = ['application', 'programming', 'interface', 'wizard'];

    let selectedWord = words[Math.floor(Math.random() * words.length)];
    const [correctWord,setCorrectWord] =useState(['rawand']);
    const [wrongWord,setWrongWord] = useState([]);
    const [palyable,setPalyable] = useState(false);
   return(
       <ContextData.Provider value={{selectedWord,words,correctWord,wrongWord,palyable}}>
           {children}
       </ContextData.Provider>
   )
}
