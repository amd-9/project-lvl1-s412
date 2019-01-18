import { greetPlayer, askPlayerName, congratulatePlayer } from '.';

const runGame = (game, rules) => {
  greetPlayer();
  rules();
  const playerName = askPlayerName();
  game(playerName);
  congratulatePlayer(playerName);
};

export default runGame;
