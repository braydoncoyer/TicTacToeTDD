import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {GameState} from '../models/game-state';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardMap: Map<any, any>;
  currentPlayer = "X";

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.startNewGame();
  }
  incrementTurn() {
    // this.getGameState().isOver = this.checkGameEnded();
    if (!this.getGameState().isOver) {
      this.currentPlayer = this.gameService.getNextPlayer(this.currentPlayer);
    }
  }

  checkGameEnded(): GameState {
    return this.gameService.isGameEnded(this.boardMap);
  }

  initBoardMap() {
    this.boardMap = new Map([[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null], [7, null], [8, null]]);
  }

  makeMove(tileId) {
    if (this.boardMap.get(tileId) != null)
      return;
    this.boardMap.set(tileId, this.currentPlayer);
    this.incrementTurn();
  }

  startNewGame() {
    this.initBoardMap();
    this.currentPlayer = 'X';
    this.gameService.setGameState({isOver: false, winner: ''})
  }

  getGameState(): GameState {
    return this.gameService.getGameState();
  }
}
