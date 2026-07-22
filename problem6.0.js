const numbers = [3, 7, 2, 9, 4];
let maxNum = 0;

for(let i =0; i<=numbers.length-1;i++){
    if(maxNum<numbers[i])
        maxNum = numbers[i];
}
console.log(maxNum);