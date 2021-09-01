const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/*EMAIL JS*/
function sendForm() {
    const emailParams = {
        from_name: document.getElementById("fromName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    emailjs.send('service_h97e6hv', 'template_9zly852', emailParams)
       .then(function(res) {
           alert("Thank you for your message!");
           console.log("Success!", res.status)
       })
       .catch(function(res) {
           alert("Sorry! There was an unexpected error.")
           console.log("There was an error!", res.status)
       });
       
       document.getElementById("contactForm").reset(); 
}





