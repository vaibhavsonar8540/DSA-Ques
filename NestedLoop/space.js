// q-1 : 
//     1
//    21
//   321
//  4321
// 54321


for(let i=1 ; i<=5 ; i++){
    for(let k=4 ; k>=i ; k--){
        document.writeln("&nbsp&nbsp")
    }
    for(let j=1 ; j<=i ; j++){
        document.writeln(j)
    }
    document.writeln("<br>")
}