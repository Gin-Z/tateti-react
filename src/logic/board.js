import { WINNER_COMBOS } from "../Constants"

export const checkWinnerFrom=(boardToCheck)=>{
    //revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS){
      const [a,b,c]=combo
      if(
        boardToCheck[a] &&
        boardToCheck[a]===boardToCheck[b] &&
        boardToCheck[a]===boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }
export const checkEndGame = (newBoard) =>{
    //revisa si no hay un empate. revisa si hay espacios vacíos en el tablero
    return newBoard.every((square)=>square!==null)
  }