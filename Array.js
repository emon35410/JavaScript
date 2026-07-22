const marks = [70,80,60,90];

console.log(marks[1]);
console.log(marks.length);
console.log(marks[marks.length-1]) // old way
console.log(marks.at(-1)) // classic way

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

const passed  = scores.filter(s => s >=40);
console.log(passed)


const mixed = ["Sylhet", 42, true, null];

console.log(typeof mixed);
console.log(Array.isArray(mixed));
console.log(Array.isArray("text"))

const newArray = [1,2,3,4,5,6,7,8,9]
const remove2 = newArray.splice(1,1); //removeung item here 1st praamiter is index and 2nd one is delete item
console.log(remove2)
console.log(newArray)
newArray.splice(1,0,2);  // addind new value
console.log(newArray)

newArray.splice(3,1,"X","Y") // replacing value
console.log(newArray)

const days = ["Sun", "Mon", "Tue", "Wed", "Thu"];
console.log(days.slice(2,4));
console.log(days.slice(5));
console.log(days.slice(-1))
console.log();

const g1 = [1,2,3,4];
const g2 = [5,6,7,8,9];
const both = [...g1,...g2];
const extra = [0,...both,10]
console.log(both);
console.log(extra);
console.log(both.includes(7));
console.log(both.indexOf(4));
