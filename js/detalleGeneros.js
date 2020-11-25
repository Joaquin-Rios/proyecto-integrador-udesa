window.addEventListener('load', function(){

    let detalleGenero = document.getElementById("generoDetalle");
    let miId = location.search
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
        console.log(generos.results);
        generos.results.forEach(pelicula => {
                tituloGenero.innerHTML = `${name}`
                let articulo = document.createElement('article')
                articulo.innerHTML += ` <a href= "detallePelicula.html?id=${pelicula.id}&title=${pelicula.title}"><img src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt='${pelicula.title}'/></a>
                <div>
                    <a id="${JSON.stringify(generos.results)}" href="#" class="btn btn-info btn-block botonMiLista">Mis Favoritos</a>
                </div>`
                detalleGenero.append(articulo)
         
        });
     /*   let botonMiLista = document.querySelector('.botonMiLista');
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

            })*/


        




    })
    .catch(function(error){
        console.log(error);
    })




})