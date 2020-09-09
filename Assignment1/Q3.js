"use strict";
/* eslint-disable */

// A function that returns the sum of a give array

function sum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

// A function that returns the product of a give array

function multiply(arr){
    let output=1;
    for(let i=0; i<arr.length; i++){
        output*=arr[i];
    }
    return output;

}