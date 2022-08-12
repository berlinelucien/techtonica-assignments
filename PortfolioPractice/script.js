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
    