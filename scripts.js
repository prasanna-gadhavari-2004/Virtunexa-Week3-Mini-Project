document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');

    // Collapse all open items
    document.querySelectorAll('.accordion-button').forEach(btn => {
      btn.classList.remove('active');
      btn.nextElementSibling.style.display = 'none';
    });

    // Expand current if it wasn't active
    if (!isActive) {
      button.classList.add('active');
      button.nextElementSibling.style.display = 'block';
    }
  });
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
