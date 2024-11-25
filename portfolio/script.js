  // Wait for the typing animation to complete, then remove the cursor
  window.addEventListener('load', () => {
    const h1Element = document.querySelector('.hero h1');
    h1Element.addEventListener('animationend', (event) => {
      if (event.animationName === 'typing') {
        h1Element.classList.add('typing-complete');
      }
    });
  });
   // Hide the mouse scroll animation after scrolling down
   window.addEventListener('scroll', () => {
    const mouseElement = document.querySelector('.mouse');
    if (window.scrollY > 50) { // Change '50' to any scroll threshold
      mouseElement.style.opacity = '0';
    } else {
      mouseElement.style.opacity = '1';
    }
  });
  
  // Add Scroll Event Listener to Fade Out Mouse
  window.addEventListener('scroll', () => {
    const mouseElement = document.querySelector('.mouse');
    if (window.scrollY > 50) { // Scroll threshold to fade out
      mouseElement.style.opacity = '0';
    } else {
      mouseElement.style.opacity = '1';
    }
  });
  document.querySelector('.portfolio-button').addEventListener('click', function () {
    document.querySelector('.portfolio-content').classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Optional: Add an active class for the clicked link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});
