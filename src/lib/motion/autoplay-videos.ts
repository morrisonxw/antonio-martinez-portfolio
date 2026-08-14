/**
 * Con el ClientRouter (View Transitions) de Astro, el <video autoplay> que
 * viene embebido en el contenido MDX se inserta al DOM vía navegación SPA
 * en vez de un parseo inicial del HTML — y en ese caso el atributo
 * `autoplay` no dispara la reproducción de forma confiable en todos los
 * navegadores (funciona en una carga completa/refresh, no en la transición
 * SPA). Se fuerza el play() explícitamente en cada navegación.
 */
export function playAutoplayVideos() {
  document.querySelectorAll<HTMLVideoElement>('video[autoplay]').forEach((video) => {
    if (video.paused) {
      video.play().catch(() => {
        // Autoplay bloqueado por el navegador (poco probable estando muted);
        // no hay nada más que hacer sin interacción del usuario.
      });
    }
  });
}
