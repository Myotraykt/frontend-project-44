import getRandomNumber from "../utils.js";

const isEven = (number) => number % 2 === 0;

const gameEven = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
};

export default gameEven;