window.addEventListener('load', function(){
    let miListaDeFavoritas = JSON.parse(localStorage.getItem('miLista'))
    //console.log(miListaDeFavoritos) 
    let peliculas = document.querySelector('.misFavoritas')


    for(let i = 0; i < miListaDeFavoritas.length; i++){
        console.log(miListaDeFavoritas[i].poster_path)
        let articulo = document.createElement('article')
        articulo.classList.add('articulo')
        articulo.innerHTML += `<a href='detallePelicula.html?id=${miListaDeFavoritas[i].id}&titulo=${miListaDeFavoritas[i].title}'><img src= "http://image.tmdb.org/t/p/w500${miListaDeFavoritas[i].poster_path}"></a>
        <div>
            <a  class='btn btn-danger btn-block ' href='javascript:;' onclick= 'sacarDeMiLista(${miListaDeFavoritas[i].id})'  > Sacar de mi lista </a>
        </div>`
        peliculas.append(articulo)


    }

 


})