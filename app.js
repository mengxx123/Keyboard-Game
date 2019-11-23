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
    console.log(event.key)       
    var node = document.createElement("p");                 
    node.appendChild(userText);                              
    document.getElementById("text-display").appendChild(node);

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
