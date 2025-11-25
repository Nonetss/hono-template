# Hono + OpenAPI + Drizzle Template

Este proyecto es una plantilla robusta y moderna para construir APIs utilizando **Hono**, **OpenAPI**, y **Drizzle ORM**. Está diseñado para ser rápido, tipado y fácil de documentar.

## 🚀 Características

- **[Hono](https://hono.dev/)**: Framework web ultrarrápido.
- **[OpenAPI](https://github.com/honojs/middleware/tree/main/packages/zod-openapi)**: Especificación de API integrada con `@hono/zod-openapi`.
- **[Drizzle ORM](https://orm.drizzle.team/)**: ORM ligero y seguro para TypeScript.
- **[Scalar](https://scalar.com/)**: Documentación de API interactiva y hermosa.
- **[Zod](https://zod.dev/)**: Validación de esquemas TypeScript-first.
- **[Bun](https://bun.sh/)**: Runtime de JavaScript todo en uno.

## 🛠️ Requisitos Previos

Asegúrate de tener instalado [Bun](https://bun.sh/).

```bash
curl -fsSL https://bun.sh/install | bash
```

## 📦 Instalación

1. Clona el repositorio (o usa esta plantilla):

   ```bash
   git clone <tu-repo-url>
   cd <nombre-del-proyecto>
   ```

2. Instala las dependencias:
   ```bash
   bun install
   ```

## ⚙️ Configuración

1. Copia el archivo de ejemplo de variables de entorno:

   ```bash
   cp .env.example .env
   ```

2. Configura tu conexión a la base de datos en el archivo `.env`:
   ```env
   DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"
   ```

## ▶️ Ejecución

Para iniciar el servidor de desarrollo con recarga en caliente (hot reload):

```bash
bun run dev
```

El servidor se iniciará en `http://localhost:3000`.

## 📚 Documentación de la API

Una vez que el servidor esté corriendo, puedes acceder a la documentación interactiva de la API:

- **Scalar UI**: [http://localhost:3000/scalar](http://localhost:3000/scalar)
- **JSON Spec**: [http://localhost:3000/doc](http://localhost:3000/doc)

## 🗄️ Base de Datos (Drizzle)

Este proyecto utiliza Drizzle Kit para la gestión de migraciones.

- **Generar migraciones**:

  ```bash
  bunx drizzle-kit generate
  ```

- **Ejecutar migraciones**:

  ```bash
  bunx drizzle-kit migrate
  ```

- **Drizzle Studio** (Interfaz visual para la DB):
  ```bash
  bunx drizzle-kit studio
  ```

## 📂 Estructura del Proyecto

```
src/
├── core/           # Configuraciones del núcleo
├── db/             # Configuración de Drizzle y esquemas
│   ├── models/     # Definición de tablas/modelos
│   └── index.ts    # Punto de entrada de la DB
├── index.ts        # Punto de entrada de la aplicación Hono
└── ...
```
