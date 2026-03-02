// Countdown
const birthday = new Date("March 03, 2026 00:00:00").getTime();
setInterval(()=>{
  const now = new Date().getTime();
  const distance = birthday-now;
  const days = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  document.getElementById("countdown").innerHTML=
    "⏳ "+days+" days "+hours+" hours until your special day ❤️";
},1000);

// Letter
function openLetter(){document.getElementById("letter").style.display="block";}
function closeLetter(){document.getElementById("letter").style.display="none";}

// Popup
setTimeout(()=>{document.getElementById("popup").style.display="block";},2000);

// Falling hearts
function createHeart(){
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*4)+"s";
  heart.style.fontSize=(15+Math.random()*25)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
}
setInterval(createHeart,300);

// 3D Carousel
const carousel=document.querySelector(".carousel");
const photos=document.querySelectorAll(".photo");
const total=photos.length;
let angle=0,current=0;

// Arrange photos in circle
photos.forEach((photo,i)=>{
  photo.style.transform=`rotateY(${i*(360/total)}deg) translateZ(300px)`;
});

// Auto rotate every 4 seconds
setInterval(()=>{current++;rotateCarousel();},4000);

function rotateCarousel(){
  angle=current*-(360/total);
  carousel.style.transform=`rotateY(${angle}deg)`;
}

// Swipe support
let startX=0;
document.addEventListener("touchstart",e=>{startX=e.touches[0].clientX;});
document.addEventListener("touchend",e=>{
  let endX=e.changedTouches[0].clientX;
  if(startX>endX+50) current++;
  if(startX<endX-50) current--;
  rotateCarousel();
});
// script.js
const bgMusic = document.querySelector("audio");

document.addEventListener("click", () => {
  bgMusic.play().catch(err => {
    console.log("Music play blocked:", err);
  });
}, { once: true }); // only triggers once
function openLetter(){
  document.getElementById("letter").style.display="block";
  const bgMusic = document.querySelector("audio");
  bgMusic.play().catch(err => console.log(err));
}