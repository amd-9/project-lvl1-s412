import {
  greetPlayer,
  askPlayerName,
  congratulatePlayer,
  askQuestion,
  isCorrectAnswer,
} from '.';

const MAX_WIN_COUNT = 3;

const runGame = (stage, rules, question, answer) => {
  greetPlayer();
  rules();
  const userName = askPlayerName();

  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const stageParametes = stage();
    const userAnswer = askQuestion(question(stageParametes));
    if (isCorrectAnswer(userAnswer, answer(stageParametes))) {
      winCount += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  }

  congratulatePlayer(userName);
};

export default runGame;
