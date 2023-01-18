//this function takes in two arguments which are two arrays of the
//position of the two pieces in question and returns an array that
// has the positions on the board that are between the two pieces
//this function is for the move of the rook


export default function rookCheck(a,b){
    let direction =''
    let squaresToCheck=[]
    let numberOfSpots
  if (a[0] === b[0]){
  direction = 'vert'
  // console.log(direction)
  }else if(a[1] === b[1]){
    direction = 'hor'
    // console.log(direction)
  }else{
    direction ='invalid move'
    return direction
  }
  if (direction === 'vert'){
    numberOfSpots =  Math.abs(a[1]-b[1])-1
    // console.log('number of spots',numberOfSpots)
    if (a[1] < b[1]){
      for (let i=1; i<=numberOfSpots; i++){
        squaresToCheck.push([a[0],a[1]+i])
      }
    return squaresToCheck

    }else{
      for (let i=1; i<=numberOfSpots; i++){
        squaresToCheck.push([a[0],a[1]-i])
      }
      return squaresToCheck

    }
  }
  if (direction === 'hor'){
    numberOfSpots = Math.abs(a[0]-b[0])-1
    if(a[0]<b[0]){
      for (let i=1; i<=numberOfSpots; i++){
        squaresToCheck.push([a[0]+i,a[1]])
      }
      return squaresToCheck

    }else{
      for (let i=1; i<=numberOfSpots; i++){
        squaresToCheck.push([a[0]-i,a[1]])
      }
      return squaresToCheck

    }

  }
  
  
  }
  
