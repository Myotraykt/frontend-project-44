import getRandomNumber from '../utils.js';

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const gameGcd = () => {
    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);
    const correctAnswer = gcd(a, b).toString();
    return { question: `${a} ${b}`, correctAnswer };
};

export default gameGcd;
