import readlineSync from 'readline-sync';
import rn from 'random-number';
import {
  askPlayerName,
  greetPlayer,
  isEven,
  congratulatePlayer,
} from '..';

const MAX_WIN_COUNT = 3;

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

const checkAnswerIsCorrect = (number, answer) => (answer === getCorrectAnswer(number));

const generateNumberForQuestion = () => {
  const numberGenerator = rn.generator({
    min: 1,
    max: 100,
    integer: true,
  });

  return numberGenerator();
};

export const startGame = () => {
  greetPlayer();
  const userName = askPlayerName();

  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const numberToGuess = generateNumberForQuestion();
    console.log(`Question: ${numberToGuess}`);
    const answer = readlineSync.question('Your answer: ');
    const answerIsCorret = checkAnswerIsCorrect(numberToGuess, answer);

    if (answerIsCorret) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(numberToGuess)}'.`);
    }
  }

  congratulatePlayer(userName);
};

export const getGameRules = () => console.log('Answer "yes" if number even otherwise answer "no".');

export default startGame;
