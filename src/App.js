
import './App.css';
import Header from './Components/Header'
import Figure from './Components/Figure'
import WrongWordLetter from './Components/WrongWordLetter'
import Word from './Components/Word'
import {ContextLetter} from './context/ContextLetter'
function App() {
  return (
    <ContextLetter>
      <Header />
      <div className="game-container">
      <Figure />
      <WrongWordLetter/>
      <Word/>
  
     
    </div>
    </ContextLetter>
  );
}

export default App;
