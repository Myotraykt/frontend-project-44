const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const genProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const hideElement = (arr, index) => {
  const newArr = [...arr];
  newArr[index] = '..';
  return newArr;
};

const generateQuestion = () => {
  const start = Math.floor(Math.random() * 20) + 1;
  const diff = Math.floor(Math.random() * 5) + 1;
  const length = Math.floor(Math.random() * 6) + 5;

  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = genProgression(start, diff, length);
  const question = hideElement(progression, hiddenIndex).join(' ');
  const correctAnswer = progression[hiddenIndex] !== undefined ? progression[hiddenIndex].toString() : '';
  return { question, correctAnswer };
};

export default { generateQuestion };
