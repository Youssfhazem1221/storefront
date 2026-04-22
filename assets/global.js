/**
 * NOUVEAU — Global JavaScript
 * Cart drawer, mobile menu, variant picker, quantity buttons
 */

(function() {
  'use strict';

  /* ───────────────────── Cart Drawer ───────────────────── */
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartPanel = document.getElementById('cart-drawer-panel');
  const cartClose = document.getElementById('cart-drawer-close');

  function openCartDrawer() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('pointer-events-none');
    cartDrawer.setAttribute('aria-hidden', 'false');
    cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
    cartOverlay.classList.add('opacity-100', 'pointer-events-auto');
    cartPanel.classList.remove('translate-x-full');
    cartPanel.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    if (!cartDrawer) return;
    cartOverlay.classList.add('opacity-0', 'pointer-events-none');
    cartOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    cartPanel.classList.add('translate-x-full');
    cartPanel.classList.remove('translate-x-0');
    document.body.style.overflow = '';
    setTimeout(() => {
      cartDrawer.classList.add('pointer-events-none');
      cartDrawer.setAttribute('aria-hidden', 'true');
    }, 300);
  }

  document.querySelectorAll('[data-cart-trigger]').forEach(el => {
    el.addEventListener('click', (e) => { e.preventDefault(); openCartDrawer(); });
  });
  if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  /* ───────────────────── Mobile Menu ───────────────────── */
  const mobileMenuOpen = document.getElementById('mobile-menu-open');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuOpen && mobileMenu) {
    mobileMenuOpen.addEventListener('click', () => {
      mobileMenu.classList.remove('pointer-events-none');
      mobileMenu.querySelector('[data-overlay]').classList.remove('opacity-0');
      mobileMenu.querySelector('[data-overlay]').classList.add('opacity-100');
      mobileMenu.querySelector('[data-panel]').classList.remove('-translate-x-full');
      mobileMenu.querySelector('[data-panel]').classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenu.querySelector('[data-overlay]').addEventListener('click', closeMobileMenu);
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.querySelector('[data-overlay]').classList.add('opacity-0');
    mobileMenu.querySelector('[data-overlay]').classList.remove('opacity-100');
    mobileMenu.querySelector('[data-panel]').classList.add('-translate-x-full');
    mobileMenu.querySelector('[data-panel]').classList.remove('translate-x-0');
    document.body.style.overflow = '';
    setTimeout(() => mobileMenu.classList.add('pointer-events-none'), 300);
  }

  /* ───────────────────── Variant Select (Product Page) ───────────────────── */
  const variantSelect = document.getElementById('variant-select');
  const variantInput = document.getElementById('variant-id');
  const priceEl = document.getElementById('product-price');
  const comparePriceEl = document.getElementById('product-compare-price');
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  const addToCartText = document.getElementById('add-to-cart-text');

  if (variantSelect) {
    variantSelect.addEventListener('change', function() {
      const option = this.options[this.selectedIndex];
      const variantId = option.value;
      const price = option.dataset.price;
      const comparePrice = option.dataset.comparePrice;
      const available = option.dataset.available === 'true';

      if (variantInput) variantInput.value = variantId;
      if (priceEl) priceEl.textContent = price;
      if (comparePriceEl) {
        comparePriceEl.textContent = comparePrice || '';
        comparePriceEl.style.display = comparePrice ? 'inline' : 'none';
      }
      if (addToCartBtn) addToCartBtn.disabled = !available;
      if (addToCartText) addToCartText.textContent = available ? 'Add to Cart' : 'Sold Out';
    });
  }

  /* ───────────────────── Sticky Header ───────────────────── */
  const header = document.getElementById('site-header');
  let lastScrollY = 0;

  if (header) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
      lastScrollY = scrollY;
    }, { passive: true });
  }

  /* ───────────────────── Announcement Bar Close ───────────────────── */
  const announcementClose = document.getElementById('announcement-close');
  const announcementBar = document.getElementById('announcement-bar');
  if (announcementClose && announcementBar) {
    announcementClose.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      sessionStorage.setItem('announcement-closed', 'true');
    });
    if (sessionStorage.getItem('announcement-closed') === 'true') {
      announcementBar.style.display = 'none';
    }
  }

  /* ───────────────────── Add to Cart AJAX ───────────────────── */
  document.querySelectorAll('form[action="/cart/add"]').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const submitBtn = this.querySelector('[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Adding...';
      }

      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(() => {
        if (submitBtn) submitBtn.textContent = 'Added ✓';
        // Refresh cart drawer
        fetch('/?sections=cart-drawer-content')
          .then(r => r.json())
          .catch(() => {});
        // Update cart count in header
        fetch('/cart.js')
          .then(r => r.json())
          .then(cart => {
            document.querySelectorAll('[data-cart-count]').forEach(el => {
              el.textContent = cart.item_count;
            });
          });
        openCartDrawer();
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }
        }, 2000);
      })
      .catch(() => {
        if (submitBtn) {
          submitBtn.textContent = 'Error — Try Again';
          submitBtn.disabled = false;
          setTimeout(() => { submitBtn.textContent = originalText; }, 2000);
        }
      });
    });
  });

})();
