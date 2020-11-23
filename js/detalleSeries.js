window.addEventListener("load",function(){
    let detalle = document.getElementById("detalle")
    let detalleSerie = location.search
    let detalleSerieObjeto = new URLSearchParams(detalleSerie)
    let id = detalleSerieObjeto.get("id")
    let title = detalleSerieObjeto.get("title")
    detalle.innerHTML += `<h2>${id}</h2>`
    detalle.innerHTML += `<h2>${title}</h2>`
    console.log(id)


    
})