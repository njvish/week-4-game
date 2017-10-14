$(document).ready(function() {
	//VARS
	//'''''''''''
	var yourTotal = 0;
	var count = 0;
	var wins = 0;
	var losses = 0;
	var minNumber = 20
	var maxNumber = 100

	//FUNCTIONS
	//'''''''''''
	//Start Game and set count to 0
	function startGame() {
		
		count = 0;
		$("#yourTotal").text(count)

		//random number generated for player to guess
		var randomNumber = randomNumberFromRange(minNumber, maxNumber);

		function randomNumberFromRange(minNumber, maxNumber) {
	    	return Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
	    	$("#guessNum").text(randomNumber);
		}
		console.log(randomNumber)

		//need to assign numbers to each crystal
		//crystals are clicked and math to randomNumber

		crystal1 = Math.floor((Math.random() * 12) + 1);
		crystal2 = Math.floor((Math.random() * 12) + 1);
		crystal3 = Math.floor((Math.random() * 12) + 1);
		crystal4 = Math.floor((Math.random() * 12) + 1);


		$("#firstCrystal").click(function(){
			yourTotal = yourTotal + crystal1;
			$("#yourTotal").text(" " + yourTotal);
			compare();
		});

		$("#secondCrystal").click(function(){
			yourTotal = yourTotal + crystal2;
			$("#yourTotal").text(" " + yourTotal);
			compare();
		});

		$("#thirdCrystal").click(function(){
			yourTotal = yourTotal + crystal3;
			$("#yourTotal").text(" " + yourTotal);
			compare();
		});

		$("#forthCrystal").click(function(){
			yourTotal = yourTotal + crystal4;
			$("#yourTotal").text(" " + yourTotal);
			compare();
		});

		//function to verify the outcome
		//if count = generated number you win
		//if count > generated number you loose
		//reset
		var compare = function(){
		
			if (count === randomNumber) {
				$("#outcome").text("Lucky Guess!");
				wins++;
				$("#win").text(wins);
				startGame();

			}else if (count > randomNumber) {
				$("#outcome").text("Unlucky!");
				loss++
				$("#loss").text(losses);
				startGame();
			}
		};		
	};		
	startGame();
});
