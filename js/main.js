// VANILLA JAVASCRIPT //
var boxes = document.getElementsByClassName('box');
var box = boxes[0];

box.addEventListener("click", function(){
	if(box.classList.contains('js-active')){
 		// js-active is in the list
    box.classList.remove('js-active');
  } else {
  	// js-active is NOT in the list
    box.classList.add('js-active');
  }
});


/* JQUERY
var $box = $('.box');

$box.on('click', function () {
	$box.toggleClass('js-active');
})
*/
