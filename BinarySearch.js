// let arr = [1, 5, 3, 6, 9, 8, 11, 15, 20];

// let sort = arr.sort((a, b) => a - b);

// let l =0 ;
// let h = sort.length-1 ;

// const target = 11 ;

// console.log(sort); 
// // [
// //   1,  3,  5,  6, 8, 9, 11, 15, 20
// // ]

// let middlePoint = Math.floor((l+h)/2)
// console.log(middlePoint)
// console.log(sort[middlePoint])

// if(target == sort[middlePoint]){
//     console.log(`target is matched at index ${middlePoint}`);
// }else if(target<sort[middlePoint]){
//     h = middlePoint - 1;
// }else if(target>sort[middlePoint]){
//    l = middlePoint + 1;
// }



let arr = [1, 5, 8, 6, 7, 15, 21, 11, 20];

// Sort array ascending
let sort = arr.sort((a, b) => a - b);

const target = 11;
let l = 0;
let h = sort.length - 1;
let found = false;

for (;l <= h;) {
  let middlePoint = Math.floor((l + h) / 2);

  if (target === sort[middlePoint]) {
    console.log(`Target ${target} is matched at index ${middlePoint}`);
    found = true;
    break;
  } else if (target < sort[middlePoint]) {
    h = middlePoint - 1; // search left half
  } else {
    l = middlePoint + 1; // search right half
  }
}

if (!found) {
  console.log("Target not found");
}
