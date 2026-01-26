/*
Författare: Leander Norberg
Projketnamn: Moment 1
Beskrivning: Automatisering & publicering, 
Frontend-baserad webbutveckling (DT211G) VT26
*/
"use strict";

let openMenu = document.getElementById("openButton");
let closeMenu = document.getElementById("closeButton");

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

//Funktion för att öppna och stänga menyn 
function toggleMenu() {
    let navMenu = document.getElementById("navMenu");
    let style = window.getComputedStyle(navMenu);

    if(style.display === "none") {
        navMenu.style.display = "block";
    } else {
        navMenu.style.display = "none";
    }
}