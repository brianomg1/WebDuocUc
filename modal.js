// Obtener los botones para abrir los modales
var modalBtns = document.querySelectorAll(".openModalBtn");

// Recorrer los botones y asignarles el evento clic para abrir los modales
modalBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Obtener el ID del modal correspondiente al botón
        var modalId = this.dataset.modalId;
        var modal = document.getElementById(modalId);

        // Mostrar el modal
        modal.style.display = "block";
    });
});

// Obtener los elementos <span> que cierran los modales
var closeBtns = document.querySelectorAll(".close");

// Recorrer los elementos <span> y asignarles el evento clic para cerrar los modales
closeBtns.forEach(function(span) {
    span.addEventListener("click", function() {
        // Obtener el modal padre del elemento <span>
        var modal = this.parentElement.parentElement;
        
        // Cerrar el modal
        modal.style.display = "none";
    });
});

// Obtener los botones "Ir al mapa"
var goToMapBtns = document.querySelectorAll(".goToMapBtn");

// Recorrer los botones y asignarles el evento clic para redirigir a las direcciones de mapa
goToMapBtns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del botón
        event.preventDefault();

        // Obtener la URL del mapa correspondiente al botón
        var mapUrl = this.dataset.mapUrl;

        // Redirigir a la URL del mapa
        window.location.href = mapUrl;
    });
});

// Cuando el usuario haga clic fuera del modal, cierra el modal
window.onclick = function(event) {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
