const generateQuestion = () => {
  const number = Math.floor(Math.random() * 100);
  const question = `${number}`;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default { generateQuestion };
