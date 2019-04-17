import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  isGameEnded(map: Map<any, any>): boolean {
    return false;
  }

  getNextPlayer(currentPlayer: string): string {
    return currentPlayer === "Y" ? "X" : "Y";
  }
}
