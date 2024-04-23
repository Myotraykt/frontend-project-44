const getGsd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    // eslint-disable-next-line no-param-reassign
    num2 = num1 % num2;
    // eslint-disable-next-line no-param-reassign
    num1 = temp;
  }
  return num1;
};

const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const question = `${number1} ${number2}`;
  const correctAnswer = getGsd(number1, number2);
  return { question, correctAnswer };
};

export default { generateQuestion };
