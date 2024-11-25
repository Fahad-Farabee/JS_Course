/*
//our first js code..
console.log("Hello there!");
console.log("Hello there from fahad");
*/

/*
//variables in js..
fullname = "fahad farabee";
console.log(fullname);
//console output: fahad farabee
age = 34;
console.log(age);
//console output: 34
price = 10.25;
console.log(price);
//console output: 10.25
x = null;
console.log(x);
//console output: null
y = undefined;
console.log(y);
//console output: undefined.
isfollow = true;
console.log(isfollow);
//console output: true.
//js is Dynamically Typed Language.
//[zokhon ze value dibo variable setai store kore rekhe dibe.]
fullName = "Fahad Farabee";
console.log(fullName);
//console output: Fahad Farabee;
fullName = 25;
console.log(fullName);
//console output: 25;
*/


//let, const, var in js
//var => can be re declared and updated; (it is now backdated. we do not use this anymore since 2015)
//let => can not be re declared, but can be updated.
//const => can not be re declared, also can not be updated.
//let..
//let fullName = "fahad farabe";
/*
//we can't redecalre:
let fullName = "Fahim";//we can not do this
*/
//we can update it
//before updating 
//console.log(fullName);
//console output: fahad farabee
//after updating
//fullName = "fahim";
//console.log(fullName);
//console output: fahim
//const..
//const age = 25;
/*
//we can't redecalre:
const age = 35;//we can not do this
*/
//we can not update it
/*
//before update
console.log(age);
//console output: 25
age = 34;
//after update
console.log(age);
//console output: we are getting an error "Assignment to constant variable";
*/
//using let we can declare a variable without an initializer.
//let a;
//console.log(a);
//console output: undefined.
//but in const we can not do that.
//const b;

/*
Data types in JS:
-----------------
there are 2 types of data in JS
1. primitive      		2. non-primitive
	|->Number	           |->Objects-> collection of values.
	|->String			        |->We use it in " Key : value " Form. Such as: Key : Value
	|->Boolean								       {
	|->Undefined								       name: "Fahad"
	|->Null										age : 24
	|->BigInt								       }
	|->Symbol	
*/
//objects in Js: 
/*const student = {
    fullName : "fahad farabee",
    age : 23,
    cgpa : 3.27,
    isPass : true,
};
*/
//console.log(student);
/*
To access a particular key in object we can follow any of these 2 ways:
1. obj.key
2. obj["key"]
*/
//console.log(student.fullName);
//console output: fahad farabee.
//console.log(student["age"]);
//console output: 23.

//we also can update the value of a key. such as:
//if we want to change the name of the student to Fahim. then,
//student["fullName"] = "Fahim";
//console.log(student["fullName"]);
//console output: Fahim
//console.log(student);
/*
###Here is little thing to remember:###
--------------------------------------
student object is const. as we knew we can't update or redeclare const variables. so how are we doing this?
The answer is : we are changing the value of the key. not the whole object. the object is const but not the keys.
*/

//practice problem 01:
const product = {
    productName : "Ball Pen",
    productRating: 4,
    isDeal : true,
    productOffer : 5,
    productPrice : 270
};
console.log(product);

//practice porblem 02 :
const profile = {
    profileName : "@FahadDev",
    followers : 123,
    following : 456,
    isFollowing : true
};
console.log(profile);