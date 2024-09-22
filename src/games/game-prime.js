import getRandomNumber from '../utils.js';

const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i < Math.sqrt(number); i += 1) {
        if (number % 1 === 0) return false;
    }
    return true;
};

const gamePrime = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return { question, correctAnswer };

};

export default gamePrime;