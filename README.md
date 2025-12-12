# Ayuntamiento de Manjabalago

Sitio web oficial del Ayuntamiento de Manjabalago.

## Características

- Diseño responsive y moderno
- Compatible con todos los navegadores
- Optimizado para dispositivos móviles
- Navegación intuitiva
- Secciones de noticias, eventos y servicios

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts (Open Sans)

## Despliegue en Vercel

### Opción 1: Desde GitHub

1. Sube el proyecto a un repositorio de GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Ayuntamiento de Manjabalago"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

2. Ve a [Vercel](https://vercel.com) e inicia sesión

3. Haz clic en "Add New Project"

4. Importa tu repositorio de GitHub

5. Vercel detectará automáticamente la configuración y desplegará tu sitio

### Opción 2: Desde Vercel CLI

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Desde la carpeta del proyecto, ejecuta:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

### Opción 3: Arrastrar y soltar

1. Ve a [Vercel](https://vercel.com)

2. Arrastra la carpeta del proyecto a la página de Vercel

3. Vercel desplegará automáticamente tu sitio

## Estructura del Proyecto

```
/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
├── vercel.json         # Configuración de Vercel
└── README.md           # Este archivo
```

## Desarrollo Local

Para ver el sitio localmente, simplemente abre el archivo `index.html` en tu navegador, o usa un servidor local:

### Con Python:
```bash
python -m http.server 8000
```

### Con Node.js (http-server):
```bash
npx http-server
```

### Con PHP:
```bash
php -S localhost:8000
```

Luego abre tu navegador en `http://localhost:8000`

## Personalización

### Cambiar colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --color-primary: #2ea3f2;
    --color-secondary: #1e88d4;
    --color-accent: #ca2e2e;
    --color-dark: #333;
    --color-light: #f5f5f5;
    --color-white: #ffffff;
}
```

### Añadir contenido

- **Noticias**: Edita la sección `.noticias-grid` en `index.html`
- **Eventos**: Edita la sección `.eventos-grid` en `index.html`
- **Enlaces**: Edita la sección `.enlaces-grid` en `index.html`

### Cambiar imágenes

Las imágenes actuales son de Unsplash. Reemplázalas con tus propias imágenes:

1. Guarda tus imágenes en una carpeta `images/`
2. Actualiza las rutas en `index.html`:
   ```html
   <img src="images/tu-imagen.jpg" alt="Descripción">
   ```

## Compatibilidad

- Chrome/Edge (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Opera (últimas versiones)
- Navegadores móviles (iOS Safari, Chrome Mobile)

## Licencia

© 2024 Ayuntamiento de Manjabalago. Todos los derechos reservados.

## Soporte

Para soporte o consultas, contacta con: info@manjabalago.es
