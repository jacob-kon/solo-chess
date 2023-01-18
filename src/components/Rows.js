import { useState } from "react"
// import { useEffect } from "react"
import OnePiece from "./OnePiece"
import game from '../Games'
import SelectedPiece from "./SelectedPiece"
import NewGame from "./NewGame"
import Winner from "./Winner"
import InvalidMove from "./InvalidMove"
import rookCheck from "../RookCheck"
import checkBishop from '../BishopCheck'
import checkHorse from '../HorseCheck'
import checkKing from '../CheckKing'
import checkPawn from '../PawnCheck'
function Rows(){
  
    const [chessPieces, setChessPieces] = useState(game[0])
    const [pieceToMove, setPieceToMove] = useState({type:'nothing selected'})
    const [invalidMove, setInvalidMove] = useState(false)
    const [pieceSelected, setPieceSelected] = useState(false)
    const [winner, setWinner] = useState(false)

    const handleNewGameClick = function(){
        console.log('new game was just clicked')
        setChessPieces(game[6])
        setWinner(false)
        setInvalidMove(false)
        console.clear()
    }

    const handleMove = function(clickedPiece){
        setInvalidMove(false)
        //the if statement stops this function if a piece has been alredy selected
        if (!pieceSelected){
        const indexOfPiece = clickedPiece-1
        setPieceToMove(chessPieces[indexOfPiece])
        setPieceSelected(prev => !prev) 
        }
    }

    const handleCancel = function(){
        setPieceSelected(false)
        setPieceToMove({type:'nothing selected'})
        console.log('clicked cancel')
    }

    const checkForWin = function(currentBoard){
        console.log('running check for win')
        let empty = 0
        for (let i=0; i<=15; i++){
            if(currentBoard[i].type === 'none'){
                empty = empty +1
            }
        }
            if ( empty === 14){
                console.log('we have a winner')
                console.log(chessPieces)
                setWinner(true)
            }
          console.log('empty= ',empty)  
        }
    //function to execute move by clicking on red button of destination
    const redButtonClick = function(clickedRedButton){
        // console.log('piece to move',chessPieces[pieceToMove.id-1].type)
        const start = pieceToMove.position //position of piece moving
        const end = chessPieces[clickedRedButton-1].position //position of destination
        setInvalidMove(false)
        //checking for a bad move on the rook
        if(chessPieces[pieceToMove.id-1].type === 'rook'){
            const result = rookCheck(start,end)
            if (result === 'invalid move'){
                setInvalidMove(true)
                return handleCancel()
            }
            //check that squares between start and end are empty with type=none otherwise invalid move
            if (result !== 'invalid move' && result !==[]){
               for (let z=0; z<= result.length-1; z++){
                for (let i=0; i<=15 ;i++){
                    if (chessPieces[i].x === result[z][0] && chessPieces[i].y === result[z][1]){
                        console.log(chessPieces[i].position,'match was foundd')
                        if (chessPieces[i].type !== 'none'){
                            setInvalidMove(true)
                            return handleCancel()
                        }
                      }
                   }
               }
            }
        }
        //checking for a bad move on the bishop
        if(chessPieces[pieceToMove.id-1].type === 'bishop'){
            const result = checkBishop(start,end)
            console.log(result)
            if (result === 'invalid move'){
                setInvalidMove(true)
                return handleCancel()
            }
            //check that squares between start and end are empty with type=none otherwise invalid move
            if (result !== 'invalid move' && result !==[]){
               for (let z=0; z<= result.length-1; z++){
                for (let i=0; i<=15 ;i++){
                    if (chessPieces[i].x === result[z][0] && chessPieces[i].y === result[z][1]){
                        console.log(chessPieces[i].position,'match was found1')
                        if (chessPieces[i].type !== 'none'){
                            setInvalidMove(true)
                            return handleCancel()
                        }
                      }
                   }
               }
            }
        }
        //checking for a bad move on the knight
        if(chessPieces[pieceToMove.id-1].type === 'horse'){
            console.log('horse needs checking')
            const result = checkHorse(start,end)
            if (result === 'invalid'){
                setInvalidMove(true)
                return handleCancel()
            }
        }
        //checking for bad move with the king
        if(chessPieces[pieceToMove.id-1].type === 'king'){
            console.log('king needs checking')
            const result = checkKing(start,end)
            if (result === 'invalid'){
                setInvalidMove(true)
                return handleCancel()
            }
        }
        //checking for bad move with the pawn
        if(chessPieces[pieceToMove.id-1].type === 'pawn'){
            console.log('pawn needs checking')
            const result = checkPawn(start,end)
            if (result === 'invalid'){
                setInvalidMove(true)
                return handleCancel()
            }
        }
        // checking to see if player is moving to an empty space
        if (chessPieces[clickedRedButton-1].type === 'none' ||  chessPieces[clickedRedButton-1].id === pieceToMove.id){
            setInvalidMove((prev)=>!prev)
            console.log('i see you want to mve to an empty space no good')
            //if move is legit, board has to be updated here
        } else if(pieceSelected){
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
            //reset piece to move to nothing selected, pieceselected to false
            //and check if player won
            setPieceToMove({type:'nothing selected'})
            setPieceSelected(prev => !prev)
            checkForWin(chessPieces)
            return updatedBoard
        })
        }}
   

   
    //***************** maps out the pieces of the game */
    const pieceComponents = chessPieces.map((item)=>{
            return <OnePiece color={item.color} empty={item.empty} type={item.type} key={item.id} id={item.id} handleMove={handleMove} redButtonClick={redButtonClick}/>
    })

    return  <div className="rowsComponent">
                <div className="gameHelpers">
                    <NewGame handleNewGameClick={handleNewGameClick}/>
                    {invalidMove ? <InvalidMove /> : ''}
                    <SelectedPiece piece={pieceToMove.type} cancel={handleCancel}/>
                    <Winner hasWon={winner}/>
                </div>
                <div className= "row">
                   {pieceComponents}
                </div>       
            </div>       
}
export default Rows

