export const conceptos = [
    {
        id: 1,
        titulo: "CPU (Unidad Central de Procesamiento)",
        descripcion: "Es el cerebro de la computadora que procesa todas las instrucciones.",
        categoria: "hardware",
        nivel: "básico",
        analogia: {
            titulo: "El Chef de un Restaurante",
            descripcion: "La CPU es como el chef en una cocina. Recibe las órdenes (instrucciones), organiza los ingredientes (datos), sigue recetas (programas) y prepara los platos (resultados).",
            detalles: [
                "Recibe pedidos de los meseros (dispositivos de entrada)",
                "Organiza y procesa ingredientes (datos) según la receta (programa)",
                "Coordina con los ayudantes (otros componentes) para preparar el plato",
                "Entrega el plato terminado (resultado) para ser servido"
            ]
        },
        detallesTecnicos: "La CPU ejecuta instrucciones de programas realizando operaciones aritméticas, lógicas, de control y de entrada/salida.",
        ejemplos: ["Intel Core i7", "AMD Ryzen 5", "Apple M1"]
    },
    {
        id: 2,
        titulo: "Memoria RAM",
        descripcion: "Memoria de acceso aleatorio que almacena datos temporalmente para su rápido acceso.",
        categoria: "hardware",
        nivel: "básico",
        analogia: {
            titulo: "Mesa de Trabajo",
            descripcion: "La RAM es como la mesa de trabajo de un artesano. Cuanto más grande sea la mesa, más herramientas y materiales podrá tener a mano para trabajar rápidamente.",
            detalles: [
                "Espacio temporal para trabajar (datos activos)",
                "Más espacio = más proyectos simultáneos (multitarea)",
                "Se limpia al terminar (datos se pierden al apagar)",
                "Acceso rápido a lo que está en la mesa"
            ]
        },
        detallesTecnicos: "Memoria volátil de alta velocidad que almacena datos e instrucciones que la CPU necesita en tiempo real.",
        ejemplos: ["DDR4 8GB", "DDR5 16GB", "DDR3 4GB"]
    },
    {
        id: 3,
        titulo: "Disco Duro (Almacenamiento)",
        descripcion: "Dispositivo de almacenamiento permanente de datos.",
        categoria: "hardware",
        nivel: "básico",
        analogia: {
            titulo: "Archivero de Oficina",
            descripcion: "El disco duro es como un archivero donde guardas todos tus documentos de forma permanente. Puedes almacenar mucha información, pero lleva más tiempo encontrar y recuperar algo específico.",
            detalles: [
                "Almacena todo permanentemente (sistema operativo, programas, archivos)",
                "Organizado en carpetas y archivos",
                "Gran capacidad pero acceso más lento",
                "Conserva la información sin electricidad"
            ]
        },
        detallesTecnicos: "Dispositivo de almacenamiento no volátil que guarda datos digitales usando grabación magnética.",
        ejemplos: ["HDD 1TB", "SSD 512GB", "NVMe 1TB"]
    },
    {
        id: 4,
        titulo: "Sistema Operativo",
        descripcion: "Software que gestiona los recursos del hardware y provee servicios a los programas.",
        categoria: "software",
        nivel: "intermedio",
        analogia: {
            titulo: "Gerente de una Oficina",
            descripcion: "El sistema operativo es como el gerente de una oficina. Coordina a todos los empleados (hardware), asigna recursos (memoria, CPU), gestiona tareas y permite que los clientes (usuarios) interactúen con la empresa.",
            detalles: [
                "Gestiona recursos (asigna espacio, tiempo de CPU)",
                "Coordina hardware y software",
                "Proporciona interfaz para usuarios",
                "Mantiene seguridad y permisos"
            ]
        },
        detallesTecnicos: "Conjunto de programas que controlan los recursos del computador y proporcionan una interfaz entre el usuario y la máquina.",
        ejemplos: ["Windows", "macOS", "Linux"]
    },
    {
        id: 5,
        titulo: "Redes y Protocolos",
        descripcion: "Sistemas que permiten la comunicación entre dispositivos.",
        categoria: "redes",
        nivel: "intermedio",
        analogia: {
            titulo: "Sistema Postal",
            descripcion: "Las redes de computadoras son como el sistema postal. Los datos son cartas que necesitan direcciones (IP), rutas de entrega (routers) y reglas de envío (protocolos) para llegar correctamente a su destino.",
            detalles: [
                "Direcciones únicas para cada dispositivo (direcciones IP)",
                "Rutas de entrega (routers y switches)",
                "Reglas de envío (protocolos como TCP/IP)",
                "Paquetes divididos y reensamblados"
            ]
        },
        detallesTecnicos: "Conjunto de dispositivos interconectados que comparten recursos e información usando protocolos estandarizados.",
        ejemplos: ["TCP/IP", "Wi-Fi", "Ethernet"]
    },
    {
        id: 6,
        titulo: "Firewall",
        descripcion: "Sistema de seguridad que controla el tráfico de red entrante y saliente.",
        categoria: "seguridad",
        nivel: "intermedio",
        analogia: {
            titulo: "Guardián de Seguridad",
            descripcion: "Un firewall es como un guardia de seguridad en la entrada de un edificio. Revisa las identificaciones (direcciones IP y puertos), decide quién puede entrar o salir, y bloquea a los sospechosos.",
            detalles: [
                "Verifica credenciales (direcciones y puertos)",
                "Aplica reglas de acceso (políticas de seguridad)",
                "Bloquea tráfico sospechoso",
                "Registra entradas y salidas (logs)"
            ]
        },
        detallesTecnicos: "Sistema que monitorea y controla el tráfico de red basándose en reglas de seguridad predeterminadas.",
        ejemplos: ["Firewall de Windows", "pfSense", "Cisco ASA"]
    },
    {
        id: 7,
        titulo: "Virtualización",
        descripcion: "Creación de una versión virtual de un recurso tecnológico.",
        categoria: "avanzado",
        nivel: "avanzado",
        analogia: {
            titulo: "Edificio de Apartamentos",
            descripcion: "La virtualización es como un edificio de apartamentos. Un solo edificio físico (servidor) se divide en múltiples apartamentos independientes (máquinas virtuales), cada uno con su propia cocina, baño y habitaciones (sistema operativo y aplicaciones).",
            detalles: [
                "Un recurso físico dividido en múltiples recursos virtuales",
                "Cada VM es independiente y aislada",
                "Máximo aprovechamiento del hardware",
                "Flexibilidad y portabilidad"
            ]
        },
        detallesTecnicos: "Tecnología que permite crear múltiples entornos simulados o recursos dedicados desde un solo sistema físico.",
        ejemplos: ["VMware", "VirtualBox", "Hyper-V"]
    },
    {
        id: 8,
        titulo: "Cloud Computing",
        descripcion: "Entrega de servicios informáticos a través de Internet.",
        categoria: "avanzado",
        nivel: "avanzado",
        analogia: {
            titulo: "Servicios Públicos (Agua, Electricidad)",
            descripcion: "La nube es como los servicios públicos. En lugar de tener tu propio generador eléctrico (servidores locales), pagas por lo que usas de una gran central (proveedor cloud) a través de tuberías (Internet).",
            detalles: [
                "Pago por uso (como la electricidad)",
                "Acceso bajo demanda",
                "Recursos escalables",
                "Mantenimiento por el proveedor"
            ]
        },
        detallesTecnicos: "Modelo que permite el acceso bajo demanda a recursos informáticos compartidos a través de Internet.",
        ejemplos: ["AWS", "Azure", "Google Cloud"]
    },
    {
        id: 9,
        titulo: "Placa Base (Motherboard)",
        descripcion: "El componente principal que conecta todas las partes de la computadora.",
        categoria: "hardware",
        nivel: "básico",
        analogia: {
            titulo: "Los Cimientos y Sistema Nervioso",
            descripcion: "La placa base es como los cimientos y el sistema eléctrico de una casa. Provee la estructura donde se instalan todos los demás componentes y permite que la electricidad y la información fluyan entre ellos.",
            detalles: [
                "Conecta CPU, RAM y almacenamiento",
                "Distribuye energía a los componentes",
                "Permite la comunicación entre partes",
                "Provee puertos para periféricos"
            ]
        },
        detallesTecnicos: "Circuito impreso principal (PCB) que contiene los conectores para el procesador, tarjetas de memoria, almacenamiento y periféricos.",
        ejemplos: ["ATX", "Micro-ATX", "Mini-ITX"]
    },
    {
        id: 10,
        titulo: "Tarjeta Gráfica (GPU)",
        descripcion: "Componente especializado en el procesamiento de imágenes y video.",
        categoria: "hardware",
        nivel: "básico",
        analogia: {
            titulo: "El Artista Especializado",
            descripcion: "Si la CPU es el chef general, la GPU es un artista experto. Se encarga exclusivamente de hacer que todo se vea bonito y fluido en la pantalla, manejando colores, formas y movimientos complejos.",
            detalles: [
                "Renderiza imágenes y video",
                "Libera a la CPU de tareas gráficas",
                "Esencial para juegos y diseño",
                "Realiza cálculos paralelos masivos"
            ]
        },
        detallesTecnicos: "Coprocesador dedicado al procesamiento de gráficos u operaciones de coma flotante, aliviando la carga de la CPU central.",
        ejemplos: ["NVIDIA GeForce", "AMD Radeon", "Intel Arc"]
    },
    {
        id: 11,
        titulo: "Teclado",
        descripcion: "Dispositivo de entrada principal para introducir texto y comandos.",
        categoria: "hardware",
        nivel: "básico",
        analogia: {
            titulo: "Panel de Control",
            descripcion: "El teclado es como el panel de control de una máquina compleja. Cada tecla envía una señal específica que la computadora interpreta como una letra, número o comando para ejecutar una acción.",
            detalles: [
                "Envía caracteres a la computadora",
                "Permite atajos y comandos rápidos",
                "Interfaz principal de texto",
                "Variedad de distribuciones"
            ]
        },
        detallesTecnicos: "Periférico de entrada que utiliza un sistema de botones o teclas para enviar información a la computadora.",
        ejemplos: ["Mecánico", "Membrana", "Ergonómico"]
    },
    {
        id: 12,
        titulo: "Mouse (Ratón)",
        descripcion: "Dispositivo apuntador que facilita el manejo del entorno gráfico.",
        categoria: "hardware",
        nivel: "básico",
        analogia: {
            titulo: "La Extensión de tu Mano",
            descripcion: "El mouse es como una mano virtual dentro de la pantalla. Te permite señalar, agarrar, arrastrar y soltar objetos digitales tal como lo harías con objetos reales sobre una mesa.",
            detalles: [
                "Controla el cursor en pantalla",
                "Permite seleccionar e interactuar",
                "Navegación intuitiva",
                "Botones para acciones contextuales"
            ]
        },
        detallesTecnicos: "Dispositivo apuntador utilizado para facilitar el manejo de un entorno gráfico en una computadora, detectando movimiento en dos dimensiones.",
        ejemplos: ["Óptico", "Láser", "Inalámbrico"]
    },
    {
        id: 13,
        titulo: "¿Qué es un sistema en términos generales?",
        descripcion: "Un sistema es un conjunto de elementos interrelacionados entre sí para lograr un mismo objetivo.",
        categoria: "general",
        nivel: "general",
        analogia: {
            titulo: "Un Equipo Deportivo",
            descripcion: "Un sistema es como un equipo de fútbol. Los jugadores (elementos) tienen diferentes roles y posiciones, pero todos juegan juntos de manera coordinada (interrelación) para ganar el partido (objetivo común).",
            detalles: [
                "Conjunto de elementos (jugadores)",
                "Interrelación (pases y tácticas)",
                "Objetivo común (ganar)",
                "Funciona como un todo unificado"
            ]
        },
        detallesTecnicos: "Definición abstracta aplicable a cualquier campo: conjunto de componentes que interactúan para formar un todo complejo.",
        ejemplos: ["Sistema Solar", "Sistema Digestivo", "Sistema de Transporte"]
    }
];

export const categorias = [
    { id: "all", nombre: "Todos los Conceptos" },
    { id: "general", nombre: "General" },
    { id: "hardware", nombre: "Hardware" },
    { id: "software", nombre: "Software" },
    { id: "redes", nombre: "Redes" },
    { id: "seguridad", nombre: "Seguridad" },
    { id: "avanzado", nombre: "Temas Avanzados" }
];

export const niveles = [
    { id: "all", nombre: "Todos los Niveles" },
    { id: "general", nombre: "General" },
    { id: "basico", nombre: "Básico" },
    { id: "intermedio", nombre: "Intermedio" },
    { id: "avanzado", nombre: "Avanzado" }
];