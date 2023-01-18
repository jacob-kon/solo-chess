//a will be where the king is and b is where it wants to go
//the function will return a string valid or invalid
export default function checkKing(a,b){
    if(a[0]===b[0] && a[1]+1 === b[1]){
        console.log('valid from 1')
        return "valid"
    }else if(a[0]+1===b[0] && a[1]+1 ===b[1]){
        console.log('valid from 2')
        return "valid"
    }else if(a[0]+1===b[0] && a[1]===b[1]){
        console.log('valid from 3')
        return 'valid'
    }else if(a[0]+1===b[0] && a[1]-1===b[1]){
        console.log('valid from 4')
        return 'valid'
    }else if(a[0]===b[0] && a[1]-1===b[1]){
        console.log('valid from 5')
        return 'valid'
    }else if(a[0]-1===b[0] && a[1]-1===b[1]){
        console.log('valid from 6')
        return 'valid'
    }else if(a[0]-1===b[0] && a[1]===b[1]){
        console.log('valid from 7')
        return 'valid'
    }else if(a[0]-1===b[0] && a[1]+1===b[1]){
        console.log('valid from 8')
        return 'valid'
    }else{
        console.log('invalid')
        return 'invalid'
    }
}
