#!/usr/bin/env node
import prime from '../src/games/game-prime.js';
import runGame from '../src/index.js';

runGame(prime.playGame, prime.instruction);
