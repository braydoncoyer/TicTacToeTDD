import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardMap: Map<any, any>;
  isGameOver: boolean;
  currentPlayer = "X";

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.startNewGame();
  }
  incrementTurn() {
    this.isGameOver = this.checkGameEnded();
    if (!this.isGameOver) {
      this.currentPlayer = this.gameService.getNextPlayer(this.currentPlayer);
    }
  }

  checkGameEnded(): boolean {
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
    this.isGameOver = false;
  }
}
