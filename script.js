const modal = document.getElementById('modal');
const closeButton = document.getElementById('close');
const bookButtons = document.querySelectorAll('.book');
const year = document.getElementById('year');
const serviceModal = document.getElementById('serviceModal');
const serviceModalList = document.getElementById('serviceModalList');
const serviceModalTitle = document.getElementById('serviceModalTitle');
const serviceModalClose = document.getElementById('serviceModalClose');
const moreButtons = document.querySelectorAll('.more-btn');

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

moreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const title = button.dataset.title;
    const items = JSON.parse(button.dataset.items || '[]');

    serviceModalTitle.textContent = title;
    serviceModalList.innerHTML = items
      .map((item) => `<li>${item}</li>`)
      .join('');

    serviceModal.classList.add('open');
    serviceModal.setAttribute('aria-hidden', 'false');
  });
});

if (serviceModalClose) {
  serviceModalClose.addEventListener('click', () => {
    serviceModal.classList.remove('open');
    serviceModal.setAttribute('aria-hidden', 'true');
  });
}

if (serviceModal) {
  serviceModal.addEventListener('click', (event) => {
    if (event.target === serviceModal) {
      serviceModal.classList.remove('open');
      serviceModal.setAttribute('aria-hidden', 'true');
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && serviceModal.classList.contains('open')) {
    serviceModal.classList.remove('open');
    serviceModal.setAttribute('aria-hidden', 'true');
  }
});
