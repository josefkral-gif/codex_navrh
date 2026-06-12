# Local replica

This directory contains the source files exported from the Base44 read-only editor.

## Run locally

```powershell
npm.cmd run dev
```

## Production build

```powershell
npm.cmd run build
```

Public Base44 image URLs used by the application were copied to `public/assets` and runtime references were changed to local `/assets/...` paths.

The OpenStreetMap iframe and Google Fonts import remain external services. Base44 authentication and API features still require the Base44 environment variables expected by `src/api/base44Client.js` and the Vite plugin.
