let arr = [1, 5, 3, 6, 9, 8, 11, 15, 20];

let sort = arr.sort((a, b) => a - b);

const target = 11 ;

console.log(sort); 
// [
//   1,  3,  5,  6, 8, 9, 11, 15, 20
// ]

let middlePoint = sort[4]

console.log(middlePoint)

if(target == middlePoint){
    console.log("target is matched ");
}else if(target<middlePoint){
    for(let i=0 ; i<sort[4];i++)
    {
        target==sort[i]
        break;

    }
    console.log("target is matched at index"+ sort[i])
}else{
   
}


