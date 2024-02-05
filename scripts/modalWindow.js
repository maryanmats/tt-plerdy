(() => {
    const refs = {
      openModalHeader: document.querySelector('[data-modal-open-hd]'),
      openModalBtnHero: document.querySelector('[data-modal-open-hero]'),
      openModalBtnFooter: document.querySelector('[data-modal-open-ftr]'),
      openModalBtnMobileMenu: document.querySelector('[ data-modal-open-mobile]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalHeader.addEventListener('click', toggleModal);
    refs.openModalBtnHero.addEventListener('click', toggleModal);
    refs.openModalBtnFooter.addEventListener('click', toggleModal);
    refs.openModalBtnMobileMenu.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

 