document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.card');
    
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

    // Elementos del Modal
    const modal = document.getElementById('modal-proyecto');
    const botonCerrar = document.getElementById('cerrar-modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalHerramientas = document.getElementById('modal-herramientas');
    const modalCuerpo = document.getElementById('modal-cuerpo');

    // Abrir modal
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