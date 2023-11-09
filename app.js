/*alert("coucou");

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for(var i = 0; i < reveals[i].length; i++) {
		var windowHeight = window.innerHeight;
		var revealDistanceFromTop = reveals[i].getBoundingClientRect().top;
		var heightToRevealTheElement = 150;
	}

	if(revealDistanceFromTop < windowHeight - heightToRevealTheElement) {
		reveals[i].classList.add("active");
	} else {
		reveals[i].classList.remove("active");
	}
}

window.addEventListener('scroll', reveal);

reveal();*/



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for 

(var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);