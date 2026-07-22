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

