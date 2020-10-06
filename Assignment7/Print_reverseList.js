"use strict";
/* eslint-disable*/

function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
  }
  

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
 console.log( printReverseList(list));