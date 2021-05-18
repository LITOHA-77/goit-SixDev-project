// (() => {
//     const refs = {
//       openMenuBtn: document.querySelector('[data-menu-open]'),
//       closeMenuBtn: document.querySelector('[data-menu-close]'),
//       menu: document.querySelector('[data-menu]'),
//     };
  
//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
//   function toggleMenu() {
//       document.body.classList.toggle("scroll-lock");
//       refs.menu.classList.toggle('is-close');
//     }
//   })();


(() => {
    const refs = {
      
      MenuBtn: document.querySelector('[data-menu-btn]'),
      menu: document.querySelector('[data-menu]'),
    };
  
  refs.MenuBtn.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
      document.body.classList.toggle("scroll-lock");
    refs.menu.classList.toggle('is-close');
    this.classList.toggle("is-active");
    }
  })();