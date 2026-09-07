/* ============================================================
   CAB Centrum Analizy Badań — skrypt strony
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Rok w stopce ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menu mobilne ---------- */
  var nav = document.querySelector(".nav");
  var toggle = document.getElementById("nav-toggle");
  var drawer = document.getElementById("nav-drawer");

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove("is-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Otwórz menu");
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
    });
  }

  // Zamknij menu po kliknięciu w link
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
  }

  // Zamknij menu klawiszem Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Animacje reveal przy scrollu ---------- */
  var reveals = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Aktywna pozycja w menu ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav__menu a");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var linkMap = {};
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      linkMap[id] = link;
    });

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("is-active"); });
            var active = linkMap[entry.target.id];
            if (active) active.classList.add("is-active");
          }
        });
      },
      { threshold: 0.4, rootMargin: "-30% 0px -55% 0px" }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Obsługa formularza kontaktowego ----------
     Uwaga: to jest walidacja i informacja zwrotna po stronie
     przeglądarki. Realna wysyłka wymaga podłączenia backendu
     (np. Formspree lub własny endpoint) — patrz form-note w HTML. */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";
      status.textContent = "";

      if (!form.checkValidity()) {
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        status.classList.add("is-error");
        status.textContent = "Uzupełnij wymagane pola oznaczone gwiazdką.";
        return;
      }

      // Placeholder wysyłki — do zastąpienia integracją z usługą e-mail.
      status.classList.add("is-ok");
      status.textContent =
        "Dziękujemy. Formularz jest gotowy — przed publikacją podłącz usługę wysyłki, aby zapytania trafiały na skrzynkę CAB.";
      form.reset();
    });
  }
})();
