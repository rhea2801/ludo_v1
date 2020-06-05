
//all variables needed
let diceDiv = document.querySelector("#dice-link");
let showDiceNum = document.querySelector(".rand-num");
let newGameLink = document.querySelector(".new-game");
let turnChanger = document.querySelector("#turnSwitch");

let randNum;
let whosTurn= "red";
let gameOver = false;

let isr1Out = false;
let isr2Out = false;
let isb1Out = false;
let isb2Out = false;

//4 pawns images

let r1pawn = document.querySelector(".r1-img");
let r2pawn = document.querySelector(".r2-img");
let b1pawn = document.querySelector(".b1-img");
let b2pawn = document.querySelector(".b2-img");

//when the pawns are on board

let r1Locker = document.querySelector("#r1-locker-div");
let r2Locker = document.querySelector("#r2-locker-div");
let b1Locker = document.querySelector("#b1-locker-div");
let b2Locker = document.querySelector("#b2-locker-div");

let r1Board = document.querySelector("#r1-board");
let r2Board = document.querySelector("#r2-board");
let b1Board = document.querySelector("#b1-board");
let b2Board = document.querySelector("#b2-board");



function pawn(player, position, number){

	this.player = player;
	this.position = position;
	this.number = number;
	this.status = status;
}

let r1 = new pawn("red", 0, 1);
let r2 = new pawn("red", 0, 2);
let b1 = new pawn("blue", 0, 1);
let b2 = new pawn("blue", 0, 2);


newGameLink.addEventListener("click", restart);
diceDiv.addEventListener("click", rollDice);


function restart(){

// change interface when game is to be started

	diceDiv.style.visibility="visible";
	turnChanger.innerHTML = "RED's turn to play!";
	turnChanger.style.color = "#e2564a";
	turnChanger.style.fontWeight = "bold";
	newGameLink.innerHTML="";


}

// defining so we dont use anonymous functions 

function playr1_L(){ play("red", 1, randNum);}// r1Locker.removeEventListener("click", playr1_L)}
function playr1_B(){ play("red", 1, randNum);}// r1Board.removeEventListener("click", playr1_B)}
function playr2_L(){ play("red", 2, randNum);}// r2Locker.removeEventListener("click", playr2_L)}
function playr2_B(){ play("red", 2, randNum);}// r2Board.removeEventListener("click", playr2_B)}

function playb1_L(){ play("blue", 1, randNum)};// b1Locker.removeEventListener("click", playb1_L) }
function playb1_B(){ play("blue", 1, randNum)};// b1Board.removeEventListener("click", playb1_B) }
function playb2_L(){ play("blue", 2, randNum)};// b2Locker.removeEventListener("click", playb2_L) }
function playb2_B(){ play("blue", 2, randNum)};// b2Board.removeEventListener("click", playb2_B) }

function rollDice(){

	
	var input = prompt("Enter a number from 1 to 6 you'd like to roll. Leave blank for random dice roll!");

	if(input != "" && input!=null)
	{
		if(0<Number(input) && Number(input)<7) randNum = Number(input);

		else 
		{
			alert("Please enter a number between 1 and 6 only.");
			rollDice();
		}
	}

	// generate random number if null entered in prompt

	else if (input == "" || input ==null)
	{

	 randNum = Math.ceil(Math.random() * 6);

	}

	showDiceNum.innerText = randNum;

	
	if(whosTurn=="red"){

		// update turn 

		/*turnChanger.innerHTML="BLUE's turn next!";
		turnChanger.style.color="blue";
		turnChanger.style.fontWeight="bold";*/
		//whosTurn="blue";

		//give option to click red

		r1Locker.addEventListener("click", playr1_L);
		r1Locker.style.cursor="pointer";
		r2Locker.addEventListener("click", playr2_L);
		r2Locker.style.cursor="pointer";

		r1Board.addEventListener("click", playr1_B);
		r1Board.style.cursor="pointer";
		r2Board.addEventListener("click", playr2_B);
		r2Board.style.cursor="pointer";

		
		diceDiv.removeEventListener("click", rollDice);
		diceDiv.style.color="grey";
		diceDiv.style.cursor="default";

	
		return;


	}

	else if(whosTurn=="blue"){

		//update turn

		/*turnChanger.innerHTML="RED's turn next!";
		turnChanger.style.color="red";
		turnChanger.style.fontWeight="bold";*/
		//whosTurn="red";

		// give option to click blue 

		b1Locker.addEventListener("click", playb1_L);
		b1Locker.style.cursor="pointer";
		b2Locker.addEventListener("click", playb2_L);
		b2Locker.style.cursor="pointer";

		b1Board.addEventListener("click", playb1_B);
		b1Board.style.cursor="pointer";
		b2Board.addEventListener("click", playb2_B);
		b2Board.style.cursor="pointer";

		diceDiv.removeEventListener("click", rollDice);
		diceDiv.style.color="grey";
		diceDiv.style.cursor="default";


		return;
	}

	


}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\RED

