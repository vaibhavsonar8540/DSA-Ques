// find max from 3 numbers
// const a = 40,
//   b = 12,
//   c = 10;

// if (a > b) {
//   if (a > c) {
//     console.log("a is max");
//   } else {
//     console.log("c is max");
//   }
// } else {
//   if (b > c) {
//     console.log("b is max");
//   } else {
//     console.log("c is max");
//   }
// }

// find max from 4 numbers

const A = 20 , B = 25 , C = 30 , D = 40 ;

if(A > B){
    if(A > C) {
        if(A > D){
            console.log("A is max");
        }else{
            console.log("D is max");
        }
    }else{
        console.log("C is max")
    }
}
else{
    if(B > C) {
        if(B > D){
            console.log("B is max");
        }else{
            console.log("D is max");
        }
    }
    else{
        if(C > D){
            console.log("C is max")
        }
        else{
            console.log("D is max")
        }
    }
}


// find max from 5 numbers
const a = 10,
  b = 40,
  c = 35,
  d = 60,
  e = 55;

if (a > b) {
  if (a > c) {
    if (a > d) {
      if (a > e) {
        console.log("a is max");
      } else {
        console.log("e is max");
      }
    } else {
      console.log("d is max");
    }
  } else {
    console.log("c is max");
  }
} else {
  if (b > c) {
    if (b > d) {
      if (b > e) {
        console.log("b is max");
      } else {
        console.log("e is max");
      }
    } else {
      if (d > e) {
        console.log("d is max");
      } else {
        console.log("e is max");
      }
    }
  } else {
    if (c > d) {
      if (c > e) {
        console.log("c is max");
      } else {
        console.log("e is max");
      }
    } else {
      if (d > e) {
        console.log("d is max");
      } else {
        console.log("e is max");
      }
    }
  }
}
