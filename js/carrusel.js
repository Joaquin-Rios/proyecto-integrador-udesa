window.addEventListener("load", function(){ //CREA UN EVENTO LOAD EN ESTE CASO QUE GENERA QUE SE CARGUE PRIMERO LA PAGINA Y LUEGO LOS DATOS QUE ESTAN EN ELLA
 
     //Llamada asincronica a la API
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1")
    // TRAE LA INFORMACION EN FORMATO JSON PARA TRABAJAR MERJOR EN JAVASCRIPT
    .then(function(response){
        return response.json()
    })
    //CREA UNA NUEVA FUNCION
    .then(function(masVistas){
        console.log(masVistas.results)
        //LOGRA CAPTURAR LA INFORMACION QUE SE ENCUENTRA DENTRO DE LOS ARRAYS
        masVistas.results.forEach(banner => {
            //CAPTURAMOS LA VARIABLE ARTICULO CON .LIST-SLIDER
            let articulo = document.querySelector(".list-slider")
            articulo.innerHTML += `<li>
                                        <a href= "detallePelicula.html?id=${banner.id}&title=${banner.title}">
                                            <img class="img-slider uk-cover" src= "https://image.tmdb.org/t/p/w500${banner.poster_path}" alt='${banner.title}'/>" 
                                        </a>
                                  </li>` 

            //articulo.innerHTML += ` <a href= "detallePelicula.html?id=${pelicula.id}&title=${pelicula.title}"><img src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt='${pelicula.title}'/></a>`
            
        });
    })
    //CAPTA LOS ERRORES QUE PODRIAN ESTAR DENTRO DEL THEN
    .catch(function(error){
        console.log(error)
    })


})
