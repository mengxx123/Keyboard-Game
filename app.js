function keyDown(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add('playing');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    randomColor();
    setTimeout(function () { revertColor(); }, 1000);
    createText(event);
}

function keyUp(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.remove('playing');
}

function createText(event) {
    let userText = document.createTextNode(event.key);
    let node = document.createElement("p");
    let space = document.createElement("h3");
    let div = document.getElementById('text-display');
    let children = div.childNodes.length - 1;
    //This is for the spacebar click event
    if (event.keyCode === 32) {
        node.appendChild(space);
        div.appendChild(node);
    //This is for the backspace click event
    } else if (event.keyCode === 8) {
        console.log("the delete button was pressed")
        div.removeChild(div.childNodes[children]);
    } else {
        node.appendChild(userText);
        div.appendChild(node);
    }

}

function randomColor() {
    let colors = ["#ffa502", "#ff7f50", "#ff6b81", "#ffa502", "#ff6348", "#ff4757", "#7bed9f", "#70a1ff", "#5352ed", "#2ed573", "#1e90ff", "#3742fa", "#a4b0be", "#747d8c", "#ced6e0"];
    let randColor1 = colors[Math.floor(Math.random() * colors.length)];
    let randColor2 = colors[Math.floor(Math.random() * colors.length)];
    let randomAngle = Math.floor((Math.random() * 360) + 1);
    document.body.style.background = `linear-gradient(${randomAngle}deg, ${randColor1}, ${randColor2})`;
    document.body.style.transition = "all 2s";
};

function revertColor() {
    document.body.style.background = "#444";
};

window.addEventListener("keydown", function (event) { keyDown(event) })
window.addEventListener("keyup", function (event) { keyUp(event) })
