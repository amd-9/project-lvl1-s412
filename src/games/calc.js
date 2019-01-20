import generateNumber from '../utils';
import runGame from '../game-engine';

const minNumber = 1;
const maxNumber = 100;

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
const substract = (a, b) => a - b;

const mathOperations = [
  { symbol: '*', execute: multiply },
  { symbol: '+', execute: add },
  { symbol: '-', execute: substract },
];

const startGameStage = () => {
  const number1 = generateNumber(minNumber, maxNumber);
  const number2 = generateNumber(minNumber, maxNumber);
  const mathOperation = mathOperations[generateNumber(0, mathOperations.length - 1)];
  const question = `${number1} ${mathOperation.symbol} ${number2}`;
  const answer = String(mathOperation.execute(number1, number2));

  return { question, answer };
};

const description = 'What is the result of the expression?';

const game = () => runGame(startGameStage, description);

export default game;
