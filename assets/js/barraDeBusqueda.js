document.addEventListener('DOMContentLoaded', () => {
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
});