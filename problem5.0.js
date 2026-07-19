function isEven(n){
   if(n%2==0){
    return true;
   }
   else{
    return false;
   }
}

for(let i=1;i<=10;i++){
   if (isEven(i)==true){
    console.log(`${i} is an even number`)
   }
   else{
    console.log(`${i} is not an even number`)
   }
}