function play(color, pawn, randNum){

// divide by color
if(color=="red"){

	


// divide by number
	if(pawn==1){


	// if position is zero
	if(r1.position==0){

		// if 6 is rolled
			if(randNum==6){

				r1Locker.style.visibility="hidden";
				r1Board.style.visibility="visible";

				isr1Out = true;
				


				

			}

		// if 6 is not rolled
			else if (randNum!==6){

			//what would you even put here lol theres nth to do afaik
			//for testing

				
				
			}


	}

	// if position is not zero and you are staying within the board
	else if(r1.position!=0 && (r1.position+randNum)<29){



		//if the final position is in between 2 and 8
			if(1<(r1.position+randNum) && (r1.position+randNum)<9)	
			{
				
				var squaresRight = randNum + r1.position -1;
				var rightToMove = (squaresRight*4.375);
				var newLeft = 1.2875 + rightToMove;

				r1Board.style.left = newLeft.toString() + 'vw';			
				r1Board.style.transition = "all 1.0s ease-in-out";

				
				console.log("a");			
				


			}	


		// final pos between 9 and 15
			else if(8<(r1.position+randNum) && (r1.position+randNum)<16)
			{
				
			//initial pos before 9
				if(r1.position<9)
				{
					
					
						r1Board.style.left = '31vw';
						var squaresDown = randNum + r1.position - 8;
						var downToMove = (squaresDown*4.375);
						var newTop = 1.193 + downToMove;

						r1Board.style.top = newTop.toString() + 'vw';

						r1Board.style.transition = "left 1.0s ease-in-out, top 1.0s ease-in-out 1.0s";

					

				
					console.log("b");

				

						
				}

			// initial pos on and after 9	

				else if(r1.position>8)
				{
                	var squaresDown = randNum + r1.position - 8;
					var downToMove = (squaresDown*4.375);
					var newTop = 1.193 + downToMove;

					r1Board.style.top = newTop.toString() + 'vw';

					r1Board.style.transition = "top 1.0s ease-in-out";

            
				console.log("g");


				}

			}

		// final pos between 16 and 22
			else if(15<(r1.position+randNum) && (r1.position+randNum)<23)
			{

			//initial pos before 15
				if(r1.position<16)
				{
					r1Board.style.top = '30.85vw';				
					var squaresLeft = randNum + r1.position - 15;
					var leftToMove = (squaresLeft*4.375);
					var newLeft = 32.025 - leftToMove;

					r1Board.style.left = newLeft.toString() + 'vw';

					r1Board.style.transition = "top 1.0s ease-in-out, left 1.0s ease-in-out 1.0s";

					
				console.log("c");

						
				}

			// initial pos after 8	

				else if(r1.position>15)
				{
                	var squaresLeft = randNum + r1.position - 15;
					var leftToMove = (squaresLeft*4.375);
					var newLeft = 32.025 - leftToMove;

					r1Board.style.left = newLeft.toString() + 'vw';

					r1Board.style.transition = "left 1.0s ease-in-out";

               
				console.log("d");

			

				}


			}



		// final pos between 23 and 29 aka 1 aka END
			else if(22<(r1.position+randNum) && (r1.position+randNum)<29)
			{

			//initial pos before 22
				if(r1.position<23)
				{
					r1Board.style.left = '0.193vw';

					var squaresUp = randNum + r1.position - 22;
					var upToMove = (squaresUp*4.375);
					var newTop = 31.85 - upToMove;

					r1Board.style.top = newTop.toString() + 'vw';

					r1Board.style.transition = "left 1.0s ease-in-out, top 1.0s ease-in-out 1.0s";

					
				console.log("e");

					
						
				}

			// initial pos after 22	

				else if(r1.position>22)
				{
                	var squaresUp = randNum + r1.position - 22;
					var upToMove = (squaresUp*4.375);
					var newTop = 31.85 - upToMove;

					r1Board.style.top = newTop.toString() + 'vw';

					r1Board.style.transition = "top 1.0s ease-in-out";

                
				console.log("f");

					
				}	
		
			}

		

		}

		if((r1.position+randNum)>28)
		{
			alert("oops, you cant go that far!");
		}	


		if(r1.position!=0 && (r1.position+randNum<29)){

			r1.position+=randNum;
			
		}

		else if(r1.position==0 && isr1Out==true && (r1.position+randNum<29)){

			r1.position=1;
		}

		
		r1Board.removeEventListener("click", playr1_B);
		r1Locker.removeEventListener("click", playr1_L);
		r2Board.removeEventListener("click", playr2_B);
		r2Locker.removeEventListener("click", playr2_L);

		r1Locker.style.cursor = "default";
		r1Board.style.cursor = "default";
		r2Locker.style.cursor = "default";
		r2Board.style.cursor = "default";

		console.log(r1.position);

	} //pawn = 1 END

//////////////////////////////////////////////////////////////////////////////////////////////////////////////R2


	else if(pawn==2)
	{
		// if position is zero
		if(r2.position==0){

		// if 6 is rolled
			if(randNum==6){

				r2Locker.style.visibility="hidden";
				r2Board.style.visibility="visible";
							

				isr2Out = true;
				

			}

		// if 6 is not rolled
			else if (randNum!==6){

			//what would you even put here lol theres nth to do afaik
			//for testing

				
				
			}

			

	}

	// if position is not zero and you are staying within the board
		if(r2.position!=0 && (r2.position+randNum)<29){




		//if the final position is in between 2 and 8
			if(1<(r2.position+randNum) && (r2.position+randNum)<9)	
			{
				
				var squaresRight = randNum + r2.position -1;
				var rightToMove = (squaresRight*4.375);
				var newLeft = 1.2875 + rightToMove;

				r2Board.style.left = newLeft.toString() + 'vw';			
				r2Board.style.transition = "all 1.0s ease-in-out";

				console.log("a");


			}	

		// final pos between 9 and 15
			else if(8<(r2.position+randNum) && (r2.position+randNum)<16)
			{

			//initial pos before 9
				if(r2.position<9)
				{
					r2Board.style.left = '32.95vw';

					var squaresDown = randNum + r2.position - 8;
					var downToMove = (squaresDown*4.375);
					var newBottom = 1.2875 - downToMove;

					r2Board.style.bottom = newBottom.toString() + 'vw';

					r2Board.style.transition = "left 1.0s ease-in-out, bottom 1.0s ease-in-out 1.0s";

					console.log("b");

				

						
				}

			// initial pos on and after 9	

				else if(r2.position>8)
				{
                	var squaresDown = randNum + r2.position - 8;
					var downToMove = (squaresDown*4.375);
					var newBottom = 1.2875 - downToMove;

					r2Board.style.bottom = newBottom.toString() + 'vw';

					r2Board.style.transition = "bottom 1.0s ease-in-out";

                	console.log("c");


				}

			}

		// final pos between 16 and 22
			else if(15<(r2.position+randNum) && (r2.position+randNum)<23)
			{

			//initial pos before 15
				if(r2.position<16)
				{
					r2Board.style.bottom = '-30.432vw';
					

					var squaresLeft = randNum + r2.position - 15;
					var leftToMove = (squaresLeft*4.375);
					var newLeft = 32.025 - leftToMove;

					r2Board.style.left = newLeft.toString() + 'vw';

					r2Board.style.transition = "bottom 1.0s ease-in-out, left 1.0s ease-in-out 1.0s";

					console.log("d");

						
				}

			// initial pos after 8	

				else if(r2.position>15)
				{
                	var squaresLeft = randNum + r2.position - 15;
					var leftToMove = (squaresLeft*4.375);
					var newLeft = 32.025 - leftToMove;

					r2Board.style.left = newLeft.toString() + 'vw';

					r2Board.style.transition = "left 1.0s ease-in-out";

                	console.log("e");

			

				}


			}



		// final pos between 23 and 29 aka 1 aka END
			else if(22<(r2.position+randNum) && (r2.position+randNum)<29)
			{

			//initial pos before 22
				if(r2.position<23)
				{
					r2Board.style.left = '2.2vw';
					
					var squaresUp = randNum + r2.position - 22;
					var upToMove = (squaresUp*4.375);
					var newBottom = -29.35 + upToMove;

					r2Board.style.bottom = newBottom.toString() + 'vw';

					r2Board.style.transition = "left 1.0s ease-in-out, bottom 1.0s ease-in-out 1.0s";


					console.log("f");

					
						
				}

			// initial pos after 8	

				else if(r2.position>23)
				{
                	var squaresUp = randNum + r2.position - 22;
					var upToMove = (squaresUp*4.375);
					var newBottom = -29.35 + upToMove;

					r2Board.style.bottom = newBottom.toString() + 'vw';

					r2Board.style.transition = "bottom 1.0s ease-in-out";

                	console.log("g");

					
				}	
		
			}

			

		}	


		if((r2.position+randNum)>28)
		{
			alert("oops, you cant go that far!");
		}


		if(r2.position!=0 && (r2.position+randNum)<29){

			r2.position+=randNum;
			
		}

		else if(r2.position==0 && isr2Out==true  && (r2.position+randNum)<29){

			r2.position=1;
		}

		r1Board.removeEventListener("click", playr1_B);
		r1Locker.removeEventListener("click", playr1_L);
		r2Board.removeEventListener("click", playr2_B);
		r2Locker.removeEventListener("click", playr2_L);

		r1Locker.style.cursor = "default";
		r1Board.style.cursor = "default";
		r2Locker.style.cursor = "default";
		r2Board.style.cursor = "default";

		console.log(r2.position);

	} // pawn = 2

	} // color is red END




//BLUE/////////////////////////////////////////////////////////////////////////////////==========================================================



	// cases for blue

	else if (color=="blue")
	{
		// pawn = 1
		if(pawn==1) 
		{
				// if position is zero
		if(b1.position==0){

		// if 6 is rolled
			if(randNum==6){

				b1Locker.style.visibility="hidden";
				b1Board.style.visibility="visible";

				isb1Out = true;


			}

		// if 6 is not rolled
			else if (randNum!==6){

			//what would you even put here lol theres nth to do afaik
			//for testing

				
				
			}

	}

	// if position is not zero and you are staying within the board
		if(b1.position!=0 && (b1.position+randNum)<29){




		//if the final position is in between 2 and 8
			if(1<(b1.position+randNum) && (b1.position+randNum)<9)	
			{
				
				var squaresLeft = randNum + b1.position -1;
				var leftToMove = (squaresLeft*4.375);
				var newLeft = 1.2875 - leftToMove;

				b1Board.style.left = newLeft.toString() + 'vw';			
				b1Board.style.transition = "all 1.0s ease-in-out";
			
				console.log("a");		
				

			}	

		// final pos between 9 and 15
			else if(8<(b1.position+randNum) && (b1.position+randNum)<16)
			{

			//initial pos before 9
				if(b1.position<9)
				{
					b1Board.style.left = '-30.4vw';
					
					var squaresUp = randNum + b1.position - 8;
					var upToMove = (squaresUp*4.375);
					var newTop = 1.193 - upToMove;

					b1Board.style.top = newTop.toString() + 'vw';

					b1Board.style.transition = "left 1.0s ease-in-out, top 1.0s ease-in-out 1.0s";

				
					console.log("b");

				

						
				}

			// initial pos on and after 9	

				else if(b1.position>8)
				{
                	var squaresUp = randNum + b1.position - 8;
					var upToMove = (squaresUp*4.375);
					var newTop = 1.193 - upToMove;

					b1Board.style.top = newTop.toString() + 'vw';

					b1Board.style.transition = "top 1.0s ease-in-out";

            
					console.log("g");


				}

			}

		// final pos between 16 and 22
			else if(15<(b1.position+randNum) && (b1.position+randNum)<23)
			{

			//initial pos before 15
				if(b1.position<16)
				{
					b1Board.style.top = '-30.4vw';
					
					var squaresRight = randNum + b1.position - 15;
					var rightToMove = (squaresRight*4.375);
					var newLeft = -29.35 + rightToMove;

					b1Board.style.left = newLeft.toString() + 'vw';

					b1Board.style.transition = "top 1.0s ease-in-out, left 1.0s ease-in-out 1.0s";

					
				console.log("c");

						
				}

			// initial pos after 8	

				else if(b1.position>15)
				{
                	var squaresRight = randNum + b1.position - 15;
					var rightToMove = (squaresRight*4.375);
					var newLeft = -29.35 + rightToMove;


					b1Board.style.left = newLeft.toString() + 'vw';

					b1Board.style.transition = "left 1.0s ease-in-out";

               
				console.log("d");

			

				}


			}



		// final pos between 23 and 29 aka 1 aka END
			else if(22<(b1.position+randNum) && (b1.position+randNum)<29)  
			{

			//initial pos before 22
				if(b1.position<23)
				{
					b1Board.style.left = '0.35vw';

					var squaresDown = randNum + b1.position - 22;
					var downToMove = (squaresDown*4.375);
					var newTop = -29.35 + downToMove;

					b1Board.style.top = newTop.toString() + 'vw';

					b1Board.style.transition = "left 1.0s ease-in-out, top 1.0s ease-in-out 1.0s";

					
				console.log("e");

					
						
				}

			// initial pos after 8	

				else if(b1.position>23)
				{
                	var squaresDown = randNum + b1.position - 22;
					var downToMove = (squaresDown*4.375);
					var newTop = -29.35 + downToMove;

					b1Board.style.top = newTop.toString() + 'vw';

					b1Board.style.transition = "top 1.0s ease-in-out";

                
				console.log("f");

					
				}	
		
			}

		}	

		if((b1.position+randNum)>28)
		{
			alert("oops, you cant go that far!");
		}	


		if(b1.position!=0 && (b1.position+randNum<29)){

			b1.position+=randNum;
			
		}

		else if(b1.position==0 && isb1Out==true && (b1.position+randNum<29)){

			b1.position=1;
		}

		b1Board.removeEventListener("click", playb1_B);
		b1Locker.removeEventListener("click", playb1_L);
		b2Board.removeEventListener("click", playb2_B);
		b2Locker.removeEventListener("click", playb2_L);

		b1Locker.style.cursor = "default";
		b1Board.style.cursor = "default";
		b2Locker.style.cursor = "default";
		b2Board.style.cursor = "default";

		console.log(b1.position);


		} // pawn = 1 END



// PAWN 2 ======================================================================================================================





		// pawn = 2
		else if (pawn ==2)
		{
			// if position is zero
		if(b2.position==0){

		// if 6 is rolled
			if(randNum==6){

				b2Locker.style.visibility="hidden";
				b2Board.style.visibility="visible";	

				isb2Out = true;		
		
			
			}

		// if 6 is not rolled
			else if (randNum!==6){

			//what would you even put here lol theres nth to do afaik
			//for testing

				
				
			}

	}

	// if position is not zero and you are staying within the board
		if(b2.position!=0 && (b2.position+randNum)<29){




		//if the final position is in between 2 and 8
			if(1<(b2.position+randNum) && (b2.position+randNum)<9)	
			{
				
				var squaresLeft = randNum + b2.position -1;
				var leftToMove = (squaresLeft*4.375);
				var newLeft = 1.2875 - leftToMove;

				b2Board.style.left = newLeft.toString() + 'vw';			
				b2Board.style.transition = "all 1.0s ease-in-out";

				console.log("a");


			}	

		// final pos between 9 and 15
			else if(8<(b2.position+randNum) && (b2.position+randNum)<16)
			{

			//initial pos before 9
				if(b2.position<9)
				{
					b2Board.style.left = '-28.5vw';
					
					var squaresUp = randNum + b2.position - 8;
					var upToMove = (squaresUp*4.375);
					var newBottom = 1.193 + upToMove;

					b2Board.style.bottom = newBottom.toString() + 'vw';

					b2Board.style.transition = "left 1.0s ease-in-out, bottom 1.0s ease-in-out 1.0s";

					console.log("b");

				

						
				}

			// initial pos on and after 9	

				else if(b2.position>8)
				{
                	var squaresUp = randNum + b2.position - 8;
					var upToMove = (squaresUp*4.375);
					var newBottom = 1.193 + upToMove;

					b2Board.style.bottom = newBottom.toString() + 'vw';

					b2Board.style.transition = "bottom 1.0s ease-in-out";

                	console.log("c");


				}

			}

		// final pos between 16 and 22
			else if(15<(b2.position+randNum) && (b2.position+randNum)<23)
			{

			//initial pos before 15
				if(b2.position<16)
				{
					b2Board.style.bottom = '31vw';
					
					var squaresRight = randNum + b2.position - 15;
					var rightToMove = (squaresRight*4.375);
					var newLeft = -29.35 + rightToMove;

					b2Board.style.left = newLeft.toString() + 'vw';

					b2Board.style.transition = "bottom 1.0s ease-in-out, left 1.0s ease-in-out 1.0s";

					console.log("d");

						
				}

			// initial pos after 8	

				else if(b2.position>15)
				{
                	var squaresRight = randNum + b2.position - 15;
					var rightToMove = (squaresRight*4.375);
					var newLeft = -29.35 + rightToMove;

					b2Board.style.left = newLeft.toString() + 'vw';

					b2Board.style.transition = "left 1.0s ease-in-out";

                	console.log("e");

			

				}


			}



		// final pos between 23 and 29 aka 1 aka END
			else if(22<(b2.position+randNum) && (b2.position+randNum)<29)
			{

			//initial pos before 23
				if(b2.position<23)
				{
					b2Board.style.left = '2.3vw';

					var squaresDown = randNum + b2.position - 22;
					var downToMove = (squaresDown*4.375);
					var newBottom = 31.8 - downToMove;

					b2Board.style.bottom = newBottom.toString() + 'vw';

					b2Board.style.transition = "left 1.0s ease-in-out, bottom 1.0s ease-in-out 1.0s";


					console.log("f");

					
						
				}

			// initial pos on or after 23	

				else if(b2.position>22)
				{
                	var squaresDown = randNum + b2.position - 22;
					var downToMove = (squaresDown*4.375);
					var newBottom = 31.8 - downToMove;

					b2Board.style.bottom = newBottom.toString() + 'vw';

					b2Board.style.transition = "bottom 1.0s ease-in-out";

                	console.log("g");

					
				}	
		
			}

		}	


		if((b2.position+randNum)>28)
		{
			alert("oops, you cant go that far!");
		}


		if(b2.position!=0 && (b2.position+randNum)<29){

			b2.position+=randNum;
			
		}

		else if(b2.position==0 && isb2Out==true && (b2.position+randNum)<29){

			b2.position=1;
		}

		b1Board.removeEventListener("click", playb1_B);
		b1Locker.removeEventListener("click", playb1_L);
		b2Board.removeEventListener("click", playb2_B);
		b2Locker.removeEventListener("click", playb2_L);

		b1Locker.style.cursor = "default";
		b1Board.style.cursor = "default";
		b2Locker.style.cursor = "default";
		b2Board.style.cursor = "default";
	
		console.log(b2.position);


		} //pawn = 2 END
	}

	if(r1.position==28) r1.position= -1;
	if(r2.position==28) r2.position= -1;
	if(b1.position==28) b1.position= -1;
	if(b2.position==28) b2.position= -1;


	randNum = checkPos(randNum, pawn);

	randNum = checkWin(color, randNum);

	if(gameOver==false)  passPlay(randNum);
	

	}


