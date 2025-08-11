let video= document.querySelector(".video");
let inicio = document.querySelector(".inicio");
let pausa = document.querySelector(".pausa");
let duracionMultimedia = video.duration
let barraNavegacion=document.querySelector(".barraNavegacion")


let mostrar=()=>{
    if(window.scrollY > innerHeight*0.4){
        barraNavegacion.classList.add("navScroll")
    }else{
        barraNavegacion.classList.remove("navScroll")
    }
}
window.addEventListener("scroll",mostrar)


let imagen1=document.querySelector(".imgCarta1")
let texto1=document.querySelector("#texto1")
const apareceImg1=()=>{
    if(window.scrollY > innerHeight*0.5){
        imagen1.classList.add("aparicionImg1")
        texto1.classList.add("aparicionTexto1")
    }
}
window.addEventListener("scroll",apareceImg1)


let imagen2 = document.querySelector("#img-2")
let texto2= document.querySelector("#texto2")
// Altura imagen dos: scrollY 1000
let alturaCarta2 = 1000

const aparecerCarta2 = ()=>{
    if(window.scrollY >= alturaCarta2){
        imagen2.classList.add("apareceImagen2")
        texto2.classList.add("aparicionTexto2")
    }
}
window.addEventListener("scroll",aparecerCarta2)

let imagen3 = document.querySelector(".imagen3")
let texto3 = document.querySelector("#texto3")
// Altura imagen 3: scrollY: 1700
let alturaCarta3 = 1700

const aparecerCarta3 = ()=>{
    if(window.scrollY >= alturaCarta3){
        imagen3.classList.add("apareceImagen3")
        texto3.classList.add("apareceTexto3")
    }
}

window.addEventListener("scroll", aparecerCarta3)

    inicio.addEventListener("click",()=>{
    video.play()
    let duracionTotal = document.querySelector("#duracionVideo")
    duracionTotal.textContent=editarDuracion(duracionMultimedia)
    intervalo=setInterval(()=>{
    let duracionActual = document.querySelector("#duracionActual")
    duracionActual.textContent=editarDuracion(video.currentTime)},1000)//el numero despues de la coma es cada cuanto se ejecuta y esta en milisegundos
    })

    pausa.addEventListener("click",()=>{
    video.pause()
    clearInterval(intervalo)
})




const editarDuracion=(duracionMultimedia)=>{
    if(duracionMultimedia<60){
    return `00:${duracionMultimedia.toFixed(0)}`
    }else{
        let minutos = (duracionMultimedia/60).toFixed(0);
        let segundos = (duracionMultimedia%60).toFixed(0);
        // El "%" devuelve el resto entero de una division
        return `${minutos}:${segundos}`
    }
}