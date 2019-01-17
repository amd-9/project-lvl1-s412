import readlineSync from 'readline-sync';
import rn from 'random-number';

export const checkAnswerIsCorrect = (number, answer) => {
  const isEven = number % 2 === 0;
  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) return true;

  return false;
};

export const getCorrectAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

export const generateNumberForQuestion = () => {
  const numberGenerator = rn.generator({
    min: 1,
    max: 100,
    integer: true,
  });

  return numberGenerator();
};

export const startGame = () => {
  let winCount = 0;
  while (winCount < 3) {
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
};

export default checkAnswerIsCorrect;