function passPlay(randNum)
{



	if(whosTurn=="red")
	{
		if(randNum==6)
		{
			whosTurn="red";
			turnChanger.innerHTML="RED rolls again!";
			turnChanger.style.color="#e2564a";
			

		}

		else if(randNum!=6)
		{
			whosTurn="blue";
			turnChanger.innerHTML="BLUE rolls next!";
			turnChanger.style.color="#5447e9";

		}

		diceDiv.addEventListener("click", rollDice);
		diceDiv.style.color="#7f9e3e";
		diceDiv.style.cursor="pointer";


		return;
	
	}

	else if (whosTurn=="blue")
	{
		if(randNum==6)
		{
			whosTurn="blue";
			turnChanger.innerHTML="BLUE rolls again!";
			turnChanger.style.color="#5447e9";
			

		}

		else if(randNum!=6)
		{
			whosTurn="red";
			turnChanger.innerHTML="RED rolls next!";
			turnChanger.style.color="#e2564a";

		}


		diceDiv.addEventListener("click", rollDice);
		diceDiv.style.color="#7f9e3e";
		diceDiv.style.cursor="pointer";

		return;

	}


	
}



function checkPos(randNum, pawn){

	let r1Pos = r1.position;
	let r2Pos = r2.position;
	let b1Pos = b1.position;
	let b2Pos = b2.position;

	if (b1Pos>0) b1Pos += 14;
	if(b1Pos>28) b1Pos-=28;

	if (b2Pos>0) b2Pos += 14;
	if(b2Pos>28) b2Pos-=28;

	if(whosTurn=="red"){

		if(pawn==1 && r1Pos!=0 && r1Pos!=1)
		{
			if(r1Pos==b1Pos)
			{
				b1.position=0;
				b1Locker.style.visibility="visible";
				b1Board.style.top = "0.193vw";
				b1Board.style.left = "1.2875vw";
				b1Board.style.visibility = "hidden";
				b1Board.style.transition = "";
				randNum=6;

				alert("HA! Red has kicked the B1 pawn back to blue's locker. Good job!");
			}

			else if(r1Pos==b2Pos)
			{
				b2.position=0;
				b2Locker.style.visibility="visible";
				b2Board.style.top = "0.193vw";
				b2Board.style.left = "1.2875vw";
				b2Board.style.visibility = "hidden";
				b2Board.style.transition = "";
				randNum=6;

				alert("HA! Red has kicked the B2 pawn back to blue's locker. Good job!");
			}


		}

		else if(pawn==2 && r2Pos!=0 && r2Pos!=1)
		{
			if(r2Pos==b1Pos)
			{
				b1.position=0;
				b1Locker.style.visibility="visible";
				b1Board.style.top = "0.193vw";
				b1Board.style.left = "1.2875vw";
				b1Board.style.visibility = "hidden";
				b1Board.style.transition = "";
				randNum=6;

				alert("HA! Red has kicked the B1 pawn back to blue's locker. Good job!");
			}

			else if(r2Pos==b2Pos)
			{
				b2.position=0;
				b2Locker.style.visibility="visible";
				b2Board.style.top = "0.193vw";
				b2Board.style.left = "1.2875vw";
				b2Board.style.visibility = "hidden";
				b2Board.style.transition = "";
				randNum=6;

				alert("HA! Red has kicked the B2 pawn back to blue's locker. Good job!");
			}


		}


	} //end of red's kills

	else if(whosTurn=="blue")
	{
		if(pawn==1 && b1Pos!=0 && b1Pos!=1)
		{
			if(b1Pos==r1Pos)
			{
				r1.position=0;
				r1Locker.style.visibility="visible";
				r1Board.style.top = "0.193vw";
				r1Board.style.left = "1.2875vw";
				r1Board.style.visibility = "hidden";
				r1Board.style.transition = "";
				randNum=6;

				alert("HA! Blue has kicked the R1 pawn back to red's locker. Good job!");
			}

			else if(b1Pos==r2Pos)
			{
				r2.position=0;
				r2Locker.style.visibility="visible";
				r2Board.style.top = "0.193vw";
				r2Board.style.left = "1.2875vw";
				r2Board.style.visibility = "hidden";
				r2Board.style.transition = "";
				randNum=6;

				alert("HA! Blue has kicked the R2 pawn back to red's locker. Good job!");
			}


		}

		else if(pawn==2 && b2Pos!=0 && b2Pos!=1)
		{
			if(b2Pos==r1Pos)
			{
				r1.position=0;
				r1Locker.style.visibility="visible";
				r1Board.style.top = "0.193vw";
				r1Board.style.left = "1.2875vw";
				r1Board.style.visibility = "hidden";
				r1Board.style.transition = "";
				randNum=6;

				alert("HA! Blue has kicked the R1 pawn back to red's locker. Good job!");
			}

			else if(b2Pos==r2Pos)
			{
				r2.position=0;
				r2Locker.style.visibility="visible";
				r2Board.style.top = "0.193vw";
				r2Board.style.left = "1.2875vw";
				r2Board.style.visibility = "hidden";
				r2Board.style.transition = "";
				randNum=6;

				alert("HA! Blue has kicked the R2 pawn back to red's locker. Good job!");
			}


		}


	} // end of blue's kills

	return randNum;

}// EOF


