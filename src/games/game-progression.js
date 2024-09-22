import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const getProgression = (length, step) => {
    const start = getRandomNumber(1, 20);
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step);
    }
    return progression;
};

const hideElement = (progression) => {
    const index = Math.floor(Math.random() * progression.length);
    const hiddenValue = progression[index];
    progression[index] = '..';
    return { progression, hiddenValue };
};

const gameProgression = () => {
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question("May i have your name? ");
    console.log(`Hello, ${name}!`);
    console.log(`What number is missing in the progression?`);

    const roundsCount = 3;
    let correctAnswers = 0;
    while (correctAnswers < roundsCount) {
        const length = Math.floor(Math.random() * 6) + 5;
        const step = Math.floor(Math.random() * 10) + 1;
        const progression = getProgression(length, step);
        const { progression: hiddenProgression, hiddenValue } = hideElement(progression);
        
        console.log(`Question: ${hiddenProgression.join(' ')}`);
        const answer = parseInt(readlineSync.question("Your answer: "));
        if (answer === hiddenValue) {
            correctAnswers += 1;
            console.log('Correct!')
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export default gameProgression;