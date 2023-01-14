const container = document.querySelector(".container");

const len = 30;


for (let i = 0; i < len; i++) {
    let box = document.createElement('div');
    let text = document.createElement('p');
    box.setAttribute('class', 'box');
    text.setAttribute('class', 'inner-text');

    let color = generateColor();

    text.innerText = `#${color}`;
    box.appendChild(text);
    box.style.transition = `background-color .4s`;
    box.style.backgroundColor = `#${color}`;
    container.appendChild(box);
}

function generateColor() {
    let colorCode = '';
    let colorCodeLen = 6;
    let colorString = '0123456789abcdef';

    for (let i = 0; i < colorCodeLen; i++) {
        let number = Math.floor(Math.random() * colorString.length);
        colorCode += colorString[number];
    }

    return colorCode;
}


