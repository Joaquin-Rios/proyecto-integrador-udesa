window.addEventListener("load",function(){

    let detalleSerie = document.getElementById("serieDetalle")
    let miId = location.search
    let idObjeto = new URLSearchParams(miId)
    let id = idObjeto.get('id')
    console.log(id)

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(series){
        console.log(series)
        let titulo = series.name
        let overview = series.overview
        let foto = "http://image.tmdb.org/t/p/w500" + series.poster_path
        let puntuacion = series.vote_average
        let emision = series.first_air_date
        let genero = series.genres.name

        detalleSerie.innerHTML += `<h2><img src=`+foto+`></img></h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle"> ${titulo}</h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle">Calification: ${puntuacion}</h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle">Review: ${overview}</h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle"> First Air Date: ${emision}</h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle"> Genres: ${genero}</h2>`
        detalleSerie.innerHTML += `<article>
        <a id="${JSON.stringify(series)}" href="#" class="btn btn-info btn-block botonMiLista">Mis Favoritos</a>

    </article>`
        
        let botonMiLista = document.querySelectorAll('.botonMiLista')
        let arrayMiListaDeFavoritas
        //console.log(botonMiLista)
        botonMiLista.forEach(pelicula => {
            pelicula.addEventListener('click', function(e){
              //console.log(e.target.href)
                e.preventDefault()
                let miListaDePeliculas = localStorage.getItem('miLista')
                if(miListaDePeliculas == null){
                    arrayMiListaDeFavoritas = []
                }else{
                    arrayMiListaDeFavoritas = JSON.parse(miListaDePeliculas)
                }
                arrayMiListaDeFavoritas.push(JSON.parse(this.id))
                localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))

            })
        

            
     
        })
    })
    .catch(function(error){
        console.log(error);
    })




    /*
    let serieDetalle = document.getElementById("serieDetalle")
    let detalleSerie = location.search
    let detalleSerieObjeto = new URLSearchParams(detalleSerie)
    let id = detalleSerieObjeto.get("id")
    let title = detalleSerieObjeto.get("title")
    let generos = detalleSerieObjeto.get("genre_ids")
    let first_air_date = detalleSerieObjeto.get("first_air_date")

    serieDetalle.innerHTML += `<h2>${id}</h2>`
    serieDetalle.innerHTML += `<h2 class="cssDetalle">Title: ${title}</h2>`
    serieDetalle.innerHTML += `<h2 class="cssDetalle">Genero: ${generos}</h2>`
    serieDetalle.innerHTML += `<h2 class="cssDetalle">First Air Date: ${first_air_date}</h2>`



*/
    
})