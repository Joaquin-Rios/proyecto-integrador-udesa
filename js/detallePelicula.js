window.addEventListener("load",function(){
    let detalle = document.getElementById("detalle")
    let detallePelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallePelicula)
    let id = detallePeliculaObjeto.get("id")
    let title = detallePeliculaObjeto.get("title")
    detalle.innerHTML += `<h2>${id}</h2>`
    detalle.innerHTML += `<h2>${title}</h2>`
    


    
})