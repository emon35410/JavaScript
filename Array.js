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