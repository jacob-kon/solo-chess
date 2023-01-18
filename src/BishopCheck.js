
//this function takes in two arguments which are two arrays of the
//position of the two pieces in question and returns an array that
// has the positions on the board that are between the two pieces
//this function is for the move of the bishop
//********very important line bellow */
//a is position of bishop, b is position of the destination

//have to return the squares to check instead of console loging them

export default function checkBishop(a,b){
    let direction =''
    let squaresToCheck=[]
    let numberOfSpots
    //bishop is moving to the right
    if(a[0]<b[0]){
            //bishop is moving up and right
        if(a[1]<b[1] && b[0]-a[0]===b[1]-a[1]){
            direction = 'tr'
            numberOfSpots = b[0]-a[0]-1
            for (let i=1; i<=numberOfSpots; i++){
                squaresToCheck.push([a[0]+i,a[1]+i])
            }
            // console.log('direction is:', direction)
            // console.log('num of spots inbtween: ',numberOfSpots)
            // console.log('squares to check: ',squaresToCheck)
            return squaresToCheck
            //bishop is moving down and right
        }else if(a[0]<b[0] && Math.abs(a[0]-b[0]) ===Math.abs(a[1]-b[1])){
            direction = 'br'
            numberOfSpots = Math.abs(a[0]-b[0])-1
            for (let i=1; i<=numberOfSpots; i++){
                squaresToCheck.push([a[0]+i,a[1]-i])
            }
            
            // console.log('direction is:', direction)
            // console.log('num of spots inbtween: ',numberOfSpots)
            // console.log('squares to check: ',squaresToCheck)
            return squaresToCheck
            //bishop is moving right in an illegal fashion
        }else{
            direction ='invalid move'
            return direction
            // console.log('direction is:', direction)
        }
    }
    //bishop is moving to the left
    if (a[0]>b[0]){
        //bishop is moving left and up
        if(a[1]<b[1] && Math.abs(a[0]-b[0]) === Math.abs(a[1]-b[1])){
            direction ='tl'
            numberOfSpots = Math.abs(a[0]-b[0])-1
            for (let i=1; i<=numberOfSpots; i++){
                squaresToCheck.push([a[0]-i,a[1]+i])
            }
            // console.log('num of spots inbtween: ',numberOfSpots)
            // console.log('direction is:', direction)
            // console.log('squares to check: ',squaresToCheck)
            return squaresToCheck
        //bishop is moving left and down
        }else if(a[1]>b[1] && Math.abs(a[0]-b[0]) === Math.abs(a[1]-b[1])){
            direction = 'bl'
            numberOfSpots= Math.abs(a[0]-b[0])-1
            for (let i=1; i<=numberOfSpots; i++){
                squaresToCheck.push([a[0]-i,a[1]-i])
            }
            // console.log('direction is:', direction)
            // console.log('num of spots inbtween: ',numberOfSpots)
            // console.log('squares to check: ',squaresToCheck)
            return squaresToCheck
        //bishop is moving left in an illeagal fashion
        }else{
            direction = 'invalid move'
            // console.log('direction is:', direction)
            return direction
        }
    }
    //bishop is moving horizontal or vertical in an illeagal fashion
    if(a[0]===b[0] || a[1]===b[1]){
        direction = 'invalid move'
        // console.log('direction is:', direction)
        return direction

    }
}

















