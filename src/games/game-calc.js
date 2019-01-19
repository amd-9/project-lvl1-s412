import {
  generateNumber,
} from '..';
import runGame from '../game-engine';

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

const startGameStage = () => {
  const number1 = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const number2 = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const mathOperation = mathOperations[generateNumber(0, mathOperations.length - 1)];

  return { question: `${number1} ${mathOperation.symbol} ${number2}`, answer: String(mathOperation.execute(number1, number2)) };
};

const getGameAnswer = stageParams => stageParams.answer;

const getGameQuestion = stageParams => stageParams.question;

const getGameRules = () => console.log('What is the result of the expression?\n');

export const game = () => runGame(startGameStage, getGameRules, getGameQuestion, getGameAnswer);

export default game;
