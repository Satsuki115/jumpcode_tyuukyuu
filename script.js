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

var MyLatLang = new google.maps.LatLng(35.6648306,139.6984558);
var mapOptions = {
    zoom:15,
    center: MyLatLang,
    mapTypeId:'roadmap'
};

var map = new google.maps.Map(document.getElementById('map'),mapOptions);