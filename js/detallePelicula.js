window.addEventListener("load",function(){
    let detalle = document.getElementById("detalle")
    let detallePelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallePelicula)
    let foto = detallePeliculaObjeto.get("poster_path")
    let title = detallePeliculaObjeto.get("title")
    let votos = detallePeliculaObjeto.get("votos")
    let review = detallePeliculaObjeto.get("overview")
    detalle.innerHTML += `<div><h2 ><img src= "https://image.tmdb.org/t/p/w500${foto}" alt='${foto}></img></h2></div>`
    detalle.innerHTML += `<div><h2 class="cssDetalle">Title: ${title}</h2>`
    detalle.innerHTML += `<h2 class="cssDetalle">Calification: ${votos}</h2>`
    detalle.innerHTML += `<h2 class="cssDetalle">Review: ${review}</h2></div>`
    


    
})