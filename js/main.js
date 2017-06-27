//TEST: window.alert("hello");

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


/* JQUERY for above ^ 
var $box = $('.box');

$box.on('click', function () {
	$box.toggleClass('js-active');
})
*/

/*
var frames = document.getElementsByClassName('sandwich');
var frame = frames[0];

frame.addEventListener("click", function(){
	add(box.classList('full')){
};
*/

//VANILLA JAVASCRIPT //

var sprite = document.getElementsByClassName('sandwich');
var sandwich = sprite[0];

sandwich.addEventListener("click", function(){
		sandwich.classList.add('bite1');
});

/* FAILED ATTEMPT :( : 
sandwich.addEventListener("click", function(){
	if(sandwich.classList.contains('full')){
		sandwich.classList.remove('full');
		sandwich.classList.add('bite1');
	}
	else if(sandwich.classList.contains('bite1')){
		sandwich.classList.remove('bite1');
		sandwich.classList.add('bite2');
	}
	else if(sandwich.classList.contains('bite2')){
		sandwich.classList.remove('bite2');
		sandwich.classList.add('bite3');
	}
});
*/
