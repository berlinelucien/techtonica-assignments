import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import React, { createContext, useState } from "react";
import { boardDefault } from './Word'


 {/** exporting this we need access of this for other components and this page  */}
export const AppContext = createContext();


function App() {
   {/**create a state for the board */}
   const [board, setBoard] = useState(boardDefault)


  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/** we have access to all the state instead of passing props */}
      <AppContext.Provider value={{board,setBoard}}>
      <Board />
      <Keyboard />
  </AppContext.Provider> 
    </div>
  );
}

export default App;
