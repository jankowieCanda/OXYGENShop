const menuLogo = document.getElementById('menuLogo');
const menuDiv = document.getElementById('menuDiv');
menuLogo.addEventListener('click', showMenu);


function showMenu() {
    
    if(menuLogo.src = './img/Menu.png' && menuDiv.style.display == 'none') {
        menuLogo.src = './img/closeMenu.png';
        menuDiv.style.display = 'block';
    } else {
            menuLogo.src = './img/Menu.png';
            menuDiv.style.display = 'none';
    }
}