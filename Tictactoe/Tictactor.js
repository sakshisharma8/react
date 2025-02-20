import React, { useState } from 'react';
import './Tictoe.css';

function Tictactor() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [gameWinner, setGameWinner] = useState(null);

  const handleMove = (index) => {
    if (grid[index] || gameWinner) return;

    const updatedGrid = [...grid];
    updatedGrid[index] = turn;
    setGrid(updatedGrid);

    if (determineWinner(updatedGrid)) {
      setGameWinner(turn);
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const determineWinner = (updatedGrid) => {
    const winningSequences = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];
    return winningSequences.some(pattern => 
      updatedGrid[pattern[0]] &&
      updatedGrid[pattern[0]] === updatedGrid[pattern[1]] &&
      updatedGrid[pattern[1]] === updatedGrid[pattern[2]]
    );
  };

  const restartGame = () => {
    setGrid(Array(9).fill(null));
    setTurn('X');
    setGameWinner(null);
  };

  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <h2>{gameWinner ? ` ${gameWinner} is the Champion! 🎉` : `It's ${turn}'s Turn`}</h2>
      <div className="board">
        {grid.map((cell, index) => (
          <div key={index} className="box" onClick={() => handleMove(index)}>
            {cell}
          </div>
        ))}
      </div>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default Tictactor;
{/*Sakshi*/}
