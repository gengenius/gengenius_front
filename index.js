let loginBtn = document.getElementById("loginBtn");
// let signUp = document.getElementById("signupBtn");
let teacherStudentContainer=document.querySelector(".teacher-or-student-container");
let offer=document.querySelector(".offer");
let offerNav=document.getElementById("offer-nav");
let about=document.querySelector(".about-container");
let aboutNav=document.getElementById("about-nav");
let aboutOption=document.getElementById("about-option");
let contact=document.querySelector(".contact");
let contactNav=document.getElementById("contact-nav");
let card1=document.getElementById("card1");
let card2=document.getElementById("card2");
let card3=document.getElementById("card3");
let card4=document.getElementById("card4");


// let displayTeacherStudent = getElementById("hide-to-display-teacher-student");

loginBtn.onclick=function(){
    window.location.href="login.html";
}
let signupBtn = document.getElementById("signupBtn");
signupBtn.onclick=function(){
    window.location.href="student_register.html";
}

offerNav.onclick=function(){
    offer.classList.add('animate-offer')
    setTimeout(() => {
        offer.classList.remove('animate-offer')
    }, 2000)
}
aboutNav.onclick=function(){
    about.classList.add('animate-about')
    setTimeout(() => {
        about.classList.remove('animate-about')
    }, 3000)
}
contactNav.onclick=function(){
    contact.classList.add('animate-contact')
    setTimeout(() => {
        contact.classList.remove('animate-contact')
    }, 3000)
}
aboutOption.onclick=function(){
    console.log('hh');
    about.classList.add('animate-about')
    setTimeout(() => {
        about.classList.remove('animate-about')
    }, 3000)
}

card1.onclick=function(){
    window.location.href="login.html"
}
card2.onclick=function(){
    window.location.href="login.html"
}
card3.onclick=function(){
    window.location.href="login.html"
}
card4.onclick=function(){
    window.location.href="login.html"
}

document.addEventListener('DOMContentLoaded', () => {
    const tabBtn=document.getElementById("tab-btn");
    const tabContent=document.getElementById("tab-content");

    const toggleTabContent = (event) => {
        event.stopPropagation();
        if(tabContent.style.display==='none' || tabContent.style.display === ''){
            tabContent.style.display='block';
        }
        else{
            tabContent.style.display='none';
        }
    };

    const hideTabContent = () => {
        tabContent.style.display='none'
    };

    tabBtn.addEventListener('click', toggleTabContent);

    document.addEventListener('click', (event) => {
        if(!tabContent.contains(event.target) && event.target !== tabBtn){
            hideTabContent();
        }
    });

    tabContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});