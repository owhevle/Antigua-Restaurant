const links = document.querySelectorAll('.navigation');

function setActiveLink(link) {
  links.forEach(item => item.classList.remove('active'));

  link.classList.add('active');
}

links.forEach(link => {
  link.addEventListener('click', () => setActiveLink(link));
});

document.addEventListener('DOMContentLoaded', () => {
  const defaultActive = document.querySelector('.navigation.active');
  if (defaultActive) defaultActive.classList.add('active');
});
