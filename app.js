function keyDown(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add('playing');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    randomColor();
    setTimeout(function () { revertColor(); }, 1000);
    if (event.keyCode === 13) {
        let div = document.getElementById('text-display');
        div.innerHTML = "";
        console.log("this is working fine, hmmm...")
        document.getElementById("writingBoard").innerHTML = "";
        generateText()
    } else {
        createText(event);
    }
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

    if (children > 75) {
        div.innerHTML = "";
    }

}

function generateText() {
    let text = ["Typing is fun.", "How fast can you type?", "Pandas are interesting animals.", "Learning how to type properly is an important skill.", "Make sure you aren't looking at your fingers.", "Hey, you're doing really well.", "Gorillas can catch human colds and other illnesses.", "Ostriches can run faster than horses.", "The female lion does ninety percent of the hunting.", "Deer have no gall bladders.", "The bat is the only mammal that can fly.", "A tarantula spider can survive more than two years without food.", "Cows can sleep standing up, but they can only dream lying down.", "The average fox weighs 14 pounds.", "Alligators generally live between 30 and 50 years.", "A single elephant tooth can weigh as much as 9 pounds.", "A housefly hums in the key of F.", "The flamingo can only eat when its head is upside down.", "The smell of a skunk can be detected by a human a mile away."];
    let randomNum = Math.floor(Math.random() * text.length);
    let paragraph = document.createElement("h2");
    let randomText = document.createTextNode(text[randomNum])

    paragraph.appendChild(randomText)
    document.getElementById("writingBoard").appendChild(paragraph);
};

function handleScore() {

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
    document.body.style.transition = "all 2s";

};

function startGame() {
    document.getElementById("open-modal").classList.add("close-modal-window");
    document.getElementById("writingBoard").classList.add("writingBoard");
    generateText();
}


document.getElementById("startButton").onclick = function () { startGame() };
window.addEventListener("keydown", function (event) { keyDown(event) })
window.addEventListener("keyup", function (event) { keyUp(event) })
