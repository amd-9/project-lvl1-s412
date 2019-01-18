import {
  askQuestion,
  generateNumber,
  isCorrectAnswer,
  reduceArray,
} from '..';
import rangeInclusive from 'range-inclusive';
import runGame from '../game-engine';

const MAX_WIN_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const RANGE_MIN_STEP = -5;
const RANGE_MAX_STEP = 10;
const RANGE_SIZE = 10;

const getRangeQuestion = (range, numberToGuess) => {
  const func = (element, acc) => (element === numberToGuess ? `${acc} ` : `${acc} element`);
  return reduceArray(func, '', range);
};

const startGame = () => {
  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const rangeSeed = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const rangeStep = generateNumber(RANGE_MIN_STEP, RANGE_MAX_STEP);
    const numberRange = rangeInclusive(rangeSeed, RANGE_SIZE * rangeStep, rangeStep);

    const numberIndexToGuess = generateNumber(0, RANGE_SIZE - 1);
    const numberToGuess = numberRange[numberIndexToGuess];
    const question = getRangeQuestion(numberRange, numberToGuess);
    const answer = askQuestion(`${question}`);
    if (isCorrectAnswer(answer, String(numberToGuess))) {
      winCount += 1;
    }
  }
};

const getGameRules = () => console.log('What number is missing in the progression?\n');

export const game = () => runGame(startGame, getGameRules);

export default game;
