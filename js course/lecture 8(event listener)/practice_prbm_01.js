/*
Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again.
*/

let btn = document.querySelector("#Mode");
let crntMode = "white";
let body = document.querySelector("body");

btn.addEventListener("click", ()=>{
    if(crntMode==="white"){
       
        //now we just need change the background of the page.
        /* document.querySelector("body").style.backgroundColor = "black";
        crntMode = "black";
        console.log(crntMode); */
        crntMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        
        /* document.querySelector("body").style.backgroundColor = "white";
        crntMode = "white";
        console.log(crntMode); */
        crntMode = "white";
        body.classList.add("white");
        body.classList.remove("dark");
    }
    console.log(crntMode);

})