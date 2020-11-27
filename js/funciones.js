   //Aquí es donde coloco todas mis funciones que requiero en mi aplicación
   let misPeliculasFavoritas =  JSON.parse( localStorage.getItem('miLista'))
   function sacarDeMiLista(idEliminar){
        let miListaDeFavoritas = []
   
        miListaDeFavoritas = misPeliculasFavoritas.filter(function(destacada){
            return destacada.id != idEliminar
   })

   localStorage.setItem('miLista', JSON.stringify(miListaDeFavoritas))
   location.href = 'favoritos.html'
}