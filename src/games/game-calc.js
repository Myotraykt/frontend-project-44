import getRandomNumber from '../utils.js';

const instruction = "What is the result of the expression?";

const calculate = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error('unknown operation');
    }
};

const playGame = () => {
    const startRandom = 1;
    const endRandom = 100;
    const num1 = getRandomNumber(startRandom, endRandom);
    const num2 = getRandomNumber(startRandom, endRandom);
    const operator = ['+', '-', '*'][getRandomNumber(0, 2)];
    const correctAnswer = calculate(num1, num2, operator).toString();
    return { question: `${num1} ${operator} ${num2}`, correctAnswer };
};

export default { playGame, instruction };