import getRandomNumber from '../utils.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
  return num1;
};

const playGame = () => {
  const startRandom = 1;
  const endRandom = 100;
  const num1 = getRandomNumber(startRandom, endRandom);
  const num2 = getRandomNumber(startRandom, endRandom);
  const correctAnswer = gcd(num1, num2).toString();
  return { question: `${num1} ${num2}`, correctAnswer };
};

export default { playGame, instruction };
