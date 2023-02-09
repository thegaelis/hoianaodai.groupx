  //Menu
  const menu= document.querySelector(".navbar__links")
  const menuButton= document.querySelector(".navbar__icons")
  
  menuButton.addEventListener('click',()=>{
      menu.classList.toggle("navbar__open");
      menuButton.classList.toggle("open");
  
  });
  //Slideshow-Auto
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }
  //Slideshow-Normal
  const butTon=document.querySelector(".product-content-right-bottom-top")
  if(butTon)
      {
          butTon.addEventListener("click",function()
              {
                  document.querySelector(".navbar__links").classList.toggle("activeB")
              })
      }
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              document.getElementById("myBtn").style.display = "block";
          } else {
              document.getElementById("myBtn").style.display = "none";
          }
      }
      
      function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }