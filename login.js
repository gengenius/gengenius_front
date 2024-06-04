let body=document.querySelector(".body");
let submitBtn=document.getElementById("submitBtn");
let loginFormContainer=document.querySelector(".login-form-container");
let teacherStudentContainer=document.querySelector(".teacher-or-student-container");
let signUp=document.getElementById("sign-up");
let teacherBtn=document.getElementById("teacherBtn");
let studentBtn=document.getElementById("studentBtn");

let username=document.getElementById("username");
let userPassError=document.getElementById("user-pass-error");
let password = document.getElementById("password");
let forgotPasswordContainer=document.getElementById("forgot-password-container");
let email=document.getElementById("email");

function showSpinner(){
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor='#ccc';
    document.querySelector('.spinner').style.display = 'block';
}

signUp.onclick=function(){
    loginFormContainer.style.display='none'
    teacherStudentContainer.style.display='block';
    body.style.backgroundColor="black";
}

teacherBtn.onclick=function(){
    window.location.href="teacher_register.html";
}

studentBtn.onclick=function(){
    window.location.href="student_register.html";
}


username.addEventListener('input', function(){
    userPassError.style.display='none'
  })
password.addEventListener('input', function(){
    userPassError.style.display='none'
  })


form.addEventListener('submit', function(e){
    e.preventDefault();

    showSpinner()
 
    // if(!navigator.onLine){
    //    pending.innerHTML='';
    //    pendingError.innerHTML='Oops!! Poor Connection';
    //    return null;
    // }
    // else{
    //    pendingError.innerHTML='';
    //    pending.innerHTML='● ● ●';
 
     
function login(){
       // http://127.0.0.1:8000/auth/jwt/create 
    fetch("https://gengenius-back.onrender.com/auth/jwt/create", {
     method: 'POST',
     headers: {
        'Content-Type': 'application/json'
     },
     body: JSON.stringify({username: username.value, password: password.value})
 
    })
    .then(response => {
     if(!response.ok){
       return response.json().then(error => {
          userPassError.style.display='block';
          forgotPasswordContainer.style.display="block";
          submitBtn.disabled=false;
          submitBtn.style.backgroundColor='#4CAF50'
          document.querySelector('.spinner').style.display = 'none';
        //   pending.innerHTML='';
         })
 
    }
    return response.json();
 })
 .then(data => {
    const loginAccessToken=data.access;
    localStorage.setItem('loginAccessToken', loginAccessToken);
    // console.log(data.access)
    if(loginAccessToken){
        fetch("https://gengenius-back.onrender.com/manage_geniusera/user_status/status/", {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${loginAccessToken}`,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(profileData => {
            if(profileData.status==="Teacher"){
                document.querySelector('.spinner').style.display = 'none';
                window.location.href="teacher_dashboard.html";
            }
            else if(profileData.status==="Student"){
                document.querySelector('.spinner').style.display = 'none';
                window.location.href="student_dashboard.html";
            }
            else{
                document.querySelector('.spinner').style.display = 'none';
                alert("Unknown status!");
            }
        })
        .catch(error => {
            console.log('Error fetching user status: ', error);
        });
    }
    else{
        console.log('Login failed');
    }
 })
 .catch(error => {
     console.log('Error during login: ', error);
 });

}
login();

//  return;
//  }
 
 })