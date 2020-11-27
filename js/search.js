window.addEventListener('load', function(){


    

    let quieroBuscar = location.search
    let quieroBuscarPeli =  new URLSearchParams (quieroBuscar)

    //let buscador = document.querySelector('.buscador')
    let loBuscado = quieroBuscarPeli.get('id')

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=0a8b86b3e83bce39eb930e4eb58ff23a&language=en-US&query=${loBuscado}&page=1&include_adult=false`)

    .then(function(response){
        return response.json()
    })
    .then(function(info){
        console.log(info)
        let listaDePeliculas = info.results;
        let lista = document.querySelector('.listaPeliculas')

        info.results.forEach(resultados => {
            console.log(resultados.media_type)

            if (resultados.media_type == "movie"){
                lista.innerHTML += `<a href ='detallePelicula.html?id=${resultados.id}'>
                    <div class="resultadoBuscador">
                        <h2 class="cadaTitulo>${resultados.title}</h2>
                        <img src="https://image.tmdb.org/t/p/w500${resultados.poster_path}" alt="${resultados.title}"/>
                     </div> </a>`

            }else if (resultados.media_type == "tv"){
                lista.innerHTML += `<a href ='detalleSerie.html?id=${resultados.id}'>
                    <div class="resultadoBuscador">
                        <h2 class="cadaTitulo>${resultados.name}</h2>
                        <img src="https://image.tmdb.org/t/p/w500${resultados.poster_path}" alt="${resultados.name}"/>
                     </div> </a>`


            }
            
            
            
        });
    })
    .catch(function(error){
        console.log(error)
    })


    let elBoton = document.querySelector('.elBoton')

    elBoton.addEventListener("change", function(evento){
        let lista = document.querySelector('.listaDePeliculas')
        lista.push(evento)


        if (elBoton.value === "peliculas"){
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=0a8b86b3e83bce39eb930e4eb58ff23a&language=en-US&query=${loBuscado}&page=1&include_adult=false`)

            .then(function(response){
                return response.json()
            })
            .then(function(informacion){
                console.log(informaacion)
                let listaDePeliculas = info.results

                info.results.forEach(resultados => {
                    console.log(resultados.media_type)

                    if(resultados.media_type == "movie"){
                        lista.innerHTML += `<a href ='detallePelicula.html?id=${resultados.id}'>
                    <div class="resultadoBuscador">
                        <h2 class="cadaTitulo>${resultados.title}</h2>
                        <img src="https://image.tmdb.org/t/p/w500${resultados.poster_path}" alt="${resultados.title}"/>
                     </div> </a>`

                    }
                })
                
                

            })
            .catch(function(error){
                console.log(error)
            })

        }else if (elBoton.value === "series"){
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=0a8b86b3e83bce39eb930e4eb58ff23a&language=en-US&query=${loBuscado}&page=1&include_adult=false`)
            .then(function(response){
                return response.json()
            })
            .then(function(informacion){
                console.log(informaacion)
                let listaDePeliculas = info.results

                info.results.forEach(resultados => {
                    console.log(resultados.media_type)

                    if(resultados.media_type == "movie"){
                        lista.innerHTML += `<a href ='detalleSerie.html?id=${resultados.id}'>
                    <div class="resultadoBuscador">
                        <h2 class="cadaTitulo>${resultados.name}</h2>
                        <img src="https://image.tmdb.org/t/p/w500${resultados.poster_path}" alt="${resultados.name}"/>
                     </div> </a>`

                    }
                })
                
                

            })
            .catch(function(error){
                console.log(error)
            })

        }else{
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=0a8b86b3e83bce39eb930e4eb58ff23a&language=en-US&query=${loBuscado}&page=1&include_adult=false`)

            .then(function(response){
                return response.json()
            })
            .then(function(info){
                console.log(info)
                let listaDePeliculas = info.results
                let lista = document.querySelector('.listaPeliculas')

                info.results.forEach(resultados =>{
                    console.log(resultados.media_type)

                    if(resultados.media_type == "movies"){
                        lista.innerHTML += `<a href ='detallePelicula.html?id=${resultados.id}'>
                        <div class="resultadoBuscador">
                        <h2 class="cadaTitulo>${resultados.title}</h2>
                        <img src="https://image.tmdb.org/t/p/w500${resultados.poster_path}" alt="${resultados.title}"/>
                     </div> </a>`

                    }else if (resultados.media_type == "tv"){
                        lista.innerHTML += `<a href ='detalleSerie.html?id=${resultados.id}'>
                        <div class="resultadoBuscador">
                        <h2 class="cadaTitulo>${resultados.name}</h2>
                        <img src="https://image.tmdb.org/t/p/w500${resultados.poster_path}" alt="${resultados.name}"/>
                     </div> </a>`
                    }

                    

                })
            })
            .catch(function(error){
                console.log(error)
            })
        }
    })
})