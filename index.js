document.body.classList.add('dark-theme');

const toggleButton = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  themeIcon.src = isDark
    ? 'https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png'
    : 'https://img.icons8.com/ios-filled/50/000000/sun--v1.png';
});

window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});