const nav = document.querySelector("#navbar");

document.addEventListener("scroll", (event) => {
    if (window.scrollY >= 630) {
        nav.style.backgroundColor = "black";
    } else {
        nav.style.backgroundColor = "#4628d8";
    }
});