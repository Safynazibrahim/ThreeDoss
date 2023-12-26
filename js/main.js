let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  n++;
  if (n > slides.length) {n = 1}
  slides[n-1].style.display = "block";

  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) 
        {
        dots[i].className = dots[i].className.replace(" active", "");
        }

    slides[n-1].style.display = "block";
    dots[n-1].className += " active";

}


// SIDE NAV
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.documentElement.addEventListener("click" , closeNav);
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  document.addEventListener('click', function(event) {
    var navbar = document.getElementById('mySideNav');
    if (!navbar.contains(event.target)) {
        closeNav();
    }
});

  let backToTop = document.getElementById("myBtn");
  
  window.onscroll = function() {showBtn()};

  function showBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
    backToTop.style.display="block";
  }
  else 
  {
    backToTop.style.display="none";
  }
  }

  function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.body.scrollTop = 0;
  }