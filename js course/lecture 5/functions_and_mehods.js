/* function in JS
Block of code that perfoms a specific Task, can be invoked whenever needed.
The parameters of a functions are local variable for that function scope only

Function Defination:                                        Function call:
1. function functionNmae(){                                 1. functionName();
    code to be executed.
}

2. function functionNmae(param1, param2.....){              2.functionName(param1, param2,...);
    code to be executed
}
 */
/* //fumction without parameter
function myFunction(){
    console.log("Hello world");
    console.log("Hello From fahad");
}
myFunction();
myFunction(); */

/* //fumction with parameter
function myFunction(msg){
    console.log(msg);
}
myFunction("Hello mc"); */

/* //function with return .
function sum(x,y){
    let s = x+y;
    return s;
}
let z = sum(4,0);
console.log(z); */

/* Arraow Function in JS :
------------------------
compact way of writing a function and we use it in modern day JS codes

the syntex:
(param1, param2) =>{
    code to be executed;
}

we can store this in a variable also:
syntex:
const/let functionNmae = (param1, param2) =>{
    code to be executed;
}
it can be without any parameter also. */
/* const arrowSum = (x, y)=>{
    let s = x+y;
    return s;
}
let arrowMult = (x,y)=>{
    let mul = x*y;
    return mul;
}
console.log(arrowSum(23,34));
console.log(arrowMult(23,34)); */

//practice problem 01:
//create a function using the "function" key word that takes a string as an argument and returns 
//the number of vowels in the string.
/* function countVowels(str){
    let newStr = str.toLowerCase();
    let count = 0;
    for(const char of newStr){
        if(char === 'a' || char === 'e' ||  char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}
console.log(`there are ${countVowels("Hellow")} vowels in the string.`);
//practice problem 02:
//create an arrow function to perform the same task
const vowels = (str) => {
    let newStr = str.toLowerCase();
    let count = 0;
    for(const char of newStr){
        if(char === 'a' || char === 'e' ||  char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;   
}
console.log(`there are ${vowels("Fahad FARABEE")} vowels in the string.`); */

// Methods in JS
// ---------------
//forEach loop in arrays:
//-------------------------
/* it is only used in arrays.
Syntex: arr.forEach(callBackFunction);
what is a callBackFunction:  Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function */

//let arr = [1,2,3,4];
/* arr.forEach(function printValue(val){
    //val => val will store each element of the arr sent from forEach 
    console.log(val);
}); */
/* arr.forEach((val)=>{
    console.log(val);
}); */
/* let cities = ["Dhaka", "rajshahi", "Sylhet"];
cities.forEach((val)=>{
    console.log(val.toUpperCase());
}); */

/* There are 3 parameters in callback functions
1. value
2. index
3. array 

let cities = ["Dhaka", "Rajshahi", "Sylhet"];
cities.forEach((val, indx, arr)=>{
    console.log(val, indx, arr);
}); 

let nums = [1,2,3,4,5,6,7];
let sum = 0;
nums.forEach((val)=>{
    sum = sum+val;
});
console.log(sum); 
Higer Order Function / Higher order Method: the function that takes another function as parameter or returns a function */

//practice problem 01:
//For a given array of numbers, print the square of each value using the forEach Loop
//way 1:
/* let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val*val);
}) */
//way 2:
/* let arr = [1,2,3,4];
arr.forEach(function clcSqr(val){
    console.log(val**2);
}); */
//way 3:
/* let arr = [1,2,3,4];
let clcSqr = (val)=>{ 
    console.log(val**2);
};
arr.forEach(clcSqr); */


