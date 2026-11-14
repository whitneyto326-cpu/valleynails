const modal = document.getElementById('modal');
const closeButton = document.getElementById('close');
const bookButtons = document.querySelectorAll('.book');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const openModal = (event) => {
  if (event) {
    event.preventDefault();
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
};

bookButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

if (closeButton) {
  closeButton.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});
