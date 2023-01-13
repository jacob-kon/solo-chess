function NewGame({handleNewGameClick}){
    return<div className="newGame">
        <button onClick={handleNewGameClick} className="newGameButton" >New Game</button>
    </div>
}
export default NewGame