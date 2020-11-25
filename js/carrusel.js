window.addEventListener("load", function(){
    let carrusel = document.getElementById("carrusel")

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1")
    
    .then(function(response){
        return response.json()
    })

    .then(function(masVistas){
        console.log(masVistas.results)
        masVistas.results.forEach(banner => {
            let articulo = document.querySelector(".list-slider")
            articulo.innerHTML += `<li>
                                        <a href= "detallePelicula.html?id=${banner.id}&title=${banner.title}">
                                            <img class="img-slider uk-cover" src= "https://image.tmdb.org/t/p/w500${banner.poster_path}" alt='${banner.title}'/>" 
                                        </a>
                                  </li>` 

            //articulo.innerHTML += ` <a href= "detallePelicula.html?id=${pelicula.id}&title=${pelicula.title}"><img src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt='${pelicula.title}'/></a>`
            
        });
    })

    .catch(function(error){
        console.log(error)
    })


})
