import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionAndAnswer = () => {
  const startRandom = 1;
  const endRandom = 100;
  const question = getRandomNumber(startRandom, endRandom);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame(generateQuestionAndAnswer, instruction);
