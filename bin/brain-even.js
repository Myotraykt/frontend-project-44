#!/usr/bin/env node
import even from "../src/games/game-even.js";
import runGame from "../src/index.js";

runGame(even.playGame, even.instruction);