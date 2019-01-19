import {
  askQuestion,
  generateNumber,
  isCorrectAnswer,
} from '..';
import runGame from '../game-engine';

const MAX_WIN_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
const substract = (a, b) => a - b;

const mathOperations = [
  { symbol: '*', execute: multiply },
  { symbol: '+', execute: add },
  { symbol: '-', execute: substract },
];

const startGame = (userName) => {
  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const number1 = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const number2 = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const mathOperation = mathOperations[generateNumber(0, mathOperations.length - 1)];
    const answer = askQuestion(`${number1} ${mathOperation.symbol} ${number2}`);
    const correctAnswer = mathOperation.execute(number1, number2);

    if (isCorrectAnswer(answer, String(correctAnswer))) {
      winCount += 1;
    } else {
      console.log(`Let's try again, ${userName}!'`);
    }
  }
};

const getGameRules = () => console.log('What is the result of the expression?\n');

export const game = () => runGame(startGame, getGameRules);

export default game;
