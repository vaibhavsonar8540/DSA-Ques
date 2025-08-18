// q-1  : 2, 1, (1/2), (1/4) ...

// let a = 4 ;
// let b = 2 ;
// for(let i=1 ; i<=5 ; i++){
//     let res = a / b ;
//     console.log(res);
//     a = res ;
// }

// op -    2
//         1
//         0.5
//         0.25
//         0.125

// q-2 : 7, 10, 8, 11, 9, 12,...

// let a = 7 , b = 10 ;
// for(let i=1 ; i<=5 ; i++){
//     console.log(a)
//     console.log(b)
//     a++;
//     b++;
// }

// q-3 : 36, 34, 30, 28, 24 ....

// let first = 36 ;
// let second = 34 ;
// console.log(first)
// console.log(second)
// for(let i= 1 ;i<=5 ; i++){
//     let div = first - 6 ;
//     let div2 = second - 6 ;
//     console.log(div)
//     console.log(div2)
//     first = div ;
//     second = div2 ;
// }

// q - 4 : 22, 21, 23, 22, 24, 23, ...

// let a = 22;
// let b = 21;
// console.log(a);
// console.log(b);
// for (let i = 1; i <= 5; i++) {
//   a++;
//   b++;
//   console.log(a);
//   console.log(b);
// }

// q-5 : 53, 53, 40, 40, 27, 27, ...

// let a = 53 ;
// let b = 53 ;
// console.log(a)
// console.log(b)
// for(let i = 1 ;i<=4 ; i++){
//     let sub = a - 13 ;
//     let sub2 = b - 13 ;
//     console.log(sub)
//     console.log(sub2)
//     a = sub ;
//     b = sub2
// }

// q-6 : 21, 9, 21, 11, 21, 13, 21, ...

// let a = 21 ;
// let b = 9 ;
// for(let i = 1 ; i<=6 ; i++){
//     console.log(a)
//     console.log(b)
//     let add = b + 2
//     b = add
// }

// q-7 :  58, 52, 46, 40, 34, ... 

// let a = 58 ;
// console.log(a)
// for(let i = 1 ; i<=7 ; i++){
//     let res = a - 6;
//     a = res ;
//     console.log(res)
// }

// q-8 :  3, 4, 7, 8, 11, 12,

// let first = 3 ;
// let sec = 4 ;

// console.log(first)
// console.log(sec)
// for(let i=1 ; i<=5 ; i++){
//     let add = first + 4 ;
//     let add2 = sec + 4 ;
//     console.log(add);
//     console.log(add2)
//     first = add
//     sec = add2
// }

// q-9 : 8, 22, 8, 28, 8, ...

// let a = 8 ;
// let b  = 22 ;

// for(let i=1 ; i<=5 ; i++){
//     console.log(a)
//     console.log(b)
//     let add = b+6 ;
//     b = add ;
// }

// q-10 :  31, 29, 24, 22, 17, ...

// let a = 31 ;
// let b = 29 ;

// for(let i = 1 ; i<=5 ; i++){
//     console.log(a)
//     console.log(b)
//     let sub1 = a - 7 ;
//     let sub2 = b - 7 ;
//     a = sub1 ;
//     b = sub2 ;
// }

// q-11 : 1.5, 2.3, 3.1, 3.9, ...

// let a = 1.5;
// for(let i=1 ; i<=7 ; i++){
//     console.log(a)
//     let add = a +0.8 ;
//     a = Number(add.toFixed(1))
// }

// q-12 : 14, 28, 20, 40, 32, 64, ...

// let num = 14;

// for (let i = 1; i <= 8; i++) {
//   console.log(num);

//   if (i % 2 === 1) {
//     num = num * 2;
//   } else {
//     num = num - 8;
//   }
// }

// q-13 : 2, 4, 6, 8, 10, ...

// for(let i = 1 ; i<=7 ; i++){
//     let mul = i*2
//     console.log(mul)
// }

