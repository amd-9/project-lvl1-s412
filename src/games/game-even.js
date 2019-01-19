import {
  generateNumber,
} from '..';
import runGame from '../game-engine';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = number => number % 2 === 0;

const startGameStage = () => {
  const number = generateNumber(MIN_NUMBER, MAX_NUMBER);
  return { question: number, answer: isEven(number) ? 'yes' : 'no' };
};

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

export const game = () => runGame(startGameStage, rules);

export default game;
