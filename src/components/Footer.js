
function Footer(){
    return <div className="footerInstructions">
                    <p className='firstInstruction'>INSTRUCTIONS</p>
                    <p>Click on a piece to select.</p>
                    <p>Click on red button <button className='redButton'></button> to move to any occupied square.</p>
                    <p>Moves can ONLY be made to an occupied square</p>
                    <p>Be left with one piece after killing the king and win!</p>
                    <p>To cancel selected piece press green cancel button.</p>
                    <p>Code and game design by Jacob Kon</p>
    </div>
}
export default Footer