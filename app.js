function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add('playing');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    randomColor();
    setTimeout(function() {revertColor(); }, 1000);
  }

  function removeSound(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.remove('playing');
  }

  function randomColor() {
    let colors = ["#ffa502", "#ff7f50", "#ff6b81", "#ffa502", "#ff6348", "#ff4757", "#7bed9f", "#70a1ff", "#5352ed", "#2ed573", "#1e90ff", "#3742fa", "#a4b0be", "#747d8c", "#ced6e0"];
  let randColor1 = colors[Math.floor(Math.random()*colors.length)];
    let randColor2 = colors[Math.floor(Math.random()*colors.length)];
    let randomAngle = Math.floor((Math.random() * 360) + 1);
    document.body.style.background = `linear-gradient(${randomAngle}deg, ${randColor1}, ${randColor2})`;
  };
  
  function changeColor() {
    const colorOne = document.getElementById("color1").value;
    const colorTwo = document.getElementById("color2").value;
    const angle = document.getElementById("angle").value;
    document.body.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
  };
  
  function revertColor() {
    document.body.style.background = "#444";
  };

  window.addEventListener("keydown", function (event) { playSound(event) })
  window.addEventListener("keyup", function (event) { removeSound(event) })
