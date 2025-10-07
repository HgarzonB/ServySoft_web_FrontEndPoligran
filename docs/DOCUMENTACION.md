# Documentación del Proyecto: ServySoft Web

## Descripción General
ServySoft Web es una aplicación web desarrollada para la gestión y venta de productos y servicios tecnológicos, incluyendo reparación y comercialización de equipos electrónicos como computadores, televisores, consolas y celulares. El proyecto está compuesto por archivos HTML, CSS y JavaScript, organizados para ofrecer una experiencia de usuario moderna y funcional.

## Estructura de Carpetas y Archivos

- **HTML**
  - `index.html`: Página principal con presentación de servicios y productos.
  - `login.html`: Página de inicio de sesión para usuarios y administradores.
  - `admin.html`: Panel de administración para editar y eliminar productos.
  - `carrito.html`: Página de carrito de compras y formulario de pago.
  - `Detalle.html`, `DetalleCpuNvo.html`, `DetalleReparaCel.html`, `DetalleReparaCompu.html`, `DetalleReparaTV.html`, `DetalleTvNvo.html`: Páginas de detalle de productos y servicios específicos.

- **CSS**
  - `css/style.css`: Estilos generales para la web, incluyendo layout, slider, formularios y footer.
  - `css/admin.css`: Estilos específicos para el panel de administración.

- **JS**
  - `js/app.js`: Lógica para el slider de imágenes y navegación manual.
  - `js/admin.js`: Funcionalidad para el panel de administración (menú hamburguesa, edición y eliminación de productos).

- **IMG**
  - Imágenes utilizadas para productos, logos, botones y elementos visuales.

## Descripción de Archivos Principales

### index.html
Página principal que muestra los servicios de reparación y venta de productos electrónicos. Incluye un slider de imágenes, presentación de servicios, y un footer con información de contacto y políticas.

### login.html
Formulario de inicio de sesión. Permite el acceso al panel de administración si se ingresa el usuario y contraseña correctos. Incluye validación con JavaScript y redirección a `admin.html`.

### admin.html
Panel para administración de productos. Permite editar y eliminar productos mediante formularios y botones interactivos. Utiliza jQuery para mostrar/ocultar menús y formularios.

### carrito.html
Página de resumen de compra y formulario para datos del comprador. Muestra el producto seleccionado, subtotal, envío y total a pagar.

### Detalle*.html
Páginas de detalle para cada producto o servicio, mostrando información específica, características y opción de añadir al carrito.

### css/style.css
Define los estilos generales del sitio, incluyendo el layout, slider, formularios, tarjetas de productos y footer.

### css/admin.css
Estilos para el panel de administración, menú hamburguesa, tarjetas de productos y formularios de edición.

### js/app.js
Lógica para el slider de imágenes en la página principal, permitiendo navegación automática y manual entre slides.

### js/admin.js
Funciones para el panel de administración: mostrar/ocultar menú, editar/eliminar productos y simular guardado de cambios.

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (jQuery)

## Uso
1. El usuario accede a la página principal (`index.html`) y navega por los servicios y productos.
2. Puede iniciar sesión en `login.html` para acceder al panel de administración (`admin.html`).
3. Los administradores pueden editar o eliminar productos desde el panel.
4. Los usuarios pueden ver detalles de productos y añadirlos al carrito (`carrito.html`).

## Créditos
Desarrollado por el equipo de ServySoft para el curso de Front End - Poligran, 2025.

---

> Para más detalles, consulte los archivos fuente en cada carpeta correspondiente.