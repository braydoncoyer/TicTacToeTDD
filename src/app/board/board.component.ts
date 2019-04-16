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
  currentPlayer: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.boardMap = new Map([[0, "O"], [1, "X"], [2, "O"], [3, "X"], [4, "O"], [5, "X"], [6, "O"], [7, "X"], [8, "Y"]]);
  }
  incrementTurn() {
    this.isGameOver = this.checkGameEnded();
    if (!this.isGameOver) {
      this.currentPlayer = this.gameService.getNextPlayer(this.currentPlayer);
    }
  }

  checkGameEnded(): boolean {
    return this.gameService.isGameEnded(null);
  }
}
