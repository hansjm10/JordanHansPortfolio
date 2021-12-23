var slideIndex1 = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
showSlides(slideIndex1,"one");
showSlides(slideIndex2,"two");
showSlides(slideIndex3, "three")
// Next/previous controls
function plusSlides1(n) {
  showSlides(slideIndex1 += n, "one");
}
function plusSlides2(n) {
    showSlides(slideIndex2 += n, "two");
  }
  function plusSlides3(n) {
    showSlides(slideIndex3 += n, "three");
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
  else if(slide ==="two")
  {
    var slides = document.getElementsByClassName("mySlides2");
  }
  else {
    var slides = document.getElementsByClassName("mySlides3");

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
  else if(slide === "two"){
      slideIndex2 = slideIndex
  }
  else
  {
    slideIndex3 = slideIndex
  }
} 