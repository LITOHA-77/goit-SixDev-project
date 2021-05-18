var menu = document.querySelector('[data-menu]');
  
    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        document.body.classList.toggle("scroll-lock");
        menu.classList.toggle('is-close');
      }
    }