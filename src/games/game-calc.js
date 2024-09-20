import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const calculate = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error('unlnown operation');
    }
};

const generateExpression = () => {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const operations = ['+', '-', '*'];
    const operation = operations[getRandomNumber(0, operations.length - 1)];
    const correctAnswer = calculate(num1, num2, operation);

    return { expression: `${num1} ${operation} ${num2}`, correctAnswer };
};

const gameCalc = () => {
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question("May i have your name? ");
    let correctAnswers = 0;

    console.log(`Hello, ${name}!`);
    console.log(`What is the result of the expression?`);

    const roundsCount = 3;
    while (correctAnswers < roundsCount) {
        const { expression, correctAnswer } = generateExpression();
        console.log(expression);
        const userAnswer = readlineSync.question("Your answer: ");

        if (Number(userAnswer) === correctAnswer) {
            correctAnswers += 1;
            console.log("Correct!");
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log("Congratulations!");
};

export default gameCalc;