
var slideIndex = 1;
showSlides(slideIndex);
var slidesnumber = document.getElementsByClassName("mySlides");
document.getElementById('dot1').textContent=slideIndex; 
document.getElementById('dot2').textContent=slidesnumber.length; 


function plusSlides(n) {
  showSlides(slideIndex += n);
  document.getElementById('dot1').textContent=slideIndex; 
//   alert(slideIndex)
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
        {slideIndex = 1}
    if (n < 1) 
        {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}

// document.addEventListener('keyup', (e) => {
//     if (e.code === "ArrowLeft")        plusSlides(-1)
//     else if (e.code === "ArrowRight") plusSlides(+1)
  
//   });