/* ==========================================================================
   STUDIO DATA CONFIGURATION (Replace placeholders with verified GBP details)
   ========================================================================== */
const STUDIO_DATA = {
  name: '[STUDIO NAME]',
  tagline: '[BESPOKE INK & FINE ART ATELIER]',
  headline: 'SKIN AS LIVING ARCHITECTURE',
  subheadline:
    '[STUDIO DESCRIPTION PLACEHOLDER — A private, appointment-driven tattoo studio dedicated to timeless custom artistry, anatomical precision, and hospital-grade sterilization.]',
  address: '[COMPLETE STREET ADDRESS, CITY, STATE, POSTAL CODE]',
  phoneDisplay: '[+00 00000 00000]',
  whatsappNumber: '[WHATSAPP_DIGITS_ONLY]', // e.g., "919876543210"
  whatsappPrefill:
    'Hello [STUDIO NAME], I would like to inquire about booking a tattoo consultation.',
  instagramUrl: '[INSTAGRAM_PROFILE_URL]',
  googleMapsUrl: 'https://share.google/2OfRVvk9sg6pfGUL6',
  googleMapsEmbedUrl: '[GOOGLE_MAPS_IFRAME_EMBED_SRC_URL]',
  ratingScore: '[X.X]',
  totalReviews: '[XX]',
  yearsExperience: '[XX+]',
  aboutHeading: 'Where Fine Art Meets Permanent Craft',
  aboutParagraphs: [
    '[ABOUT PARAGRAPH 1 PLACEHOLDER — Insert verified studio origin story, artistic philosophy, and commitment to custom-drawn work.]',
    '[ABOUT PARAGRAPH 2 PLACEHOLDER — Insert verified details regarding studio atmosphere, single-use sterile equipment, and personalized client consultations.]',
  ],
  hours: [
    { day: 'Monday', time: '[HOURS PLACEHOLDER]' },
    { day: 'Tuesday', time: '[HOURS PLACEHOLDER]' },
    { day: 'Wednesday', time: '[HOURS PLACEHOLDER]' },
    { day: 'Thursday', time: '[HOURS PLACEHOLDER]' },
    { day: 'Friday', time: '[HOURS PLACEHOLDER]' },
    { day: 'Saturday', time: '[HOURS PLACEHOLDER]' },
    { day: 'Sunday', time: '[HOURS PLACEHOLDER]' },
  ],
  services: [
    {
      title: '[SERVICE 1 — e.g., Custom Bespoke Tattoos]',
      subtitle: 'One-of-One Concept Design',
      description:
        '[VERIFIED SERVICE DESCRIPTION PLACEHOLDER — Tailored compositions drafted specifically for your anatomy and narrative.]',
      image:
        'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: '[SERVICE 2 — e.g., Black & Grey Realism]',
      subtitle: 'Micro-Detail & Photorealism',
      description:
        '[VERIFIED SERVICE DESCRIPTION PLACEHOLDER — High-contrast shading, depth, and lifelike textural precision.]',
      image:
        'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: '[SERVICE 3 — e.g., Fine Line & Minimalist]',
      subtitle: 'Delicate Needle Precision',
      description:
        '[VERIFIED SERVICE DESCRIPTION PLACEHOLDER — Crisp single-needle geometry, subtle botanicals, and refined typography.]',
      image:
        'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: '[SERVICE 4 — e.g., Cover-Up & Rework]',
      subtitle: 'Architectural Transformation',
      description:
        '[VERIFIED SERVICE DESCRIPTION PLACEHOLDER — Strategic redesigns that seamlessly transform existing ink into cohesive new artwork.]',
      image:
        'https://images.unsplash.com/photo-1590246814883-57c511e76917?auto=format&fit=crop&w=900&q=80',
    },
  ],
  portfolioCategories: ['All', 'Realism', 'Fine Line', 'Custom Blackwork', 'Large Scale'],
  portfolio: [
    {
      id: 1,
      title: '[PIECE TITLE 1]',
      category: 'Realism',
      artist: '[ARTIST NAME]',
      image:
        'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 2,
      title: '[PIECE TITLE 2]',
      category: 'Fine Line',
      artist: '[ARTIST NAME]',
      image:
        'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 3,
      title: '[PIECE TITLE 3]',
      category: 'Custom Blackwork',
      artist: '[ARTIST NAME]',
      image:
        'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 4,
      title: '[PIECE TITLE 4]',
      category: 'Large Scale',
      artist: '[ARTIST NAME]',
      image:
        'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 5,
      title: '[PIECE TITLE 5]',
      category: 'Realism',
      artist: '[ARTIST NAME]',
      image:
        'https://images.unsplash.com/photo-1590246814883-57c511e76917?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 6,
      title: '[PIECE TITLE 6]',
      category: 'Custom Blackwork',
      artist: '[ARTIST NAME]',
      image:
        'https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1000&q=85',
    },
  ],
  reviews: [
    {
      author: '[VERIFIED GOOGLE REVIEWER 1]',
      rating: 5,
      date: '[REVIEW DATE]',
      text: '[PASTE VERIFIED GOOGLE REVIEW TEXT HERE — Do not fabricate reviews.]',
    },
    {
      author: '[VERIFIED GOOGLE REVIEWER 2]',
      rating: 5,
      date: '[REVIEW DATE]',
      text: '[PASTE VERIFIED GOOGLE REVIEW TEXT HERE — Do not fabricate reviews.]',
    },
    {
      author: '[VERIFIED GOOGLE REVIEWER 3]',
      rating: 5,
      date: '[REVIEW DATE]',
      text: '[PASTE VERIFIED GOOGLE REVIEW TEXT HERE — Do not fabricate reviews.]',
    },
  ],
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Preloader
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 950);

  // 2. Bind Text Fields
  document.querySelectorAll('[data-bind]').forEach((el) => {
    const key = el.getAttribute('data-bind');
    if (STUDIO_DATA[key]) {
      el.textContent = STUDIO_DATA[key];
    }
  });

  document.title = `${STUDIO_DATA.name} | Bespoke Luxury Tattoo Atelier`;
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // 3. Configure Links (WhatsApp, Phone, Instagram, Google Maps)
  const whatsappUrl = `https://wa.me/${STUDIO_DATA.whatsappNumber}?text=${encodeURIComponent(
    STUDIO_DATA.whatsappPrefill
  )}`;

  document.querySelectorAll('.whatsapp-link').forEach((link) => {
    link.href = whatsappUrl;
  });

  const phoneLink = document.getElementById('phone-link');
  if (phoneLink) phoneLink.href = `tel:${STUDIO_DATA.phoneDisplay}`;

  const igLink = document.getElementById('instagram-link');
  const footerIg = document.getElementById('footer-instagram');
  if (igLink) igLink.href = STUDIO_DATA.instagramUrl;
  if (footerIg) footerIg.href = STUDIO_DATA.instagramUrl;

  document.querySelectorAll('.google-link').forEach((link) => {
    link.href = STUDIO_DATA.googleMapsUrl;
  });

  const mapIframe = document.getElementById('google-map-iframe');
  if (mapIframe && STUDIO_DATA.googleMapsEmbedUrl !== '[GOOGLE_MAPS_IFRAME_EMBED_SRC_URL]') {
    mapIframe.src = STUDIO_DATA.googleMapsEmbedUrl;
  }

  // 4. Render About Paragraphs
  const aboutContainer = document.getElementById('about-paragraphs');
  aboutContainer.innerHTML = STUDIO_DATA.aboutParagraphs
    .map((text) => `<p>${text}</p>`)
    .join('');

  // 5. Render Operating Hours
  const hoursList = document.getElementById('hours-list');
  hoursList.innerHTML = STUDIO_DATA.hours
    .map((h) => `<li><span>${h.day}</span><span>${h.time}</span></li>`)
    .join('');

  // 6. Render Services
  const servicesGrid = document.getElementById('services-grid');
  servicesGrid.innerHTML = STUDIO_DATA.services
    .map(
      (s, idx) => `
      <article class="service-card reveal-up delay-${(idx % 2) + 1}">
        <div class="service-img-wrap">
          <img src="${s.image}" alt="${s.title}" loading="lazy" />
        </div>
        <div class="service-body">
          <span class="service-subtitle">${s.subtitle}</span>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-desc">${s.description}</p>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="service-link">
            <span>Inquire About This Style</span>
            <i data-lucide="arrow-up-right"></i>
          </a>
        </div>
      </article>
    `
    )
    .join('');

  // 7. Render Portfolio Filters & Items
  const filterContainer = document.getElementById('portfolio-filters');
  const portfolioGrid = document.getElementById('portfolio-grid');
  let activeCategory = 'All';

  function renderFilters() {
    filterContainer.innerHTML = STUDIO_DATA.portfolioCategories
      .map(
        (cat) => `
        <button class="filter-btn ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">
          ${cat}
        </button>
      `
      )
      .join('');

    filterContainer.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-category');
        renderFilters();
        renderPortfolio();
      });
    });
  }

  function renderPortfolio() {
    const filtered =
      activeCategory === 'All'
        ? STUDIO_DATA.portfolio
        : STUDIO_DATA.portfolio.filter((item) => item.category === activeCategory);

    portfolioGrid.innerHTML = filtered
      .map(
        (piece) => `
        <div class="portfolio-item" data-id="${piece.id}">
          <img src="${piece.image}" alt="${piece.title}" loading="lazy" />
          <div class="portfolio-overlay">
            <div>
              <span class="portfolio-cat">${piece.category}</span>
              <h3 class="portfolio-name">${piece.title}</h3>
              <p class="portfolio-artist">Artist: ${piece.artist}</p>
            </div>
            <div class="expand-badge">
              <i data-lucide="maximize-2"></i>
            </div>
          </div>
        </div>
      `
      )
      .join('');

    lucide.createIcons();

    portfolioGrid.querySelectorAll('.portfolio-item').forEach((card) => {
      card.addEventListener('click', () => {
        const id = Number(card.getAttribute('data-id'));
        const item = STUDIO_DATA.portfolio.find((p) => p.id === id);
        if (item) openLightbox(item);
      });
    });
  }

  renderFilters();
  renderPortfolio();

  // 8. Render Reviews
  const reviewsGrid = document.getElementById('reviews-grid');
  reviewsGrid.innerHTML = STUDIO_DATA.reviews
    .map(
      (r, idx) => `
      <div class="review-card reveal-up delay-${idx + 1}">
        <div>
          <div class="review-top">
            <div class="stars-row">
              ${'<i data-lucide="star" class="star-filled"></i>'.repeat(r.rating)}
            </div>
            <i data-lucide="quote" class="quote-icon"></i>
          </div>
          <p class="review-text">“${r.text}”</p>
        </div>
        <div class="review-footer">
          <span class="review-author">${r.author}</span>
          <span class="review-date">${r.date}</span>
        </div>
      </div>
    `
    )
    .join('');

  // Initialize Lucide Icons
  lucide.createIcons();

  // 9. Navbar Scroll & Mobile Toggle
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Subtle Hero Parallax
      const heroBg = document.getElementById('hero-parallax');
      if (heroBg && window.scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    },
    { passive: true }
  );

  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });

  // 10. Lightbox Modal Controls
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(piece) {
    document.getElementById('lightbox-img').src = piece.image;
    document.getElementById('lightbox-img').alt = piece.title;
    document.getElementById('lightbox-category').textContent = piece.category;
    document.getElementById('lightbox-title').textContent = piece.title;
    document.getElementById('lightbox-artist').textContent = `Artist: ${piece.artist}`;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

  // 11. IntersectionObserver for Smooth Scroll Reveals
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal-up, .reveal-left').forEach((el) => {
    observer.observe(el);
  });
});
