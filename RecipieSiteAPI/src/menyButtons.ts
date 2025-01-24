import './style.scss';

type Button = {
  label: string,
  url: string,
  action: () => void,
  className: string,
  dropdown?: boolean,
}

// Array med knappdata
const buttons: Button[] = [
  { label: 'index', url: '/', action: () => console.log('Home Clicked'), className: 'home' },
  { label: 'MENU', url: '/', action: () => console.log('Menu Clicked'), className: 'menu', dropdown: true },
  { label: 'ABOUT', url: '/', action: () => console.log('About Clicked'), className: 'about' },
  { label: 'CONTACT', url: '/', action: () => console.log('Contact Clicked'), className: 'contact' },
];

// Funktion för att skapa knappar
const createBtns = (): void => {  
  const container = document.getElementById('menu-buttons');

  if (container) {
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

      container.appendChild(btn);
    });

  }
};



export default createBtns;