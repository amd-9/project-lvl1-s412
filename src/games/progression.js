import rangeInclusive from 'range-inclusive';
import runGame from '../game-engine';
import generateNumber from '../utils';

const minNumber = 1;
const maxNumber = 100;
const rangeMinStep = 1;
const rangeMaxStep = 15;
const rangeSize = 10;

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
  const rangeSeed = generateNumber(minNumber, maxNumber);
  const rangeStep = generateNumber(rangeMinStep, rangeMaxStep);
  const rangeEnd = (rangeSize - 1) * rangeStep + rangeSeed;
  const numberRange = rangeInclusive(rangeSeed, rangeEnd, rangeStep);
  const numberToGuess = numberRange[generateNumber(0, rangeSize - 1)];
  const question = getRangeQuestion(numberRange, numberToGuess);
  const answer = String(numberToGuess);

  return { question, answer };
};

const description = 'What number is missing in the progression?';

const game = () => runGame(startGameStage, description);

export default game;
