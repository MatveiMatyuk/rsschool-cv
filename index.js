const anchors = document.querySelectorAll('a[href*="#"]');
const burger = document.querySelector('.burger')
const header = document.querySelector('header')
const navHeader = document.querySelector('.nav_header')
const navBurg = document.querySelector('.nav_header-burger')



for (let anchor of anchors) {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active')
    if(burger.classList.contains('burger_active')) {
        navBurg.style.display = 'flex'
    }else{
        navBurg.style.display = 'none'
    }
})