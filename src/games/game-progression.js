import {
  generateNumber,
} from '..';
import rangeInclusive from 'range-inclusive';
import runGame from '../game-engine';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const RANGE_MIN_STEP = 1;
const RANGE_MAX_STEP = 15;
const RANGE_SIZE = 10;

const reduceArray = (func, acc, array) => {
  if (array.length === 0) {
    return acc;
  }

  return reduceArray(func, func(array.shift(), acc), array);
};

const getRangeQuestion = (range, numberToGuess) => {
  const func = (element, acc) => (element === numberToGuess ? `${acc} ..` : `${acc} ${element}`);
  return reduceArray(func, '', range);
};

const startGameStage = () => {
  const rangeSeed = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const rangeStep = generateNumber(RANGE_MIN_STEP, RANGE_MAX_STEP);
  const rangeEnd = (RANGE_SIZE - 1) * rangeStep + rangeSeed;
  const numberRange = rangeInclusive(rangeSeed, rangeEnd, rangeStep);
  const numberToGuess = numberRange[generateNumber(0, RANGE_SIZE - 1)];

  return { question: getRangeQuestion(numberRange, numberToGuess), answer: String(numberToGuess) };
};

const rules = 'What number is missing in the progression?\n';

export const game = () => runGame(startGameStage, rules);

export default game;
