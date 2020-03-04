$(document).ready(function() {
	$(".bt1").click(function() {
		$(".a1").animate({left : "500px", fontSize:"100px"}, 4000);
		$(".a1").animate({left : "0px", fontSize:"12px"}, 4000);
	});

	$(".bt2").click(function() {
		$(".a2").animate({top:"500px"},);
		$(".a2").animate({top:"0px"},);
		$(".a2").animate({left:"500px"},);
		$(".a2").animate({left:"0px"},);
		$(".a2").hide({bottom:"100px",
			right: "50px"},);
		$(".a2").show(1);
			


	});

});