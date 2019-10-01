// Your code goes here

// ------------ Header Section ------------ //

const headerChange = document.querySelector("h1");
headerChange.addEventListener("mouseenter", () => {
    headerChange.textContent = "Has Arrived";
    headerChange.style.color = "orange";
    headerChange.style.transform = "scale(1.3";
    headerChange.style.transition = "all 0.3s"
})

document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("click", () => {
    el.style.writingMode = "vertical-rl";
    })
})

// ------------ Ends of Header Section ------------ //

const body = document.querySelector("body");
window.addEventListener('scroll', () => {
    body.style.backgroundImage = "linear-gradient(#f65b46, #f8e10f, #5adee1, #98d2b9)";
})

document.querySelectorAll("p").forEach(textColor => {
    window.addEventListener("keypress", () => {
    textColor.style.color = "#0e3cbf";
    })
})

const busImage = document.querySelector(".intro img");
busImage.addEventListener("mouseenter", () => {
    busImage.style.transform = "scale(-0.7)";
    busImage.style.transition = "all 0.3s"
})
busImage.addEventListener("mouseleave", () => {
    busImage.style.transform = "scale(1)";
    busImage.style.transition = "all 0.3s"
})