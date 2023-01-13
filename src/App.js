import './App.css'
import Rows from './components/Rows'
import SelectedPiece from './components/SelectedPiece'
function App(){

    
          return <div className="gameContainer">
                <h1 className='gameHeading'>Solo Chess</h1>
              
                
                <div className='rowContainer'>
                    <Rows /> 
                </div>
                <div className='instructions'>
                    <p className='firstInstruction'>INSTRUCTIONS</p>
                    <p>Click on a piece to select.</p>
                    <p>Click on red button <button className='redButton'></button> to move to any occupied square.</p>
                    <p>Be left with one piece threatening the king and win!</p>
                    <p>To cancel selected piece press green cancel button.</p>
                    <p>Code and game design by J. Kon</p>
                </div>
                
           </div>
       
   
}
export default App