let menu_button = document.querySelector(".menu-button");
let menu = document.querySelector(".menu");

menu_button.addEventListener("click", (event) => {
  
  menu.classList.toggle("active");
 
});
document.addEventListener("click", (event) => {
    if (!menu_button.contains(event.target)) {
        menu.classList.remove("active");
      }
    
})

// email validator
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue)) {
      event.preventDefault();
      errorMessage.textContent = 'Please enter a valid email address.';
    } else {
      errorMessage.textContent = '';
    }
  });


  
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.querySelector(".main-header").classList.add('fixed');
    } else {
      document.querySelector(".main-header").classList.remove('fixed');
    }
  }