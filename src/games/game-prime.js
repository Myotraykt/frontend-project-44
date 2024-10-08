import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const startRandom = 1;
  const endRandom = 100;
  const question = getRandomNumber(startRandom, endRandom);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame(generateQuestionAndAnswer, instruction);
