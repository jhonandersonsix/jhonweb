# Web de Jhon Pariona

Web personal de Jhon Pariona, consultor de marcas y productos digitales (Lima, Perú).
Es una web estática: HTML, CSS y JavaScript sin frameworks, sin base de datos y sin servidor.

## Estructura

```
web/      La web completa. Es lo único que se publica.
  index.html          Página principal
  aviso-legal.html    Páginas legales
  privacidad.html
  cookies.html
  404.html            Página de error
  css/estilos.css     Tailwind 3 ya compilado
  js/lenis.min.js     Scroll suave (v1.1.20)
  fonts/              Plus Jakarta Sans
  img/                Fotos (.webp) y logos (img/logos/)
  _headers            Cabeceras de seguridad para Cloudflare Pages
  robots.txt, sitemap.xml, site.webmanifest, íconos
taller/   Configuración de Tailwind para regenerar css/estilos.css. No se publica.
```

## Verla en tu computadora

No hace falta instalar nada. Desde la carpeta del repositorio:

```
python3 -m http.server 8000 --directory web
```

y abre http://localhost:8000. Si abres `web/index.html` con doble clic también
funciona, pero el navegador bloquea la tipografía.

## Cambios en los estilos

Si agregas en el HTML una clase de Tailwind que no se usaba antes, hay que
regenerar `web/css/estilos.css`. Las instrucciones están en `taller/LEEME-TALLER.txt`.

## Publicación (GitHub Pages)

Cada vez que se sube un cambio a `main`, el workflow `.github/workflows/pages.yml`
copia la carpeta `web/` a la rama `gh-pages`, y GitHub Pages publica esa rama.
No se compila nada.

- Dirección: https://jhonandersonsix.github.io/jhonweb/
- Configuración (una sola vez): Settings → Pages → Source: **Deploy from a branch**
  → Branch: **gh-pages** / **(root)** → Save
- No edites la rama `gh-pages` a mano: se reemplaza en cada publicación.
  Los cambios se hacen en `web/` dentro de `main`.
- El workflow ajusta las rutas de `404.html` para que funcionen dentro de `/jhonweb/`.
  Con dominio propio (archivo `web/CNAME`) no hace falta.
- GitHub Pages ignora el archivo `web/_headers`. Solo lo usa Cloudflare Pages.
