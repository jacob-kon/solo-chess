function SelectedPiece({piece, cancel}){
    return <div className="selectedPiece">
        
        <h2 className="selectLine">Selection:  {piece}</h2>
        <button className="cancelButton" onClick={cancel}>Cancel selection</button>
        {/* {piece !== 'nothing selected' && <h2>Click on red button to move</h2>} */}
        {/* {piece === 'nothing selected' && <h2>Click on a chess piece</h2>} */}
      
    </div>
}
export default SelectedPiece