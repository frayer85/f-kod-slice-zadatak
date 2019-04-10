// hamburger class toggle //
function classToggle() {
  document.querySelector('.mobile-menu').classList.toggle('collapsed');
  document.querySelector('.mobile-menu').classList.toggle('expanded');
}

function collapse() {
	document.querySelector('.mobile-menu').classList.remove('expanded');
	document.querySelector('.mobile-menu').classList.add('collapsed');
}

document.querySelector('.hamb').addEventListener('click', classToggle);
document.querySelector('.mobile-menu').addEventListener('click', collapse);
