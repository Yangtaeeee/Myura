const toggle = document.querySelector('#navi_menubtn');
const menu = document.querySelector('.navi');

toggle.addEventListener('click', () => (
    menu.classList.toggle('active')
    
));