window.addEventListener("load", function(){
  /*  let carrusel = document.getElementById("carrusel")

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1")
    
    .then(function(response){
        return response.json()
    })

    .then(function(masVistas){
        console.log(masVistas.results)
        masVistas.results.forEach(banner => {
            let articulo = document.createElement("article")
            articulo.innerHTML = `<a href= "detallePelicula.html?id=${banner.id}&title=${banner.title}">
            <div class=" slider uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

            <ul class="list-slider uk-slideshow-items">
                <li>
                     <img class="img-slider" src= "https://image.tmdb.org/t/p/w500${banner.poster_path}" alt='${banner.title}'/>" alt="foto1" uk-cover style="width: 100%;>
                </li>
                
            </ul>
        
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
        
        </div></a> ` 

            //articulo.innerHTML += ` <a href= "detallePelicula.html?id=${pelicula.id}&title=${pelicula.title}"><img src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt='${pelicula.title}'/></a>`
            carrusel.append(articulo)
            
        });
    })

    .catch(function(error){
        console.log(error)
    })


})
*/