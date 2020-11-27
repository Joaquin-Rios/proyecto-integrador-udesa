window.addEventListener("load",function(){

    let detallePeli = document.getElementById("detalle")
    let miId = location.search
    let idObjeto = new URLSearchParams(miId)
    let id = idObjeto.get('id')
    
    if(id!= null){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US`)
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(peliculas){
            console.log(peliculas)
            let title = peliculas.title
            let overview = peliculas.overview
            let foto = "http://image.tmdb.org/t/p/w500" + peliculas.poster_path
            let puntuacion = peliculas.vote_average
    
            detallePeli.innerHTML += `<h2><img src=`+foto+`></img></h2>`
            detallePeli.innerHTML += `<h2 class="cssDetalle"> ${title}</h2>`
            detallePeli.innerHTML += `<h2 class="cssDetalle">Calification: ${puntuacion}</h2>`
            detallePeli.innerHTML += `<h2 class="cssDetalle">Review: ${overview}</h2>`
            
            
    
    
    
            let botonMiLista = document.querySelector('.botonMiLista')
            let arrayMiListaDeFavoritas
            //console.log(botonMiLista)
                botonMiLista.addEventListener('click', function(e){
                  //console.log(e.target.href)
                  console.log(peliculas)
                    e.preventDefault()
                    let miListaDePeliculas = localStorage.getItem('miLista')
                    if(miListaDePeliculas == null){
                        arrayMiListaDeFavoritas = []
                        arrayMiListaDeFavoritas.push(peliculas)
                    }else{
                        arrayMiListaDeFavoritas = JSON.parse(miListaDePeliculas)
                        let peliculasLista = arrayMiListaDeFavoritas.filter(function(pelicula){
                            return pelicula.id == peliculas.id
                        })
                        if( peliculasLista.length == 0){
                            arrayMiListaDeFavoritas.push(peliculas)

                        }
                        
                
                    }
                    
                    localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))
                    
    
                })
            
    
                
         
            
            
        })
    
        .catch(function(error){
            console.log(error);
        })
    
    }
    //console.log(id)

    
})