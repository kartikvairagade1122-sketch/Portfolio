/**
 * CONTACT FORM VALIDATION & SUBMISSION HANDLER
 * Candidate: Kartik Vairagade
 * Features: Live validation, Regex email check, character counter, mailto launcher & feedback state
 */

(function ($) {
  'use strict';

  const $form = $('#contactForm');
  const $name = $('#contactName');
  const $email = $('#contactEmail');
  const $subject = $('#contactSubject');
  const $message = $('#contactMessage');
  const $charCount = $('#charCount');
  const $submitBtn = $('#contactSubmitBtn');
  const $formAlertSuccess = $('#formAlertSuccess');
  const $formAlertError = $('#formAlertError');

  // Email regular expression
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  /* ==========================================================================
     1. REAL-TIME INPUT VALIDATION & CHARACTER COUNTER
     ========================================================================== */
  $message.on('input', function () {
    const len = $(this).val().length;
    $charCount.text(`${len} / 1000`);
    if (len >= 10) {
      clearError($message);
    }
  });

  $name.on('input', function () {
    if ($(this).val().trim().length >= 2) {
      clearError($name);
    }
  });

  $email.on('input', function () {
    if (emailRegex.test($(this).val().trim())) {
      clearError($email);
    }
  });

  $subject.on('input', function () {
    if ($(this).val().trim().length >= 3) {
      clearError($subject);
    }
  });

  function setError($el, msg) {
    $el.addClass('is-invalid');
    $el.siblings('.invalid-feedback-custom').text(msg);
  }

  function clearError($el) {
    $el.removeClass('is-invalid');
  }

  /* ==========================================================================
     2. FORM SUBMISSION HANDLER
     ========================================================================== */
  $form.on('submit', function (e) {
    e.preventDefault();

    // Reset alert banners
    $formAlertSuccess.hide();
    $formAlertError.hide();

    let isValid = true;

    // Validate Name
    const nameVal = $name.val().trim();
    if (nameVal.length < 2) {
      setError($name, 'Please enter your name (minimum 2 characters).');
      isValid = false;
    } else {
      clearError($name);
    }

    // Validate Email
    const emailVal = $email.val().trim();
    if (!emailRegex.test(emailVal)) {
      setError($email, 'Please provide a valid email address (e.g., name@example.com).');
      isValid = false;
    } else {
      clearError($email);
    }

    // Validate Subject
    const subjectVal = $subject.val().trim();
    if (subjectVal.length < 3) {
      setError($subject, 'Please enter a subject (minimum 3 characters).');
      isValid = false;
    } else {
      clearError($subject);
    }

    // Validate Message
    const messageVal = $message.val().trim();
    if (messageVal.length < 10) {
      setError($message, 'Please write your message (minimum 10 characters).');
      isValid = false;
    } else {
      clearError($message);
    }

    if (!isValid) {
      $formAlertError.text('Please fix the errors highlighted above before submitting.').fadeIn();
      return;
    }

    // Button loading state
    const originalBtnHtml = $submitBtn.html();
    $submitBtn.prop('disabled', true).html(`
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span>Dispatching...</span>
    `);

    // Prepare direct Mailto link & feedback
    setTimeout(function () {
      const recipient = 'kartikvairagade1122@gmail.com';
      const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subjectVal} - from ${nameVal}`);
      const mailtoBody = encodeURIComponent(
        `Hello Kartik,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}\n\n---\nSent via Portfolio Contact Form`
      );
      
      const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open email client safely
      window.location.href = mailtoUrl;

      // Show success feedback
      $formAlertSuccess.html(`
        <strong><i class="bi bi-check-circle-fill me-1"></i> Message Prepared!</strong><br>
        Your mail client has been launched to send this directly to <code>${recipient}</code>. 
        If your mail client did not open automatically, 
        <a href="${mailtoUrl}" class="alert-link text-decoration-underline">click here to send</a> or copy my email above.
      `).fadeIn();

      if (window.showToast) {
        window.showToast('Message ready in your email client!', 'bi-envelope-check-fill');
      }

      // Reset form fields
      $form[0].reset();
      $charCount.text('0 / 1000');
      $submitBtn.prop('disabled', false).html(originalBtnHtml);
    }, 600);
  });

})(jQuery);
