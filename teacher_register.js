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
// let pending=document.getElementById("pendingLbl");
// let pendingError=document.getElementById("pendingError");
let region = document.getElementById("region");
let district = document.getElementById("district");
let town = document.getElementById("town");
let qualification = document.getElementById("qualification");
let whereLbl = document.getElementById("where-lbl");
let primary = document.getElementById("primary");
let jhs = document.getElementById("jhs");
let shs = document.getElementById("shs");
let vocational = document.getElementById("vocational");
let subject =document.getElementById("subject");
let phone = document.getElementById("phone");
let link = document.getElementById("link");
let amount = document.getElementById("amount");


function showSpinner(){
   submitBtn.disabled = true;
   submitBtn.style.backgroundColor='#ccc';
   document.querySelector('.spinner').style.display = 'block';
}


let school_level=[];

primary.onclick=function(){
   let primary_data = "Primary";
   school_level.push(primary_data);
   primary.style.pointerEvents='none'
   primary.style.color='lightgray'
   whereLbl.style.color='black'
}
jhs.onclick=function(){
   let jsh_data = "JHS";
   school_level.push(jsh_data);
   jhs.style.pointerEvents='none'
   jhs.style.color='lightgray'
   whereLbl.style.color='black'
}
shs.onclick=function(){
   let shs_data = "SHS";
   school_level.push(shs_data);
   shs.style.color='lightgray'
   shs.style.pointerEvents='none'
   whereLbl.style.color='black'
}
vocational.onclick=function(){
   let vocational_data = "Vocational";
   school_level.push(vocational_data);
   vocational.style.pointerEvents='none'
   vocational.style.color='lightgray'
   whereLbl.style.color='black'
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

function qualificationLoad(){
    const qualification = [
       {name: "Diploma"},
       {name: "Degree"},
       {name: "Masters"},
       {name: "Phd"},
    ];
    qualification.sort((a, b) => (a.name > b.name)? 1 : -1);
 
    const selectQualification=document.getElementById("qualification");
 
    qualification.forEach(qualification =>{
       const option=document.createElement("option");
      //  option.value=qualification.code;
       option.text=qualification.name;
       selectQualification.appendChild(option);
    });
 }

 qualificationLoad();

 function regionLoad(){
    const region = [
       {name: "G.Accra"},
       {name: "Central"},
       {name: "Ashanti"},
       {name: "Eastern"},
       {name: "Northern"},
       {name: "Western"},
       {name: "Upper East"},
       {name: "Upper West"},
       {name: "Brong Ahafo"},
       {name: "Volta"},
       {name: "Ahafo"},
       {name: "Western North"},
       {name: "Savannah"},
       {name: "Bono East"},
       {name: "Oti"},
    ];
    region.sort((a, b) => (a.name > b.name)? 1 : -1);
 
    const selectRegion=document.getElementById("region");
 
    region.forEach(region =>{
       const option=document.createElement("option");
      //  option.value=region.code;
       option.text=region.name;
       selectRegion.appendChild(option);
    });
 }

 regionLoad();

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

form.addEventListener('submit', function(event){
   event.preventDefault();

   showSpinner();

   if(primary.style.pointerEvents ==='none' || jhs.style.pointerEvents ==='none' || shs.style.pointerEvents ==='none' || vocational.style.pointerEvents ==='none'){

   let school_level_data=school_level.join(', ')

   // if(!navigator.onLine){
   //  pending.innerHTML='';
   //  pendingError.innerHTML='Oops!! Poor Connection';
   //  return null;
   //  }
   //  else{
   //  pendingError.innerHTML='';
   //  pending.innerHTML='● ● ●';

    if(password.value!==confirm_password.value){
   //  pending.innerHTML='';
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
      //   pending.innerHTML='';
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
               //  pending.innerHTML='';
               usernameError.textContent='username already exists'
               usernameError.style.display='block';
               window.location.href='#username-error'
               submitBtn.disabled=false;
               submitBtn.style.backgroundColor='#4CAF50'
               document.querySelector('.spinner').style.display = 'none';
            }
            if(error.email){
               //  pending.innerHTML='';
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

      // first_name.value.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase();
      // last_name.value.charAt(0).toUpperCase() + last_name.slice(1).toLowerCase();

    const userData={
        username: formData.get('username'),
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
    // https://gengenius-back.onrender.com/auth/jwt/create 
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
      region: formData.get('region'),
      district: formData.get('district').charAt(0).toUpperCase() + formData.get('district').slice(1).toLowerCase(),
      town: formData.get('town').charAt(0).toUpperCase() + formData.get('town').slice(1).toLowerCase(),
      qualification: formData.get('qualification'),
      school_level: school_level_data,
      subject: formData.get('subject'),
      phone: formData.get('phone'),
      link: formData.get('link'),
      amount: formData.get('amount'),
      status: 'Teacher',
      };
      secondRegistration(secondUserData);
      // console.log(secondUserData);
     
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
   fetch('https://gengenius-back.onrender.com/manage_geniusera/teachers/me/', {
   method: 'PUT',
   headers: {
      'Authorization': `JWT ${accessToken}`,
      'Content-Type': 'application/json',
   },
   body: JSON.stringify(secondUserData)
})
.then(response =>{
   if(!response.ok){
      throw new Error('Network was not ok');
   }
   else{
      document.querySelector('.spinner').style.display = 'none';
      window.location.href="login.html";

   }
   return response.json();
})
.then(data => {

})
.catch(error =>{
   console.log('Error', error)
});
localStorage.removeItem('accessToken');
}


// }


}
else{
   whereLbl.style.color='red';
   window.location.href='#where-lbl'
   submitBtn.disabled=false;
   submitBtn.style.backgroundColor='#4CAF50'
   document.querySelector('.spinner').style.display = 'none';
   return;
}
});

