// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');
      
// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Add active class to clicked link
    this.classList.add('active');
  });
});

// Update active state on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100; // Offset for better detection

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});