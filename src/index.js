import readlineSync from 'readline-sync';

const runGame = (playGame, instruction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(instruction);

  const roundsCount = 3;
  let correctAnswers = 0;
  while (correctAnswers < roundsCount) {
    const { question, correctAnswer } = playGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
