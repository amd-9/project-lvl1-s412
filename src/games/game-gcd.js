import gcd from 'gcd';
import {
  askQuestion,
  generateNumber,
  isCorrectAnswer,
} from '..';
import runGame from '../game-engine';

const MAX_WIN_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const startGame = (userName) => {
  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const number1 = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const number2 = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const answer = askQuestion(`${number1} ${number2}`);
    const correctAnswer = gcd(number1, number2);

    if (isCorrectAnswer(answer, String(correctAnswer))) {
      winCount += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  }
};

const getGameRules = () => console.log('Find the greatest common divisor of given numbers.\n');

export const game = () => runGame(startGame, getGameRules);

export default game;