function checkWin(color, randNum)
{
	if(color=="red")
	{
		if(r1.position==-1)
		{
			r1Board.style.opacity = "0";
			r1Board.style.visibility = "hidden";
			r1Board.style.transition = "top 1.0s ease-in-out, opacity 1.5s ease-in-out 1.0s, visibility ease-in-out 2.5s";
			r1.position = 1000;

			randNum=6;
		}

		if(r2.position==-1)
		{
			r2Board.style.opacity = "0";
			r2Board.style.visibility = "hidden";
			r2Board.style.transition = "bottom 1.0s ease-in-out, opacity 1.5s ease-in-out 1.0s, visibility ease-in-out 2.5s";
			r2.position = 1000;

			randNum = 6;
		}


		if(r1.position==1000&&r2.position==1000)
		{
			alert("woohoo!! congratulations RED for proving you are the ludo king!!");

			gameOver = true;

		}
	}

	else if(color=="blue")
	{
		if(b1.position==-1)
		{
			b1Board.style.opacity = "0";
			b1Board.style.visibility = "hidden";
			b1Board.style.transition = "top 1.0s ease-in-out, opacity 1.5s ease-in-out 1.0s, visibility ease-in-out 2.5s";
			b1.position = 1000;

			randNum = 6;
		}

		if(b2.position==-1)
		{
			b2Board.style.opacity = "0";
			b2Board.style.visibility = "hidden";
			b2Board.style.transition = "bottom 1.0s ease-in-out, opacity 1.5s ease-in-out 1.0s, visibility ease-in-out 2.5s";
			b2.position = 1000;

			randNum = 6;
		}


		if(b1.position==1000&& b2.position==1000)
		{
			alert("woohoo!! congratulations BLUE for proving you are the ludo king!!");

			gameOver = true;
			
		}
	}


	if(gameOver==true)
	{
		diceDiv.innerHTML = "";
		turnChanger.innerHTML = "";
		showDiceNum.innerHTML = "";
		newGameLink.innerHTML = "Click me to play again!"
		newGameLink.addEventListener("click", function(){ window.location.reload(true)});
	}

	return randNum;
}

