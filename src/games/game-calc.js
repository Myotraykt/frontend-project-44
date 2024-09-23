import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const startRandom = 1;
  const endRandom = 100;
  const num1 = getRandomNumber(startRandom, endRandom);
  const num2 = getRandomNumber(startRandom, endRandom);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  let question = `${num1} ${operator} ${num2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = String(num1 + num2);
        break;
    case '-':
      correctAnswer = String(num1 - num2);
        break;
    case '*':
      correctAnswer = String(num1 * num2);
        break;
    default:
      throw new Error('Unknown operator');
  }
  return { question, correctAnswer }
};

export default () => runGame(generateQuestionAndAnswer, instruction);
