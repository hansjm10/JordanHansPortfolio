var slideIndex1 = 1;
var slideIndex2 = 1;
showSlides(slideIndex1,"one");
showSlides(slideIndex2,"two");
// Next/previous controls
function plusSlides1(n) {
  showSlides(slideIndex1 += n, "one");
}
function plusSlides2(n) {
    showSlides(slideIndex2 += n, "two");
  }

function showSlides(n, slide) {
  var i;
  var slideIndex = n;
  console.log(slide)
  if (slide === "one")
  {
    console.log("True");
    var slides = document.getElementsByClassName("mySlides1");
  }
  else
  {
    var slides = document.getElementsByClassName("mySlides2");
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

  if(slide === "one"){
  slideIndex1 = slideIndex
  }
  else{
      slideIndex2 = slideIndex
  }
} 