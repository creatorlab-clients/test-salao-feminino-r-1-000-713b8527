// Basic template — smooth scroll + sticky nav blur
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
  var nav = document.querySelector('.nav');
  if (nav) {
    function updateNav() { nav.classList.toggle('nav--scrolled', window.scrollY > 40); }
    window.addEventListener('scroll', updateNav, { passive: true });
  }
});
