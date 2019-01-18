import readlineSync from 'readline-sync';
import {
  askPlayerName,
  congratulatePlayer,
  generateNumber,
} from '..';

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

export const startGame = () => {
  const userName = askPlayerName();

  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const number1 = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const number2 = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const mathOperation = mathOperations[generateNumber(0, mathOperations.length - 1)];
    console.log(`Question: ${number1} ${mathOperation.symbol} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = mathOperation.execute(number1, number2);

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  congratulatePlayer(userName);
};

export const getGameRules = () => console.log('What is the result of the expression?\n');

export default startGame;
