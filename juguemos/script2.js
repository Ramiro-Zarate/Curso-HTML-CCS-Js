let barraNavegacion=document.querySelector(".barraNavegacion")
let mostrar=()=>{
    if(window.scrollY > innerHeight*0.5){
        barraNavegacion.classList.add("navScroll")
    }else{
        barraNavegacion.classList.remove("navScroll")
    }
}
window.addEventListener("scroll",mostrar)