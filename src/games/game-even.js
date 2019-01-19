import {
  isEven,
  generateNumber,
} from '..';
import runGame from '../game-engine';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const startGameStage = () => generateNumber(MIN_NUMBER, MAX_NUMBER);

const getGameAnswer = stageParams => (isEven(stageParams) ? 'yes' : 'no');

const getGameQuestion = stageParams => stageParams;

const getGameRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

export const game = () => runGame(startGameStage, getGameRules, getGameQuestion, getGameAnswer);

export default game;
