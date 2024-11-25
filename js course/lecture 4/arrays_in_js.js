//array in js
//arrays are mutable. but strings are immutable.
//we can make array with same data type values.
let fullNames = ["Fahad", "siam", "Fahim"];//all string 
let marks = [40, 42, 43];//all int
//we can make array with different data type values
let info = ["Annan", 23, "CSE"]//we can make this but we do not prefer making array like this way
console.log(marks);

console.log(marks.length);//property

console.log(typeof marks);
//console output: object
//in js arrays are like special object.
//in object we usually see key : value pair.
//in array indices of the array works like a key. 

//array indices:
console.log(marks[0]);
//we can change the value of an index in array.

//looping over array.
/* for(let i = 0; i<marks.length; i++){
    console.log(marks[i]);
} */
for(let mark of marks){
    console.log(mark);
}

//practice problem 01:
//for a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class
let marksOfTheStudents = [85,97,44,37,76,60];
let sum = 0;
for(let mark of marksOfTheStudents){
    sum = sum + mark;
}
let average = sum/marksOfTheStudents.length;
console.log(average);

//parctice problem 02:
//For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% off on them. change the array to store fina price after applying offer.
let itemPrices = [250, 645, 300, 900, 50];
let tempPrice;
for(let i = 0; i<itemPrices.length; i++){
    tempPrice = itemPrices[i]-(itemPrices[i]*0.1);
    itemPrices[i] = tempPrice;
}
console.log(itemPrices);


//array methods.

//push()-> add something in the end[if we push any duplicate value it will push that also.]
//pop()->delete something from the end and return it
let foodItems =["potato", "apple", "lichi"];
console.log(`before pushing food items are: ${foodItems}`);
foodItems.push("banana", "apple");
console.log(`after pushing food items are: ${foodItems}`);
console.log(`before poping food items are: ${foodItems}`);
let poppedItem =  foodItems.pop();//pop() is popping and returing the food item
console.log(`after poping food items are: ${foodItems}`);
console.log(`your popped food item is: ${poppedItem}`);

//toString()-> it converts the array in a string
console.log(foodItems.toString());

//concat()-> it joins multiple arrays and returns the result
//it returns a new array. it does not change any thing on the main arrays.
let sec1 = ["fahad", "siam"];
let sec2 = ["annan", "ikra"];
let sec3 = ["rafsan", "rafi"];
let students = sec1.concat(sec2);
console.log(students.toString());
//we can concat multiple arrays also.
let students2 = sec1.concat(sec2, sec3);
console.log(students2.toString());

//unshift()-> adds element to start.
//shift()-> detelet from start and returns it.
let arr = ["c++", "c"];
console.log(`before using unshift: ${arr}`);
arr.unshift("Java");
console.log(`after using unshift: ${arr}`);
console.log(`before using shift: ${arr}`);
let newArr =  arr.shift();
console.log(`after using shift: ${arr}`);
console.log(`the deleted item was: ${newArr}`);

//splice()
let arr2 = [1,2,3,4,5,6];
//arr2.splice(2,2,101,102);
//add element
//arr2.splice(2,0,101);
//dlt element
//arr2.splice(1, 1);
//replace element
arr2.splice(2,1,10000);
console.log(arr2);

//practice problem 03:
//create an array to store companies => "blommberg", "microsoft", "uber", "google", "ibm", "netflix"
//a. Remove the first company from the array
//b. Remove uber and add ola in its place
//c. add amazon at the end

let companies = ["blommberg", "microsoft", "uber", "google", "ibm", "netflix"];
//sol a:
let removeCompany = companies.shift();
console.log(companies);
//after solvin a ; the array is : "microsoft", "uber", "google", "ibm", "netflix"
//sol b:
companies.splice(1,1,"ola");
console.log(companies);
//after solvin b ; the array is : "microsoft", "ola", "google", "ibm", "netflix"
//sol c:
companies.push("amazon");
console.log(companies);
//after solvin c ; the array is : "microsoft", "ola", "google", "ibm", "netflix", "amazon"