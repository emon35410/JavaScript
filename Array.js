const marks = [70,80,60,90];

console.log(marks[1]);
console.log(marks.length);
console.log(marks[marks.length-1])

// add , remove

marks.push(30);
console.log(marks);
marks.pop();
console.log(marks)

// add in first and remove from first
marks.unshift(95);
console.log(marks);
marks.shift();
console.log(marks)

// Useful Everyday Methods
const nums =[2,5,6,7,9,2];

console.log(nums.includes(5));
console.log(nums.indexOf(7));
console.log(nums.slice(1,5))
console.log(nums.join(" - "))
console.log(...nums,10)
console.log([...nums,...marks])

// The Big Three: map, filter, reduce
// map
const num = nums.map(p=>console.log(p))
const numm = nums.map(p=>p*5);
console.log(numm);

// sum of array numbers
const scores = [35,80,55,93,20];
let sum = 0;
for(let i =0;i<=scores.length-1;i++){
    sum += scores[i];
}
console.log(sum);
// find the maximum value of array
let max =0;
for(j = 0; j<= scores.length-1;j++){
    if(max<scores[j])
    max = scores[j];
}
const maximum = Math.max(...scores)
const minimum = Math.min(...scores)
console.log(max)
console.log(maximum)
console.log(minimum)