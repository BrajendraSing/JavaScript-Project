const button = document.querySelector("#button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
    body.style.position = "relative";

    const divEl = document.createElement("div");
    divEl.style.position = "absolute";
    divEl.style.width = "100%";
    divEl.style.height = "100%";
    divEl.style.backgroundColor = "black";

    const videoEl = document.createElement("video");
    videoEl.src = "resources/avatar_trailer_hinid.mp4";
    videoEl.controls = true;
    videoEl.style.width = "100%";
    videoEl.style.height = "100%";
    videoEl.style.padding = "5px";
    videoEl.play();

    const closeEl = document.createElement("div");
    closeEl.innerHTML = "X";
    closeEl.style.width = "50px";
    closeEl.style.height = "50px";
    closeEl.style.color = "red";
    closeEl.style.cursor = "pointer";
    closeEl.style.padding = "10px";
    closeEl.style.fontWeight = "700";
    closeEl.style.float = "right";

    closeEl.addEventListener("click", () => {
        divEl.remove();
        videoEl.remote();
    });

    divEl.appendChild(closeEl);
    divEl.appendChild(videoEl);
    body.appendChild(divEl);
});