import './App.css'
import Rows from './components/Rows'
import Footer from './components/Footer'

function App(){

    
          return <div className="gameContainer">
                    <h1 className='gameHeading'>Solo Chess</h1>
                    <p className='instructionHeading'>See instructions bellow</p>
                    <div className='rowContainer'>
                        <Rows /> 
                    </div>
                    <div className='instructions'>
                        <Footer />
                    </div>
                
                </div>
       
   
}
export default App