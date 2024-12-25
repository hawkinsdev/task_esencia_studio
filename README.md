# Proyecto: Task Manager

Este proyecto es un gestor de tareas desarrollado con React, Ant Design y TypeScript. Incluye funcionalidades como creación, edición y eliminación de tareas, además de pruebas unitarias para garantizar su funcionamiento óptimo.

DEMO: https://task-esencia-studio.vercel.app/
---

## Instalación

### Requisitos previos

- Node.js (v16 o superior).
- npm o Yarn.

### Pasos para instalar

1. Clona el repositorio:

   ```bash
   git clone https://github.com/hawkinsdev/task_esencia_studio.git
   cd task-manager
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o con Yarn
   yarn install
   ```

---

## Ejecución de la aplicación

### Modo desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run start
# o con Yarn
yarn start
```

El servidor de desarrollo estará disponible en `http://localhost:3000`.

### Build de producción

Para generar una versión optimizada para producción:

```bash
npm run build
# o con Yarn
yarn build
```

### Ejecutar el build localmente

Si deseas probar el build generado localmente:

```bash
npm run serve
# o con Yarn
yarn serve
```

---

## Pruebas

### Ejecutar pruebas

Para ejecutar las pruebas unitarias:

```bash
npm run test
# o con Yarn
yarn test
```

---

## Estructura del proyecto

La estructura del proyecto sigue un estándar modular que garantiza escalabilidad y fácil mantenimiento:

```plaintext
src/
├── components/     # Componentes reutilizables
│   ├── Task/       # Componentes relacionados con tareas (TaskForm, TaskTable, etc.)
│   ├── Common/     # Componentes genéricos utilizados en todo el proyecto
├── pages/          # Vistas principales (Home, Dashboard, etc.)
├── containers/     # Manejo de la lógica de las vistas
├── types/          # Tipos e interfaces para TypeScript
├── atoms/          # Archivos de estado global (store)
├── __tests__/      # Pruebas unitarias
├── App.tsx         # Componente principal de la aplicación
├── index.tsx       # Punto de entrada de React
└── styles/         # Estilos globales o de temas
```

### Estándares de desarrollo

La arquitectura fue diseñada para modularizar cada característica de la aplicación, siguiendo este flujo de trabajo:

1. **Pages**: Contiene las páginas principales de la aplicación, como en este caso `Home`. Estas páginas renderizan los contenedores específicos según las necesidades del proyecto.

2. **Containers**: Manejan la lógica de las vistas, sirviendo como intermediarios entre los datos y los componentes. Un contenedor puede ser padre y, a su vez, tener contenedores hijos que gestionen la lógica específica de componentes individuales.

3. **Components**: Están modularizados por funcionalidad, permitiendo la reutilización de componentes personalizados o comunes en diferentes partes del proyecto.

El flujo principal es: `Page -> Container -> Components`.

---

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

