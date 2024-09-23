import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'What number is missing in the progression?';

const getProgression = (length, step, start) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const minProgLength = 5;
  const maxProgLength = 10;
  const progLength = getRandomNumber(minProgLength, maxProgLength);
  const minStep = 1;
  const maxStep = 5;
  const step = getRandomNumber(minStep, maxStep);
  const minStartProgNum = 1;
  const maxStaratProgNum = 20;
  const start = getRandomNumber(minStartProgNum, maxStaratProgNum);
  const progression = getProgression(progLength, step, start);
  const hiddenIndex = getRandomNumber(0, progLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  return { question: progression.join(' '), correctAnswer };
};

export default () => runGame(generateQuestionAndAnswer, instruction);
