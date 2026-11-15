const services = [
  {
    title: 'Signature Manicures',
    items: [
      { name: 'Regular Manicure', price: '$25+' },
      { name: 'Gel Manicure', price: '$35+' },
      { name: 'French Gel Manicure', price: '$40+' },
      { name: 'Deluxe Manicure', price: '$35+' },
      { name: 'Deluxe Gel Manicure', price: '$45+' },
      { name: 'Gel Color Change', price: '$25+' },
      { name: 'Regular Color Change', price: '$15+' },
      { name: 'Kid Manicure', price: '$15+' },
      { name: 'Kid Gel Manicure', price: '$25+' },
      { name: 'Kid Regular Color', price: '$10+' },
      { name: 'Kid Gel Color', price: '$20+' }
    ]
  },
  {
    title: 'Acrylic & Gel',
    items: [
      { name: 'Acrylic Full-set', price: '$50+' },
      { name: 'Acrylic Fill-in', price: '$40+' },
      { name: 'Builder Gel Overlay', price: '$50+' },
      { name: 'Builder Gel Full-set w/ Tip', price: '$60+' },
      { name: 'Builder Gel Fill-in', price: '$45+' },
      { name: 'Pink & White', price: '$55+' },
      { name: 'Ombre', price: '$55+' },
      { name: 'Polygel', price: '$50+' },
      { name: 'Polygel w/ Tip', price: '$60+' },
      { name: 'Gel X Full-set', price: '$55+' },
      { name: 'Dip Powder', price: '$45+' },
      { name: 'Dip Powder w/ Tip', price: '$55+' },
      { name: 'Nail Repair', price: '$5+' },
      { name: 'Cutdown', price: '$3+' },
      { name: 'Artificial Removal', price: '$15+' },
      { name: 'Dip/Gel Removal', price: '$10+' },
      { name: 'French Design', price: '$7+' },
      { name: '2 Nails Design', price: '$7+' },
      { name: '10 Nails Design', price: '$20+' },
      { name: 'Shapes', price: '$5+' }
    ]
  },
  {
    title: 'Pedicures',
    items: [
      { name: 'Classic Pedicure', price: '$35' },
      { name: 'Jelly Pedicure', price: '$45' },
      { name: 'Deluxe Pedicure', price: '$45' },
      { name: 'Spa Pedicure', price: '$50' },
      { name: 'Detox Pedicure', price: '$60' },
      { name: 'Kid Pedicure (10 and under)', price: '$25' },
      { name: 'Gel Color', price: '$10+' },
      { name: 'Gel Color w/ French Tip', price: '$15+' },
      { name: 'Acrylic on 1 big toe', price: '$8+' },
      { name: 'Acrylic toe set', price: '$45+' }
    ]
  },
  {
    title: 'Waxing',
    items: [
      { name: 'Eyebrows', price: '$12+' },
      { name: 'Upper Lip', price: '$8+' },
      { name: 'Chin', price: '$10+' },
      { name: 'Sideburns', price: '$15+' },
      { name: 'Full Face', price: '$40+' },
      { name: 'Underarms', price: '$25+' },
      { name: 'Full Arms', price: '$45+' },
      { name: 'Half Arms', price: '$30+' },
      { name: 'Full Chest', price: '$50+' },
      { name: 'Full Back', price: '$50+' },
      { name: 'Half Legs', price: '$40+' },
      { name: 'Full Legs', price: '$60+' },
      { name: 'Bikini', price: '$35+' },
      { name: 'Brazilian', price: '$60+' },
      { name: '10 Fingers', price: '$10+' },
      { name: '10 Toes', price: '$10+' }
    ]
  }
];

const servicesGrid = document.getElementById('servicesGrid');

function renderServices() {
  if (!servicesGrid) return;

  servicesGrid.innerHTML = services.map((service) => {
    const visibleItems = service.items.slice(0, 4);
    const fullList = service.items.map((item) => `${item.name} — ${item.price}`);

    return `
      <article class="card">
        <h3>${service.title}</h3>
        <ul class="price-list">
          ${visibleItems
            .map(
              (item) => `
                <li>
                  <span class="name">${item.name}</span>
                  <span class="line"></span>
                  <span class="price">${item.price}</span>
                </li>
              `
            )
            .join('')}
        </ul>
        <button
          class="more-btn"
          type="button"
          data-title="${service.title}"
          data-items='${JSON.stringify(fullList)}'
        >
          View More
        </button>
      </article>
    `;
  }).join('');
}

renderServices();

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

const closeServiceModal = () => {
  if (!serviceModal) return;
  serviceModal.classList.remove('open');
  serviceModal.setAttribute('aria-hidden', 'true');
};

moreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const title = button.dataset.title;
    const items = JSON.parse(button.dataset.items || '[]');

    if (serviceModalTitle) serviceModalTitle.textContent = title;
    if (serviceModalList) {
      serviceModalList.innerHTML = items
        .map((item) => {
          const [name, price] = item.split(' — ');
          return `
            <li class="service-modal-item">
              <span class="service-modal-name">${name}</span>
              <span class="service-modal-line"></span>
              <span class="service-modal-price">${price}</span>
            </li>
          `;
        })
        .join('');
    }

    if (serviceModal) {
      serviceModal.classList.add('open');
      serviceModal.setAttribute('aria-hidden', 'false');
    }
  });
});

if (serviceModalClose) {
  serviceModalClose.addEventListener('click', closeServiceModal);
}

if (serviceModal) {
  serviceModal.addEventListener('click', (event) => {
    if (event.target === serviceModal) {
      closeServiceModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (modal && modal.classList.contains('open')) {
      closeModal();
    }
    if (serviceModal && serviceModal.classList.contains('open')) {
      closeServiceModal();
    }
  }
});
