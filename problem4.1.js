let sum = 0;
for(let number = 1; number<=100; number++){
   sum +=number; 
    
}
console.log(sum)
let formula = 100*(100+1)/2
if(sum == formula){
    console.log("Verification successful!")
}
else{
    console.log("They do not match")
}