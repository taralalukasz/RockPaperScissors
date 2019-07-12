console.log("hello");

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ["r","p","s"];
	return choices[Math.floor(Math.random() * 3)]
}

function convertToWord(choice) {
	if (choice === "p") return "paper";
	if (choice === "r") return "rock";
	return "scissror";
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	const smallUserWord = "(user)".fontsize(5).sup(); //to daje index gorny
	const smallCompWord = "(computer)".fontsize(5).sup();
	result_div_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	//TAK SIE DODAJE JAKAS KLASE CSS DO ELEMENTU
	//TU NIE TRZEBA KROPKI BO ROZUMIE SIE SAMO PRZEZ SIE
	//ZE CHODZI O KLASE
	setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 1000);
	//TAK SIE USUWA KLASE Z OBIEKTU
}

function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "(user)".fontsize(5).sup();
	const smallCompWord = "(computer)".fontsize(5).sup();
	result_div_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose!`;
	document.getElementById(userChoice).classList.add("red-glow");
	setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 1000);
}

function draw(userChoice) {
result_div_p.innerHTML = `DRAW`;
	document.getElementById(userChoice).classList.add("grey-glow");
	setTimeout(() => document.getElementById(userChoice).classList.remove("grey-glow"), 1000);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "ps":
		case "sr":
		case "rp":
			lose(userChoice, computerChoice);
			break;
		case "pp":
		case "ss":
		case "rr":
			draw(userChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game("r"))

	paper_div.addEventListener('click', () => game("p"))

	scissors_div.addEventListener('click', () => game("s"))
}

main();




