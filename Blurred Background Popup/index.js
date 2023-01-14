const popUpEl = document.querySelector(".popup-container");
const popUpBtnEl = document.querySelector("#btn");
const closeBtnEl = document.querySelector("#close-btn");
const submitBtnEl = document.querySelector("#submit");

closeBtnEl.addEventListener("click", () => {
    popUpEl.style.display = "none";
    document.querySelector("#email").value = "";
});

popUpBtnEl.addEventListener("click", () => {
    popUpEl.style.display = "block";
});

submitBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    if (email != "") {
        popUpEl.style.display = "none";
        document.querySelector("#email").value = "";
        alert(`Your registered with ${email}. Thank for joining`);
    }
});
