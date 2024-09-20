import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const gameEven = () => {
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question("May i have your name? ");
    let correctAnswers = 0;

    console.log(`Hello, ${name}!`);
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

    const correctAnswersCount = 3;
    while (correctAnswers < correctAnswersCount) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question("Your answer: ");
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            correctAnswers += 1;
            console.log("Correct!");
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            return;
        }
    };

    console.log(`Congratulations, ${name}!`);
};

export default gameEven;
