const  navmenu= document.getElementById("nav-menu"),
navtoggle=document.getElementById("nav-toggle"),
navclose=document.getElementById("nav-close");



// meny show
 if(navtoggle)
 {
     navtoggle.addEventListener('click',()=>
     {
         navmenu.classList.add('show-menu');
     });
 }

//  hide menu

if(navclose)
{
    navclose.addEventListener('click',()=>
    {
        navmenu.classList.remove('show-menu');
    })
}


const navlink= document.querySelectorAll('.nav_link')

function linkaction()
{
   // const navmenu=document.getElementById('nav-menu')

    // when we click on link we remove the hsow-menu class

    navmenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click',linkaction))



// skills

const skillscontent= document.getElementsByClassName('skills_content'),
skillsheader=document.querySelectorAll('.skills_header');


function toggleskills()
{
      let itemclass= this.parentNode.className
      for(var i=0;i<skillscontent.length;i++)
      {
          skillscontent[i].className='skills_content skills_close'
      }

      if(itemclass ===  'skills_content skills_close')
      {
          this.parentNode.className='skills_content skills_open';
      }

}

skillsheader.forEach((el)=>
{
    el.addEventListener('click',toggleskills)
})



// qualification tabs

const tabs=document.querySelectorAll('[data-target]'),
tabcontent=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>
    {
        const target= document.querySelector(tab.dataset.target)

        tabcontent.forEach(tabcontent=>{
            tabcontent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification_active')
        })
  
        tab.classList.add('qualification_active')
    })
})


// Project Model

const modelviews= document.querySelectorAll('.Project_model'),
    modelbtns=document.querySelectorAll('.Project_button'),
    modelclose=document.querySelectorAll('.Project_model-close')


    // modelviews[modelclick].classList.add('active-model');

let modal=function(modelclick)
{
    modelviews[modelclick].classList.add('active-model');
}

modelbtns.forEach((modelbtn,i)=>
{ 
    modelbtn.addEventListener('click',()=>
    {
        modal(i)

    })
})


modelclose.forEach((modelclose)=>
{
    modelclose.addEventListener('click',()=>
    {
        modelviews.forEach((modelview)=>
        {
            
        modelview.classList.remove('active-model');
        })
    })
})



// certificate swipe
let swiper = new Swiper(".certificate_container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: true,
    mousewheel:false,
});


// let swiper = new Swiper(".certificate__container", {
    
//     cssMode: true,
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
        
//     },
   
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
    
// });


// var swiper = new Swiper('.certificate_container', {
//     cssMode: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination'
//     },
//     mousewheel: true,
//     keyboard: true,
//  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sect = document.querySelectorAll('section[id]');

function scrollactive(){
    const scrollY = window.pageYOffset
// console.log(sections);
    sect.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')
    //    console.log(sectionId);

        if((scrollY > sectionTop) && ( scrollY <= ( sectionTop + sectionHeight))){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
            
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollactive);


/*==================== CHANGE BACKGROUND HEADER ====================*/


function scrollHeader(){
    const nav = document.getElementById('header');
    
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
     else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


// show scroll top
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


// Dark Light theme]

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

 