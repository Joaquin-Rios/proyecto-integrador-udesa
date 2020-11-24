window.addEventListener('load', function(){

    let primeraseccion = document.querySelector('.primeraseccion');

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(populares){
        console.log(populares.results);
        populares.results.forEach(pelicula => {
                let articulo = document.createElement('article')
                articulo.innerHTML += ` <a href= "detallePelicula.html?id=${pelicula.id}&title=${pelicula.title}"><img src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt='${pelicula.title}'/></a>
                <div>
                    <a id="${JSON.stringify(populares.results)}" href="#" class="btn btn-info btn-block botonMiLista">Mis Favoritos</a>
                </div>`
                 primeraseccion.append(articulo)
         
        });
        let botonMiLista = document.querySelector('.botonMiLista');
        let arrayMiListaDeFavoritas;
        console.log(botonMiLista);
        botonMiLista.forEach( pelicula => {
            pelicula.addEventListener('click', function(evento){
                evento.preventDefault()
                let miListaDePeliculas = localStorage.getItem('miLista')
                if(miListaDePeliculas == null){
                    arrayMiListaDeFavoritas = [];
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

   

    let segundaseccion = document.querySelector('.segundaseccion');

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(nuevas){
        console.log(nuevas.results);
        nuevas.results.forEach(pelicula => {
            let articulo2 = document.createElement('article')
            articulo2.innerHTML += `<a href= "detallePelicula.html?id=${pelicula.id}&title=${pelicula.title}"><img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/></a> 
            <div>
                <a id="${JSON.stringify(nuevas.results)}" href="#" class="btn btn-info btn-block botonMiLista">Mis Favoritos</a>
            </div>`
            segundaseccion.append(articulo2)
        })
    })
    .catch(function(error){
        console.log(error);
    })

    let terceraseccion = document.querySelector('.terceraseccion')

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(series){
        console.log(series.results)
        series.results.forEach (series => {
            let articulo3 = document.createElement('article')
            articulo3.innerHTML += `<a href= "detalleSerie.html?id=${series.id}&title=${series.name}"><img src='https://image.tmdb.org/t/p/w500${series.poster_path}' alt='${series.name}'/></a>
            <div>
                <a id="${JSON.stringify(series.results)}" href="#" class="btn btn-info btn-block botonMiLista">Mis Favoritos</a>
            </div> `
            terceraseccion.append(articulo3)
        })

 })






})