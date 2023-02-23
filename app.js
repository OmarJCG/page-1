
// ================== Header Nav ===============
const navToggle = document.querySelector(".nav__toggle"),
        navLink = document.querySelectorAll(".nav__link"),
        navButton = document.querySelector(".nav__button"),
        navSocialLink = document.querySelectorAll(".nav__social-link"),
        navMenu = document.querySelector(".nav__menu"),
        navClosse = document.querySelector(".nav__closse");

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("nav__menu-active");
    })
}

if(navClosse){
    function removeMenu(){
        navMenu.classList.remove("nav__menu-active");
    }

    navClosse.addEventListener("click", removeMenu);

    navLink.forEach(e => {
        e.addEventListener("click", removeMenu)
    })

    navButton.addEventListener("click", removeMenu)

    navSocialLink.forEach(e => {
        e.addEventListener("click", removeMenu)
    })
}






