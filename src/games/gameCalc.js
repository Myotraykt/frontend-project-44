const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 25) + 1;
  const number2 = Math.floor(Math.random() * 25) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  // eslint-disable-next-line no-eval
  const correctAnswer = eval(question);
  return { question, correctAnswer };
};

export default { generateQuestion };
