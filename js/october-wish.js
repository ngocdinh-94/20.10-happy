(() => {
  const button = document.getElementById('open-october-wish');
  const realityScene = document.getElementById('tiny-reality-scene');
  const wishScene = document.getElementById('october-wish-scene');
  const fallingField = document.getElementById('october-wish-fall');

  if (!button || !realityScene || !wishScene || !fallingField) return;

  function createFallingDecor() {
    if (fallingField.childElementCount) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 700px)').matches;
    const count = reducedMotion ? 14 : mobile ? 16 : 26;

    for (let index = 0; index < count; index++) {
      const isHeart = index % 3 === 0;
      const particle = document.createElement('span');
      particle.className = 'october-fall-particle' + (isHeart ? ' is-heart' : '');
      particle.textContent = isHeart ? '♥' : ['❀', '✿', '❁'][index % 3];
      particle.setAttribute('aria-hidden', 'true');
      particle.style.setProperty('--fall-x', (3 + Math.random() * 94).toFixed(1) + '%');
      particle.style.setProperty('--fall-y', (5 + Math.random() * 88).toFixed(1) + '%');
      particle.style.setProperty('--fall-drift', (-48 + Math.random() * 96).toFixed(1) + 'px');
      particle.style.setProperty('--fall-size', (isHeart ? 13 + Math.random() * 11 : 12 + Math.random() * 13) + 'px');
      particle.style.setProperty('--fall-color', isHeart ? '#ffbad8' : '#ffd5e5');
      particle.style.setProperty('--fall-glow', isHeart ? 'rgba(255,132,185,.52)' : 'rgba(255,195,218,.42)');
      particle.style.setProperty('--fall-duration', (11 + Math.random() * 10).toFixed(1) + 's');
      particle.style.setProperty('--fall-delay', (-Math.random() * 18).toFixed(1) + 's');
      fallingField.appendChild(particle);
    }
  }

  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();

    if (!realityScene.classList.contains('reality-cute')) return;

    button.disabled = true;
    createFallingDecor();
    realityScene.classList.add('reality-ending');
    realityScene.setAttribute('aria-hidden', 'true');
    wishScene.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => wishScene.classList.add('is-visible'));
  });
})();