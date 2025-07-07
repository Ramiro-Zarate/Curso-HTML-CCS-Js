let video= document.querySelector(".video");
let inicio = document.querySelector(".inicio");
let pausa = document.querySelector(".pausa");
let duracionMultimedia = video.duration
let intervalo

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