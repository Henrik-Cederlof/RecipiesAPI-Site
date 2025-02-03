import './style.scss';
import { DomElements } from './domElements';

type Button = {
  label: string,
  url: string,
 
  className: string,
  dropdown?: boolean,
}

// Array med knappdata
const buttons: Button[] = [
  { label: 'index', url: '/', className: 'home' },
  { label: 'MENU', url: '/', className: 'menu', dropdown: true },
  { label: 'ABOUT', url: '/',  className: 'about' },
  { label: 'CONTACT', url: '/', className: 'contact' },
];

// Funktion för att skapa knappar
const createBtns = (): void => {  
  const menuContainer = document.getElementById('menu-buttons');
  const hamburgerContainer = document.createElement('div') as HTMLDivElement;

  if (menuContainer) {
    buttons.forEach((button) => {
      const btn = document.createElement('button');
      btn.textContent = button.className.toUpperCase(); 
      btn.classList.add(button.className);

      if (button.dropdown) {
        // Skapa dropdown-menyn
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown-menu');
        const menuItems = ['RECIPIES', 'INGREDIENTS', 'CULTURE', 'HISTORY'];

        menuItems.forEach((item) => {
          const menuItem = document.createElement('a');
          menuItem.textContent = item;
          // Direktlänk för enkel navigering
          menuItem.href = `${item.toLowerCase()}.html`;
          dropdown.appendChild(menuItem);
        });

        // Förhindra att dropdown-knappen navigerar bort
        btn.addEventListener('click', (event) => {
          event.stopPropagation(); // Stoppar klicket från att bubbla upp
          dropdown.classList.toggle('show'); // Visa/dölj dropdown
        });

        btn.appendChild(dropdown);
      } else {
        // Vanliga knappar ska omdirigera som tidigare
        btn.addEventListener('click', () => {
          window.location.href = `${button.label.toLowerCase()}.html`;
        });
      }

      menuContainer.appendChild(btn);
    });

    const hamburgerBtn = document.createElement('div') as HTMLDivElement; 
    hamburgerBtn.classList.add('hamburger-btn');
    hamburgerBtn.innerHTML = `
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    `;
    DomElements.header.appendChild(hamburgerBtn);
    DomElements.header.appendChild(hamburgerContainer);

    // Eventlyssnare för att visa/dölja menyn
    hamburgerBtn.addEventListener('click', () => {
      menuContainer.classList.toggle('show');
    });
  }
};


export default createBtns;