// q-14 : 201, 202, 204, 207, ...

// let num = 201;
// let step = 1;

// for (let i = 1; i <= 5; i++) {
//   console.log(num);
//   num += step;
//   step++;
// }

// q-15 : 544, 509, 474, 439, ... 
// let num = 544 ;

// for(let i = 1 ; i<=7 ; i++){
//     console.log(num)
//     num -= 35 ;
// }

// q-16 : 80, 10, 70, 15, 60, ...
// let a = 80 ;
// let b = 10 ;

// for(let i=1 ; i<=6 ; i++){
//     console.log(a)
//     console.log(b)
//     a -= 10 ;
//     b += 5 ;
// }

// q-17 : 2, 6, 18, 54, ... 
// let a = 2;
// for(let i=1 ; i<=6 ; i++){
//     console.log(a)
//     a *= 3 ;
// }

// q-18 : 5.2, 4.8, 4.4, 4, ... 
// let a = 5.2 ;
// for(let i=1 ; i<=5 ; i++){
//     console.log(a)
//     let num = a - 0.4
//   a =  Number(num.toFixed(1))
// }

// q-19 :  8, 6, 9, 23, 87 , ... 
// let num = 8 ;
// let step1 = 1 ;
// let step2 = 2 ;

// for(let i=1 ; i<=7 ; i++){
//     console.log(num)
//     num = num*step1 - step2 ;
//     step1++ ;
//     step2++ ;
// }

// q-20 : prime number
// let num = 7;
// let isPrime = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {  
//     isPrime++;
//   }
// }

// if (isPrime == 2) {    
//   console.log("given number is prime");
// } else {
//   console.log("given number is not prime");
// }


// q-21 : armstrong number 

// let num = 1635 ;
// let add = 0;
// let a = num.toString().split("").map(Number)

// for(let i=0 ; i<=a.length-1 ;i++){
//      add += ((a[i])**a.length) ;
// }
// console.log(add)

// if(num == add)
// {
//     console.log("given number is an armstrong number")
// }
// else{
//     console.log("given number is not an armstrong number")   
// }


// q-22 : find sum of first and last digit of number

// let num = 1112
// let final = 0 ;

// let fd = parseInt(num.toString().split("").shift())
// let ld = parseInt(num.toString().split("").pop())

// let sum = fd + ld ;
// console.log(sum)

// q-23 : write a program to find how many leap years come in two ranges of years 

// let year1 = 2001 ;
// let year2 = 2010 ;

// let leapYear = 0 ;

// for(let i = year1 ; i<=year2 ; i++){
//     if(i%4 == 0)
//     {
//         leapYear++
//     }
// }
// console.log(`count of leap year comes between to range of year is ${leapYear}  `)


// q-24 : check Palindrom number
// let num = 152;
// let final = num;
// let rev = 0;

// while(num > 0){
//     let ld = num % 10;  // gives last digit means 2
//     rev = rev * 10 + ld; // add ld to rev 
//     num = Math.floor(num / 10); // remove last digit ex 152/10 - 15.2 - 15 result
// }

// if(rev == final){
//     console.log("Given number is Palindrome ");
// } else {
//     console.log("Given number is Not Palindrome ");
// }

//q-25 : magic number

// let num = 123 ;
// let sum = 0 ;
// let mul = 1 ;

// while(num >0)
// {
//     let ld = num % 10 ;
//      sum += ld ;
//      mul *= ld ;
//      num = Math.floor(num/10)
// }
// console.log("Sum" , sum)
// console.log("Multiplication " , mul)
// if(sum == mul ){
//     console.log("Given number is magic number")
// }
// else{
//     console.log("Given number is not a magic number")
// }


// q-26 : fibonacci series

// let num = 5 ;
// let first = 0 ;
// let second = 1 ;

// console.log(first);
// console.log(second)
// for(let i=1 ; i<=num ; i++){
//     let sum = first + second ;
//     console.log(sum)
//     first = second ;
//     second = sum
// }
