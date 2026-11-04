/**
 * PORTFOLIO CLIENT-SIDE INTERACTION SCRIPT
 * Candidate: Kartik Vairagade
 * Stack: JavaScript (ES6+) & jQuery
 * Responsibilities: ScrollSpy, Navbar state, Skills Filter, Card Hover Tilts, Toast System
 */

(function ($) {
  'use strict';

  // Check user preference for motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  window.showToast = function (message, iconClass = 'bi-check-circle-fill') {
    let $container = $('.toast-container-custom');
    if ($container.length === 0) {
      $container = $('<div class="toast-container-custom" aria-live="polite"></div>').appendTo('body');
    }

    const $toast = $(`
      <div class="toast-custom" role="alert">
        <i class="bi ${iconClass} toast-icon"></i>
        <span class="toast-msg">${message}</span>
      </div>
    `);

    $container.append($toast);

    // Trigger animation
    setTimeout(() => {
      $toast.addClass('show');
    }, 20);

    // Dismiss after 3.5s
    setTimeout(() => {
      $toast.removeClass('show');
      setTimeout(() => {
        $toast.remove();
      }, 400);
    }, 3500);
  };

  /* ==========================================================================
     2. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHT (SCROLL SPY)
     ========================================================================== */
  const $navbar = $('#siteNavbar');
  const $navLinks = $('.nav-link[href^="#"]');
  const sections = $('section[id]');

  function handleNavbarScroll() {
    const scrollPos = $(window).scrollTop();

    // Toggle background blur on scroll
    if (scrollPos > 50) {
      $navbar.addClass('scrolled');
    } else {
      $navbar.removeClass('scrolled');
    }

    // Back to top button visibility
    const $backToTop = $('#backToTopBtn');
    if (scrollPos > 400) {
      $backToTop.fadeIn(250);
    } else {
      $backToTop.fadeOut(250);
    }

    // Scroll spy link highlight
    const scrollWithOffset = scrollPos + 180;
    sections.each(function () {
      const top = $(this).offset().top;
      const height = $(this).outerHeight();
      const id = $(this).attr('id');

      if (scrollWithOffset >= top && scrollWithOffset < top + height) {
        $navLinks.removeClass('active');
        $(`.nav-link[href="#${id}"]`).addClass('active');
      }
    });
  }

  $(window).on('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initial execution

  // Close mobile navbar on link click
  $('.navbar-nav .nav-link').on('click', function () {
    const $toggler = $('.navbar-toggler');
    const $collapse = $('#navbarContent');
    if ($collapse.hasClass('show')) {
      $toggler.trigger('click');
    }
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 600);
    }
  });

  // Back to top action
  $('#backToTopBtn').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  /* ==========================================================================
     3. TECHNICAL SKILLS CATEGORY FILTERING
     ========================================================================== */
  $('.skill-filter-btn').on('click', function () {
    $('.skill-filter-btn').removeClass('active');
    $(this).addClass('active');

    const filterVal = $(this).data('filter');
    const $cards = $('.skill-card');

    if (filterVal === 'all') {
      $cards.stop().fadeIn(300);
    } else {
      $cards.stop().hide();
      $(`.skill-card[data-category*="${filterVal}"]`).fadeIn(300);
    }
  });

  /* ==========================================================================
     4. 1-CLICK CLIPBOARD COPY HELPERS
     ========================================================================== */
  $('[data-copy-text]').on('click', function (e) {
    e.preventDefault();
    const textToCopy = $(this).data('copy-text');
    const label = $(this).data('copy-label') || 'Text';

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        window.showToast(`${label} copied to clipboard!`, 'bi-clipboard-check-fill');
      }).catch(() => {
        fallbackCopyText(textToCopy, label);
      });
    } else {
      fallbackCopyText(textToCopy, label);
    }
  });

  function fallbackCopyText(text, label) {
    const $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val(text).select();
    try {
      document.execCommand('copy');
      window.showToast(`${label} copied to clipboard!`, 'bi-clipboard-check-fill');
    } catch (err) {
      window.showToast(`Could not copy: ${text}`, 'bi-exclamation-triangle-fill');
    }
    $temp.remove();
  }

  /* ==========================================================================
     5. SUBTLE 3D TILT EFFECT ON CARDS (Skipped if Reduced Motion)
     ========================================================================== */
  if (!prefersReducedMotion && window.innerWidth > 992) {
    $('.tilt-card').on('mousemove', function (e) {
      const $card = $(this);
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      const rotateX = -deltaY * 5; // Max 5 deg
      const rotateY = deltaX * 5;

      $card.css({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
        transition: 'transform 100ms ease'
      });
    }).on('mouseleave', function () {
      $(this).css({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: 'transform 300ms ease'
      });
    });
  }

  /* ==========================================================================
     6. CURRENT YEAR FOOTER AUTO-UPDATE
     ========================================================================== */
  $('#currentYear').text(new Date().getFullYear());

})(jQuery);
