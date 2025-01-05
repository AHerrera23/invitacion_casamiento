console.log("its online")
let btnMapa = document.getElementById("mapa")
// funcion de mapa
btnMapa.addEventListener("click",()=>{
    console.log("funciona")
    const urlMapa ="https://maps.app.goo.gl/EVLk4wQqHDyFo6su7"
    window.open(urlMapa, "_blanck")
});

// funcion del carrucel
let currentIndex = 0

function moveSlide(direccion){
    const slides = document.querySelectorAll('.carrucel-inner img')
    const totalSlides = slides.length

    currentIndex += direccion

    if(currentIndex <0){
        currentIndex = totalSlides -1
    } else if(currentIndex >= totalSlides){
        currentIndex = 0;
    }

    const offset = -currentIndex * 100
    document.querySelector('.carrucel-inner').style.transform =  `translateX(${offset}%)`
}