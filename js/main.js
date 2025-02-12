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
    const url = 'https://drive.google.com/drive/folders/14NhXtZLPZ5Toe47hVXQImE6gUKRpuV-I'
    window.open(url, '_blank')
})
// funcion para playlist 

let btnPlaylist = document.getElementById('playlist')

btnPlaylist.addEventListener('click',()=>{
    const url = 'https://open.spotify.com/playlist/5QUT1682cnxzLelpJ46wuf?si=S6TNexnyQ7WisqA3PfRbyw&pt=bf233f77e339b90037d41a83965a92cb&pi=iG2Yii3AR0qpF'
    window.open(url, '_blank')
})

// funcion pop up de cbu
let popup = document.getElementById('popup')
let btnAbrir = document.getElementById('cbu')
let btnCerrar = document.getElementById('btnCopiar')
const valorCbu = document.getElementById('valorCbu').innerText

btnAbrir.addEventListener("click",()=>{
    console.log('btn cbu funcionndo')  
    popup.classList.remove('esconder')
    popup.classList.add('mostrar')
    abierto = true
})

btnCerrar.addEventListener("click",()=>{
    console.log('btn cerrar funciona') 
    navigator.clipboard.writeText(valorCbu)
    alert('Copiaste el alias con exito 🎁❤')
    popup.classList.remove('mostrar')
    popup.classList.add('esconder')
    setTimeout(() => {
        popup.classList.add('esconder')
    }, 500)
})

document.addEventListener('click', (event) => {
    if (!popup.contains(event.target) && !btnAbrir.contains(event.target)) {
        popup.classList.remove('mostrar');
        popup.classList.add('esconder');
        setTimeout(() => {
          popup.classList.add('esconder');
        }, 500);
    }
  });

//   funciones del formulario

let btnForm = document.getElementById('btnForm')

btnForm.addEventListener('click', () => {
    const name = document.getElementById('name').value
    const chek1 = document.getElementById('opcion1')
    const chek2 = document.getElementById('opcion2')
    let mensaje = ''
    if(chek1.checked){
        mensaje= `Hola Anto y Martin!${chek1.value}`
        console.log(mensaje)
    }
    else if(chek2.checked){
        mensaje=`Hola Anto y Martin!${chek2.value}¡que sea una linda noche!`
        console.log(mensaje)
    }
    const telefono = 5492215560389;
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    // generacion dinamica del mensaje
    window.open(url, '_blank');
    
})


// Función de contador
function actualizarContador() {
    const fechaFinal = new Date('2025-02-15T20:00:00Z')
    const now = new Date()
    const tiempoRestante = fechaFinal - now

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000)

    const diasQueFaltan = document.getElementById('dia')
    const horasQueFaltan = document.getElementById('horas')
    const minutosQueFaltan = document.getElementById('minutos')
    const segundosQueFaltan = document.getElementById('segundos')
    const faltan = document.getElementById('falta')

    const contador = document.getElementById('contador');
    const llego = document.getElementById('llego')  

    // Actualiza los elementos HTML
    diasQueFaltan.innerHTML = dias
    horasQueFaltan.innerHTML = horas
    minutosQueFaltan.innerHTML = minutos
    segundosQueFaltan.innerHTML = segundos

    // console.log('faltan ' + dias + ' días' + ', ' + horas + ' horas' + ' y ' + minutos + ' minutos')
    if(dias==0){
        contador.style.display = 'none'
        faltan.style.display = 'none'
        llego.style.display = 'flex'
    }else{
        contador.style.display = 'flex'
        faltan.style.display = 'flex'
        llego.style.display = 'none'
    }
}
// Llamar a la función de contador inmediatamente
actualizarContador()

// Configurar el intervalo para actualizar el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);

