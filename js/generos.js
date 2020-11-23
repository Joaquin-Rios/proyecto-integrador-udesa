window.addEventListener("load", function(){
    let generos = document.getElementById("Generos")

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0a8b86b3e83bce39eb930e4eb58ff23a&language=en-US")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(listaG){
        console.log(listaG);
        for(let i = 0; i <= listaG.length; i++){
            console.log(listaG[i]);
            let articulo = document.createElement("article")
            articulo.innerHTML += `<a><ul><li>hola</li></ul></a>`
            generos.append(articulo)
        }
        
    })
    .catch(function(error){
        console.log("error");
    })




    
})

/*
listaG.forEach(pelicula => {
                let articulo = document.createElement('article')
                articulo.innerHTML += `<a>${listaG.genres}</a>`
                 generos.append(articulo)

                
         
        });
*/
