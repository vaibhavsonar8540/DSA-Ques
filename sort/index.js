
// desc (insertion sort)

let arr = [3,5,2,4,7];

for(let i=1 ; i<arr.length ; i++){
    let curr = arr[i];
    let j;
    for( j=i-1 ; j>=0 && arr[j]<curr ; j--){
       arr[j+1] = arr[j]
    }
       arr[j+1] = curr
}
console.log(arr)

// i        j (i-1)         curr           j+1           cond              final arr
// 1(5)     0(3)            5               0+1(5)        3<5 truw          3,5,2,4,7
//          -1              5                              false            5,3,2,4,7   
// 2(2)     1(3)            2                 2(2)         false            5,3,2,4,7
// 3(4)     2(2)            4                 3(4)        2<4 true          5,3,2,2,7
//          1(3)            4                 2(2)        3<4 true          5,3,3,2,7
//          0(5)            4                 1(3)        5<4 false         5,4,3,2,7
// 4(7)     3(2)            7                 4(7)        2<7  true         5,4,3,2.2
//          2(3)            7                 3(2)        3<7 true          5,4,3,2,2
//          1(4)            7                 2(3)        4<7 true          5,4,3,2 ,2 
//             0
//            -1            7                                false          7,5,4,3,2


// asc (insertion sort)

let a = [3,5,2,4,7];

for(let i=1; i<a.length ; i++){
   let c = a[i];
   let j ;

   for(j=i-1 ; j>=0 && a[j]>c ; j--){
      a[j+1] = a[j]
   }
   a[j+1] = c ;
}
console.log(a)

// i        j        c        j+1           condition              final arr
// 1(5)     0(3)     5        0+1(5)         false                   3,5,2,4,7
// 2(2)     1(5)     2        1+1(2)         5>2 true                3,5,5,4,7   
//          0(3)     2        0+1(5)         3>2 true                3,2,5,4,7
// 3(4)     2(5)     4        2+1(4)         5>4  true               3,2,5,5,7
//          1(2)     4        2(5)           2>4 false               3,2,4,5,7
// 4(7)     3(5)     7        4(7)           5>7 false               3,2,4,5,7





