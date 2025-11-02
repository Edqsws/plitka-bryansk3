// theme.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.createElement('button');
  toggle.classList.add('theme-toggle');
  toggle.innerHTML = '🌓';
  document.querySelector('header').appendChild(toggle);

  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});