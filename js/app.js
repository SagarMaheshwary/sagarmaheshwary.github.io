var menu = document.querySelector('nav');
var menuBar = document.querySelector('#menu');
var btnLine = document.querySelectorAll('.btn-line');
var menuList = document.querySelector('#menu-list');
menuBar.addEventListener('click', toggleMenu);
var showMenu = false;

function toggleMenu() {
	if (!showMenu) {
		menu.classList.add('menu-open');
		menuBar.classList.add('menu-anim');
		menuList.classList.add('show');
		btnLine.forEach(item => item.classList.add('btn-close'));
		showMenu = true;
	} else {
		menu.classList.remove('menu-open');
		menuBar.classList.remove('menu-anim');
		menuList.classList.remove('show');
		btnLine.forEach(item => item.classList.remove('btn-close'));
		showMenu = false;
	}
}

/**
 * add scrollreveal to elements.
 * 
 * @param {object} el 
 * @param {string} dist 
 * @param {string} org 
 */
function makeScrollReveal(el,dist,org){
	ScrollReveal().reveal(el,{
		distance: dist,
		origin:org
	});    
}