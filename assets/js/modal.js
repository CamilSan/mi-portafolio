document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.card');
    
    // Base de proyectos
    const baseDeDatosProyectos = {
        "1": {
            titulo: "Sistema de Triaje y Gestión Automatizada de Bandeja de Correos",
            herramientas: "Power Automate Cloud | Power Automate Desktop | AI Builder | Microsoft Access | Sistemas Web",
            cuerpo: `
                <p><strong>El Reto:</strong> La gestión manual de una bandeja de entrada compartida generaba cuellos de botella operativos. Se requería un sistema capaz de leer altos volúmenes de correos, interpretar la intención de la solicitud, validar la existencia de documentación adjunta y ejecutar acciones transaccionales en sistemas web de terceros, todo esto sin intervención humana inicial para reducir los tiempos de respuesta.</p>
                <p><strong>La Solución:</strong> Se implementó un flujo de trabajo que monitorea la bandeja de entrada. Utilizando reglas de negocio y procesamiento de texto, el sistema evalúa el cuerpo del correo, el asunto y los adjuntos. Con base en esta validación, el robot toma una de tres rutas automatizadas:</p>
                <ul>
                    <li>Responde de manera automática al remitente solicitando los documentos o archivos faltantes</li>
                    <li>Enruta y reenvía el correo al área especializada correspondiente (notificando vía Teams/Outlook)</li>
                    <li>Activa un flujo de escritorio (RPA) para ingresar al sistema web de la compañía, registrar los datos y dar solución inmediata a la solicitud. Todo el registro y trazabilidad de las operaciones se centraliza en una base de datos de Microsoft Access</li>
                </ul>
                <!-- <img src="assets/img/diagrama-1.jpg" alt="Diagrama del proceso"> -->
            `
        },
        "2": {
            titulo: "Procesamiento por Lotes y Validación API para Seguros",
            herramientas: "Power Automate Cloud | Power Automate Desktop | Web Scraping | APIs REST",
            cuerpo: `
                <p><strong>El Reto:</strong> El procesamiento de pólizas o registros de seguros dependía de la extracción manual periódica de datos desde un portal web. Este proceso exigía estructurar la información, cargarla nuevamente y esperar validaciones del servidor, lo cual resultaba en una tarea repetitiva, propensa a errores de digitación y con un alto consumo de horas-hombre.</p>
                <p><strong>La Solución:</strong> Se diseñó un robot de software desatendido programado para ejecutarse en lotes cada ventana de tiempo establecida (ej. cada 3 horas). El flujo inicia realizando web scraping para extraer los registros pendientes de una tabla en el navegador. Luego, estructura esta información creando un archivo JSON que es inyectado de vuelta al sistema web. El robot está programado para esperar los tiempos de carga de la plataforma, consumir la API para validar que el registro fue procesado exitosamente y, finalmente, consolidar el estado de cada transacción en un reporte que se envía automáticamente por Outlook al responsable de la operación.</p>
            `
        },
        "3": {
            titulo: "Seguimiento de Candidatos y Gestión de Hojas de Vida",
            herramientas: "Power Apps | Power Automate Cloud | Microsoft Dataverse | Outlook",
            cuerpo: `
                <p><strong>El Reto:</strong> El equipo de Recursos Humanos recibía las postulaciones de forma desestructurada a través de notificaciones por correo electrónico generadas por un formulario web. Esta fragmentación dificultaba el seguimiento del estado de los candidatos, la trazabilidad de las entrevistas técnicas y la gestión ágil de los perfiles de interés, generando un reproceso en la comunicación con los postulantes.</p>
                <p><strong>La Solución:</strong> Se desarrolló una solución integral (End-to-End) sobre la Power Platform. Un flujo de Power Automate Cloud intercepta los correos de postulación, parsea la información del candidato y la almacena de manera estructurada en Microsoft Dataverse. Paralelamente, se construyó una interfaz en Power Apps conectada a esta base de datos, donde el equipo de RR.HH. puede visualizar y administrar todos los perfiles. La aplicación permite avanzar candidatos a etapas de llamada técnica, actualizar estados (preseleccionado/descartado), y modificar campos de contacto. Para los perfiles aprobados, la App cuenta con un módulo que envía automáticamente correos basados en plantillas editables solicitando documentación adicional, permitiendo además almacenar perfiles descartados en una base de talento para futuras ofertas.</p>
            `
        },
        "4": {
            titulo: "Control de Asistencia por QR y Prevención de Fraude Operativo",
            herramientas: "Power Apps | Microsoft Dataverse | Power Automate Cloud",
            cuerpo: `
                <p><strong>El Reto:</strong> El personal operativo iniciaba labores en un punto de acopio provisional (cuartelillo) que carecía del control biométrico utilizado por el resto de la compañía. Este vacío de seguridad fue aprovechado por algunos operarios, quienes abandonaban sus rutas antes de tiempo, frecuentemente encubiertos con la complicidad de los conductores. Se requería implementar un mecanismo portátil y auditable para registrar las horas reales de trabajo, evidenciar a los infractores (y sus cómplices) y alertar a los supervisores en tiempo real.</p>
                <p><strong>La Solución:</strong> Se desarrolló una aplicación en Power Apps respaldada por una base de datos en Microsoft Dataverse, diseñada para soportar de manera óptima el volumen de 1.500 registros diarios generados por la operación. La interfaz permite al supervisor escanear el código QR (cédula) de los carnets para marcar las entradas y salidas de los operarios. Como estrategia de auditoría cruzada, se habilitó un módulo de registro exclusivo de salidas para los conductores, lo que permitió rastrear de manera efectiva qué conductores registraban marcaciones falsas o anticipadas para cubrir a los operarios. Adicionalmente, el sistema incluye una lógica de validación horaria que dispara una notificación automática al supervisor si se registra una salida con 15 minutos o más de anticipación a la hora oficial. Para garantizar la eficiencia del almacenamiento, se implementó un flujo de Power Automate que se ejecuta el primer día de cada mes, encargándose de depurar y eliminar automáticamente los registros con más de dos meses de antigüedad.</p>
            `
        },
        "5": {
            titulo: "Gestión y Aprobación de Incidentes de Seguridad Bancaria",
            herramientas: "Power Apps | Power Automate | Adaptive Cards | SharePoint",
            cuerpo: `
                <p><strong>El Reto:</strong> La atención de eventualidades físicas de seguridad (fallas en cámaras, bloqueos de puertas o cerraduras) dependía de un proceso manual de autorización vía correo electrónico entre las áreas de Seguridad Bancaria y Compras. Esto generaba cuellos de botella, demoras en la respuesta, correos extraviados y discrepancias en los costos de los proveedores, ya que cada área manejaba sus propios archivos de control de forma independiente y desactualizada. Además, el proceso de notificar al proveedor y a la sede requería una alta intervención manual, aumentando el margen de error.</p>
                <p><strong>La Solución:</strong> Se desarrolló una aplicación centralizada en Power Apps, utilizando listas de SharePoint como base de datos maestra. La aplicación ejecuta cruces de información internamente para calcular y asignar de forma automática el costo del proveedor según el tipo de incidente y la sede afectada. Una vez registrado el evento por Seguridad Bancaria, la orquestación del proceso la asume Power Automate, enviando una Tarjeta Adaptable (Adaptive Card) vía Microsoft Teams al equipo de Compras. Esta tarjeta consolida los detalles del problema, la ubicación y el costo exacto, permitiendo aprobar o rechazar la solicitud con un solo clic desde el chat. Si se aprueba, el flujo automatiza el envío de correos electrónicos con las instrucciones operativas al proveedor y notifica al encargado de la sede. Si se rechaza, el sistema alerta inmediatamente al analista de Seguridad Bancaria mediante un mensaje en Teams, cerrando el ciclo de comunicación de forma instantánea, centralizada y completamente trazable.</p>
            `
        },
        "6": {
            titulo: "Control de Gastos y Gestión Financiera vía Telegram",
            herramientas: "Telegram Bot API | n8n | Airtable | Gemini AI",
            cuerpo: `
                <p><strong>El Reto:</strong> La gestión manual de las finanzas personales generaba incertidumbre al final de mes respecto al saldo real disponible y los hábitos de consumo. Las aplicaciones móviles comerciales no se adaptaban a la necesidad de un registro ágil en el momento de la compra ni ofrecían el nivel de personalización requerido. Se necesitaba una solución que eliminara la fricción de registrar y categorizar gastos manualmente, ofreciendo al mismo tiempo visibilidad del flujo de caja, reportes consolidados y alertas de desviaciones presupuestales.</p>
                <p><strong>La Solución:</strong> Se desarrolló un agente conversacional en Telegram orquestado mediante flujos de n8n, utilizando Airtable como base de datos relacional y centralizada. El sistema permite al usuario interactuar de manera natural enviando mensajes de texto, notas de voz o fotografías de facturas. El bot procesa estas entradas, extrae automáticamente el monto total de la transacción e infiere la categoría y subcategoría correspondiente. Para garantizar el control financiero continuo, se configuró una automatización periódica que envía un resumen analítico cada sábado, evaluando la ejecución del presupuesto y destacando variaciones importantes respecto a la semana anterior. Adicionalmente, el agente integra un módulo de consultas bajo demanda que extrae la información estructurada desde Airtable para generar reportes detallados por categoría o rango temporal directamente en la interfaz del chat.</p>
            `
        },
        "7": {
            titulo: "Generación de Tarjetas de Cumpleaños con IA",
            herramientas: "Power Automate Cloud | n8n | Gemini AI | APIs REST | Microsoft Teams",
            cuerpo: `
                <p><strong>El Reto:</strong> La celebración de los cumpleaños de los colaboradores requería un seguimiento manual que consumía tiempo del área de Recursos Humanos, carecía de un alto nivel de personalización y era propenso a omisiones u olvidos. Se necesitaba una solución escalable que lograra identificar automáticamente a los cumpleañeros diarios, entregar un mensaje único para fomentar el sentido de pertenencia y, simultáneamente, notificar a los coordinadores sobre la efectividad del proceso sin generar carga operativa adicional.</p>
                <p><strong>La Solución:</strong> Se diseñó una arquitectura de integración utilizando Power Automate Cloud como orquestador inicial y n8n como motor de procesamiento. El flujo inicia de manera programada desde Power Automate, desencadenando un proceso en n8n que consume la API del sistema HRM para extraer la lista de los cumpleañeros del día. Una vez obtenidos los datos, la información se procesa a través de Gemini, el cual redacta y genera una tarjeta de felicitación estructurada y altamente personalizada para cada colaborador, enviándola de forma automática a su correo personal. Al concluir el ciclo, n8n consolida la trazabilidad de la operación y retorna un resumen estructurado con las felicitaciones enviadas (y las posibles fallas) hacia Power Automate, el cual finaliza el flujo entregando este reporte al coordinador de RR.HH. mediante un mensaje automatizado en Microsoft Teams.</p>
            `
        },
        "8": {
            titulo: "Aplicación Integral de Trazabilidad y Gestión Documental de Activos TI",
            herramientas: "Power Apps | Power Automate | SharePoint | Outlook",
            cuerpo: `
                <p><strong>El Reto:</strong> El proceso de entrega y devolución de activos tecnológicos dependía de formularios físicos de doble hoja que exigían recolección manual de firmas y posterior escaneo. Este método ocasionaba un alto consumo de papel, extravío frecuente de documentos y retención de equipos por firmas incompletas. Además, al recaer toda la gestión en una sola persona, se generaba un vacío en la visibilidad del inventario, provocando cuellos de botella, fallas de seguimiento y demoras al no poder conocer el estado o ubicación en tiempo real de los equipos.</p>
                <p><strong>La Solución:</strong> Se desarrolló una aplicación en Power Apps conectada a una base de datos en SharePoint que agiliza los registros al autocompletar la información cruzando el usuario o la cédula. La interfaz permite gestionar las entregas y devoluciones en tiempo real e incorpora la captura de firmas digitales de ambas partes (encargado de TI y colaborador). Una vez registrado el movimiento, la orquestación en el backend es manejada por Power Automate, el cual genera automáticamente un acta en formato PDF y la envía por correo a los involucrados, con la opción de reenviar el archivo bajo demanda en cualquier momento. Toda la trazabilidad y los documentos quedan centralizados en SharePoint, eliminando el uso de papel y asegurando un control exacto de los activos.</p>
            `
        },
        "9": {
            titulo: "Analítica de Datos y Web Scraping para Inversión Inmobiliaria",
            herramientas: "Power Automate Cloud | Power Automate Desktop | Excel | Power BI",
            cuerpo: `
                <p><strong>El Reto:</strong> La búsqueda de un lote para inversión personal presentaba el desafío de monitorear un mercado dinámico y disperso. Hacerlo manualmente impedía rastrear el histórico de precios, detectar descuentos oportunos o comparar ágilmente el costo del metro cuadrado contra el promedio de cada municipio. Se requería un mecanismo que eliminara el seguimiento manual, unificara la oferta del portal Fincaraíz y permitiera identificar la mejor oportunidad de compra basada en datos precisos de ubicación, dimensiones y precio.</p>
                <p><strong>La Solución:</strong> Se diseñó una arquitectura de extracción y análisis de datos de extremo a extremo. El proceso es orquestado por Power Automate Cloud, el cual activa diariamente un flujo en Power Automate Desktop. Este flujo de escritorio se encarga de realizar el web scraping sobre las páginas de lotes del portal inmobiliario y de ejecutar directamente la limpieza de los datos extraídos. Posteriormente, la información estructurada se guarda en un archivo Excel diario dentro de una carpeta alojada en la máquina local, sin requerir sincronización en la nube. Finalmente, Power BI lee y consolida todos los registros de este directorio local, generando columnas calculadas para métricas clave. A través de un tablero interactivo, se visualizan tendencias de mercado, fluctuaciones de precio (aumentos o descuentos) y comparativas del valor del metro cuadrado por municipio, habilitando una toma de decisión completamente basada en datos.</p>
            `
        },
        "10": {
            titulo: "Implementación de Infraestructura Cloud Propia para n8n",
            herramientas: "VPS | Docker / Docker Compose | Linux",
            cuerpo: `
                <p><strong>El Reto:</strong> Depender de plataformas de automatización en la nube (SaaS) generaba limitaciones en la escalabilidad, costos recurrentes por volumen de ejecuciones y restricciones en la privacidad de los datos. Se requería una solución de orquestación propia que permitiera ejecutar flujos de trabajo complejos de manera ilimitada, garantizando el control total sobre la infraestructura, las integraciones y la seguridad de la información corporativa, sin estar atados a cuotas de uso de terceros.</p>
                <p><strong>La Solución:</strong> Se aprovisionó y configuró un Servidor Privado Virtual (VPS) para alojar una instancia propia de n8n (Self-Hosted). El despliegue se realizó mediante contenedores utilizando Docker y Docker Compose para garantizar un entorno aislado, fácilmente reproducible y de mantenimiento ágil. Para asegurar el acceso y las comunicaciones, se implementó un proxy inverso junto con la configuración de certificados SSL. Esta arquitectura eliminó por completo los cuellos de botella asociados a los límites de ejecución, redujo drásticamente los costos operativos a largo plazo y proporcionó un entorno altamente robusto y seguro para orquestar todas las automatizaciones.</p>
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