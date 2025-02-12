import './App.css';
import { useState } from 'react';
import Square from './Components/Square'

function App() {
  const [board,setBoard] = useState(["","","","","","","","",""])
  const [player,setPlayer]= useState ("X");

  const chooseSquare =(square) =>{
    setBoard(
      board.map((val,idx)=>{
        if(idx === square && val === ""){
          return player;
      }
        return val;
    })
  );
  if(player === "X"){
    setPlayer("0");
  } else{
    setPlayer("X");
     }
  }

  return (
    <div className="App">
      <div className="board" >
        <div className="row">
        <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}} />
        <Square val={board[1]} chooseSquare={() =>  {chooseSquare(1)}} />
        <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}} />
           </div>
          <div className="row"> </div>
          <div className="row"> </div>
      </div>
    </div>
  );
}

export default App;
