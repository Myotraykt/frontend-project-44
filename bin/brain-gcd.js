#!/usr/bin/env node
import gcd from "../src/games/game-gcd.js";
import runGame from "../src/index.js";

runGame(gcd.playGame, gcd.instruction);