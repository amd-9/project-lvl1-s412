
import readlineSync from 'readline-sync';

const MAX_WIN_COUNT = 3;

export const greetPlayer = () => console.log('Welcome to the Brain Games!');

const askPlayerName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const congratulatePlayer = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const askQuestion = (questionText) => {
  console.log(`Question: ${questionText}`);
  return readlineSync.question('Your answer: ');
};

const runGame = (stage, rules) => {
  greetPlayer();
  console.log(rules);
  const userName = askPlayerName();

  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const stageParameters = stage();
    const userAnswer = askQuestion(stageParameters.question);
    if (userAnswer === stageParameters.answer) {
      winCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${stageParameters.answer}'.\nLet's try again, ${userName}!`);
    }
  }

  congratulatePlayer(userName);
};

export default runGame;
