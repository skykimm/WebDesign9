var firstslide = document.querySelector(".img:first-child");
var clickbtns = document.querySelectorAll(".btn");
var clicktabs = document.querySelectorAll(".tab");
var openmodal = document.querySelector(".modals");


function slideshow(){
    var currentslide = document.querySelector(".showing");
    if(currentslide){
        currentslide.classList.remove("showing");
        var nextslide = currentslide.nextElementSibling;
        if(nextslide){
            nextslide.classList.add("showing");
        }
        else{
            firstslide.classList.add("showing");
        }
    }
    else{
        firstslide.classList.add("showing");
    }
}
slideshow();
window.setInterval("slideshow()",2000);

function clickbtn(n){
    var cbtn = document.querySelector(".btns");
    var ctab = document.querySelector(".tabs");
    if(cbtn){
        cbtn.classList.remove("btns");
        ctab.classList.remove("tabs");
    }
    clickbtns[n].classList.add("btns");
    clicktabs[n].classList.add("tabs");
}

function modal(){
    openmodal.style.display="block";
}
function closemodal(){
    openmodal.style.display="none";
}
openmodal.addEventListener("click",modal);
openmodal.addEventListener("click",closemodal);
