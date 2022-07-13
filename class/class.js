const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )
// var a = document.getElementById("1")
// var b = document.querySelectorAll("li")[1]
// var c = document.querySelectorAll("li")[2]
// var d = document.querySelectorAll("li")[3]


// function func1(){
//     a.style.color = "blue"
//     b.style.color = "red"
//     c.style.color = "orange"
//     d.innerHTML = "four"
//     d.style.color="green"
// }

// func1()
// var e = true;

// function clicked(){
//     if(e){
//         document.getElementById("e").innerHTML.toggle = "Daft"
//     }
//     else{
//         document.getElementById("e").innerHTML
//     }
// }

// var button = document.getElementById("ink")
// var body = document.querySelector("body")
// var isRed = false
// var isDaft = false

// ink.addEventListener("click", function () {
//     document.getElementById("e").textContent = "Daft";

//     if(isRed && isDaft){
//         document.body.style.backgroundColor = "white";
//         document.getElementById("e").textContent = "Smart";
//     }
//     else{
//         document.body.style.backgroundColor = "yellow"
//     }

//     isDaft = !isDaft
//     isRed = !isRed
// })

// var heading = document.querySelector("#e")
// heading.style.color ="black"
// heading.style.fontSize ="50px"
// heading.style.backgroundColor ="red "
// heading.style.width ="150px"

// var x = document.querySelector(".num")
// var y = document.querySelector("#f")
// var why= 0;

// x.addEventListener("click", function(){
//     why++
//     y.innerHTML = why;
// })


