
import readlineSync from 'readline-sync';

const maxWinCount = 3;

const runGame = (stage, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let winCount = 0; winCount < maxWinCount;) {
    const stageParameters = stage();
    console.log(`Question: ${stageParameters.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === stageParameters.answer) {
      winCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${stageParameters.answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
