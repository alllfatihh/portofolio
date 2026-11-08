// Interactive Functionalities for Muhammad Zaid Alfatih Portfolio

// 1. Initialize Lucide Icons
function initIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// 2. Scroll Progress Bar
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + '%';
  }, { passive: true });
}

// 3. Mobile Navigation Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking any link inside it
  const links = mobileMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// 4. Modal Lightbox Functions
function openModal(imageSrc, title, caption, category) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCaption = document.getElementById('modalCaptionText');
  const modalCategory = document.getElementById('modalCategoryTag');

  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  if (modalTitle) modalTitle.textContent = title || 'Pratinjau Screenshot';
  if (modalCaption) modalCaption.textContent = caption || 'Dokumentasi antarmuka dan alur sistem.';
  if (modalCategory) modalCategory.textContent = category || 'Dokumentasi Sistem';

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Modal Backdrop Click & ESC Key
function initModalListeners() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    // If clicked on backdrop container directly
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// 5. Spotlight Effect for Glass Cards
function initSpotlightCards() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// 6. Contact Form Handler (Direct Mailto with Prefilled Subject & Body)
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const subject = document.getElementById('subject')?.value || 'Tawaran Kolaborasi / Diskusi Portofolio';
    const message = document.getElementById('message')?.value || '';

    const bodyText = `Halo Muhammad Zaid Alfatih,\n\nNama: ${name}\nEmail Pengirim: ${email}\n\nPesan:\n${message}\n\n---\nDikirim melalui formulir portofolio online.`;
    
    const mailtoUrl = `mailto:fatihmuhammadzaid406@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    
    window.location.href = mailtoUrl;
  });
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initScrollProgress();
  initMobileMenu();
  initModalListeners();
  initSpotlightCards();
  initContactForm();
});
