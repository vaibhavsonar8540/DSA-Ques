// 1 - 20 unit = 0.5rs / unit
// 21 - 50 = 1 rs/unit
// 51 - 75 = 1.5 rs/unit
// 76 - 100 = 2 rs/unit
// 100 +  = 5rs/unit

let unit = 105 ; 
let total ;

if(unit == 0){
    console.log("unit can't be zero")
}else if(unit < 0 ){
    console.log("unit cant be in minus")
}
else if(unit>=1 && unit<=20){
    total = unit*0.5
    console.log("Your total is " , total)
}
else if(unit>=21 && unit<=50){
    total = (20*0.5) +( unit-20)*1
    console.log("Your total is " , total)
}
else if(unit>=51 && unit<=75){
    total = (20*0.5) +( 30*1) + (unit-25)*1.5
    console.log("Your total is " , total)
}
else if(unit>=76 && unit<=100){
    total = (20*0.5) + (30*1) + 25*1.5 + (unit-25)*2
    console.log("Your total is " , total)
}
else {
     total = (20*0.5) + (30*1) + 25*1.5 + (25*2) + (unit-100)*5
      console.log("Your total is " , total)
}