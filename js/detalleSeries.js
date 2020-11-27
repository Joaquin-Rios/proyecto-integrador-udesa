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
        
        

        detalleSerie.innerHTML += `<h2><img src=`+foto+`></img></h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle"> ${titulo}</h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle">Calification: ${puntuacion}</h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle">Review: ${overview}</h2>`
        detalleSerie.innerHTML += `<h2 class="cssDetalle"> First Air Date: ${emision}</h2>`
        //detalleSerie.innerHTML += `<h2 class="cssDetalle"> Genres: ${genero}</h2>`
        detalleSerie.innerHTML += '<a href="generos.html?"><h2 class="cssDetalle">Genres:</h2></a>'
        series.genres.forEach (generos => {
            //console.log(generos)
           
            detalleSerie.innerHTML += `<h3 class="cssDetalle"> ${generos.name} </h3>`


        })
        
        
        let botonMiLista = document.querySelector('.botonMiLista')
        let arrayMiListaDeFavoritas
        //console.log(botonMiLista)
            botonMiLista.addEventListener('click', function(e){
              //console.log(e.target.href)
              console.log(series)
                e.preventDefault()
                let miListaDePeliculas = localStorage.getItem('miLista')
                if(miListaDePeliculas == null){
                    arrayMiListaDeFavoritas = []
                    arrayMiListaDeFavoritas.push(series)
                }else{
                    arrayMiListaDeFavoritas = JSON.parse(miListaDePeliculas)
                    let peliculasLista = arrayMiListaDeFavoritas.filter(function(serie){
                        return serie.id == series.id
                    })
                    if( peliculasLista.length == 0){
                        arrayMiListaDeFavoritas.push(series)

                    }
                    
                }
                
                localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))

            })
        

            
        

            
     
        
    })
    .catch(function(error){
        console.log(error);
    })





    
})