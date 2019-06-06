import { Injectable } from '@angular/core';
import {GameState} from './models/game-state';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameState: GameState = {
    isOver: false,
    winner: ''
  }

  constructor() { }

  isGameEnded(map: Map<any, any>): GameState {

    // first check to see if there are at least 5 values on the board (minimum value to win the game) > if not, return false;
    // next, check to see if all of the tiles are filled
    // else, make game over logic to determine if there is a winner

    const boardValues = [];

    map.forEach((value, key) => {
      boardValues.push(value);
    });

    const playedTiles = boardValues.filter(v => v !== null);

    if (playedTiles.length < 5) {
      this.setGameState({isOver: false, winner: ''});
      return this.gameState;
    }
    else if (playedTiles.length === 9) {
      return this.checkForTie(boardValues);
    }
    else {
      return this.checkForWin(boardValues);
    }
  }

  checkForWin(boardValues: any[]): GameState {
    console.log('BOARD VALUES ARE ', boardValues);
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const line of lines) {
      const winValues = [];
      line.forEach(index => {
        winValues.push(boardValues[index]);
      });
      const firstWinValue = winValues[0];
      if (winValues.every(index => index === firstWinValue && index != null)) {
        this.setGameState({
          isOver: true,
          winner: 'SOMEONE!'
        });
        return this.gameState;
      }
    }
    this.setGameState({isOver: false, winner: ''});
    return this.gameState;
  };

  checkForTie(boardValues: any[]): GameState {
    return this.checkForWin(boardValues);
  };

  getNextPlayer(currentPlayer: string): string {
    return currentPlayer === "O" ? "X" : "O";
  };

  getGameState(): GameState {
    return this.gameState;
  }

  setGameState(newState: GameState) {
    this.gameState = newState;
  }
}
