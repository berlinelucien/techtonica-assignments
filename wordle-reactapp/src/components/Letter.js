import React, { useContext } from 'react';
import { AppContext } from '../App';


const Letter = ({ letterPos, attemptVal }) => {
    const { board } = useContext(AppContext); // now I have access to the board 
    const letter = board[attemptVal][letterPos];
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter