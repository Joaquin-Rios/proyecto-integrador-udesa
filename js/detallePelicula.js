window.addEventListener("load",function(){

    let detallePeli = document.getElementById("detalle")
    let miId = location.search
    let idObjeto = new URLSearchParams(miId)
    let id = idObjeto.get('id')
    console.log(id)

    


    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(peliculas){
        console.log(peliculas);
        let title = peliculas.title;
        let overview = peliculas.overview;
        let foto = "http://image.tmdb.org/t/p/w500" + peliculas.poster_path;
        let puntuacion = peliculas.vote_average;

        detallePeli.innerHTML += `<h2><img src=`+foto+`></img></h2>`
        detallePeli.innerHTML += `<h2 class="cssDetalle"> ${title}</h2>`
        detallePeli.innerHTML += `<h2 class="cssDetalle">Calification: ${puntuacion}</h2>`
        detallePeli.innerHTML += `<h2 class="cssDetalle">Review: ${overview}</h2>`
        
    })
    .catch(function(error){
        console.log(error);
    })




/*
    let detalle = document.getElementById("detalle")
    let detallePelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallePelicula)
    let foto = detallePeliculaObjeto.get("poster_path")
    console.log(foto)
    let title = detallePeliculaObjeto.get("title")
    console.log(title)
    let votos = detallePeliculaObjeto.get("votos")
    console.log(votos)
    let review = detallePeliculaObjeto.get("overview")
    console.log(review)
    detalle.innerHTML += `<div><h2 ><img src= "https://image.tmdb.org/t/p/w500${foto}" alt='${foto}></img></h2></div>`
    detalle.innerHTML += `<div><h2 class="cssDetalle">Title: ${title}</h2>`
    detalle.innerHTML += `<h2 class="cssDetalle">Calification: ${votos}</h2>`
    detalle.innerHTML += `<h2 class="cssDetalle">Review: ${review}</h2></div>`
    */


    
})