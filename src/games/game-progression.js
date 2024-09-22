import getRandomNumber from '../utils.js';

const getProgression = (length, step) => {
    const start = getRandomNumber(1, 20);
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step);
    }
    return progression;
};

const gameProgression = () => {
    const progLength = Math.floor(Math.random() * 6) + 5;
    const step = Math.floor(Math.random() * 10) + 1;
    const progression = getProgression(progLength, step);
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    return { question: progression.join(' '), correctAnswer };
};

export default gameProgression;