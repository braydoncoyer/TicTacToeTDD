import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  isGameOver: boolean;
  currentPlayer: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {

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
