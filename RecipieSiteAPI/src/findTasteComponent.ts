// findTaste.ts
export function createCard() {
  const findTasteContainer = document.getElementById('find-taste') as HTMLDivElement;

  if (findTasteContainer) {
    const card: HTMLDivElement = document.createElement('div');
    card.classList.add('card');
    card.id  = 'card';

    card.innerHTML = `<p>Detta är ett kort</p>`;
    
    findTasteContainer.appendChild(card);
  } else {
    console.error('Elementet kunde inte hittas..');
  }

  return findTasteContainer;
}
