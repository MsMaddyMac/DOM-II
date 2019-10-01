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


