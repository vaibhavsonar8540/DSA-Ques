// q-1 :       1

// 1 2

// 1 2 3

// 1 2 3 4

// 1 2 3 4 5

// for(let i=1 ; i<=5 ; i++){
//     for(let j=1 ; j<=i ; j++){
//         document.writeln(j)
//     }
//     document.writeln("<br>")
// }

// q-2 :    // 1

// 2 1

// 3 2 1

// 4 3 2 1

// 5 4 3 2 1

// for(let i=1 ; i<=5 ; i++){
//     for(let j=i ; j>=1 ; j--){
//         document.writeln(j)
//     }
//     document.writeln("<br>")
// }

// q-3 :   1

// 2 2

// 3 3 3

// 4 4 4 4

// 5 5 5 5 5

// for(let i=1 ;i<=5 ; i++){
//     for(let j=i ; j>=1 ; j--){
//         document.writeln(i)
//     }
//     document.writeln("<br>")
// }

// q-4 :   5

// 5 4

// 5 4 3

// 5 4 3 2

// 5 4 3 2 1

// let count = 5 ;
// for(let i=1 ; i<=5 ; i++){
//     for(let j=5 ; j>=count ; j--)
//     {
//         document.writeln(j)
//     }
//     count--
//     document.writeln("<br>")
// }

// q-5 :   5

// 4 5

// 3 4 5

// 2 3 4 5

// 1 2 3 4 5

// let n = 5;
// for (let i = n; i >= 1; i--) {
//     for (let j = i; j <= n; j++) {
//         document.writeln(j);
//     }
//     document.writeln("<br>");
// }

// q-6 :   5

// 4 4

// 3 3 3

// 2 2 2 2

// 1 1 1 1 1

// let n=5;
// for (let i = n; i >= 1; i--) {
//     for (let j = i; j <= n; j++) {
//         document.writeln(i);
//     }
//     document.writeln("<br>");
// }

// q-7 :   1 2 3 4 5

// 1 2 3 4

// 1 2 3

// 1 2

// 1
// let n=5;
// for(let i=n ; i>=1 ; i--){
//     for(let j=1 ; j<=i ; j++){
//         document.writeln(j)
//     }
//     document.writeln("<br>")
// }

// q-8 :   1 2 3 4 5

// 2 3 4 5

// 3 4 5

// 4 5

// 5

// for(let i=1 ; i<=5 ; i++){
//     for(let j=i ; j<=5 ; j++){
//         document.writeln(j)
//     }
//     document.writeln("<br>")
// }

// q-9 :   1 1 1 1 1

// 2 2 2 2

// 3 3 3

// 4 4

// 5

// for(let i=1 ; i<=5 ; i++){
//     for(let j=i ; j<=5 ; j++){
//         document.writeln(i)
//     }
//     document.writeln("<br>")
// }

// q-10 :  5 4 3 2 1

// 5 4 3 2

// 5 4 3

// 5 4

// 5

// for(let i=1 ; i<=5 ; i++){
//     for(let j=5 ; j>=i ; j--){
//         document.writeln(j)
//     }
//     document.writeln("<br>")
// }

// q-11 :  5 4 3 2 1

// 4 3 2 1

// 3 2 1

// 2 1

// 1

// for (let i = 5; i >= 1; i--) {
//   for (let j = i; j >= 1; j--) {
//     document.writeln(j);
//   }
//   document.writeln("<br>");
// }

// q-12 :

//  5 5 5 5 5
//  4 4 4 4
//  3 3 3
//  2 2
//  1

// for (let i = 5; i >= 1; i--) {
//   for (let j = i; j >= 1; j--) {
//     document.writeln(i);
//   }
//   document.writeln("<br>");
// }

// q-13 :
//  *
//  *   *
//  *   *   *
//  *   *   *   *
//  *   *   *   *   *

// for(let i=1 ;i<=5 ; i++){
//         for(let j=1 ; j<=i ; j++){
//                 document.writeln("*" + " ")
//         }
//         document.writeln("<br>")
// }

// q-14 :
// *   *   *   *   *
// *   *   *   *
// *   *   *
// *   *
// *

// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     document.writeln("*" + " ");
//   }
//   document.writeln("<br>");
// }


// q-15 :

// 1

// 0 1

// 1 0 1

// 0 1 0 1

// 1 0 1 0 1

// for (let i = 1; i <= 5; i++) {   
//     for (let j = 1; j <= i; j++) {  
//         document.writeln(( j % 2 + " "));
//     }
//     document.writeln("<br>");
// }

