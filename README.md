# Salto de Luciérnagas

Juego diario del 29 de octubre de 2026. Seis composiciones originales sobre la mecánica clásica de solitario de saltos: seleccionar una ficha, saltar ortogonalmente sobre otra hacia un hueco y retirar la intermedia. Gana al quedar una sola. No exige terminar en el centro. Sin reloj, cuentas, anuncios ni seguimiento.

## Ejecutar y probar

Node 22: `npm test` (sin dependencias). Servir con `npm start` (Python 3), abrir http://localhost:8766. GitHub Pages sirve la raíz de main. No build ni secretos.

`engine.js` contiene las reglas puras y validación de persistencia por repetición de movimientos. `levels.js` incluye seis configuraciones originales y sus rutas de resolución verificadas. `app.js` implementa UI accesible por teclado y ratón, deshacer, confirmaciones y sincronización entre pestañas. `style.css` incluye diseño adaptable, pero móvil real necesita verificación específica.

## Novedad y límites

No repite inercia, faro arcade, gestión de huerto, rutas ferroviarias, memoria secuencial, equilibrio de pesos, encaje de poliminós, claves de símbolos, Lights Out, nonogramas ni clasificación de pilas. No pretende inventar la mecánica clásica ni garantizar solución única. Los tableros se construyeron mediante saltos inversos desde una ficha y se validaron en sentido directo. La dificultad indicada es número de fichas, no una medición de usuarios.

El progreso reside únicamente en localStorage. Puede borrarse con confirmación. Si el navegador impide guardar, el juego continúa sin persistencia. Reiniciar o cambiar de reto reinicia la ruta actual y conserva logros. La última pestaña que guarda prevalece.

Catálogo externo: https://mitchell-castillo.github.io/daily-games/ . No se incluye un formulario de sugerencias sin receptor verificado. Ver QA.md para alcance real de pruebas.
