#!/usr/bin/env node
import calc from '../src/games/game-calc.js';
import runGame from '../src/index.js';

runGame(calc.playGame, calc.instruction);
