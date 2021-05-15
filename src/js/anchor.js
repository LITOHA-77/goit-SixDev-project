var menu = document.querySelector('[data-menu]');
  
    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        menu.classList.toggle('is-close');
      }
    }