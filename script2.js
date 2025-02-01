var ham = document.querySelector("img.ham");
var menu = document.querySelector(".menu");
var close = document.querySelector("img.close");

ham.addEventListener("click", function(){
    menu.style.top = "0";
    close.style.display = "block";
});

close.addEventListener("click", function(){
    menu.style.top = "-100%";
    ham.style.display = "block";
    close.style.display = "none";
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////


function loader(){
    var loader = document.getElementById('loader');
    setTimeout(function() {
        loader.style.top = "-100%";
    }, 2000);
}

function smoothScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function typer(){
    var typing = new Typed('#typing', {
        strings: ['New Awakening for new India', 'Hope, Progress, and Prosperity for India.','A Vision of Unity, A Mission for Progress.','A Better India Begins Today.'],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////

var Vision = document.querySelector('#vision');
var mission = document.querySelector('#mission');
var upper1 = document.querySelector('.hero-upper1')
var upper2 = document.querySelector('.hero-upper2')

Vision.addEventListener("click",function(){

})
mission.addEventListener("click",function(){
  upper2.style.display = "block";
  Vision.style.boxShadow = "none";
  mission.style.boxShadow = "inset 2px 2px 10px #0000005b";
})
Vision.addEventListener("click",function(){
  upper2.style.display = "none";
  Vision.style.boxShadow = "inset 2px 2px 10px #0000005b";
  mission.style.boxShadow = "none";
})






///////////////////////////////////////////////////////////////////////////////////////////////////////////

const texts = ["नए भारत के लिए नई जागृति", "भारत के लिए आशा, प्रगति और समृद्धि।", "एकता का एक दृष्टिकोण, प्रगति का एक मिशन।","एक बेहतर भारत की शुरुआत आज से हो रही है।"]; // Array of text strings
const speed = 30; // Typing speed in milliseconds
const delayBetweenTexts = 2000; // Delay before typing the next string
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  const currentText = texts[textIndex];
  if (charIndex < currentText.length) {
    document.getElementById("typing-hindi").innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    // Pause and then erase the text
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  const currentText = texts[textIndex];
  if (charIndex > 0) {
    document.getElementById("typing-hindi").innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, speed);
  } else {
    // Move to the next text in the array
    textIndex = (textIndex + 1) % texts.length; // Loops back to the first text
    setTimeout(typeWriter, speed);
  }
}

// Start the typewriter effect
window.onload = typeWriter;


///////////////////////////////////////////////////////////////////////////////////////////////////////////



smoothScroll();
loader();
typer();
