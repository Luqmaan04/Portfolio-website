document.getElementById('rock').addEventListener('click', playGame);
document.getElementById('paper').addEventListener('click', playGame);
document.getElementById('scissors').addEventListener('click', playGame);

function playGame(e) {
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    }
    if ((user === 'rock' && computer === 'scissors') || 
        (user === 'paper' && computer === 'rock') || 
        (user === 'scissors' && computer === 'paper')) {
        return 'You win!';
    }
    return 'You lose!';
}
