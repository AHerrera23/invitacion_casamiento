console.log("its online")
let btnMapa = document.getElementById("mapa")
// funcion de mapa
btnMapa.addEventListener("click",()=>{
    console.log("funciona")
    const urlMapa ="https://maps.app.goo.gl/EVLk4wQqHDyFo6su7"
    window.open(urlMapa, "_blanck")
});