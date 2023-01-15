import horse from '../images/knight.svg'
import rook from '../images/tower.svg'
import pawn from '../images/pawn.svg'
import king from '../images/king.svg'
import bishop from '../images/bishop.svg'
function OnePiece({type, id, color, handleMove, redButtonClick}){
     return<div className={color === "blue" ?"blueChessSquare" : "whiteChessSquare"}>

        {type === 'horse' && <img onClick={()=>handleMove(id)} src={horse} alt="knight" className='image'/>}
        {type === 'rook' && <img onClick={()=>handleMove(id)} src={rook} alt="rook" className='image'/>}
        {type === 'king' && <img onClick={()=>handleMove(id)} src={king} alt="bishop" className='image'/>}
        {type === 'pawn' && <img onClick={()=>handleMove(id)} src={pawn} alt="pawn" className='image'/>}
        {type === 'bishop' && <img onClick={()=>handleMove(id)} src={bishop} alt="bishop" className='image'/>}
        <button className='killButton' onClick={()=>redButtonClick(id)}></button>

        {/* <button className='moveButton'></button> */}

    </div>
}
export default OnePiece




// className="blueChessSquare"