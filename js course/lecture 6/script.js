//DOM Manipulation
//selecting with id:
//id -> uniquley indentify korar jonno ; Accessing symbol -> #
//let header = document.getElementById("heading");
//console.dir(header);
//selecting with class:
//class -> same for multiple elements ; accessing symbol -> .
//let headings = document.getElementsByClassName("heading-class");
//console.dir(headings);
//selecting with tags:
//let paragraphs = document.getElementsByTagName("p");
//console.dir(paragraphs);
//selecting with query selector:
//1.document.querySelector("element_name")-> if there are multiple elements it will return the 1st element.
/* let elemnt1 = document.querySelector(".heading-class");//class element.
let elemnt2 = document.querySelector("#heading");//id element.
let elemnt3 = document.querySelector("p");//tag element.
console.dir(elemnt1);
console.dir(elemnt2);
console.dir(elemnt3); */
//2.document.querySelectorAll("element_name")-> if there are multiple elements it will return all of the elements.
/* let elemnt1 = document.querySelectorAll(".heading-class");//class nodeList.
let elemnt2 = document.querySelectorAll("#heading");//id nodeList.
let elemnt3 = document.querySelectorAll("p");//tag nodeList.
console.dir(elemnt1);
console.dir(elemnt2);
console.dir(elemnt3); */

//properties.
//1. tagName: returns tag for element nodes.
/* let elmnt = document.querySelector("p");
console.dir(elmnt);
console.log(elmnt.tagName); */
//2. inner text: returns the text content of the element and all its children.it will only return the inner text.
/* let divElemnt = document.querySelector("div");
console.dir(divElemnt);
console.dir(divElemnt.innerText); */
//3. innerHtmlt: returns the text content or the html contents of the element.it will return the inner Html with text.
//console.log(divElemnt.innerHTML);
//we can use innerText and innerHtml to set the values of the elements.
//lets say i want to change the heading named "Eatable."
//divElemnt.innerText = "Eatables";
//it has changed the whole div because i seleceted whole div. but if select only the heading then.
/* let headingElemnt = document.querySelector("h3");
headingElemnt.innerText ="Eatables"; */
//now only the heading has changed.
//we can also make changes in the html elements also. lets say i wanna change make the items italic
/* let listElemnt = document.querySelector("ul");
listElemnt.innerHTML = " <li><i>mango</i></li> <li><i>mango</i></li> <li><i>mango</i></li>" */
//4. textContent : returns the textual content even for hidden element.


//practice problem: 01
//create a h2 heading element with text "Hello JavaScript". Append "from apna college sutdent" to this text using JS.
let practiceElement = document.querySelector("h2");
practiceElement.innerText = practiceElement.innerText + " from apna college students";

//practice problem 02
//create 3 divs with common class name "box". access them and add some unique text to each of them
let divs = document.querySelectorAll(".box");
//basic approach accessing like an array with indices.
/* console.log(divs[0]);
divs[0].innerText = "new div 1";
divs[1].innerText = "new div 2";
divs[2].innerText = "new div 3"; */
// a better approach will be using for of loop
let indx = 1;
for(div of divs){
    div.innerText = `new div ${indx}`;
    indx++;
}

