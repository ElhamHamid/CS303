// JavaScript Fundamentals > Functions

// Will the function work differently if else is removed? yes, No differance

// Rewrite the function using '?' or '||'

// a function which returns the least of two numbers a and b .

function min(a,b){
    if(a<b){
        return a;
    }else{
        return b;
    }
}



console.log(min(2,1));


// a function that returns x in power n

function pow(x,n){
    return Math.pow(x,n);
}
console.log(pow(2,3));


// JavaScript Fundamentals > Function expressions and arrows