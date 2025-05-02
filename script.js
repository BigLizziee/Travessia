
  const carrossel = document.querySelector('.carrossel-infinito');
  const track = document.querySelector('.carrossel-track');
  const esquerda = document.querySelector('.seta.esquerda');
  const direita = document.querySelector('.seta.direita');
  const cardWidth = 270; // 250 + 20 (margens)

  let scrollAmount = 0;

  direita.addEventListener('click', () => {
    scrollAmount += cardWidth;
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
    carrossel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });

  esquerda.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) {
      scrollAmount = track.scrollWidth / 2 - cardWidth;
    }
    carrossel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });

  const cards = document.querySelectorAll('.comentario-card');
  let current = 0;
  
  function mostrarComentario() {
    cards.forEach(card => card.classList.remove('ativo'));
    cards[current].classList.add('ativo');
    current = (current + 1) % cards.length;
  }
  
  setInterval(mostrarComentario, 5000); 
  