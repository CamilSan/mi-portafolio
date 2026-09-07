document.addEventListener('DOMContentLoaded', () => {
    
    // Barra de busqueda
    const buscador = document.getElementById('buscador');
    const tarjetas = document.querySelectorAll('.card');

    if (buscador) {
        buscador.addEventListener('keyup', (e) => {
            const termino = e.target.value.toLowerCase();
            tarjetas.forEach(tarjeta => {
                const textoTarjeta = tarjeta.innerText.toLowerCase();
                if (textoTarjeta.includes(termino)) {
                    tarjeta.style.display = 'flex'; 
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    }

    // Base de proyectos
    const baseDeDatosProyectos = {
        "1": {
            titulo: "Proyecto #1",
            herramientas: "Power Automate | PowerShell | API REST",
            cuerpo: `
                <p><strong>El Reto:</strong> Existía un cuello de botella en ...</p>
                <p><strong>La Solución:</strong> Se diseñó un flujo orquestado que interactúa con ...</p>
                <ul>
                    <li>Extracción de datos ...</li>
                    <li>Orquestación en ...</li>
                </ul>
                <!-- Ejemplo de cómo insertar una imagen real de tu diagrama -->
                <img src="assets/img/diagrama-1.jpg" alt="Diagrama del proceso">
            `
        },
        "2": {
            titulo: "Proyecto #2",
            herramientas: "n8n | Docker Compose | VPS",
            cuerpo: `
                <p><strong>El Reto:</strong> Configuración integral ...</p>
                <p><strong>La Solución:</strong> Implicó levantar un servidor ...</p>
            `
        }
    };

    // Modal
    const modal = document.getElementById('modal-proyecto');
    const botonCerrar = document.getElementById('cerrar-modal');
    
    // Elementos dentro del modal
    const modalTitulo = document.getElementById('modal-titulo');
    const modalHerramientas = document.getElementById('modal-herramientas');
    const modalCuerpo = document.getElementById('modal-cuerpo');

    // Abrir modal al hacer clic en la tarjeta
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            // Obtener el id del proyecto desde el data-id de la tarjeta
            const proyectoId = tarjeta.getAttribute('data-id');
            const infoProyecto = baseDeDatosProyectos[proyectoId];

            if (infoProyecto) {
                // Agregar la información en el cuerpo del modal
                modalTitulo.innerText = infoProyecto.titulo;
                modalHerramientas.innerText = infoProyecto.herramientas;
                modalCuerpo.innerHTML = infoProyecto.cuerpo; // Se renderizan las etiquetas con innerHTML
                // Mostrar el modal
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

    // Cerrar modal si el usuario hace clic fuera de la caja
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});