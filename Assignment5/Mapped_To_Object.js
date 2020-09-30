"use strict";
/* eslint-disable */

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

function mapper(obj){
    let tempobj={}
    for(let key in obj){
        tempobj.fullName=obj.name + ' '+obj.surname;
        tempobj.id=obj.id;
    }
    return tempobj;
}

let usersMapped =users.map(mapper);

console.log( usersMapped );
console.log( usersMapped[0].fullName );