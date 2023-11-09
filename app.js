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