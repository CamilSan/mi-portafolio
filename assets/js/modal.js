document.addEventListener('DOMContentLoaded', async () => {
    const tarjetas = document.querySelectorAll('.card');
    const modal = document.getElementById('modal-proyecto');
    const botonCerrar = document.getElementById('cerrar-modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalHerramientas = document.getElementById('modal-herramientas');
    const modalCuerpo = document.getElementById('modal-cuerpo');

    let baseDeDatosProyectos = {};

    // Cargar archivo json
    try {
        const respuesta = await fetch('assets/js/baseDeProyectos.json');
        if (!respuesta.ok) throw new Error('Error de red al cargar el JSON');
        baseDeDatosProyectos = await respuesta.json();
    } catch (error) {
        console.error("Error al cargar la base de datos:", error);
        return; 
    }

    // Logica del modal
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const proyectoId = tarjeta.getAttribute('data-id');
            const infoProyecto = baseDeDatosProyectos[proyectoId];

            if (infoProyecto) {
                modalTitulo.innerText = infoProyecto.titulo;
                modalHerramientas.innerText = infoProyecto.herramientas;
                modalCuerpo.innerHTML = infoProyecto.cuerpo;
                modal.style.display = 'flex';
            }
        });
    });

    // Cerrar modal al hacer clic en la X
    if (botonCerrar) {
        botonCerrar.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});