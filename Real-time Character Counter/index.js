const textarea = document.querySelector("#textarea");
const charCount = document.querySelector("#charCount");
const remCount = document.querySelector("#remCount");

const total = 50;
let count = 0;
let remainig = total - count;
updateCounter();

function updateCounter() {
    charCount.innerText = count;
    remCount.innerText = remainig;
}

textarea.setAttribute("maxlength", total);

textarea.addEventListener('keyup', (event) => {
    count = textarea.value.length;
    remainig = total - count;
    updateCounter();
});


