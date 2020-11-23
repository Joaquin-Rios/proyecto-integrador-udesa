window.addEventListener("load",function(){
    let serieDetalle = document.getElementById("serieDetalle")
    let detalleSerie = location.search
    let detalleSerieObjeto = new URLSearchParams(detalleSerie)
    let id = detalleSerieObjeto.get("id")
    let title = detalleSerieObjeto.get("title")
    let generos = detalleSerieObjeto.get("genre_ids")
    let first_air_date = detalleSerieObjeto.get("first_air_date")

    serieDetalle.innerHTML += `<h2>${id}</h2>`
    serieDetalle.innerHTML += `<h2 class="cssDetalle">Title: ${title}</h2>`
    serieDetalle.innerHTML += `<h2 class="cssDetalle">Genero: ${generos}</h2>`
    serieDetalle.innerHTML += `<h2 class="cssDetalle">First Air Date: ${first_air_date}</h2>`




    
})