// Pure Javascript selector: document.getElementByClassName('box') //

var $box = $('.box');

$box.on('click', function () {
	$box.toggleClass('js-active');
})