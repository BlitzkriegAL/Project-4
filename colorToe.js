$(document).ready(function() {
	$('div').text(" ");
	var turnC = 0;
	var color11 = Math.floor((Math.random() * 200) + 20); 
	var color12 = Math.floor((Math.random() * 200) + 20);  
	var color13 = Math.floor((Math.random() * 200) + 20);  
	var color21 = Math.floor((Math.random() * 200) + 20); 
	var color22 = Math.floor((Math.random() * 200) + 20); 
	var color23 = Math.floor((Math.random() * 200) + 20); 
	var color1 = 'rgb(' + color11 + ',' + color12 + ',' + color13 + ')';
	var color2 = 'rgb(' + color21 + ',' + color22 + ',' + color23 + ')';
    $('div').click(function() {
		if ($(this).is(":contains(' ')") && turnC % 2 == 0){
			$(this).text("X");
			$(this).css("background-color", color1);
			turnC++;
		} else if ($(this).is(":contains(' ')") && turnC % 2 == 1){
			$(this).text("O");
			$(this).css("background-color", color2);
			turnC++;
		} else if ($(this).is(":contains('X')")){
			$('#bottom').fadeIn();
			$('#bottom').html("You can't place a O there!");
		} else if ($(this).is(":contains('O')")){
			$('#bottom').fadeIn();
			$('#bottom').html("You can't place an X there!");
		} else {
			$('#bottom').html("Huh?");
		}
		$('#bottom').fadeOut();
	});
	$(":button").click(function() {
		$('div').text(" ");
		$('div').css("background-color", "black");
		turnC = 0;
		color11 = Math.floor((Math.random() * 200) + 20); 
		color12 = Math.floor((Math.random() * 200) + 20);  
		color13 = Math.floor((Math.random() * 200) + 20);  
		color21 = Math.floor((Math.random() * 200) + 20); 
		color22 = Math.floor((Math.random() * 200) + 20); 
		color23 = Math.floor((Math.random() * 200) + 20); 
		color1 = 'rgb(' + color11 + ',' + color12 + ',' + color13 + ')';
		color2 = 'rgb(' + color21 + ',' + color22 + ',' + color23 + ')';
	});
});