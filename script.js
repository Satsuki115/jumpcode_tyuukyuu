const humberger = document.querySelector('.humberger');
const humberger_menu = document.querySelector('.humberger-menu');
const menu = document.querySelector('.menu');

humberger.addEventListener('click', () => {
    humberger.classList.toggle('active');
    menu.classList.toggle('active');
   
});
humberger_menu.addEventListener('click',() => {
    humberger_menu.classList.toggle('active');
    menu.classList.toggle('active');
})