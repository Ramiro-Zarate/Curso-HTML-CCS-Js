let barraNavegacion=document.querySelector(".barraNavegacion")
let mostrar=()=>{
    if(window.scrollY > innerHeight*0.5){
        barraNavegacion.classList.add("navScroll")
    }else{
        barraNavegacion.classList.remove("navScroll")
    }
}
window.addEventListener("scroll",mostrar)

let imagen1 = document.querySelector("#img1")
let imagen2 = document.querySelector("#img2")
let imagen3 = document.querySelector("#img3")
let contenedor1 = document.querySelector("#contImg1")
let contenedor2 = document.querySelector("#contImg2")
let contenedor3 = document.querySelector("#contImg3")


imagen1.addEventListener("dragstart", (event)=>{
        let contenidoImagen1 = event.target.src
    event.dataTransfer.setData("text", contenidoImagen1)
})
imagen1.addEventListener("dragend", (event)=>{
    let endImagen1 = event.target
    endImagen1.style.visibility="hidden"
})

imagen2.addEventListener("dragstart", (event)=>{
    let contenidoImagen2 = event.target.src
    event.dataTransfer.setData("text", contenidoImagen2)
})
imagen2.addEventListener("dragend", (event)=>{
    let endImagen2 = event.target
    endImagen2.style.visibility="hidden"
})

imagen3.addEventListener("dragstart", (event)=>{
    let contenidoImagen3 = event.target.src
    event.dataTransfer.setData("text", contenidoImagen3)
})
imagen3.addEventListener("dragend", (event)=>{
    let endImagen3 = event.target
    endImagen3.style.visibility="hidden"
})




contenedor1.addEventListener("dragover",(event)=>{
    event.preventDefault()
})
contenedor2.addEventListener("dragover",(event)=>{
    event.preventDefault()
})
contenedor3.addEventListener("dragover",(event)=>{
    event.preventDefault()
})

contenedor1.addEventListener("drop", (event)=>{
    let contenidoRecibido1 = event.dataTransfer.getData("text")
    contenedor1.innerHTML=`<img id="img1" src="${contenidoRecibido1}"/>`
    if (contenidoRecibido1.includes("Rompe1")){ //no hace falta splitear
        console.log("gol")
    }
})
contenedor2.addEventListener("drop", (event)=>{
    let contenidoRecibido2 = event.dataTransfer.getData("text")
    contenedor2.innerHTML=`<img id="img2" src="${contenidoRecibido2}"/>`
    if (contenidoRecibido2.includes("rompe2")){
        console.log("gol")
    }
})
contenedor3.addEventListener("drop", (event)=>{
    let contenidoRecibido3 = event.dataTransfer.getData("text")
    contenedor3.innerHTML=`<img id="img3" src="${contenidoRecibido3}"/>`
    if (contenidoRecibido3.includes("Rompe3")){
        console.log("gol")
    }
})

