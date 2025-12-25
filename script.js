const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const color = card.getAttribute('data-color');
    document.body.style.background = color;
  });

  card.addEventListener('mouseleave', () => {
    document.body.style.background = '#0b0b0b';
  });
});
