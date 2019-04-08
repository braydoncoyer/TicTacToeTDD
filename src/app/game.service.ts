import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  isGameEnded(map: any): boolean {
    return true;
  }

  getNextPlayer(currentPlayer: string): string {
    return null;
  }
}
