$(function () {

	$("#navbarToggler").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#navbarNav").collapse('hide');
		}
	});
});