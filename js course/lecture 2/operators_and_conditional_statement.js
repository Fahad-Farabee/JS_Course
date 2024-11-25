//Operators in JS:
//----------------
/*1. Arithmetic Operators:
	|->addition -> +
	|->substraction -> -
	|->multiplication -> *
	|->divide -> /
	|->modulus -> %
	|->exponential -> **
	|->increment -> ++ (unary ops)
	|->decrement -> -- (unary ops)
*/
/* let a = 5;
let b = 2;
console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); */
//unary ops
//increment
/* a++;
console.log("a ++  = ", a); */
//decrement
/* a--;
console.log("a-- = ", a); */


/* 2. Assignment Operators:
	|-> =
	|-> +=
	|-> -=
	|-> *=
	|-> %=
	|-> **= */

/* let a = 5;
console.log("a = ", a);	 */
// +=
/* a += 2;
console.log(a); */
//-=
/* a-= 2;
console.log(a); */
//-=
/* a*=2;
console.log(a); */
//%=
/* a%= 2;
console.log(a); */
//**=
/* a**= 2;
console.log(a); */

/* 3. comparison Operators:
	|-> == (equal to => only checks values are same)
	|-> === (equal to & type =>  checks both values and data type are same)(in js we generally use this comparison op)
	|-> != (not equal to => only checks values are not same)
	|-> !== (not equal to & type =>  checks values and data type are not same)
	|-> >
	|-> >=
	|-> <
	|-> <=
	
4. Logical Operators:
	|-> && (logical and ) (all conditions true then true)
	|-> || (logical OR ) (at least one condition is true then true)
	|-> ! (logical not) */



/* Conditional statements in JS:
------------------------------
To implement some condition in the code. */
/* if Statement:
if(cond){
    code to be executed;
} */
/* let color;
let mode = "light";
if(mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log(color); */

/* if-else Statement:
if(cond){
code for true condition to be executed;
}else{
code for not true/false condition to be executed;
} */
/* let num = 41;
if(num % 2 === 0){
    console.log(num, "is even");
}else{
    console.log(num, "is odd");
} */
    
/* else-if Statement:
if(cond1){
    code to be executed;
}else if(cond2){
    code to be executed;
}else if(cond3){
    code to be executed;
}else{
    code to be executed;
} */

/* let age = 23;
if(age < 18){
    console.log("junior");
}else if(age>=60){
    console.log("Senior");
}else{
    console.log("Middle Aged");
} */


//practice problem 01:
//Get user to input a number using prompt ("Enter a number: "). Check if the number is a multipe of 5 or not.
let num = prompt("Enter a number: ");
if(num % 5 === 0){
    console.log(num, " Yes it is multiple of ", 5);
}else{
    console.log(num, " NO it is multiple of ", 5);
} 

