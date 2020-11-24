window.addEventListener("load", function(){
    let generos = document.getElementById("Generos")

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0a8b86b3e83bce39eb930e4eb58ff23a&language=en-US")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(listaG){
        console.log(listaG.genres);
        for(let i = 0; i <= listaG.genres.length; i++){
            console.log(listaG.genres[i].name);
            let articulo = document.createElement("article")
            articulo.innerHTML += `<a href="detalleGeneros.html?id=${listaG.genres[i].id}"><ul><li>${listaG.genres[i].name}</li></ul></a>`
            
            generos.append(articulo)
        }
        
    })
    .catch(function(error){
        console.log(error);
    })




    
})

/*
listaG.forEach(pelicula => {
                let articulo = document.createElement('article')
                articulo.innerHTML += `<a>${listaG.genres}</a>`
                 generos.append(articulo)

                
         
        });
*/
