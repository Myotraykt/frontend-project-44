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
            throw new Error('unknown operation');
    }
};

const gameCalc = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const correctAnswer = calculate(num1, num2, operator).toString();
    return { question: `${num1} ${operator} ${num2}`, correctAnswer };
};

export default gameCalc;