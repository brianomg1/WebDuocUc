let pagina = 1;
    
    const Anterior = document.getElementById('Anterior')
    const Siguiente = document.getElementById('Siguiente')

    Siguiente.addEventListener('click',() => {
        if (pagina < 1000){
            pagina +=1;
            cargarPeliculas();
        }
    });