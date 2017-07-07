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

/* Nat's code

var sprite = document.getElementsByClassName('sandwich');
var sandwich = sprite[0];


sandwich.addEventListener("click", function(){
                var biteNum = parseInt(sandwich.getAttribute("sandwich")) || 0;
                if (biteNum > 3){
                  return;
                }
                
                sandwich.classList.remove('bite' + biteNum);
		sandwich.classList.add('bite' + biteNum + 1);
});

*/


var sprite = document.getElementsByClassName('sandwich');
var sandwich = sprite[0];

sandwich.addEventListener("click", function(){
		sandwich.classList.toggle('bite1');
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


// Insult generator //
var setup = ["You're nothing but a ", "Be gone! You ", "Villain, you ain't nothing but a ", "Darling, you remind me of a ", "You poor, base, rascally ", "I scorn you! You nasty, ", "Peace, ye ", "No one likes a ", "U R A ", "Yer nothin' but a ", "YOU, my friend, are a good for nothing, ", "Yo mamma is a ", "ACK! Get back, you ", "Your face is like a ", "You're a ", "You remind me of a ", "That outfit makes you look like a ", "Be gone, you ", "You smell like a "];
var adjective = ["stewed ", "catastrophically hideous ", "filthy ", "mammering ", "yeasty ", "bootless ", "hell-hated ", "ticklish ", "septic ", "tart-faced ", "llama-faced ", "lecherous", "crooked-nosed ", "soggy ", "moist ", "mouldy ", "classless ", "second-rate ", "pigeon livered ", "shabby", "torpid", "cheeky ", "gaumless ", "blooming ", "savage ", "flea-bitten ", "lousy ", "filthy ", "horrid ", "villaenous ", "slobbering ", "half-digested ", "vile ", "loony ", "poop filled ", "smelly ", "rotting ", "cantankerous ", "haggard ", "feather-brained ", "nubile ", "feckless ", "withering ", "dowdy ", "crapulous ", "pathetic ", "grossity-gross-gross old "];
var noun = ["prune", "and squiggly worm", "hollow-brained sack of turds", "boil", "horn-beast", "apricot", "toenail", "pignut", "sack of diarrhea", "ghoul", "cream faced loon", "rooting hog", "toad", "elf-skin", "ratbag", "malmsey nose", "dodo", "plebian ", "goat", "blighter", "mound of belly flob", "strumpet", "gizzard", "trash pigeon", "fiend", "armpit", "bedswerver", "lump ", "nincompoop", "mumblecrust", "zombie testicle", "lubberwort", "loiter-sack", "raggabrash", "saddle-goose", "scobberlotcher", "whiffle-whaffle", "fopdoodle", "scullion", "rampallian", "strumpet", "lubberwort", "carbuncle", "grumbletonian", "ding-dong", "elbow", "curtain rod", "walnut", "boob", "pile of wrinkles", "armpit", "knave", "jigglypuff"];

var randomSetup = setup[Math.floor(Math.random() * setup.length)];
var randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
var randomNoun = noun[Math.floor(Math.random() * noun.length)];

var randomInsult = randomSetup + randomAdjective + randomNoun + "!";

console.log(randomInsult); 