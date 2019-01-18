import readlineSync from 'readline-sync';
import gcd from 'gcd';
import {
  askPlayerName,
  congratulatePlayer,
  generateNumber,
} from '..';

const MAX_WIN_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

export const startGame = () => {
  const userName = askPlayerName();

  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const number1 = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const number2 = generateNumber(MIN_NUMBER, MAX_NUMBER);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(number1, number2);

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  congratulatePlayer(userName);
};

export const getGameRules = () => console.log('Find the greatest common divisor of given numbers.\n');

export default startGame;
