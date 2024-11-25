//loops in js
//for loops
for(let i = 1; i<= 5; i++){
    console.log("hello");
}
//let i = 1 -> initialiazation
//i<=5 -> stopping condition
//i++ -> updation


/* 2. while loops:
->initialization
while(condition -> stopping condition){
code to be executed;
->updations
} */

let i = 1;//initialization
while (i<=10){//stopping condition
    console.log("hello world");
    i++;//updation
}

//do while loop.
let j = 20;
do{
    console.log("hello world");
}while(j<=10);

/* 4.for-of loop:
---------------
it is used in strings and arrays
for (let val of strVal){
	code to be executed;
} */
let srt = "hello there!";
for(let k of srt){
    console.log(k);
}

/* 5.for-in loop:
---------------
it is used in objects and arrays
for (let key in objVar){
	code to be executed;
} */
let student = {
    fullName : "Fahad Farabee",
    age : 23,
    cgpa : 2.33
};
for(let key in student){
    //console.log(key);
    console.log("key = ", key, "; Key value = ", student[key]);
}

//practice problem 01:
//print all even numbers from 0 to 100;
for(let num = 0; num<=100; num++){
    if(num%2 == 0){
        console.log(num);
    }
}

//practice problem 02:
// create a game where you start with any random game number. Ask the user to keep guessing the game 
//number untill the user enters correct value.
/* let gameNumber = 25;
let userNum = prompt("guess a number: ");
let attempt = 0;
while(userNum!=gameNumber){
    userNum = prompt("wrong guess. guess again!!");
    attempt++;
}
alert("Success!! you gussed it right on"); */


//string in js..
//string cam be declared in " " or ' ' ways.
let str = "Hello there!!";
let str2 = 'Hello world';
//properties of string .
//1. length: it calculates the total number of caharacter in a string.
let len = str.length;
console.log(len);
//2. string indices: we can acces each characters of a string.
let char0 = str[0];
console.log("first character: ", char0);

//template literals in JS
//A way to have embaded expressions in strings.
//we use ` ` for this.
//example;
let product = {
    prodName : "Pen",
    prodPrice : 120,
};
let output = `the price of ${product.prodName} is ${product.prodPrice} tk`;
console.log(output);

//string methods in JS
//strign methods do not make any change in the main string it makes a new string with new value
let str3 = "Fahad Farabee";
str3.toUpperCase();
console.log(str3);
//console output : Fahad Farabee. (no changes done int str3 which is our main string )
let upperCaseStr3 = str3.toUpperCase();
console.log(upperCaseStr3);
//console output : FAHAD FARABEE
let lowerCaseStr3 = str3.toLowerCase();
console.log(lowerCaseStr3);
//console output : fahad farabee
let str4 = "   Hello    ";
let trimmedStr4 = str4.trim();//trime removes any space in the beginning and ending of a string.
console.log(trimmedStr4);
//console output : Hello(no space in beginning or ending.)
let str5 = "HelloWorld";
//let slicedStr5 = str5.slice(1,4);
//console output: ell
let slicedStr5 = str5.slice(3);
console.log(slicedStr5);
//console output: eloWorld
//in slice(start index, end index), here end index will be non inclusive and it is also optional. 
let str6 = "hello";
let str7 = "world";
//let concatStr = str6.concat(str7);
//or
let concatStr = str6 + str7;
console.log(concatStr);
//console outpt: helloworld
