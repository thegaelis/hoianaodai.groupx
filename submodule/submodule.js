









const baoquan=document.querySelector(".baoquan")
const chitiet=document.querySelector(".chitiet")
const dathang=document.querySelector(".dathang")
if(baoquan)
    {
        baoquan.addEventListener("click",function()
            {
                document.querySelector(".product-content-right-bottom-content-chitiet").style.display="none"
                document.querySelector(".product-content-right-bottom-content-baoquan").style.display="block"
                document.querySelector(".product-content-right-bottom-content-dathang").style.display="none"
            })
    }
    if(dathang)
    {
        dathang.addEventListener("click",function()
            {
                document.querySelector(".product-content-right-bottom-content-chitiet").style.display="none"
                document.querySelector(".product-content-right-bottom-content-baoquan").style.display="none"
                document.querySelector(".product-content-right-bottom-content-dathang").style.display="block"
            })
    }
if(chitiet)
    {
        chitiet.addEventListener("click",function()
            {
                document.querySelector(".product-content-right-bottom-content-chitiet").style.display="block"
                document.querySelector(".product-content-right-bottom-content-baoquan").style.display="none"
                document.querySelector(".product-content-right-bottom-content-dathang").style.display="none"
            })
    }

const menu= document.querySelector(".navbar__links")
const menuButton= document.querySelector(".navbar__icons")

menuButton.addEventListener('click',()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");

});
const butTon=document.querySelector(".product-content-right-bottom-top")
if(butTon)
    {
        butTon.addEventListener("click",function()
            {
                document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
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
