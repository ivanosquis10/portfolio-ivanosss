gsap.from('.hero-img', {
  opacity: 0,
  y: 200,
  duration: 0.8,
  ease: 'power1.out',
});

gsap.from('.bio-info', {
  opacity: 0,
  y: -200,
  duration: 1.5,
  ease: 'power1.out',
});

gsap.from('.navegacion', {
  opacity: 0,
  y: -200,
  duration: 1,
});

gsap.from('.skills__img', {
  opacity: 0,
  duration: 1,
  ease: 'back.outout(1.71.7)',
  y: 100,
});

gsap.from('.card__img', {
  opacity: 0,
  duration: 1,
  ease: 'back.outout(1.71.7)',
  y: 100,
});
