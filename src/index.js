import readlineSync from 'readline-sync';
import gameEven from './games/game-even.js';
import gameCalc from './games/game-calc.js';
import gameGcd from './games/game-gcd.js';
import gameProgression from './games/game-progression.js';
import gamePrime from './games/game-prime.js';

const runGame = (playGame) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    if (playGame === gameEven) {
        console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    } else if (playGame === gameCalc) {
        console.log(`What is the result of the expression?`);
    } else if (playGame === gameGcd) {
        console.log(`Find the greatest common divisor of given numbers.`);
    } else if (playGame === gameProgression) {
        console.log(`What number is missing in the progression?`);
    } else if (playGame === gamePrime) {
        console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
    }
    
    const roundsCount = 3;
    let correctAnswers = 0;
    while (correctAnswers < roundsCount) {
        const { question, correctAnswer } = playGame();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            correctAnswers += 1;
            console.log("Correct!");
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export default runGame;