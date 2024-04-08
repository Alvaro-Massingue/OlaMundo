window.addEventListener("scroll", function(){

    var header =document.querySelector("header");

    header.classList.toggle("alvaro", window.scrollY >0);
})

