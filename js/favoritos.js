window.addEventListener('load', function(){
    let miListaDeFavoritas = JSON.parse(localStorage.getItem('miLista'))
    //console.log(miListaDeFavoritos) 
    let peliculas = document.querySelector('.misFavoritas')
    if(miListaDeFavoritas == null){
        miListaDeFavoritas = []
    }

    for(let i = 0; i < miListaDeFavoritas.length; i++){
        console.log(miListaDeFavoritas[i].poster_path)
        let articulo = document.createElement('article')
        articulo.classList.add('articulo')
        articulo.innerHTML += `<a href='detallePelicula.html?`


    }

})