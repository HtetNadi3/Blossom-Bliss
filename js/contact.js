//contact page js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Validate form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || phone === '' || message === '') {
      alert("Please fill in all fields.");
      return; 
    }

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return; // Exit the function early if email is not valid
    }

    alert("Send message successfully");
  });
});