#!/usr/bin/env node
import progression from '../src/games/game-progression.js';
import runGame from '../src/index.js';

runGame(progression.playGame, progression.instruction);
