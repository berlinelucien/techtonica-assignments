/** FORM Function when client hit submit */



const userName = document.getElementById("name");
document.querySelector("form").addEventListener('submit',function(e){
    e.preventDefault();
    userName.required = true;
    console.log(userName.value);
});

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let userName = document.getElementById("name").value;
//     console.log(userName);
    
//     });
    

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          
        }
  
        form.classList.add('was-validated')
      }, false)
    
    })
  })()