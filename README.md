# Angular Query Sample

This project is a sample application that uses

- [Angular](https://angular.dev/)
- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/angular/overview)
- [Tailwind CSS](https://tailwindcss.com/)

It shows how you can build a modern Angular app with Tanstack Query.

This app contains an Angular client and a Node.js server that runs with [Fastify](https://fastify.dev/)

## Quick start

You can start the UI and the server simultaneously using `docker`:

```bash
docker compose up -d
```

## Dev mode

For development you can run both UI and server in separate processes manually:

```bash
# start the UI
cd ui
npm i
npm run start
```

```bash
# start the server
cd server
npm i
npm run start
```
