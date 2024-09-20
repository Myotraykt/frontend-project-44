import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const generateNumbers = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    return { num1, num2 }
};

const gameGcd = () => {
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question("May i have your name? ");
    console.log(`Hello, ${name}!`);
    console.log(`Find the greatest common divisor of given numbers.`);

    let correctAnswers = 0;
    const roundsCount = 3;
    while (correctAnswers < roundsCount) {
        const { num1, num2 } = generateNumbers();
        const correctAnswer = gcd(num1, num2);
        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question("Your answer: ")

        if (Number(userAnswer) === correctAnswer) {
            correctAnswers += 1;
            console.log("Correct!");
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default gameGcd;
