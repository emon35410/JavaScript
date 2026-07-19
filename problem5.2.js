 function max3(a, b, c){
    if(b<=a && c<=a){
        return a;
    }
    else if(a<=b && c<=b){
        return b;
    }
    else if (a<=c && b<=c){
        return c;
    }
 }

 const maxNumber = max3(10,6,7);
 console.log(maxNumber);