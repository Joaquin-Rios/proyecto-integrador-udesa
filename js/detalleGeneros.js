window.addEventListener('load', function(){
    //CAPTURAMOS LA VARIABLE CON DOCUMENT A LA CLASE GENERODETALLE
    let detalleGenero = document.getElementById("generoDetalle");
    //SIRVE PARA ACCEDER A LOS DATOS USANDO LA PROPIEDAD SEARCH DEL OBJETO LOCATION
    let miId = location.search
    //PERMITE MANEJAR LA INFORMACION DE UNA FORMA MAS COMODA EN JAVA SCRIPT
    let idObjeto = new URLSearchParams(miId)
    
    let id = idObjeto.get('id')
    
    console.log(id)

    let name = idObjeto.get('name')
    let tituloGenero = document.getElementById("tituloGenero")
    console.log(name)




    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&with_genres=${id}`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(generos){
       // console.log(generos.results);
        generos.results.forEach(pelicula => {
                tituloGenero.innerHTML = `${name}`
                let articulo = document.createElement('article')
                articulo.innerHTML += ` <a href= "detallePelicula.html?id=${pelicula.id}&title=${pelicula.title}"><img src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt='${pelicula.title}'/></a>`
                detalleGenero.append(articulo)
         
        });
        
    })
    .catch(function(error){
        console.log(error);
    })




})