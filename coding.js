var btn=document.getElementsByClassName("toggle")[0];
var links=document.getElementsByClassName("nav-links");
btn.addEventListener("click",function(){
    for(var i=0;i<links.length;i++)
    {   
        links[i].classList.toggle("active");
    }
   
    
});

document.querySelectorAll('.linkk').forEach(link=>{
    if(link.href===window.location.href){
        link.setAttribute('aria-current','page');
    }
})


// var lastscrolltop=0;
// navbar=document.getElementById("navbar");

// window.addEventListener("scroll",function(){
//     var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
//     if(scrollTop>lastscrolltop)
//     {
//         navbar.style.top="-80px";
//     }else{
//         navbar.style.top="0";
//     }
//     lastscrolltop=scrollTop;
// })

const nav=document.querySelector(".nav");
let lastscrollY=window.scrollY;

window.addEventListener("scroll",()=>{
    if(lastscrollY < window.scrollY){
       nav.classList.add("nav-hidden")
    }
    else{
        nav.classList.remove("nav-hidden")
         }
    lastscrollY=window.scrollY;
});

window.addEventListener("scroll",function(){
    var reveals=document.querySelectorAll(".reveal");
    for(var i=0;i<reveals.length;i++)
    {
        var windowH=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;

        if(revealtop<windowH-revealpoint){
            reveals[i].classList.add("rev");

        }else{
            reveals[i].classList.remove("rev");
        }
    }
})