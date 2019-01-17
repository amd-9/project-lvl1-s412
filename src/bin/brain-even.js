#! /usr/bin/env node

import { greetPlayer, congratulatePlayer } from '..';
import { startGame } from '../game-even';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const userName = greetPlayer();
startGame();
congratulatePlayer(userName);
