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

// funcion boton album de fotos

let btnFotos = document.getElementById('btnFotos')

btnFotos.addEventListener('click', () => {
    console.log('esta funcionando el boton')
    const url = 'https://photos.google.com/u/0/album/AF1QipORhogFb3rpT5Y_KxdmNbZ7Fol7VNFGFVmp9W7F?hl=es'
    window.open(url, '_blank')
})
// funcion para playlist 

let btnPlaylist = document.getElementById('playlist')

btnPlaylist.addEventListener('click',()=>{
    const url = 'https://open.spotify.com/playlist/49wIsdpDqPU8RJFirdMC4L?si=f61f362822b7495b&pt=7ca3a833f9164921eb8369c7bc52fa21'
    window.open(url, '_blank')
})