/**
 * Con el ClientRouter (View Transitions) de Astro, el <video autoplay> que
 * viene embebido en el contenido MDX se inserta al DOM vía navegación SPA
 * en vez de un parseo inicial del HTML — y en ese caso el atributo
 * `autoplay` no dispara la reproducción de forma confiable en todos los
 * navegadores (funciona en una carga completa/refresh, no en la transición
 * SPA). Se fuerza el play() explícitamente en cada navegación.
 *
 * Un solo intento de play() justo al insertar el nodo no alcanza en todos
 * los casos: si el navegador todavía no cargó nada del recurso (readyState
 * 0) en ese instante exacto, el intento puede perderse en silencio. Por
 * eso se llama load() para reiniciar limpio el pipeline de carga, y además
 * se reintenta play() en 'loadeddata'/'canplay' por si el primer intento
 * fue demasiado temprano.
 */
export function playAutoplayVideos() {
  document.querySelectorAll<HTMLVideoElement>('video[autoplay]').forEach((video) => {
    if (!video.paused) return;

    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay bloqueado por el navegador (poco probable estando muted);
          // no hay nada más que hacer sin interacción del usuario.
        });
      }
    };

    if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
      video.addEventListener('loadeddata', tryPlay, { once: true });
      video.addEventListener('canplay', tryPlay, { once: true });
      video.load();
    }

    tryPlay();
  });
}
