/*
Författare: Leander Norberg
Projketnamn: Moment 1
Beskrivning: Automatisering & publicering, 
Frontend-baserad webbutveckling (DT211G) VT26
*/
"use strict";

const menuButton = document.querySelector(".menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.textContent = isOpen ? "✕ Stäng" : "☰ Meny";
    menuButton.setAttribute("aria-expanded", isOpen);
});