# React Test App (Prueba técnica — Desarrollador React)

Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app) y configurado para TypeScript. Se ha personalizado para incluir una estructura de proyecto organizada, integración con React Router para la navegación y pruebas unitarias junto a los componentes.

## Instalación

Para configurar el entorno de desarrollo y empezar a trabajar en el proyecto, sigue estos pasos:

1. Clona el repositorio:

### `git clone https://github.com/tu-usuario/tu-repositorio.git`

2. Instala las dependencias:

### `npm install`

3. Inicia el servidor de desarrollo:

### `npm start`

Abre [http://localhost:3000](http://localhost:3000) para ver el proyecto en el navegador. La página se recargará si haces cambios en el código. También verás cualquier error de lint en la consola.

## Estructura del Proyecto

La estructura del proyecto ha sido organizada de la siguiente manera para promover la escalabilidad y la mantenibilidad:

REACT-TEST-APP/
├── .vscode/
│ └── settings.json
├── src/
│ ├── components/ # Carpeta para componentes de UI
│ │ ├── common/ # Componentes comunes/reutilizables
│ │ └── screens/ # Componentes de pantalla
│ ├── hooks/ # Hooks personalizados
│ ├── services/ # Servicios para manejo de APIs
│ ├── types/ # Tipos y interfaces de TypeScript
│ ├── utils/ # Utilidades y funciones de ayuda
│ ├── App.tsx # Componente principal de la aplicación
│ ├── index.tsx # Punto de entrada para React
├── .eslintrc.js # Configuración de ESLint
├── .prettierrc # Configuración de Prettier
├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación del proyecto

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.

### `npm test`

Lanza el corredor de pruebas en el modo interactivo de observación.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

### `npm run eject`

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes `eject` en cualquier momento.

## Código Limpio y Formateo

La idea es mantener un alto estándar de calidad en nuestro código utilizando herramientas de análisis estático y formateo automático como ESLint y Prettier. Las reglas establecidas se aplicarán automáticamente al guardar archivos en VSCode.

## Aprendiendo Más

Puedes aprender más en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta la [documentación de React](https://reactjs.org/).

## Como organizador de tareas usé Notion

https://www.notion.so/8b3d6dc5e8444e208d35ca8cc7cf2184?v=58e92b3f0ac04587be593a2f41c12ce4&pvs=4
