const menuBtn = document.querySelector('.menu-btn');
const btnLine = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.nav-item');
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
	if(!showMenu){
		menuBtn.classList.add('menu-close');
		menu.classList.add('show');
		btnLine.forEach(item => item.classList.add('btn-close'));
		menuLinks.forEach(item => item.classList.add('show-item'));
        showMenu = true;
	}else{
		menuBtn.classList.remove('menu-close');
		menu.classList.remove('show');
		btnLine.forEach(item => item.classList.remove('btn-close'));
        menuLinks.forEach(item => item.classList.remove('show-item'));;
        showMenu = false;
	}
}