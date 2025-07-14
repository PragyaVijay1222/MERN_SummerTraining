import { useState } from "react";

function TicTacToe(){
    const [grid, setGrid] = useState([["", "", ""],["","",""],["","",""]]);

    const [playerTurn, setPlayerturn] = useState(0);

    const[playerWon, setPlayerWon] = useState(-1);
    function checkIfPlayerWon(){
        for(let i =0; i<3; i++){
            let zeroCounter =0, oneCounter =0;
            for(let j=0; j<3; j++){
                if(grid[i][j]===0) zeroCounter ++;
                else if( grid[i][j] === 1) oneCounter ++;
            }

            if(zeroCounter === 3) return 0;
            if(oneCounter === 3) return 1;
        }

        for(let j =0; j<3; j++){
            let zeroCounter =0, oneCounter =0;
            for(let i=0; i<3; i++){
                if(grid[i][j]===0) zeroCounter ++;
                else if( grid[i][j] === 1) oneCounter ++;
            }

            if(zeroCounter === 3) return 0;
            if(oneCounter === 3) return 1;
        }

        if (
  grid[0][0] !== "" &&
  grid[0][0] === grid[1][1] &&
  grid[1][1] === grid[2][2]
) {
  return grid[0][0];
}

if (
  grid[0][2] !== "" &&
  grid[0][2] === grid[1][1] &&
  grid[1][1] === grid[2][0]
) {
  return grid[0][2];
}

    }
    function changeGrid(x, y) {
    if (grid[x][y] !== "") return;

    const newGrid = grid.map((row, i) =>
        row.map((cell, j) => (i === x && j === y ? playerTurn : cell))
    );

    setGrid(newGrid);
    setPlayerturn(1 - playerTurn);

    const winId = checkIfPlayerWon(newGrid);
    console.log(winId);

    if (winId !== -1) {
        setPlayerWon(winId);
        setGrid([["", "", ""], ["", "", ""], ["", "", ""]]);
    }
}

    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
        <h1>Tic Tac Toe</h1>
        <div className="w-[400px] h-[400px] grid grid-cols-3 grid-rows-3 border-2 border-black">
{
    grid.map((row, rowIndex) =>{
        return row.map((cell, cellIndex) =>{
            return(
                <div key={`${rowIndex} - ${cellIndex}`} className="flex item-center justify-center border border-black" onClick ={()=>changeGrid(rowIndex, cellIndex)}>
                    {cell}
                </div>

            )
        })
    })
}
        </div>
        {playerWon !== -1 ? <p>{playerWon} player won</p> : <></> }
        </div>
    )
}

export default TicTacToe;