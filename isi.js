$(document).ready(function() {
	$(".bt1").click(function() {
	  $(".a1").toggle(function(){
	  	alert("Goodbye");
});
	});
	$(".bt2").click(function() {
		$(".a2").animate({
			width:"500px",
			 height:"200px"
		}, 3000, "swing",function  () {
			alert("aaaaa"),$(".a3").css("display", "inline")});
	});
});