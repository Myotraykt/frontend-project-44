// ЗДЕСЬ БУДЕТ ОПИСАНА ЛОГИКА ДЛЯ ВСЕХ ИГР В ПРОЕКТЕ //
import readlineSync from 'readline-sync';
import brainEven from './games/gameEven.js';
import brainCalc from './games/gameCalc.js';
import brainGsd from './games/gameGsd.js';
import brainProgression from './games/gameProgression.js';

function playGame(game) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (game === brainEven) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  if (game === brainCalc) {
    console.log('What is the result of the expression?');
  }
  if (game === brainGsd) {
    console.log('Find the greatest common divisor of given numbers.');
  }
  if (game === brainProgression) {
    console.log('What number is missing in the progression?');
  }

  let correctAnswersCount = 0;
  let isWrongAnswer = false;

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = game.generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
      // eslint-disable-next-line no-unused-vars
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      isWrongAnswer = true;
      break;
    }
  }

  if (!isWrongAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default playGame;
