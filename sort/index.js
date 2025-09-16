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

