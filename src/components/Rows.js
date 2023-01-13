import { useState } from "react"
import OnePiece from "./OnePiece"
import game from '../Games'
import SelectedPiece from "./SelectedPiece"
import NewGame from "./NewGame"
import Winner from "./Winner"
import InvalidMove from "./InvalidMove"
function Rows(){
  
    const [chessPieces, setChessPieces] = useState(game[0])
    const [pieceToMove, setPieceToMove] = useState({type:'nothing selected'})
    const [invalidMove, setInvalidMove] = useState(false)
    const [pieceSelected, setPieceSelected] = useState(false)
    const [gameOn, setGameOn] = useState(false)
    const [lastPieceStanding, setLastPieceStanding] = useState('')
    const [winner, setWinner] = useState(false)
    const handleNewGameClick = function(){
        // console.log('new game was just clicked')
        setChessPieces(game[1])
        setLastPieceStanding(game[1][0].last)
        setGameOn(true)
        setWinner(false)
        // console.log(gameOn)
    }

    const handleMove = function(clickedPiece){
        //the if statement stops this function if a piece has been alredy selected
        if (!pieceSelected){
        const indexOfPiece = clickedPiece-1
        console.log('(from handleMove) clicked piece at index',indexOfPiece, 'to move')
        setPieceToMove(chessPieces[indexOfPiece])
         setPieceSelected(prev => !prev) 
        }
        }

    const handleCancel = function(){
        setPieceSelected(false)
        setPieceToMove({type:'nothing selected'})
        console.log('clicked cancel')
    }

    const checkForWin = function(currentBoard, lastPiece){
        // console.log(currentBoard)
        let empty = 1
        let winner = false
        for (let i=0; i<=15; i++){
            if(currentBoard[i].type === 'none'){
                empty = empty +1
            }else if (currentBoard[i].type === lastPiece  && currentBoard[i].id === 6){
                winner = true
            }
        }
            if (winner === true && empty === 15){
                console.log('we have a winner')
                setWinner(true)
            }
            console.log('empty', empty)
            console.log('winner',winner)
        }

    const redButtonClick = function(clickedRedButton){
        
        setInvalidMove(false)
        if (chessPieces[clickedRedButton-1].type === 'none' ||  chessPieces[clickedRedButton-1].id === pieceToMove.id){
            setInvalidMove((prev)=>!prev)
        } else if(pieceSelected){
        console.log('piece to move is at id', pieceToMove.id)
        console.log('clickedButton is', clickedRedButton)
        setChessPieces((prev)=>{
            const updatedBoard = prev.map((square)=>{
                if (square.id === pieceToMove.id){
                    return{...square, type:"none"}
                }
                if( square.id === clickedRedButton){
                    return{...square, type:pieceToMove.type}
                }
                return square
            })
            setPieceToMove({type:'nothing selected'})
            //put in now
            setPieceSelected(prev => !prev)
            checkForWin(chessPieces, lastPieceStanding)
            return updatedBoard
        })
        }}

    const pieceComponents = chessPieces.map((item)=>{
            return <OnePiece color={item.color} empty={item.empty} type={item.type} key={item.id} id={item.id} handleMove={handleMove} redButtonClick={redButtonClick}/>
    })
    // console.log('(from rendering the rows component) setPieceToMove is now ',pieceToMove)
    // console.log('value of pieceSelected is now', pieceSelected)
    // console.log(gameOn)
    return  <div className="rowsComponent">
                <NewGame handleNewGameClick={handleNewGameClick}/>
                <InvalidMove />
                <SelectedPiece piece={pieceToMove.type} cancel={handleCancel}/>
                {/* <h2 style={{visibility:invalidMove ?'visible': 'hidden'}} className='invalidMove'>That is not a valid move</h2> */}
                <Winner hasWon={winner}/>
                <div className= "row">
                   {pieceComponents}
                 </div>       
            </div>       
}
export default Rows
