function Winner({hasWon}){
    return<div className="winner">
        {hasWon && <p className="won">You Won!</p>}
    </div> 
    
    
}
export default Winner