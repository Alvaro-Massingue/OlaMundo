window.alert("Olá! Eu sou Alvaro. Gostaria de informar que essa página ainda está em desenvolvimento, portanto espero pelo seu feedback")

window.addEventListener("scroll", function(){

    var header =document.querySelector("header");

    header.classList.toggle("alvaro", window.scrollY >0);
})

