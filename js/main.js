$(document).ready(function() {
	const mMenuBtn = $('.burger');
	const mMenu = $('.mmenu');
	mMenuBtn.on('click', function() {
		mMenu.toggleClass('active');
		$('body').toggleClass('no-scroll');
	});
});
