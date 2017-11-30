window.onresize = function() {
    if (window.innerWidth <= 330) {
    	document.getElementById("Jumbotron-top-button").innerHTML =
				"<a class='btn btn-responsive btn-success' href='https://play.google.com/store?hl=en' >Download App</a>"
				 + "<br>";
		document.getElementById("Jumbotron-button-group").innerHTML =
			"<div class='btn-group'>"+
				"<a href='https://www.amazon.com/' class='btn btn-responsive btn-warning'>Visit Store</a>" +
				"<a href='' class='btn btn-lrg btn-danger'>Spread The Word</a>"
		+	"</div>";

    } else {
    	document.getElementById("Jumbotron-top-button").innerHTML = "";
    	document.getElementById("Jumbotron-button-group").innerHTML =
			"<div class='btn-group'>" +
				"<a href='https://play.google.com/store?hl=en' class='btn btn-responsive btn-success'>Download App</a>" +
				"<a href='https://www.amazon.com/' class='btn btn-responsive btn-warning'>Visit Store</a>" +
				"<a href='' class='btn btn-responsive btn-danger'>Spread The Word</a>"
		+	"</div>";
    }
}

window.onload = function() {
    if (window.innerWidth <= 330) {
    	document.getElementById("Jumbotron-top-button").innerHTML =
				"<a class='btn btn-responsive btn-success' href='https://play.google.com/store?hl=en' >Download App</a>" + "<br>";
		document.getElementById("Jumbotron-button-group").innerHTML =
			"<div class='btn-group'>"+
				"<a href='https://www.amazon.com/' class='btn btn-responsive btn-warning'>Visit Store</a>" +
				"<a href='' class='btn btn-responsive btn-danger'>Spread The Word</a>"
		+	"</div>";

    } else {
    	document.getElementById("Jumbotron-top-button").innerHTML = "";
    	document.getElementById("Jumbotron-button-group").innerHTML =
			"<div class='btn-group'>" +
				"<a href='https://play.google.com/store?hl=en' class='btn btn-responsive btn-success'>Download App</a>" +
				"<a href='https://www.amazon.com/' class='btn btn-responsive btn-warning'>Visit Store</a>" +
				"<a href='' class='btn btn-responsive btn-danger'>Spread The Word</a>"
		+	"</div>";
    }
}
