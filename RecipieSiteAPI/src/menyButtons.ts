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
  { label: 'HOME', url: '/', action: () => console.log('Home Clicked'), className: 'home' },
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
      btn.textContent = button.label; 
      btn.classList.add(button.className);

      if(button.dropdown) {
        // Skapa dropdown-menyn
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown-menu');
        const menuItems = ['RECIPIES', 'INGREDIENTS', 'CULTURE', 'HISTORY'];

        menuItems.forEach((item) => {
          const menuItem = document.createElement('a');
          menuItem.textContent = item;
          dropdown.appendChild(menuItem);
          
        });
        
        // Lägg till dropdown i knappen
        btn.appendChild(dropdown);


      }

      // Lägg till en klickhändelse
      btn.addEventListener('click', button.action);

      // Lägg till knappen i container
      container.appendChild(btn);
    });
  }
}


export default createBtns;