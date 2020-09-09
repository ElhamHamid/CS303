"use strict";
/* eslint-disable */

//A function that takes three numbers as arguments and returns thelargest of them. 

function maxOfThree(x,y,z){
    if(x>y && x>z){
        return x;
    }else if(y>x && y>z){
        return y;
    }else{
        return z;
    }
}




console.log(maxOfThree(4,5,6));