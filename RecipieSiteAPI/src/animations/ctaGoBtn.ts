const animateCTA = (
  speed: string,
  startColor: string,
  endColor: string,
  direction: 'left' | 'right' = 'left',
  trigger: string | number = 0,
) => {
  const randomTrigger = Math.floor(Math.random() * 100);
  
  if (trigger && randomTrigger < Number(trigger)) {
    const button = document.querySelector('.btn-go') as HTMLElement;

    if (button) {
      button.style.setProperty('--flash-speed', speed);
      button.style.setProperty('--flash-start-color', startColor);
      button.style.setProperty('--flash-end-color', endColor);

      if(direction === 'left') {
        button.style.setProperty('--flash-direction', 'translateX(100%)');
      }else {
        button.style.setProperty('--flash-direction-back', 'translateX(-100%)');
      }
      }
  }
};

export default animateCTA;