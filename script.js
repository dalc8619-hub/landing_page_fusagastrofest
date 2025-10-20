/*
 * Script para la animación de "Aparecer al hacer Scroll"
 *
 * Cómo funciona:
 * 1. Selecciona todos los elementos que tienen la clase ".animate-on-scroll".
 * 2. Crea un "observador" que vigila cuándo un elemento entra en la pantalla.
 * 3. Cuando un elemento es visible (isIntersecting), le añade la clase ".is-visible".
 * 4. El CSS (que ya escribimos) se encarga de hacer la animación de "opacity" y "transform"
 * cuando ve la clase ".is-visible".
 * 5. Una vez animado, deja de observarlo para ahorrar recursos.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleccionar todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    // 2. Opciones para el observador
    //    threshold: 0.1 significa que la animación se dispara cuando 
    //    el 10% del elemento es visible.
    const observerOptions = {
        root: null, // Observa en relación al viewport (la pantalla)
        rootMargin: '0px',
        threshold: 0.1 
    };

    // 3. Crear el observador
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 4. Si el elemento está entrando en la pantalla...
            if (entry.isIntersecting) {
                // Añadimos la clase que activa la animación CSS
                entry.target.classList.add('is-visible');
                
                // 5. Dejamos de observar este elemento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 6. Pedirle al observador que vigile cada uno de los elementos
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});