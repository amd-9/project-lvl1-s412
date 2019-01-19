import gcd from 'gcd';
import {
  generateNumber,
} from '..';
import runGame from '../game-engine';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const startGameStage = () => {
  const number1 = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const number2 = generateNumber(MIN_NUMBER, MAX_NUMBER);

  return { question: `${number1} ${number2}`, answer: String(gcd(number1, number2)) };
};

const rules = 'Find the greatest common divisor of given numbers.\n';

export const game = () => runGame(startGameStage, rules);

export default game;
