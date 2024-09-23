import getRandomNumber from '../utils.js';

const instruction = `Find the greatest common divisor of given numbers.`;

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const playGame = () => {
    const startRandom = 1;
    const endRandom = 100;
    const a = getRandomNumber(startRandom, endRandom);
    const b = getRandomNumber(startRandom, endRandom);
    const correctAnswer = gcd(a, b).toString();
    return { question: `${a} ${b}`, correctAnswer };
};

export default { playGame, instruction };
