const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
//console.log(imgPosition)
const imgContainer=document.querySelector('.aspect-ratio-169')
const dotItem=document.querySelectorAll(".dot")
let imgNuber= imgPosition.length
let index=0
imgPosition.forEach(function(image,index)
    {
        image.style.left = index*100 + "%"
        dotItem[index].addEventListener("click",function()
            {
                slider(index)
            })
    })
function imgSlide()
    {
        index++;
        console.log(index)
        if(index>=imgNuber)
            {
                index=0
              
            }
            slider(index)
        imgContainer.style.left="-" +index*100+ "%"
    }
function slider(index)
    {
        imgContainer.style.left="-" +index*100+ "%"
        const dotActive=document.querySelector('.active')
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active")
    }
setInterval(imgSlide,5000)

const menuButton= document.querySelector(".navbar__icons")
const menu= document.querySelector(".navbar__links")
menuButton.addEventListener('click',()=>{
menu.classList.toggle("navbar__open");
menuButton.classList.toggle("open");

});

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




