window.addEventListener('load', function(){

    let primeraseccion = document.querySelector('.primeraseccion');

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(populares){
        console.log(populares.results);
        populares.results.forEach(pelicula => {
                let articulo = document.createElement('article')
                articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> `
                primeraseccion.append(articulo)

                articulo.style.height = '50 px';

                articulo.style.display = 'flex';
               // articulo.style.gridTemplateRows = '1fr 1fr ';
         
        });
    })
    .catch(function(error){
        console.log(error);
    })

   

    let segundaseccion = document.querySelector('.segundaseccion');

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(nuevas){
        console.log(nuevas.results);
        nuevas.results.forEach(pelicula => {
            let articulo2 = document.createElement('article')
            articulo2.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> `
            segundaseccion.append(articulo2)
        })
    })
    .catch(function(error){
        console.log(error);
    })

    let terceraseccion = document.querySelector('.terceraseccion')

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(series){
        console.log(series.results)
        series.results.forEach (series => {
            let articulo3 = document.createElement('article')
            articulo3.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${series.poster_path}' alt='${series.title}'/> `
            terceraseccion.append(articulo3)
        })

 })






})