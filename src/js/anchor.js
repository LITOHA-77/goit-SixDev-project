var menu = document.querySelector('[data-menu]');
MenuBtn = document.querySelector('[data-menu-btn]');

  
  menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        document.body.classList.toggle("scroll-lock");
        menu.classList.toggle('is-close');
        MenuBtn.classList.toggle('is-active');
      }
    }