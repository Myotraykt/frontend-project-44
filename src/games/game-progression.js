import getRandomNumber from '../utils.js';

const instruction = 'What number is missing in the progression?';

const getProgression = (length, step, start) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const playGame = () => {
  const progLength = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 5);
  const start = getRandomNumber(1, 20);
  const progression = getProgression(progLength, step, start);
  const hiddenIndex = getRandomNumber(0, progLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  return { question: progression.join(' '), correctAnswer };
};

export default { playGame, instruction };
