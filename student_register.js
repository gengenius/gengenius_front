let form=document.getElementById("form");
let submitBtn=document.getElementById("submit-btn");
let username=document.getElementById("username");
let usernameError=document.getElementById("username-error");
let first_name=document.getElementById("first-name");
let last_name=document.getElementById("last-name");
let email=document.getElementById("email");
let emailError=document.getElementById("email-error");
let password=document.getElementById("password");
let passwordError=document.getElementById("password-error");
let confirm_password=document.getElementById("confirm-password");
// let usernameError=document.getElementById("usernameError");
// let passwordError1=document.getElementById("passwordError1");
// let passwordError2=document.getElementById("passwordError2");
// let passwordTooShort=document.getElementById("passwordTooShort");
// let emailError=document.getElementById("emailError");
let pendingError=document.getElementById("pendingError");
let phone = document.getElementById("phone");

function showSpinner(){
   submitBtn.disabled = true;
   submitBtn.style.backgroundColor='#ccc';
   document.querySelector('.spinner').style.display = 'block';
}


function genderLoad(){
   const gender = [
      {name: "Male"},
      {name: "Female"},
   ];
   // gender.sort((a, b) => (a.name > b.name)? 1 : -1);

   const selectGender=document.getElementById("gender");

   gender.forEach(gender =>{
      const option=document.createElement("option");
      option.text=gender.name;
      selectGender.appendChild(option);
   });
}
genderLoad();

function isValidUsername(username) {
   // Regular expression to match the valid characters
   const regex = /^[a-zA-Z0-9@.\-+_]+$/;
   
   // Test the username against the regular expression
   return regex.test(username);
}

 username.addEventListener('input', function(){
   if (isValidUsername(username.value) || username.value==='') {
      usernameError.style.display='none';
      submitBtn.disabled=false;
      submitBtn.style.backgroundColor='#4CAF50'
   }
   else {
      usernameError.textContent='Enter valid username'
      usernameError.style.display='block';
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor='#ccc';
   }
 })
 email.addEventListener('input', function(){
   emailError.style.display='none'
 })
 password.addEventListener('input', function(){
   passwordError.style.display='none'
 })
 confirm_password.addEventListener('input', function(){
   passwordError.style.display='none'
 })


 document.addEventListener('DOMContentLoaded', () => {
   // Function to update the notification based on connection status
   function updateOnlineStatus() {
       if (!navigator.onLine) {
           pendingError.style.display = 'block';
           window.location.href='#pendingError';
       } else {
           pendingError.style.display = 'none';
       }
   }

   // Event listeners for online and offline events
   window.addEventListener('online', updateOnlineStatus);
   window.addEventListener('offline', updateOnlineStatus);

   // Check connection status on page load
   updateOnlineStatus();



form.addEventListener('submit', function(event){
   event.preventDefault();

   showSpinner();

   if (!navigator.onLine) {
      alert('No internet connection. Please check your network and try again.');
      return;
    }
    else{

   if(password.value!==confirm_password.value){
       passwordError.style.display='block'
       passwordError.textContent='Passwords do not match!';
       password.value='';
       confirm_password.value='';
       window.location.href='#password-error'
       submitBtn.disabled=false;
       submitBtn.style.backgroundColor='#4CAF50'
       document.querySelector('.spinner').style.display = 'none';
       return;
       }
   else if(password.value.length<8){
         passwordError.style.display='block';
         passwordError.textContent='Must contain at least 8 characters';
         window.location.href='#password-error'
         submitBtn.disabled=false;
         submitBtn.style.backgroundColor='#4CAF50'
         document.querySelector('.spinner').style.display = 'none';
         return;
      }
    

function firstRegistration(userData){
    // https://gengenius-back.onrender.com/auth/users/
    fetch("https://gengenius-back.onrender.com/auth/users/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        })
        .then(response => {
         if(!response.ok){
            // throw new Error("Network not ok");
        return response.json().then(error =>{
            if(error.username){
               usernameError.textContent='username already exists'
               usernameError.style.display='block';
               window.location.href='#username-error'
               submitBtn.disabled=false;
               submitBtn.style.backgroundColor='#4CAF50'
               document.querySelector('.spinner').style.display = 'none';
            }
            if(error.email){
                emailError.style.display='block';
                window.location.href='#email-error'
                submitBtn.disabled=false;
                submitBtn.style.backgroundColor='#4CAF50'
                document.querySelector('.spinner').style.display = 'none';
            }
        })   
        }

        else{
             const authUserData={
                username: formData.get('username'),
                password: formData.get('password'),
                };
        
        authenticateUser(authUserData);

        }
            return response.json();
        })
        .then(data => {
      //   console.log('first registration successful');
        })
        .catch(error => {
        console.log(error);
    })


    }

const formData=new FormData(this);

    const userData={
        username: formData.get('username').toLowerCase(),
        first_name: formData.get('first-name').charAt(0).toUpperCase() + formData.get('first-name').slice(1).toLowerCase(),
        last_name: formData.get('last-name').charAt(0).toUpperCase() + formData.get('last-name').slice(1).toLowerCase(),
        email: formData.get('email'),
        password: formData.get('password'),
        };

firstRegistration(userData);

// let dis=document.getElementById("dis")
// dis.onclick=function(){
// // console.log(school_level_data);
// console.log(ab)
// }

function authenticateUser(userData){

    fetch("https://gengenius-back.onrender.com/auth/jwt/create",{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    
       })
       .then(response => {
        if(!response.ok){
             throw new Error('authentication failed!');
          }
          return response.json();
       })
     .then(data => {
       // console.log(data.error)
       const accessToken=data.access;
       localStorage.setItem('accessToken', accessToken);
      //  console.log('authentication successfully')

      const secondUserData={
      gender: formData.get('gender'),
      phone: formData.get('phone'),
      status: 'Student',
      };
      secondRegistration(secondUserData);
     
    })
    .catch(error => {
     console.log('Error', error);
    });
    
}


function secondRegistration(secondUserData){
   const accessToken=localStorage.getItem('accessToken');
   // console.log(accessToken);
   if(!accessToken){
      // console.log('Access token not found in localStorage');
      return null;
   }

   // https://gengenius-back.onrender.com/manage_easywin/customers/me/ 
   fetch('https://gengenius-back.onrender.com/manage_geniusera/students/me/', {
   method: 'PUT',
   headers: {
      'Authorization': `JWT ${accessToken}`,
      'Content-Type': 'application/json',
   },
   body: JSON.stringify(secondUserData)
})
.then(response =>{
   if(!response.ok){
      throw new Error('second registration failed');
   }
   else{
      document.querySelector('.spinner').style.display = 'none';
      submitBtn.disabled=false;
      submitBtn.style.backgroundColor='#4CAF50'
      window.location.href="login.html";
   }
   return response.json();
})
.then(data => {
   // localStorage.getItem('access');
   // console.log('second registration successful', data);
   // window.location.href="login.html";
})
.catch(error =>{
   console.log('Error', error)
});
localStorage.removeItem('accessToken');
}


}



});

});