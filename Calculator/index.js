//clear multi plus minus divide zero one two three four five six seven eight nine equal screen

const screen = document.getElementById("screen");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multi = document.getElementById("multi");
const equal = document.getElementById("equal");

document.getElementById("clear").addEventListener("click", () => {
    screen.innerHTML = "";
});

one.addEventListener("click", () => {
    screen.innerText = screen.innerText + one.innerText;
});
two.addEventListener("click", (event) => {
    screen.innerText = screen.innerText + two.innerText;
});
three.addEventListener("click", (event) => {
    screen.innerText = screen.innerText + three.innerText;
});
four.addEventListener("click", (event) => {
    screen.innerText = screen.innerText + four.innerText;
});
five.addEventListener("click", (event) => {
    screen.innerText = screen.innerText + five.innerText;
});
six.addEventListener("click", (event) => {
    screen.innerText = screen.innerText + six.innerText;
});
seven.addEventListener("click", (event) => {
    screen.innerText = screen.innerText + seven.innerText;
});
eight.addEventListener("click", (event) => {
    screen.innerText = screen.innerText + eight.innerText;
});
nine.addEventListener("click", (event) => {
    screen.innerText = screen.innerText + nine.innerText;
});
zero.addEventListener("click", (event) => {
    if (screen.innerText != "") {
        screen.innerText = screen.innerText + zero.innerText;
    }
});


let n1 = 0, n2 = 0, res, temp, op;
plus.addEventListener("click", () => {
    if (screen.innerText != "") {
        op = "+";
        screen.innerText = screen.innerText + plus.innerText;
    }
});
minus.addEventListener("click", () => {
    if (screen.innerText != "") {
        op = "-";
        screen.innerText = screen.innerText + minus.innerText;
    }
});
multi.addEventListener("click", () => {
    if (screen.innerText != "") {
        op = "*";
        screen.innerText = screen.innerText + multi.innerText;
    }
});
divide.addEventListener("click", () => {
    if (screen.innerText != "") {
        op = "/";
        screen.innerText = screen.innerText + divide.innerText;
    }
});

equal.addEventListener("click", () => {
    temp = screen.innerText;
    if (screen.innerText != "" && temp.includes(op)) {
        temp = screen.innerText.split(op);
        if (temp[1] != "") {
            n1 = +temp[0];
            n2 = +temp[1];
            if (!isNaN(n1) && !isNaN(n2)) {
                switch (op) {
                    case "+":
                        res = n1 + n2;
                        break;
                    case "-":
                        res = n1 - n2;
                        break;
                    case "/":
                        res = n1 / n2;
                        res = res.toPrecision(4);
                        break;
                    case "*":
                        res = n1 * n2;
                        break;
                    default:
                        res = "Something Went Wrong";
                        break;
                }
                screen.innerText = res;
            } else {
                screen.innerHTML = "<p style='font-size:20px;'>Only for two numbers :)</p>";
            }

        }

    }

});
